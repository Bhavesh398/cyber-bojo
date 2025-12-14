import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Languages } from "lucide-react";

export const useLanguage = () => {
  const [language, setLanguage] = useState<"en" | "hi">("en");
  
  const toggleLanguage = () => {
    setLanguage(prev => prev === "en" ? "hi" : "en");
  };
  
  return { language, toggleLanguage };
};

interface LanguageToggleProps {
  language: "en" | "hi";
  onToggle: () => void;
}

export const LanguageToggle = ({ language, onToggle }: LanguageToggleProps) => {
  return (
    <Button
      variant="outline"
      size="sm"
      onClick={onToggle}
      className="gap-2"
    >
      <Languages className="w-4 h-4" />
      <span className="font-medium">{language === "en" ? "हिंदी" : "English"}</span>
    </Button>
  );
};
