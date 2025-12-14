import { useState } from "react";
import { Navigation, DesktopNav } from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Shield, AlertTriangle, CheckCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const ReportPage = () => {
  const [submitted, setSubmitted] = useState(false);
  const { toast } = useToast();
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    toast({
      title: "Report Submitted (Demo)",
      description: "In a real app, this would be sent securely to appropriate authorities.",
    });
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-background pb-20 md:pb-8 flex items-center justify-center px-4">
        <DesktopNav />
        <Card className="p-8 max-w-md w-full text-center gradient-card shadow-strong animate-scale-in">
          <div className="inline-flex p-4 rounded-full bg-success/10 mb-6">
            <CheckCircle className="w-12 h-12 text-success" />
          </div>
          <h2 className="text-2xl font-bold mb-4">Report Received</h2>
          <p className="text-muted-foreground mb-6">
            Your report has been recorded confidentially. In a real implementation, this would be forwarded to appropriate authorities.
          </p>
          <div className="bg-muted p-4 rounded-lg mb-6 text-left">
            <p className="text-sm font-medium mb-2">What happens next:</p>
            <ul className="text-sm text-muted-foreground space-y-2">
              <li>• Your identity remains anonymous</li>
              <li>• Authorities will investigate the matter</li>
              <li>• You may be contacted for more details</li>
              <li>• Support resources are available to you</li>
            </ul>
          </div>
          <Button onClick={() => setSubmitted(false)} className="w-full">
            Submit Another Report
          </Button>
        </Card>
        <Navigation />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background pb-20 md:pb-8">
      <DesktopNav />
      
      <div className="pt-20 md:pt-24 px-4 py-8">
        <div className="container mx-auto max-w-3xl">
          {/* Header */}
          <div className="text-center mb-8 animate-fade-in">
            <div className="inline-flex p-3 rounded-full bg-primary/10 mb-4">
              <Shield className="w-8 h-8 text-primary" />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Confidential Incident Report</h1>
            <p className="text-muted-foreground text-lg">
              Your identity will remain anonymous. This is a safe space to report any concerns.
            </p>
          </div>

          {/* Warning Notice */}
          <Card className="p-4 mb-8 border-secondary bg-secondary/5 animate-slide-up">
            <div className="flex gap-3">
              <AlertTriangle className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
              <div>
                <p className="font-medium mb-1">Demo Notice</p>
                <p className="text-sm text-muted-foreground">
                  This is a demonstration. No data is actually sent or stored. In a real implementation, 
                  reports would be securely transmitted to appropriate authorities.
                </p>
              </div>
            </div>
          </Card>

          {/* Form */}
          <Card className="p-6 md:p-8 gradient-card shadow-soft animate-slide-up" style={{ animationDelay: "100ms" }}>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="incident-type">Type of Incident</Label>
                <Select required>
                  <SelectTrigger id="incident-type">
                    <SelectValue placeholder="Select incident type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="workplace-harassment">Workplace Harassment</SelectItem>
                    <SelectItem value="discrimination">Discrimination</SelectItem>
                    <SelectItem value="unsafe-conditions">Unsafe Working Conditions</SelectItem>
                    <SelectItem value="wage-issues">Wage or Payment Issues</SelectItem>
                    <SelectItem value="cyber-harassment">Cyber Harassment</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="date">Date of Incident (Optional)</Label>
                <Input id="date" type="date" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="location">Location (Optional)</Label>
                <Input id="location" placeholder="Where did this happen?" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="description">Description of Incident *</Label>
                <Textarea 
                  id="description" 
                  placeholder="Please provide details about what happened. Include any relevant information that could help."
                  rows={6}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="witnesses">Witnesses (Optional)</Label>
                <Input id="witnesses" placeholder="Any witnesses present?" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="contact">Contact Information (Optional)</Label>
                <Input id="contact" placeholder="Email or phone (only if you wish to be contacted)" />
                <p className="text-xs text-muted-foreground">
                  You can choose to remain completely anonymous
                </p>
              </div>

              <div className="bg-muted p-4 rounded-lg">
                <p className="text-sm font-medium mb-2">Your Privacy Matters</p>
                <ul className="text-xs text-muted-foreground space-y-1">
                  <li>✓ All reports are encrypted and confidential</li>
                  <li>✓ You can choose to be anonymous</li>
                  <li>✓ Your report will only be shared with relevant authorities</li>
                  <li>✓ You will be protected from retaliation</li>
                </ul>
              </div>

              <Button type="submit" size="lg" className="w-full">
                Submit Report Securely
              </Button>
            </form>
          </Card>
        </div>
      </div>
      
      <Navigation />
    </div>
  );
};

export default ReportPage;
