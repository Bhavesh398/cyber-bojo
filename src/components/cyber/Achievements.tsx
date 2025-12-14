import { Card } from "@/components/ui/card";
import { Trophy, Star, Zap, Shield, Target } from "lucide-react";

interface Achievement {
  id: string;
  title: string;
  description: string;
  icon: any;
  unlocked: boolean;
  xpRequired: number;
}

const achievements: Achievement[] = [
  { id: "first-steps", title: "First Steps", description: "Complete your first module", icon: Star, unlocked: true, xpRequired: 25 },
  { id: "cyber-aware", title: "Cyber Aware", description: "Complete 2 modules", icon: Zap, unlocked: false, xpRequired: 55 },
  { id: "guardian", title: "Digital Guardian", description: "Complete 3 modules", icon: Shield, unlocked: false, xpRequired: 90 },
  { id: "sensei", title: "Cyber Sensei", description: "Complete all modules", icon: Trophy, unlocked: false, xpRequired: 130 },
];

interface AchievementsProps {
  currentXP: number;
  completedModules: string[];
}

export const Achievements = ({ currentXP, completedModules }: AchievementsProps) => {
  const unlockedCount = completedModules.length;
  
  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold mb-4">Achievements</h2>
      <div className="grid grid-cols-2 gap-3">
        {achievements.map((achievement, idx) => {
          const Icon = achievement.icon;
          const unlocked = currentXP >= achievement.xpRequired;
          
          return (
            <Card 
              key={achievement.id}
              className={`p-4 transition-all ${
                unlocked ? "bg-gradient-to-br from-primary/10 to-primary/5" : "opacity-40"
              }`}
            >
              <div className="flex flex-col items-center text-center gap-2">
                <div className={`p-3 rounded-full ${unlocked ? "bg-primary/20" : "bg-muted"}`}>
                  <Icon className={`w-6 h-6 ${unlocked ? "text-primary" : "text-muted-foreground"}`} />
                </div>
                <div>
                  <p className="font-bold text-sm">{achievement.title}</p>
                  <p className="text-xs text-muted-foreground">{achievement.description}</p>
                </div>
              </div>
            </Card>
          );
        })}
      </div>
    </div>
  );
};
