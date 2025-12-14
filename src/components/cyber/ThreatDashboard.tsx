import { Card } from "@/components/ui/card";
import { Shield, AlertTriangle, Lock, CheckCircle } from "lucide-react";

const threats = [
  { type: "Phishing Attempt", blocked: 12, icon: AlertTriangle, color: "text-destructive" },
  { type: "Malware Blocked", blocked: 8, icon: Shield, color: "text-accent" },
  { type: "Suspicious Links", blocked: 15, icon: Lock, color: "text-primary" },
  { type: "Safe Sessions", count: 47, icon: CheckCircle, color: "text-success" }
];

export const ThreatDashboard = () => {
  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold mb-4">Threat Shield Dashboard</h2>
      <div className="grid grid-cols-2 gap-4">
        {threats.map((threat, idx) => {
          const Icon = threat.icon;
          return (
            <Card 
              key={idx} 
              className="p-4 hover:shadow-lg transition-shadow animate-scale-in"
              style={{ animationDelay: `${idx * 100}ms` }}
            >
              <div className="flex flex-col gap-2">
                <Icon className={`w-5 h-5 ${threat.color}`} />
                <div>
                  <p className="text-2xl font-bold">{threat.blocked || threat.count}</p>
                  <p className="text-xs text-muted-foreground">{threat.type}</p>
                </div>
              </div>
            </Card>
          );
        })}
      </div>
    </div>
  );
};
