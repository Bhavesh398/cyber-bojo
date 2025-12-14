import { Shield, FileText, Lock, MessageCircle, Map, Heart, Users, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { QuickActionCard } from "@/components/QuickActionCard";
import { StatCard } from "@/components/StatCard";
import { Navigation, DesktopNav } from "@/components/Navigation";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen bg-background pb-20 md:pb-8">
      <DesktopNav />
      
      {/* Hero Section */}
      <section className="gradient-hero text-white pt-20 md:pt-32 pb-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
            <div className="flex-1 text-center md:text-left animate-fade-in">
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6 animate-pulse-subtle">
                <Shield className="w-4 h-4" />
                <span className="text-sm font-medium">Your Safety Companion</span>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                Nari Suraksha Saathi
              </h1>
              <p className="text-lg md:text-xl text-white/90 mb-8 leading-relaxed">
                Empowering women through digital safety, legal awareness, and AI-powered mentorship. 
                Your confidential guide to workplace rights, cybersecurity, and support networks.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <Link to="/report">
                  <Button size="xl" variant="secondary" className="w-full sm:w-auto shadow-strong">
                    <FileText className="w-5 h-5" />
                    Report Incident
                  </Button>
                </Link>
                <Link to="/emergency">
                  <Button size="xl" variant="destructive" className="w-full sm:w-auto shadow-strong">
                    <Shield className="w-5 h-5" />
                    Emergency Help
                  </Button>
                </Link>
              </div>
            </div>
            
            <div className="flex-1 relative animate-float">
              <div className="relative w-full max-w-md mx-auto">
                <div className="absolute inset-0 bg-white/10 backdrop-blur-xl rounded-3xl transform rotate-3"></div>
                <div className="relative bg-white/20 backdrop-blur-xl rounded-3xl p-8 shadow-strong">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white/90 p-4 rounded-xl text-center">
                      <Shield className="w-8 h-8 text-primary mx-auto mb-2" />
                      <p className="font-bold text-foreground text-sm">Safe Reporting</p>
                    </div>
                    <div className="bg-white/90 p-4 rounded-xl text-center">
                      <Heart className="w-8 h-8 text-secondary mx-auto mb-2" />
                      <p className="font-bold text-foreground text-sm">AI Mentor</p>
                    </div>
                    <div className="bg-white/90 p-4 rounded-xl text-center">
                      <Lock className="w-8 h-8 text-accent mx-auto mb-2" />
                      <p className="font-bold text-foreground text-sm">Cyber Safe</p>
                    </div>
                    <div className="bg-white/90 p-4 rounded-xl text-center">
                      <Users className="w-8 h-8 text-success mx-auto mb-2" />
                      <p className="font-bold text-foreground text-sm">Support Network</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="px-4 -mt-8">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <StatCard icon={CheckCircle} value="500+" label="Women Helped" delay={0} />
            <StatCard icon={FileText} value="200+" label="Rights Guides" delay={100} />
            <StatCard icon={Lock} value="100%" label="Confidential" delay={200} />
            <StatCard icon={Users} value="50+" label="NGO Partners" delay={300} />
          </div>
        </div>
      </section>

      {/* Quick Actions */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">How Can We Help You Today?</h2>
            <p className="text-muted-foreground text-lg">Choose what you need assistance with</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <QuickActionCard
              title="Know Your Rights"
              description="Learn about POSH Act, workplace safety, and labor laws in simple language"
              icon={FileText}
              to="/rights"
              gradient="trust"
              delay={0}
            />
            <QuickActionCard
              title="Cyber Safety"
              description="Protect yourself from online scams, harassment, and digital threats"
              icon={Lock}
              to="https://cyber-dojo.vercel.app/"
              gradient="hero"
              delay={100}
              external={true}
            />
            <QuickActionCard
              title="AI Mentor Chat"
              description="Get guidance and emotional support from our AI safety companion"
              icon={MessageCircle}
              to="/mentor"
              gradient="warm"
              delay={200}
            />
            <QuickActionCard
              title="Report Incident"
              description="Confidentially report workplace harassment or safety concerns"
              icon={Shield}
              to="/report"
              gradient="trust"
              delay={300}
            />
            <QuickActionCard
              title="Find Help"
              description="Connect with NGOs, legal aid, and support organizations near you"
              icon={Map}
              to="/directory"
              gradient="warm"
              delay={400}
            />
            <QuickActionCard
              title="Safety Tips"
              description="Learn practical tips for physical and digital safety"
              icon={Heart}
              to="/safety-tips"
              gradient="hero"
              delay={500}
            />
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="px-4 py-16 bg-muted/50">
        <div className="container mx-auto max-w-4xl text-center">
          <Shield className="w-16 h-16 text-primary mx-auto mb-6" />
          <h2 className="text-3xl font-bold mb-4">Your Safety, Your Privacy</h2>
          <p className="text-lg text-muted-foreground mb-8">
            All information shared here is confidential and secure. We're here to empower you with knowledge, 
            connect you with support, and help you navigate challenging situations with confidence.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <div className="flex items-center gap-2 bg-background px-4 py-2 rounded-full shadow-soft">
              <CheckCircle className="w-5 h-5 text-success" />
              <span className="font-medium">100% Confidential</span>
            </div>
            <div className="flex items-center gap-2 bg-background px-4 py-2 rounded-full shadow-soft">
              <CheckCircle className="w-5 h-5 text-success" />
              <span className="font-medium">No Data Stored</span>
            </div>
            <div className="flex items-center gap-2 bg-background px-4 py-2 rounded-full shadow-soft">
              <CheckCircle className="w-5 h-5 text-success" />
              <span className="font-medium">Free Support</span>
            </div>
          </div>
        </div>
      </section>

      <Navigation />
    </div>
  );
};

export default Index;
