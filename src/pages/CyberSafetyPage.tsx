import { useState, useEffect } from "react";
import { Navigation, DesktopNav } from "@/components/Navigation";
import { ProgressionSystem } from "@/components/cyber/ProgressionSystem";
import { LearningModules } from "@/components/cyber/LearningModules";
import { ThreatDashboard } from "@/components/cyber/ThreatDashboard";
import { Achievements } from "@/components/cyber/Achievements";
import { Leaderboard } from "@/components/cyber/Leaderboard";
import { SakhiChatbot } from "@/components/cyber/SakhiChatbot";
import { SOSButton } from "@/components/cyber/SOSButton";
import { useLanguage } from "@/contexts/LanguageContext";

const CyberSafetyPage = () => {
  const [currentXP, setCurrentXP] = useState(0);
  const [completedModules, setCompletedModules] = useState<string[]>([]);
  const [currentRank, setCurrentRank] = useState<"ninja" | "samurai" | "sensei">("ninja");
  const { t } = useLanguage();

  // Load progress from localStorage
  useEffect(() => {
    const savedXP = localStorage.getItem("cyberDojo_xp");
    const savedModules = localStorage.getItem("cyberDojo_modules");
    if (savedXP) setCurrentXP(parseInt(savedXP));
    if (savedModules) setCompletedModules(JSON.parse(savedModules));
  }, []);

  // Update rank based on XP
  useEffect(() => {
    if (currentXP >= 250) setCurrentRank("sensei");
    else if (currentXP >= 100) setCurrentRank("samurai");
    else setCurrentRank("ninja");
  }, [currentXP]);

  // Save progress to localStorage
  useEffect(() => {
    localStorage.setItem("cyberDojo_xp", currentXP.toString());
    localStorage.setItem("cyberDojo_modules", JSON.stringify(completedModules));
  }, [currentXP, completedModules]);

  const handleModuleComplete = (moduleId: string, xp: number) => {
    if (!completedModules.includes(moduleId)) {
      setCompletedModules([...completedModules, moduleId]);
      setCurrentXP(currentXP + xp);
    }
  };

  return (
    <div className="min-h-screen bg-background pb-20 md:pb-8">
      <DesktopNav />
      
      <div className="pt-20 md:pt-24 px-4 py-8">
        <div className="container mx-auto max-w-6xl">
          {/* Header */}
          <div className="text-center mb-8 animate-fade-in">
            <h1 className={`text-4xl md:text-5xl font-bold mb-4 ${
              currentRank === "sensei" ? "gradient-sensei glow-text-sensei" :
              currentRank === "samurai" ? "gradient-samurai glow-text-samurai" :
              "gradient-ninja glow-text-ninja"
            } bg-clip-text text-transparent`}>
              {t("cyberdojo_title")}
            </h1>
            <p className="text-muted-foreground text-lg">
              {t("cyberdojo_subtitle")}
            </p>
          </div>

          {/* SOS Button - Prominent */}
          <div className="mb-8 animate-scale-in">
            <SOSButton />
          </div>

          {/* Progression System */}
          <div className="mb-8 animate-fade-in" style={{ animationDelay: "100ms" }}>
            <ProgressionSystem currentXP={currentXP} currentRank={currentRank} />
          </div>

          {/* Two Column Layout */}
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Left Column - Learning & Threats */}
            <div className="lg:col-span-2 space-y-8">
              {/* Learning Modules */}
              <div className="animate-slide-up" style={{ animationDelay: "200ms" }}>
                <LearningModules 
                  completedModules={completedModules}
                  currentXP={currentXP}
                  onComplete={handleModuleComplete}
                />
              </div>

              {/* Threat Dashboard */}
              <div className="animate-slide-up" style={{ animationDelay: "300ms" }}>
                <ThreatDashboard />
              </div>
            </div>

            {/* Right Column - Achievements & Leaderboard */}
            <div className="space-y-8">
              {/* Achievements */}
              <div className="animate-slide-up" style={{ animationDelay: "400ms" }}>
                <Achievements currentXP={currentXP} completedModules={completedModules} />
              </div>

              {/* Leaderboard */}
              <div className="animate-slide-up" style={{ animationDelay: "500ms" }}>
                <Leaderboard currentXP={currentXP} />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Sakhi Chatbot - Floating */}
      <SakhiChatbot />
      
      <Navigation />
    </div>
  );
};

export default CyberSafetyPage;
