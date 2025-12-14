import { Shield, Sparkles, Crown } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

interface ProgressionSystemProps {
  currentXP: number;
  currentRank: "ninja" | "samurai" | "sensei";
}

const ranks = {
  ninja: { name: "Cyber Ninja", icon: Shield, color: "text-accent", next: 100, gradient: "from-accent/20 to-accent/5" },
  samurai: { name: "Cyber Samurai", icon: Sparkles, color: "text-primary", next: 250, gradient: "from-primary/20 to-primary/5" },
  sensei: { name: "Cyber Sensei", icon: Crown, color: "text-secondary", next: 500, gradient: "from-secondary/20 to-secondary/5" }
};

export const ProgressionSystem = ({ currentXP, currentRank }: ProgressionSystemProps) => {
  const rank = ranks[currentRank];
  const Icon = rank.icon;
  const nextRank = currentRank === "ninja" ? "samurai" : currentRank === "samurai" ? "sensei" : "sensei";
  const progress = (currentXP / rank.next) * 100;

  return (
    <Card className={`p-6 bg-gradient-to-br ${rank.gradient} border-2 animate-scale-in`}>
      <div className="flex items-center gap-4 mb-4">
        <div className={`p-3 rounded-xl bg-gradient-to-br from-background/50 to-background/20 ${rank.color}`}>
          <Icon className="w-8 h-8" />
        </div>
        <div className="flex-1">
          <h3 className="text-2xl font-bold flex items-center gap-2">
            {rank.name}
            <span className="text-sm font-normal text-muted-foreground">Level {Math.floor(currentXP / 50) + 1}</span>
          </h3>
          <p className="text-sm text-muted-foreground">
            {currentXP} / {rank.next} XP to {nextRank === "sensei" && currentRank === "sensei" ? "Master" : ranks[nextRank]?.name}
          </p>
        </div>
      </div>
      <Progress value={progress} className="h-3" />
    </Card>
  );
};
