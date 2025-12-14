import { useState } from "react";
import { Navigation, DesktopNav } from "@/components/Navigation";
import { LanguageToggle, useLanguage } from "@/components/LanguageToggle";
import { Card } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Shield, Scale, Briefcase, AlertCircle } from "lucide-react";

const RightsPage = () => {
  const { language, toggleLanguage } = useLanguage();

  const content = {
    en: {
      title: "Know Your Rights",
      subtitle: "Understanding POSH Act, Workplace Safety & Labor Laws",
      posh: {
        title: "POSH Act (Sexual Harassment)",
        items: [
          {
            q: "What is POSH Act?",
            a: "The Prevention of Sexual Harassment (POSH) Act, 2013 protects women from sexual harassment at the workplace. Every organization with 10 or more employees must have an Internal Complaints Committee (ICC)."
          },
          {
            q: "What counts as harassment?",
            a: "Sexual harassment includes: unwelcome physical contact, demands for sexual favors, sexually colored remarks, showing pornography, any other unwelcome physical, verbal or non-verbal conduct of sexual nature."
          },
          {
            q: "How to file a complaint?",
            a: "You can file a written complaint with your organization's Internal Complaints Committee (ICC) within 3 months of the incident. The committee must investigate and give a report within 90 days."
          },
          {
            q: "What protection do I have?",
            a: "You are protected from: retaliation, termination, or any adverse action for filing a complaint. The employer must take action against proven harassment."
          }
        ]
      },
      workplace: {
        title: "Workplace Safety Rights",
        items: [
          {
            q: "Safe working conditions",
            a: "You have the right to work in a safe, clean environment. Employers must provide proper lighting, ventilation, drinking water, and toilet facilities. Any unsafe conditions should be reported."
          },
          {
            q: "Working hours & breaks",
            a: "Maximum 9 hours per day or 48 hours per week. You're entitled to at least one weekly holiday and 15 minutes rest after 5 hours of continuous work."
          },
          {
            q: "Maternity benefits",
            a: "Women are entitled to 26 weeks of paid maternity leave. You cannot be dismissed during pregnancy or maternity leave period."
          },
          {
            q: "Equal pay for equal work",
            a: "Women have the right to receive the same wages as men for the same or similar work. Pay discrimination based on gender is illegal."
          }
        ]
      },
      labor: {
        title: "Labor Laws & Rights",
        items: [
          {
            q: "Minimum wage rights",
            a: "Every worker is entitled to receive at least the minimum wage set by the government for their industry and region. Non-payment is a legal offense."
          },
          {
            q: "Right to form unions",
            a: "Workers have the right to form or join trade unions for collective bargaining and to protect their interests."
          },
          {
            q: "Leave entitlements",
            a: "You're entitled to: 12 days casual leave per year, sick leave with medical certificate, and national holidays with pay."
          },
          {
            q: "Termination rights",
            a: "Employers must give one month notice or pay in lieu. Sudden termination without reason is illegal. You can challenge unfair dismissal."
          }
        ]
      }
    },
    hi: {
      title: "अपने अधिकार जानें",
      subtitle: "POSH अधिनियम, कार्यस्थल सुरक्षा और श्रम कानूनों को समझें",
      posh: {
        title: "POSH अधिनियम (यौन उत्पीड़न)",
        items: [
          {
            q: "POSH अधिनियम क्या है?",
            a: "यौन उत्पीड़न निवारण (POSH) अधिनियम, 2013 कार्यस्थल पर महिलाओं को यौन उत्पीड़न से बचाता है। 10 या अधिक कर्मचारियों वाले प्रत्येक संगठन में आंतरिक शिकायत समिति (ICC) होनी चाहिए।"
          },
          {
            q: "उत्पीड़न में क्या शामिल है?",
            a: "यौन उत्पीड़न में शामिल हैं: अनचाहा शारीरिक संपर्क, यौन सुविधाओं की मांग, यौन रंग की टिप्पणियां, अश्लील सामग्री दिखाना, यौन प्रकृति का कोई अन्य अनचाहा शारीरिक, मौखिक या गैर-मौखिक आचरण।"
          },
          {
            q: "शिकायत कैसे दर्ज करें?",
            a: "आप घटना के 3 महीने के भीतर अपने संगठन की आंतरिक शिकायत समिति (ICC) में लिखित शिकायत दर्ज कर सकते हैं। समिति को 90 दिनों के भीतर जांच करके रिपोर्ट देनी होगी।"
          },
          {
            q: "मुझे क्या सुरक्षा है?",
            a: "आप इनसे सुरक्षित हैं: प्रतिशोध, समाप्ति, या शिकायत दर्ज करने के लिए कोई प्रतिकूल कार्रवाई। नियोक्ता को सिद्ध उत्पीड़न के खिलाफ कार्रवाई करनी चाहिए।"
          }
        ]
      },
      workplace: {
        title: "कार्यस्थल सुरक्षा अधिकार",
        items: [
          {
            q: "सुरक्षित कार्य स्थितियां",
            a: "आपको सुरक्षित, स्वच्छ वातावरण में काम करने का अधिकार है। नियोक्ताओं को उचित प्रकाश, वेंटिलेशन, पेयजल और शौचालय सुविधाएं प्रदान करनी चाहिए।"
          },
          {
            q: "कार्य घंटे और विश्राम",
            a: "अधिकतम प्रति दिन 9 घंटे या प्रति सप्ताह 48 घंटे। आप कम से कम एक साप्ताहिक अवकाश और 5 घंटे के निरंतर काम के बाद 15 मिनट के आराम के हकदार हैं।"
          },
          {
            q: "मातृत्व लाभ",
            a: "महिलाओं को 26 सप्ताह के सवेतन मातृत्व अवकाश का अधिकार है। गर्भावस्था या मातृत्व अवकाश अवधि के दौरान आपको बर्खास्त नहीं किया जा सकता।"
          },
          {
            q: "समान काम के लिए समान वेतन",
            a: "महिलाओं को समान या समान काम के लिए पुरुषों के समान वेतन प्राप्त करने का अधिकार है। लिंग के आधार पर वेतन भेदभाव अवैध है।"
          }
        ]
      },
      labor: {
        title: "श्रम कानून और अधिकार",
        items: [
          {
            q: "न्यूनतम मजदूरी अधिकार",
            a: "प्रत्येक कर्मचारी अपने उद्योग और क्षेत्र के लिए सरकार द्वारा निर्धारित न्यूनतम मजदूरी प्राप्त करने का हकदार है।"
          },
          {
            q: "संघ बनाने का अधिकार",
            a: "श्रमिकों को सामूहिक सौदेबाजी और अपने हितों की रक्षा के लिए ट्रेड यूनियन बनाने या शामिल होने का अधिकार है।"
          },
          {
            q: "अवकाश अधिकार",
            a: "आप हकदार हैं: प्रति वर्ष 12 दिन आकस्मिक अवकाश, चिकित्सा प्रमाण पत्र के साथ बीमार अवकाश, और भुगतान के साथ राष्ट्रीय छुट्टियां।"
          },
          {
            q: "समाप्ति अधिकार",
            a: "नियोक्ताओं को एक महीने का नोटिस देना होगा या इसके बदले भुगतान करना होगा। बिना कारण अचानक समाप्ति अवैध है।"
          }
        ]
      }
    }
  };

  const t = content[language];

  return (
    <div className="min-h-screen bg-background pb-20 md:pb-8">
      <DesktopNav />
      
      <div className="pt-20 md:pt-24 px-4 py-8">
        <div className="container mx-auto max-w-4xl">
          {/* Header */}
          <div className="flex justify-between items-start mb-8 animate-fade-in">
            <div>
              <div className="inline-flex p-3 rounded-full bg-primary/10 mb-4">
                <Scale className="w-8 h-8 text-primary" />
              </div>
              <h1 className="text-3xl md:text-4xl font-bold mb-2">{t.title}</h1>
              <p className="text-muted-foreground text-lg">{t.subtitle}</p>
            </div>
            <LanguageToggle language={language} onToggle={toggleLanguage} />
          </div>

          {/* Notice */}
          <Card className="p-4 mb-8 border-primary bg-primary/5 animate-slide-up">
            <div className="flex gap-3">
              <AlertCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
              <div>
                <p className="text-sm text-muted-foreground">
                  {language === "en" 
                    ? "This information is simplified for easy understanding. For legal advice, consult a lawyer or contact relevant authorities."
                    : "यह जानकारी आसान समझ के लिए सरलीकृत है। कानूनी सलाह के लिए, एक वकील से परामर्श करें या संबंधित अधिकारियों से संपर्क करें।"
                  }
                </p>
              </div>
            </div>
          </Card>

          {/* POSH Act Section */}
          <Card className="mb-6 p-6 gradient-card shadow-soft animate-slide-up" style={{ animationDelay: "100ms" }}>
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 rounded-lg bg-primary/10">
                <Shield className="w-6 h-6 text-primary" />
              </div>
              <h2 className="text-2xl font-bold">{t.posh.title}</h2>
            </div>
            <Accordion type="single" collapsible className="w-full">
              {t.posh.items.map((item, idx) => (
                <AccordionItem key={idx} value={`posh-${idx}`}>
                  <AccordionTrigger className="text-left">{item.q}</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {item.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </Card>

          {/* Workplace Safety Section */}
          <Card className="mb-6 p-6 gradient-card shadow-soft animate-slide-up" style={{ animationDelay: "200ms" }}>
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 rounded-lg bg-secondary/10">
                <Briefcase className="w-6 h-6 text-secondary" />
              </div>
              <h2 className="text-2xl font-bold">{t.workplace.title}</h2>
            </div>
            <Accordion type="single" collapsible className="w-full">
              {t.workplace.items.map((item, idx) => (
                <AccordionItem key={idx} value={`workplace-${idx}`}>
                  <AccordionTrigger className="text-left">{item.q}</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {item.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </Card>

          {/* Labor Laws Section */}
          <Card className="p-6 gradient-card shadow-soft animate-slide-up" style={{ animationDelay: "300ms" }}>
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 rounded-lg bg-accent/10">
                <Scale className="w-6 h-6 text-accent" />
              </div>
              <h2 className="text-2xl font-bold">{t.labor.title}</h2>
            </div>
            <Accordion type="single" collapsible className="w-full">
              {t.labor.items.map((item, idx) => (
                <AccordionItem key={idx} value={`labor-${idx}`}>
                  <AccordionTrigger className="text-left">{item.q}</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {item.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </Card>
        </div>
      </div>
      
      <Navigation />
    </div>
  );
};

export default RightsPage;
