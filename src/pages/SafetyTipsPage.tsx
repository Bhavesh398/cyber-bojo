import { Navigation, DesktopNav } from "@/components/Navigation";
import { Card } from "@/components/ui/card";
import { Shield, Lock, MapPin, Phone, Eye, Users, Heart, AlertTriangle } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const SafetyTipsPage = () => {
  return (
    <div className="min-h-screen bg-background pb-20 md:pb-8">
      <DesktopNav />
      
      <div className="pt-20 md:pt-24 px-4 py-8">
        <div className="container mx-auto max-w-5xl">
          {/* Header */}
          <div className="text-center mb-8 animate-fade-in">
            <div className="inline-flex p-3 rounded-full gradient-trust mb-4">
              <Heart className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Safety Tips</h1>
            <p className="text-muted-foreground text-lg">
              Practical guidance for physical and digital safety
            </p>
          </div>

          {/* Tabs */}
          <Tabs defaultValue="physical" className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-8">
              <TabsTrigger value="physical">Physical Safety</TabsTrigger>
              <TabsTrigger value="digital">Digital Safety</TabsTrigger>
            </TabsList>

            {/* Physical Safety Tab */}
            <TabsContent value="physical" className="space-y-6">
              <Card className="p-6 gradient-card shadow-soft animate-slide-up">
                <div className="flex items-start gap-4 mb-4">
                  <div className="p-2 rounded-lg bg-primary/10 shrink-0">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-3">When Traveling</h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex gap-2">
                        <span className="text-primary">•</span>
                        <span>Share your live location with trusted contacts</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-primary">•</span>
                        <span>Use well-lit, populated routes whenever possible</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-primary">•</span>
                        <span>Keep emergency contacts on speed dial</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-primary">•</span>
                        <span>Trust your instincts - if something feels wrong, it probably is</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-primary">•</span>
                        <span>Book verified ride-sharing services and check vehicle details</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-primary">•</span>
                        <span>Sit in the back seat and keep doors locked</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </Card>

              <Card className="p-6 gradient-card shadow-soft animate-slide-up" style={{ animationDelay: "100ms" }}>
                <div className="flex items-start gap-4 mb-4">
                  <div className="p-2 rounded-lg bg-secondary/10 shrink-0">
                    <Shield className="w-6 h-6 text-secondary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-3">At Workplace</h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex gap-2">
                        <span className="text-secondary">•</span>
                        <span>Know your organization's POSH policy and ICC members</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-secondary">•</span>
                        <span>Document any inappropriate behavior (dates, times, witnesses)</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-secondary">•</span>
                        <span>Avoid isolated areas or late hours alone at work</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-secondary">•</span>
                        <span>Build a support network with trusted colleagues</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-secondary">•</span>
                        <span>Know your rights - you have legal protection against harassment</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-secondary">•</span>
                        <span>Report concerns immediately - don't wait for it to escalate</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </Card>

              <Card className="p-6 gradient-card shadow-soft animate-slide-up" style={{ animationDelay: "200ms" }}>
                <div className="flex items-start gap-4 mb-4">
                  <div className="p-2 rounded-lg bg-accent/10 shrink-0">
                    <Eye className="w-6 h-6 text-accent" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-3">Personal Safety</h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex gap-2">
                        <span className="text-accent">•</span>
                        <span>Be aware of your surroundings - avoid distractions</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-accent">•</span>
                        <span>Keep your phone charged and accessible</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-accent">•</span>
                        <span>Walk confidently and purposefully</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-accent">•</span>
                        <span>Don't hesitate to make noise or run if you feel threatened</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-accent">•</span>
                        <span>Learn basic self-defense techniques</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-accent">•</span>
                        <span>Carry pepper spray or personal alarm if legal in your area</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </Card>

              <Card className="p-6 gradient-card shadow-soft animate-slide-up" style={{ animationDelay: "300ms" }}>
                <div className="flex items-start gap-4 mb-4">
                  <div className="p-2 rounded-lg bg-success/10 shrink-0">
                    <Phone className="w-6 h-6 text-success" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-3">Emergency Preparedness</h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex gap-2">
                        <span className="text-success">•</span>
                        <span>Save emergency numbers: 112 (emergency), 1091 (women's helpline)</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-success">•</span>
                        <span>Set up emergency contacts on your phone's lock screen</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-success">•</span>
                        <span>Know the address and directions to nearest police station</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-success">•</span>
                        <span>Have a code word with family for silent SOS</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-success">•</span>
                        <span>Enable location sharing features with trusted contacts</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </Card>
            </TabsContent>

            {/* Digital Safety Tab */}
            <TabsContent value="digital" className="space-y-6">
              <Card className="p-6 gradient-card shadow-soft animate-slide-up">
                <div className="flex items-start gap-4 mb-4">
                  <div className="p-2 rounded-lg bg-primary/10 shrink-0">
                    <Lock className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-3">Password & Account Security</h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex gap-2">
                        <span className="text-primary">•</span>
                        <span>Use strong, unique passwords for each account</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-primary">•</span>
                        <span>Enable two-factor authentication (2FA) everywhere possible</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-primary">•</span>
                        <span>Never share OTPs with anyone - banks/companies never ask for them</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-primary">•</span>
                        <span>Use a password manager to generate and store passwords</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-primary">•</span>
                        <span>Change passwords immediately if you suspect a breach</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-primary">•</span>
                        <span>Log out of accounts on shared or public devices</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </Card>

              <Card className="p-6 gradient-card shadow-soft animate-slide-up" style={{ animationDelay: "100ms" }}>
                <div className="flex items-start gap-4 mb-4">
                  <div className="p-2 rounded-lg bg-secondary/10 shrink-0">
                    <Users className="w-6 h-6 text-secondary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-3">Social Media Safety</h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex gap-2">
                        <span className="text-secondary">•</span>
                        <span>Keep profiles private - only share with people you know</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-secondary">•</span>
                        <span>Don't share real-time location or daily routines publicly</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-secondary">•</span>
                        <span>Review privacy settings regularly on all platforms</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-secondary">•</span>
                        <span>Be cautious about accepting friend/follow requests from strangers</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-secondary">•</span>
                        <span>Don't share personal information like phone number, address, workplace</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-secondary">•</span>
                        <span>Block and report abusive or suspicious accounts immediately</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </Card>

              <Card className="p-6 gradient-card shadow-soft animate-slide-up" style={{ animationDelay: "200ms" }}>
                <div className="flex items-start gap-4 mb-4">
                  <div className="p-2 rounded-lg bg-destructive/10 shrink-0">
                    <AlertTriangle className="w-6 h-6 text-destructive" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-3">Recognizing Scams & Phishing</h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex gap-2">
                        <span className="text-destructive">•</span>
                        <span>No legitimate company asks for passwords or OTPs via call/email</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-destructive">•</span>
                        <span>Verify sender's email address - look for small misspellings</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-destructive">•</span>
                        <span>Don't click on suspicious links - hover to see actual URL first</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-destructive">•</span>
                        <span>Be wary of "urgent" or "limited time" offers creating pressure</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-destructive">•</span>
                        <span>Real jobs never ask for money upfront for registration or equipment</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-destructive">•</span>
                        <span>If it sounds too good to be true, it probably is a scam</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </Card>

              <Card className="p-6 gradient-card shadow-soft animate-slide-up" style={{ animationDelay: "300ms" }}>
                <div className="flex items-start gap-4 mb-4">
                  <div className="p-2 rounded-lg bg-accent/10 shrink-0">
                    <Shield className="w-6 h-6 text-accent" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-3">Dealing with Online Harassment</h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex gap-2">
                        <span className="text-accent">•</span>
                        <span>Take screenshots of all abusive messages as evidence</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-accent">•</span>
                        <span>Block the person immediately - don't engage or respond</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-accent">•</span>
                        <span>Report to the platform and use their safety tools</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-accent">•</span>
                        <span>Report to cybercrime.gov.in or call 1930</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-accent">•</span>
                        <span>If blackmail is involved, report to police immediately - don't pay</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-accent">•</span>
                        <span>Seek support from friends, family, or professional counselors</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
      
      <Navigation />
    </div>
  );
};

export default SafetyTipsPage;
