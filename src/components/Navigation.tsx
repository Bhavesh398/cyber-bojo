import { Home, Shield, Scale, Shield as CyberIcon, MessageCircle, BookOpen, Phone, AlertTriangle } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { LanguageSelector } from "./LanguageSelector";
import { useLanguage } from "@/contexts/LanguageContext";

export const Navigation = () => {
  const location = useLocation();
  const { t } = useLanguage();

  const navItems = [
    { icon: Home, label: t("home"), path: "/" },
    { icon: Shield, label: t("report"), path: "/report" },
    { icon: Scale, label: t("rights"), path: "/rights" },
    { icon: CyberIcon, label: t("cyber"), path: "/cyber" },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-card border-t border-border shadow-strong z-50 md:hidden">
      <div className="flex justify-around items-center h-16 px-2">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = location.pathname === item.path;
          
          return (
            <Link
              key={item.path}
              to={item.path}
              className={cn(
                "flex flex-col items-center justify-center gap-1 px-3 py-2 rounded-lg transition-smooth min-w-[60px]",
                isActive 
                  ? "text-primary" 
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              <Icon className={cn(
                "w-5 h-5 transition-smooth",
                isActive && "scale-110"
              )} />
              <span className="text-xs font-medium">{item.label}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
};

export const DesktopNav = () => {
  const location = useLocation();
  const { t } = useLanguage();

  const navItems = [
    { icon: Home, label: t("home"), path: "/" },
    { icon: Shield, label: t("report"), path: "/report" },
    { icon: Scale, label: t("rights"), path: "/rights" },
    { icon: CyberIcon, label: t("cyber"), path: "/cyber" },
    { icon: MessageCircle, label: t("mentor"), path: "/mentor" },
    { icon: BookOpen, label: t("directory"), path: "/directory" },
    { icon: Phone, label: t("emergency"), path: "/emergency" },
    { icon: AlertTriangle, label: t("safety"), path: "/safety" },
  ];

  return (
    <nav className="hidden md:block fixed top-0 left-0 right-0 bg-card/80 backdrop-blur-lg border-b border-border shadow-soft z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-4">
            <Shield className="w-8 h-8 text-primary" />
            <h1 className="text-xl font-bold">
              Nari Suraksha Saathi
            </h1>
            <LanguageSelector />
          </div>
          
          <div className="flex items-center gap-6">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = location.pathname === item.path;
              
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={cn(
                    "flex items-center gap-2 px-4 py-2 rounded-lg transition-smooth font-medium",
                    isActive 
                      ? "text-primary bg-primary/10" 
                      : "text-muted-foreground hover:text-foreground hover:bg-muted"
                  )}
                >
                  <Icon className="w-5 h-5" />
                  <span>{item.label}</span>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </nav>
  );
};
