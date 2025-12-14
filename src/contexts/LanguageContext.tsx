import React, { createContext, useContext, useState, useEffect } from "react";

export type Language = "en" | "hi" | "te" | "ta" | "bn";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations: Record<Language, Record<string, string>> = {
  en: {
    // Navigation
    home: "Home",
    report: "Report",
    rights: "Rights",
    cyber: "CyberDojo",
    mentor: "AI Mentor",
    directory: "Help",
    emergency: "Emergency",
    safety: "Safety Tips",
    
    // CyberDojo
    cyberdojo_title: "🥷 CyberDojo",
    cyberdojo_subtitle: "Master digital safety through gamified learning",
    sos_button: "SOS - Connect with Mentor",
    current_rank: "Current Rank",
    xp_progress: "XP Progress",
    learning_modules: "Learning Modules",
    threat_dashboard: "Threat Dashboard",
    achievements: "Achievements",
    leaderboard: "Leaderboard",
    
    // Ranks
    ninja: "Ninja",
    samurai: "Samurai",
    sensei: "Sensei",
    
    // Common
    language: "Language",
    settings: "Settings",
    close: "Close",
    send: "Send",
    start_voice: "Start Voice Chat",
    stop_voice: "Stop Voice Chat",
  },
  hi: {
    home: "होम",
    report: "रिपोर्ट",
    rights: "अधिकार",
    cyber: "साइबरदोजो",
    mentor: "AI मेंटर",
    directory: "सहायता",
    emergency: "आपातकाल",
    safety: "सुरक्षा टिप्स",
    
    cyberdojo_title: "🥷 साइबरदोजो",
    cyberdojo_subtitle: "गेमिफाइड लर्निंग के माध्यम से डिजिटल सुरक्षा में महारत हासिल करें",
    sos_button: "SOS - मेंटर से जुड़ें",
    current_rank: "वर्तमान रैंक",
    xp_progress: "XP प्रगति",
    learning_modules: "सीखने के मॉड्यूल",
    threat_dashboard: "खतरा डैशबोर्ड",
    achievements: "उपलब्धियां",
    leaderboard: "लीडरबोर्ड",
    
    ninja: "निंजा",
    samurai: "समुराई",
    sensei: "सेंसेई",
    
    language: "भाषा",
    settings: "सेटिंग्स",
    close: "बंद करें",
    send: "भेजें",
    start_voice: "वॉयस चैट शुरू करें",
    stop_voice: "वॉयस चैट बंद करें",
  },
  te: {
    home: "హోమ్",
    report: "రిపోర్ట్",
    rights: "హక్కులు",
    cyber: "సైబర్‌దోజో",
    mentor: "AI మెంటార్",
    directory: "సహాయం",
    emergency: "అత్యవసరం",
    safety: "భద్రతా చిట్కాలు",
    
    cyberdojo_title: "🥷 సైబర్‌దోజో",
    cyberdojo_subtitle: "గేమిఫైడ్ లెర్నింగ్ ద్వారా డిజిటల్ భద్రతను నేర్చుకోండి",
    sos_button: "SOS - మెంటార్‌తో కనెక్ట్ అవ్వండి",
    current_rank: "ప్రస్తుత ర్యాంక్",
    xp_progress: "XP పురోగతి",
    learning_modules: "లెర్నింగ్ మాడ్యూల్స్",
    threat_dashboard: "థ్రెట్ డాష్‌బోర్డ్",
    achievements: "సాధనలు",
    leaderboard: "లీడర్‌బోర్డ్",
    
    ninja: "నింజా",
    samurai: "సమురాయ్",
    sensei: "సెన్సీ",
    
    language: "భాష",
    settings: "సెట్టింగ్‌లు",
    close: "మూసివేయి",
    send: "పంపు",
    start_voice: "వాయిస్ చాట్ ప్రారంభించండి",
    stop_voice: "వాయిస్ చాట్ ఆపండి",
  },
  ta: {
    home: "முகப்பு",
    report: "அறிக்கை",
    rights: "உரிமைகள்",
    cyber: "சைபர்தோஜோ",
    mentor: "AI வழிகாட்டி",
    directory: "உதவி",
    emergency: "அவசரநிலை",
    safety: "பாதுகாப்பு குறிப்புகள்",
    
    cyberdojo_title: "🥷 சைபர்தோஜோ",
    cyberdojo_subtitle: "கேமிஃபைட் கற்றல் மூலம் டிஜிட்டல் பாதுகாப்பில் தேர்ச்சி பெறுங்கள்",
    sos_button: "SOS - வழிகாட்டியுடன் இணைக்கவும்",
    current_rank: "தற்போதைய தரவரிசை",
    xp_progress: "XP முன்னேற்றம்",
    learning_modules: "கற்றல் தொகுதிகள்",
    threat_dashboard: "அச்சுறுத்தல் டாஷ்போர்டு",
    achievements: "சாதனைகள்",
    leaderboard: "முதன்மை பலகை",
    
    ninja: "நிஞ்சா",
    samurai: "சாமுராய்",
    sensei: "சென்சி",
    
    language: "மொழி",
    settings: "அமைப்புகள்",
    close: "மூடு",
    send: "அனுப்பு",
    start_voice: "குரல் அரட்டை தொடங்கவும்",
    stop_voice: "குரல் அரட்டை நிறுத்தவும்",
  },
  bn: {
    home: "হোম",
    report: "রিপোর্ট",
    rights: "অধিকার",
    cyber: "সাইবারদোজো",
    mentor: "AI মেন্টর",
    directory: "সাহায্য",
    emergency: "জরুরি",
    safety: "নিরাপত্তা টিপস",
    
    cyberdojo_title: "🥷 সাইবারদোজো",
    cyberdojo_subtitle: "গেমিফাইড শেখার মাধ্যমে ডিজিটাল নিরাপত্তায় দক্ষতা অর্জন করুন",
    sos_button: "SOS - মেন্টরের সাথে সংযুক্ত হন",
    current_rank: "বর্তমান র‍্যাঙ্ক",
    xp_progress: "XP অগ্রগতি",
    learning_modules: "শেখার মডিউল",
    threat_dashboard: "হুমকি ড্যাশবোর্ড",
    achievements: "সাফল্য",
    leaderboard: "লিডারবোর্ড",
    
    ninja: "নিনজা",
    samurai: "সামুরাই",
    sensei: "সেনসেই",
    
    language: "ভাষা",
    settings: "সেটিংস",
    close: "বন্ধ করুন",
    send: "পাঠান",
    start_voice: "ভয়েস চ্যাট শুরু করুন",
    stop_voice: "ভয়েস চ্যাট বন্ধ করুন",
  }
};

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>(() => {
    const saved = localStorage.getItem("app_language");
    return (saved as Language) || "en";
  });

  useEffect(() => {
    localStorage.setItem("app_language", language);
  }, [language]);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
  };

  const t = (key: string): string => {
    return translations[language][key] || translations.en[key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within LanguageProvider");
  }
  return context;
};
