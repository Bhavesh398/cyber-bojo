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
      en: "You are Nari Mitra, an AI safety companion for women in India. Provide guidance on workplace harassment (POSH Act), cyber safety, legal rights, and emotional support. Be empathetic, informative, and action-oriented. Guide users to resources and authorities when appropriate.",
      hi: "आप नारी मित्र हैं, भारत में महिलाओं के लिए एक एआई सुरक्षा साथी। कार्यस्थल उत्पीड़न (POSH अधिनियम), साइबर सुरक्षा, कानूनी अधिकार और भावनात्मक समर्थन पर मार्गदर्शन प्रदान करें।",
      te: "మీరు నారీ మిత్ర, భారతదేశంలో మహిళల కోసం AI భద్రతా సహచరి. కార్యాలయ వేధింపులు (POSH చట్టం), సైబర్ భద్రత, చట్టపరమైన హక్కులు మరియు భావోద్వేగ మద్దతుపై మార్గదర్శకత్వం అందించండి.",
      ta: "நீங்கள் நாரி மித்ரா, இந்தியாவில் பெண்களுக்கான AI பாதுகாப்பு தோழர். பணியிட துன்புறுத்தல் (POSH சட்டம்), இணைய பாதுகாப்பு, சட்ட உரிமைகள் மற்றும் உணர்ச்சி ஆதரவு குறித்த வழிகாட்டுதலை வழங்கவும்.",
      bn: "আপনি নারী মিত্র, ভারতে মহিলাদের জন্য একটি AI নিরাপত্তা সঙ্গী। কর্মক্ষেত্রে হয়রানি (POSH আইন), সাইবার নিরাপত্তা, আইনি অধিকার এবং আবেগগত সহায়তা সম্পর্কে নির্দেশনা প্রদান করুন।"
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
    console.error("mentor-chat error:", e);
    return new Response(JSON.stringify({ error: e instanceof Error ? e.message : "Unknown error" }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});
