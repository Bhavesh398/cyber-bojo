import { useState, useRef, useEffect } from "react";
import { Navigation, DesktopNav } from "@/components/Navigation";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { MessageCircle, Send, Bot, User, Heart } from "lucide-react";

interface Message {
  id: number;
  text: string;
  sender: "user" | "bot";
  timestamp: Date;
}

const MentorChatPage = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Namaste! I'm Nari Mitra, your AI safety companion. I'm here to listen, guide, and support you. How can I help you today?",
      sender: "bot",
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  const getBotResponse = (userMessage: string): string => {
    const lowerMessage = userMessage.toLowerCase();

    // Harassment-related keywords
    if (lowerMessage.includes("harass") || lowerMessage.includes("uncomfortable") || lowerMessage.includes("touched")) {
      return "I'm so sorry you're going through this. What you're experiencing is not okay, and it's not your fault. You have the right to feel safe. I suggest:\n\n1. Document everything (dates, times, what happened)\n2. Check your rights under POSH Act in the 'Rights' section\n3. Consider reporting to your organization's ICC\n4. Find support organizations in the 'Help' directory\n\nWould you like guidance on any of these steps?";
    }

    // Workplace issues
    if (lowerMessage.includes("work") || lowerMessage.includes("job") || lowerMessage.includes("boss") || lowerMessage.includes("office")) {
      return "Workplace concerns can be stressful. Remember:\n\n• You have legal rights protecting you\n• POSH Act covers sexual harassment at work\n• Labor laws protect your wages and working conditions\n• You don't have to face this alone\n\nWould you like to learn about your workplace rights, or would you prefer help finding support organizations?";
    }

    // Cyber safety concerns
    if (lowerMessage.includes("online") || lowerMessage.includes("cyber") || lowerMessage.includes("photo") || lowerMessage.includes("blackmail")) {
      return "Cyber harassment is serious and illegal. Here's what you should do:\n\n1. Do NOT pay or engage with blackmailers\n2. Take screenshots as evidence\n3. Report to cybercrime.gov.in immediately (or call 1930)\n4. Block the person on all platforms\n5. Consider filing a police complaint\n\nVisit our 'Cyber Safety' section for detailed guidance. You can also report this through our app. Stay strong - you're taking the right steps by seeking help.";
    }

    // Emotional support
    if (lowerMessage.includes("scared") || lowerMessage.includes("afraid") || lowerMessage.includes("worried") || lowerMessage.includes("anxious")) {
      return "Your feelings are completely valid. It takes courage to reach out. Remember:\n\n💙 You are not alone\n💙 What you're feeling is normal\n💙 There are people and organizations ready to help\n💙 You deserve to feel safe and respected\n\nWould you like me to guide you to support resources, or would you prefer to explore your rights first?";
    }

    // Rights inquiry
    if (lowerMessage.includes("right") || lowerMessage.includes("law") || lowerMessage.includes("legal")) {
      return "Great that you want to know your rights! Knowledge is power. Visit our 'Rights' section to learn about:\n\n• POSH Act (Sexual Harassment Protection)\n• Workplace Safety Rights\n• Labor Laws & Wage Rights\n• Maternity Benefits\n• How to file complaints\n\nWould you like me to explain any specific right?";
    }

    // Help finding resources
    if (lowerMessage.includes("help") || lowerMessage.includes("support") || lowerMessage.includes("ngo") || lowerMessage.includes("contact")) {
      return "I can connect you with support! In our 'Help Directory', you'll find:\n\n✓ Legal aid organizations\n✓ Women's support NGOs\n✓ Cyber crime support\n✓ Emergency helplines\n✓ Counseling services\n\nYou can filter by your city and type of help needed. All contacts are verified and trusted.";
    }

    // Greeting
    if (lowerMessage.includes("hi") || lowerMessage.includes("hello") || lowerMessage.includes("hey") || lowerMessage.includes("namaste")) {
      return "Hello! I'm here to support you. Whether you need information about your rights, help dealing with harassment, cyber safety guidance, or just someone to listen - I'm here. What's on your mind today?";
    }

    // Thank you
    if (lowerMessage.includes("thank") || lowerMessage.includes("thanks")) {
      return "You're very welcome! Remember, seeking help and information is a sign of strength. I'm here whenever you need support. Stay safe and empowered! 💪";
    }

    // Default response
    return "I'm here to help you with:\n\n• Understanding your workplace rights\n• Dealing with harassment\n• Cyber safety guidance\n• Finding support organizations\n• Emotional support and guidance\n\nCould you tell me more about what you're going through or what you'd like to know?";
  };

  const handleSend = () => {
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: messages.length + 1,
      text: inputValue,
      sender: "user",
      timestamp: new Date()
    };

    setMessages([...messages, userMessage]);
    setInputValue("");
    setIsTyping(true);

    // Simulate bot thinking time
    setTimeout(() => {
      const botResponse: Message = {
        id: messages.length + 2,
        text: getBotResponse(inputValue),
        sender: "bot",
        timestamp: new Date()
      };
      setMessages(prev => [...prev, botResponse]);
      setIsTyping(false);
    }, 1000 + Math.random() * 1000);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="min-h-screen bg-background pb-20 md:pb-8">
      <DesktopNav />
      
      <div className="pt-20 md:pt-24 px-4 py-8">
        <div className="container mx-auto max-w-4xl h-[calc(100vh-200px)] md:h-[calc(100vh-160px)] flex flex-col">
          {/* Header */}
          <div className="text-center mb-6 animate-fade-in">
            <div className="inline-flex p-3 rounded-full gradient-warm mb-4">
              <MessageCircle className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-2">Nari Mitra AI Mentor</h1>
            <p className="text-muted-foreground">Your confidential AI companion for guidance and support</p>
          </div>

          {/* Chat Container */}
          <Card className="flex-1 flex flex-col gradient-card shadow-soft overflow-hidden animate-slide-up">
            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 md:p-6 space-y-4">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex gap-3 animate-fade-in ${
                    message.sender === "user" ? "flex-row-reverse" : ""
                  }`}
                >
                  <div
                    className={`p-2 rounded-full shrink-0 h-fit ${
                      message.sender === "bot"
                        ? "gradient-warm"
                        : "bg-primary"
                    }`}
                  >
                    {message.sender === "bot" ? (
                      <Bot className="w-5 h-5 text-white" />
                    ) : (
                      <User className="w-5 h-5 text-white" />
                    )}
                  </div>
                  <div
                    className={`max-w-[80%] md:max-w-[70%] rounded-2xl p-4 ${
                      message.sender === "bot"
                        ? "bg-muted"
                        : "bg-primary text-primary-foreground"
                    }`}
                  >
                    <p className="text-sm whitespace-pre-line leading-relaxed">{message.text}</p>
                    <p className="text-xs opacity-60 mt-2">
                      {message.timestamp.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
                    </p>
                  </div>
                </div>
              ))}
              
              {isTyping && (
                <div className="flex gap-3 animate-fade-in">
                  <div className="p-2 rounded-full gradient-warm shrink-0">
                    <Bot className="w-5 h-5 text-white" />
                  </div>
                  <div className="bg-muted rounded-2xl p-4">
                    <div className="flex gap-1">
                      <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce" style={{ animationDelay: "0ms" }}></div>
                      <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce" style={{ animationDelay: "150ms" }}></div>
                      <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce" style={{ animationDelay: "300ms" }}></div>
                    </div>
                  </div>
                </div>
              )}
              
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="border-t p-4 bg-background/50 backdrop-blur-sm">
              <div className="flex gap-2">
                <Input
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Type your message..."
                  className="flex-1"
                />
                <Button onClick={handleSend} size="icon" className="shrink-0">
                  <Send className="w-4 h-4" />
                </Button>
              </div>
              <p className="text-xs text-muted-foreground mt-2 text-center">
                This is a simulated AI mentor. For emergencies, contact authorities directly.
              </p>
            </div>
          </Card>

          {/* Quick Actions */}
          <div className="mt-4 flex flex-wrap gap-2 justify-center">
            <Button
              variant="outline"
              size="sm"
              onClick={() => {
                setInputValue("I'm facing harassment at work");
              }}
            >
              Workplace Harassment
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={() => {
                setInputValue("Tell me about my rights");
              }}
            >
              My Rights
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={() => {
                setInputValue("I need cyber safety help");
              }}
            >
              Cyber Help
            </Button>
          </div>
        </div>
      </div>
      
      <Navigation />
    </div>
  );
};

export default MentorChatPage;
