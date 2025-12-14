import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Lock, Shield, AlertTriangle, Phone, CheckCircle, Trophy } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface Module {
  id: string;
  title: string;
  description: string;
  xp: number;
  icon: any;
  questions: { q: string; options: string[]; correct: number }[];
  unlockXP: number;
}

const modules: Module[] = [
  {
    id: "passwords",
    title: "Password Mastery",
    description: "Learn to create unbreakable passwords",
    xp: 25,
    icon: Lock,
    unlockXP: 0,
    questions: [
      {
        q: "Which password is strongest?",
        options: ["password123", "MyP@ssw0rd!2024", "12345678", "qwerty"],
        correct: 1
      }
    ]
  },
  {
    id: "scams",
    title: "Scam Detection",
    description: "Identify and avoid online scams",
    xp: 30,
    icon: AlertTriangle,
    unlockXP: 25,
    questions: [
      {
        q: "Someone asks for your OTP. What do you do?",
        options: ["Share it if urgent", "Never share OTP with anyone", "Share first 3 digits", "Ask why they need it"],
        correct: 1
      }
    ]
  },
  {
    id: "privacy",
    title: "Privacy Guardian",
    description: "Master social media privacy settings",
    xp: 35,
    icon: Shield,
    unlockXP: 55,
    questions: [
      {
        q: "Best privacy setting for social media?",
        options: ["Public profile", "Private profile with verified friends only", "Anyone can message", "Share location always"],
        correct: 1
      }
    ]
  },
  {
    id: "harassment",
    title: "Cyber Harassment Defense",
    description: "Know your rights and how to report",
    xp: 40,
    icon: Phone,
    unlockXP: 90,
    questions: [
      {
        q: "If someone blackmails you online, you should:",
        options: ["Pay them", "Report to cybercrime.gov.in immediately", "Ignore it", "Delete social media"],
        correct: 1
      }
    ]
  }
];

interface LearningModulesProps {
  completedModules: string[];
  currentXP: number;
  onComplete: (moduleId: string, xp: number) => void;
}

export const LearningModules = ({ completedModules, currentXP, onComplete }: LearningModulesProps) => {
  const [activeModule, setActiveModule] = useState<string | null>(null);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const { toast } = useToast();

  const handleAnswer = (moduleId: string, selectedIndex: number, correctIndex: number, xp: number) => {
    if (selectedIndex === correctIndex) {
      toast({
        title: "Correct! 🎉",
        description: `+${xp} XP earned!`,
      });
      onComplete(moduleId, xp);
      setActiveModule(null);
      setCurrentQuestion(0);
    } else {
      toast({
        title: "Not quite right",
        description: "Try again!",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold mb-4">Learning Dojo</h2>
      {modules.map((module) => {
        const isCompleted = completedModules.includes(module.id);
        const isLocked = currentXP < module.unlockXP;
        const Icon = module.icon;
        const isActive = activeModule === module.id;

        return (
          <Card 
            key={module.id} 
            className={`p-6 transition-all duration-300 ${
              isCompleted ? "bg-gradient-to-br from-success/10 to-success/5 border-success/50" : 
              isLocked ? "opacity-50" : 
              "hover:shadow-lg cursor-pointer"
            } ${isActive ? "ring-2 ring-primary" : ""}`}
            onClick={() => !isLocked && !isCompleted && !isActive && setActiveModule(module.id)}
          >
            <div className="flex items-start gap-4">
              <div className={`p-3 rounded-lg ${isCompleted ? "bg-success/20" : "bg-primary/10"}`}>
                {isCompleted ? <CheckCircle className="w-6 h-6 text-success" /> : 
                 isLocked ? <Lock className="w-6 h-6 text-muted-foreground" /> :
                 <Icon className="w-6 h-6 text-primary" />}
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-bold text-lg">{module.title}</h3>
                  <div className="flex items-center gap-2 text-sm font-medium text-primary">
                    <Trophy className="w-4 h-4" />
                    {module.xp} XP
                  </div>
                </div>
                <p className="text-sm text-muted-foreground mb-3">{module.description}</p>
                
                {isActive && (
                  <div className="mt-4 space-y-3 animate-fade-in">
                    <p className="font-medium">{module.questions[currentQuestion].q}</p>
                    {module.questions[currentQuestion].options.map((option, idx) => (
                      <Button
                        key={idx}
                        variant="outline"
                        className="w-full justify-start text-left"
                        onClick={(e) => {
                          e.stopPropagation();
                          handleAnswer(module.id, idx, module.questions[currentQuestion].correct, module.xp);
                        }}
                      >
                        {String.fromCharCode(65 + idx)}. {option}
                      </Button>
                    ))}
                  </div>
                )}
                
                {!isActive && !isCompleted && !isLocked && (
                  <Button size="sm" className="mt-2">Start Module</Button>
                )}
                
                {isLocked && (
                  <p className="text-xs text-muted-foreground mt-2">Unlock at {module.unlockXP} XP</p>
                )}
              </div>
            </div>
          </Card>
        );
      })}
    </div>
  );
};
