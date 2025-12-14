import { useState, useRef, useEffect } from "react";
import { MessageCircle, X, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { VoiceRecorder } from "@/components/VoiceRecorder";
import { useLanguage } from "@/contexts/LanguageContext";
import { useToast } from "@/hooks/use-toast";

interface Message {
  role: "user" | "assistant";
  content: string;
}

export const SakhiChatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { language, t } = useLanguage();
  const { toast } = useToast();
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      const greetings = {
        en: "Hi! I'm Sakhi 💜 I'm here to support you anytime. How are you feeling today?",
        hi: "नमस्ते! मैं साखी हूं 💜 मैं हमेशा आपके साथ हूं। आज आप कैसा महसूस कर रहे हैं?",
        te: "హాయ్! నేను సాఖి 💜 నేను ఎల్లప్పుడూ మీకు మద్దతుగా ఉంటాను. నేడు మీరు ఎలా అనిపిస్తున్నారు?",
        ta: "வணக்கம்! நான் சாகி 💜 நான் எப்போதும் உங்களுக்கு ஆதரவாக இருக்கிறேன். இன்று நீங்கள் எப்படி உணர்கிறீர்கள்?",
        bn: "হাই! আমি সাখী 💜 আমি সবসময় আপনার সাথে আছি। আজ আপনি কেমন অনুভব করছেন?"
      };
      setMessages([{ role: "assistant", content: greetings[language] || greetings.en }]);
    }
  }, [isOpen, messages.length, language]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const streamChatResponse = async (userMessage: string) => {
    setIsLoading(true);
    
    try {
      const response = await fetch(
        `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/chat`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY}`,
          },
          body: JSON.stringify({
            messages: [...messages, { role: "user", content: userMessage }],
            language,
          }),
        }
      );

      if (!response.ok || !response.body) {
        throw new Error("Failed to get response");
      }

      const reader = response.body.getReader();
      const decoder = new TextDecoder();
      let accumulatedContent = "";
      let buffer = "";

      setMessages(prev => [...prev, { role: "assistant", content: "" }]);

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;

        buffer += decoder.decode(value, { stream: true });
        const lines = buffer.split("\n");
        buffer = lines.pop() || "";

        for (const line of lines) {
          if (!line.trim() || line.startsWith(":")) continue;
          if (!line.startsWith("data: ")) continue;

          const data = line.slice(6).trim();
          if (data === "[DONE]") continue;

          try {
            const parsed = JSON.parse(data);
            const content = parsed.choices?.[0]?.delta?.content;
            if (content) {
              accumulatedContent += content;
              setMessages(prev => {
                const newMessages = [...prev];
                newMessages[newMessages.length - 1].content = accumulatedContent;
                return newMessages;
              });
            }
          } catch (e) {
            console.error("Parse error:", e);
          }
        }
      }
    } catch (error) {
      console.error("Chat error:", error);
      toast({
        title: "Error",
        description: "Failed to get response. Please try again.",
        variant: "destructive",
      });
      setMessages(prev => prev.slice(0, -1));
    } finally {
      setIsLoading(false);
    }
  };

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput("");
    setMessages(prev => [...prev, { role: "user", content: userMessage }]);
    await streamChatResponse(userMessage);
  };

  const handleVoiceTranscription = async (text: string) => {
    setMessages(prev => [...prev, { role: "user", content: text }]);
    await streamChatResponse(text);
  };

  return (
    <>
      {/* Floating Button */}
      <Button
        onClick={() => setIsOpen(!isOpen)}
        size="lg"
        className="fixed bottom-24 md:bottom-8 right-4 z-50 rounded-full w-14 h-14 shadow-lg hover:scale-110 transition-transform"
      >
        {isOpen ? <X className="w-6 h-6" /> : <MessageCircle className="w-6 h-6" />}
      </Button>

      {/* Chat Window */}
      {isOpen && (
        <Card className="fixed bottom-40 md:bottom-24 right-4 z-50 w-80 md:w-96 shadow-2xl animate-scale-in">
          <div className="bg-gradient-to-r from-primary to-secondary p-4 rounded-t-lg">
            <h3 className="font-bold text-white flex items-center gap-2">
              <MessageCircle className="w-5 h-5" />
              Sakhi - Your Support Buddy
            </h3>
            <p className="text-xs text-white/80">Always here for you 💜</p>
          </div>

          <ScrollArea className="h-64 p-4">
            <div className="space-y-3">
              {messages.map((msg, idx) => (
                <div 
                  key={idx}
                  className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div 
                    className={`max-w-[80%] p-3 rounded-lg ${
                      msg.role === "user" 
                        ? "bg-primary text-primary-foreground" 
                        : "bg-muted"
                    }`}
                  >
                    <p className="text-sm">{msg.content}</p>
                  </div>
                </div>
              ))}
            </div>
          </ScrollArea>

          <div className="p-4 border-t flex gap-2">
            <Input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={(e) => e.key === "Enter" && !isLoading && handleSend()}
              placeholder={t("send")}
              className="flex-1"
              disabled={isLoading}
            />
            <VoiceRecorder onTranscription={handleVoiceTranscription} disabled={isLoading} />
            <Button size="icon" onClick={handleSend} disabled={isLoading || !input.trim()}>
              <Send className="w-4 h-4" />
            </Button>
          </div>
          <div ref={messagesEndRef} />
        </Card>
      )}
    </>
  );
};
