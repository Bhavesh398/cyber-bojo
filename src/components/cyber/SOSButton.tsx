import { AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

export const SOSButton = () => {
  const { toast } = useToast();

  const handleSOS = () => {
    toast({
      title: "🛡️ SOS Activated",
      description: "Connecting you anonymously to a verified mentor. Stay safe.",
    });
  };

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button 
          size="lg" 
          className="w-full bg-gradient-to-r from-destructive to-destructive/80 hover:from-destructive/90 hover:to-destructive/70 text-white font-bold py-6 text-lg shadow-lg animate-pulse"
        >
          <AlertCircle className="w-6 h-6 mr-2" />
          🚨 Emergency SOS
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>🛡️ Anonymous SOS Support</AlertDialogTitle>
          <AlertDialogDescription className="space-y-2">
            <p>This will connect you anonymously with a verified mentor from our Sensei network.</p>
            <p className="font-semibold">Your identity remains completely private.</p>
            <p className="text-xs">In real emergency, please call: 1091 (Women Helpline)</p>
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction onClick={handleSOS}>
            Connect Anonymously
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};
