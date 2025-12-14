import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

serve(async (req) => {
  if (req.method === "OPTIONS") return new Response(null, { headers: corsHeaders });

  try {
    const { messages, language = "en" } = await req.json();
    const OPENAI_API_KEY = Deno.env.get("OPENAI_API_KEY");
    if (!OPENAI_API_KEY) throw new Error("OPENAI_API_KEY is not configured");

    const systemPrompts: Record<string, string> = {
      en: "You are Sakhi, a compassionate 24/7 emotional support companion for women's safety. Provide supportive, empathetic responses. Keep answers clear, concise, and comforting. Guide users to appropriate resources when needed.",
      hi: "आप साखी हैं, महिला सुरक्षा के लिए 24/7 भावनात्मक समर्थन साथी। सहायक, सहानुभूतिपूर्ण प्रतिक्रियाएं प्रदान करें। उत्तर स्पष्ट, संक्षिप्त और सुकून देने वाले रखें।",
      te: "మీరు సాఖి, మహిళల భద్రత కోసం 24/7 భావోద్వేగ మద్దతు సహచరి. సహాయక, సానుభూతిగల ప్రతిస్పందనలు అందించండి.",
      ta: "நீங்கள் சாகி, பெண்கள் பாதுகாப்புக்கான 24/7 உணர்ச்சி ஆதரவு தோழர். ஆதரவான, பச்சாதாபமான பதில்களை வழங்கவும்.",
      bn: "আপনি সাখী, মহিলা সুরক্ষার জন্য ২৪/৭ আবেগগত সহায়তা সঙ্গী। সহায়ক, সহানুভূতিশীল প্রতিক্রিয়া প্রদান করুন।"
    };

    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${OPENAI_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "google/gemini-2.5-flash",
        messages: [
          { role: "system", content: systemPrompts[language] || systemPrompts.en },
          ...messages,
        ],
        stream: true,
      }),
    });

    if (!response.ok) {
      if (response.status === 429) {
        return new Response(JSON.stringify({ error: "Rate limits exceeded, please try again later." }), {
          status: 429,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      }
      if (response.status === 402) {
        return new Response(JSON.stringify({ error: "Payment required, please add funds." }), {
          status: 402,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      }
      const t = await response.text();
      console.error("AI gateway error:", response.status, t);
      return new Response(JSON.stringify({ error: "AI gateway error" }), {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    return new Response(response.body, {
      headers: { ...corsHeaders, "Content-Type": "text/event-stream" },
    });
  } catch (e) {
    console.error("chat error:", e);
    return new Response(JSON.stringify({ error: e instanceof Error ? e.message : "Unknown error" }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});
