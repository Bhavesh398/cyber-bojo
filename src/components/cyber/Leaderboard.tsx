import { Card } from "@/components/ui/card";
import { Trophy, Medal, Award } from "lucide-react";

const leaderboardData = [
  { rank: 1, name: "Priya S.", xp: 450, level: "Sensei", icon: Trophy, color: "text-yellow-500" },
  { rank: 2, name: "Anjali M.", xp: 380, level: "Samurai", icon: Medal, color: "text-gray-400" },
  { rank: 3, name: "Kavita R.", xp: 320, level: "Samurai", icon: Award, color: "text-orange-600" },
  { rank: 4, name: "Riya K.", xp: 280, level: "Samurai", icon: null, color: "" },
  { rank: 5, name: "You", xp: 0, level: "Ninja", icon: null, color: "text-primary font-bold" },
];

interface LeaderboardProps {
  currentXP: number;
}

export const Leaderboard = ({ currentXP }: LeaderboardProps) => {
  const updatedLeaderboard = leaderboardData.map(entry => 
    entry.name === "You" ? { ...entry, xp: currentXP } : entry
  ).sort((a, b) => b.xp - a.xp).map((entry, idx) => ({ ...entry, rank: idx + 1 }));

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold mb-4">Leaderboard</h2>
      <Card className="p-4 space-y-3">
        {updatedLeaderboard.slice(0, 5).map((entry) => {
          const Icon = entry.icon;
          const isUser = entry.name === "You";
          
          return (
            <div 
              key={entry.rank}
              className={`flex items-center gap-4 p-3 rounded-lg transition-colors ${
                isUser ? "bg-primary/10 border border-primary/20" : "hover:bg-muted/50"
              }`}
            >
              <div className="flex items-center gap-2 min-w-[60px]">
                <span className={`text-lg font-bold ${entry.color}`}>#{entry.rank}</span>
                {Icon && <Icon className={`w-5 h-5 ${entry.color}`} />}
              </div>
              <div className="flex-1">
                <p className={`font-semibold ${isUser ? "text-primary" : ""}`}>{entry.name}</p>
                <p className="text-xs text-muted-foreground">{entry.level}</p>
              </div>
              <div className="text-right">
                <p className="font-bold">{entry.xp} XP</p>
              </div>
            </div>
          );
        })}
      </Card>
    </div>
  );
};
