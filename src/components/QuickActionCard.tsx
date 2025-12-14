import { LucideIcon } from "lucide-react";
import { Link } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface QuickActionCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  to: string;
  gradient?: "hero" | "warm" | "trust";
  delay?: number;
}

export const QuickActionCard = ({ 
  title, 
  description, 
  icon: Icon, 
  to, 
  gradient = "trust",
  delay = 0 
}: QuickActionCardProps) => {
  return (
    <Link 
      to={to}
      className="block"
      style={{ animationDelay: `${delay}ms` }}
    >
      <Card className={cn(
        "p-6 h-full hover:shadow-strong transition-smooth cursor-pointer border-2 border-transparent hover:border-primary/20 animate-slide-up",
        "gradient-card"
      )}>
        <div className="flex flex-col items-start gap-4 h-full">
          <div className={cn(
            "p-3 rounded-xl gradient-" + gradient
          )}>
            <Icon className="w-6 h-6 text-white" />
          </div>
          <div className="flex-1">
            <h3 className="text-lg font-semibold mb-2">{title}</h3>
            <p className="text-sm text-muted-foreground">{description}</p>
          </div>
        </div>
      </Card>
    </Link>
  );
};
