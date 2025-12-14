import { useState } from "react";
import { Navigation, DesktopNav } from "@/components/Navigation";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Map, Phone, MessageSquare, Mail, Filter, MapPin, ExternalLink } from "lucide-react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

interface NGO {
  id: number;
  name: string;
  type: string;
  description: string;
  phone: string;
  whatsapp?: string;
  email: string;
  city: string;
  address: string;
}

const DirectoryPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterType, setFilterType] = useState("all");
  const [filterCity, setFilterCity] = useState("all");

  const ngos: NGO[] = [
    {
      id: 1,
      name: "Women's Legal Aid Centre",
      type: "Legal Aid",
      description: "Free legal consultation and support for women facing workplace harassment and discrimination.",
      phone: "+91-98765-43210",
      whatsapp: "9876543210",
      email: "help@womenslegal.org",
      city: "Mumbai",
      address: "123 Justice Lane, Andheri West, Mumbai - 400053"
    },
    {
      id: 2,
      name: "Cyber Safety Foundation",
      type: "Cyber Safety",
      description: "Specialized support for online harassment, cyber stalking, and digital privacy concerns.",
      phone: "+91-98765-43211",
      whatsapp: "9876543211",
      email: "support@cybersafe.org",
      city: "Delhi",
      address: "45 Tech Park, Connaught Place, Delhi - 110001"
    },
    {
      id: 3,
      name: "Nari Shakti Support Center",
      type: "Domestic Violence",
      description: "24/7 shelter and counseling for women facing domestic violence and abuse.",
      phone: "+91-98765-43212",
      whatsapp: "9876543212",
      email: "help@narishakti.org",
      city: "Bangalore",
      address: "78 Support Street, Koramangala, Bangalore - 560034"
    },
    {
      id: 4,
      name: "Workers Rights Forum",
      type: "Labor Rights",
      description: "Advocacy and support for women workers' rights, fair wages, and safe working conditions.",
      phone: "+91-98765-43213",
      whatsapp: "9876543213",
      email: "contact@workersrights.org",
      city: "Mumbai",
      address: "56 Labor Lane, Bandra, Mumbai - 400050"
    },
    {
      id: 5,
      name: "Digital Nari Shield",
      type: "Cyber Safety",
      description: "Helping women protect their digital identity and combat online threats.",
      phone: "+91-98765-43214",
      whatsapp: "9876543214",
      email: "shield@digitalnari.org",
      city: "Pune",
      address: "90 Cyber Avenue, Hinjewadi, Pune - 411057"
    },
    {
      id: 6,
      name: "Legal Empowerment Network",
      type: "Legal Aid",
      description: "Pro-bono legal services for POSH complaints and workplace discrimination cases.",
      phone: "+91-98765-43215",
      email: "legal@empowerment.org",
      city: "Delhi",
      address: "23 Justice Road, Karol Bagh, Delhi - 110005"
    },
    {
      id: 7,
      name: "Safe Haven Women's Shelter",
      type: "Domestic Violence",
      description: "Emergency shelter, counseling, and rehabilitation for women and children.",
      phone: "+91-98765-43216",
      whatsapp: "9876543216",
      email: "shelter@safehaven.org",
      city: "Bangalore",
      address: "12 Hope Street, Whitefield, Bangalore - 560066"
    }
  ];

  const filteredNGOs = ngos.filter(ngo => {
    const matchesSearch = ngo.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         ngo.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesType = filterType === "all" || ngo.type === filterType;
    const matchesCity = filterCity === "all" || ngo.city === filterCity;
    
    return matchesSearch && matchesType && matchesCity;
  });

  const types = ["Legal Aid", "Cyber Safety", "Domestic Violence", "Labor Rights"];
  const cities = ["Mumbai", "Delhi", "Bangalore", "Pune"];

  return (
    <div className="min-h-screen bg-background pb-20 md:pb-8">
      <DesktopNav />
      
      <div className="pt-20 md:pt-24 px-4 py-8">
        <div className="container mx-auto max-w-6xl">
          {/* Header */}
          <div className="text-center mb-8 animate-fade-in">
            <div className="inline-flex p-3 rounded-full bg-success/10 mb-4">
              <Map className="w-8 h-8 text-success" />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Support Directory</h1>
            <p className="text-muted-foreground text-lg">
              Connect with verified NGOs, legal aid, and support organizations
            </p>
          </div>

          {/* Filters */}
          <Card className="p-4 md:p-6 mb-8 gradient-card shadow-soft animate-slide-up">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1">
                <Input
                  placeholder="Search organizations..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full"
                />
              </div>
              <Select value={filterType} onValueChange={setFilterType}>
                <SelectTrigger className="w-full md:w-48">
                  <SelectValue placeholder="Filter by type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Types</SelectItem>
                  {types.map(type => (
                    <SelectItem key={type} value={type}>{type}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <Select value={filterCity} onValueChange={setFilterCity}>
                <SelectTrigger className="w-full md:w-48">
                  <SelectValue placeholder="Filter by city" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Cities</SelectItem>
                  {cities.map(city => (
                    <SelectItem key={city} value={city}>{city}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="mt-4 flex items-center gap-2 text-sm text-muted-foreground">
              <Filter className="w-4 h-4" />
              <span>Showing {filteredNGOs.length} of {ngos.length} organizations</span>
            </div>
          </Card>

          {/* NGO Cards */}
          <div className="space-y-6">
            {filteredNGOs.map((ngo, index) => (
              <Card 
                key={ngo.id} 
                className="p-6 gradient-card shadow-soft hover:shadow-strong transition-smooth animate-slide-up"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="flex-1">
                    <div className="flex items-start justify-between gap-4 mb-3">
                      <div>
                        <h3 className="text-xl font-bold mb-2">{ngo.name}</h3>
                        <Badge className="mb-2">{ngo.type}</Badge>
                      </div>
                    </div>
                    
                    <p className="text-muted-foreground mb-4">{ngo.description}</p>
                    
                    <div className="space-y-2 text-sm">
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <MapPin className="w-4 h-4 shrink-0" />
                        <span>{ngo.address}</span>
                      </div>
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Mail className="w-4 h-4 shrink-0" />
                        <a href={`mailto:${ngo.email}`} className="hover:text-primary transition-smooth">
                          {ngo.email}
                        </a>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex flex-col gap-2 md:w-48">
                    <Button asChild className="w-full">
                      <a href={`tel:${ngo.phone}`}>
                        <Phone className="w-4 h-4" />
                        Call Now
                      </a>
                    </Button>
                    {ngo.whatsapp && (
                      <Button asChild variant="success" className="w-full">
                        <a 
                          href={`https://wa.me/${ngo.whatsapp}`}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <MessageSquare className="w-4 h-4" />
                          WhatsApp
                        </a>
                      </Button>
                    )}
                    <Button asChild variant="outline" className="w-full">
                      <a href={`mailto:${ngo.email}`}>
                        <Mail className="w-4 h-4" />
                        Email
                      </a>
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {filteredNGOs.length === 0 && (
            <Card className="p-12 text-center gradient-card">
              <Map className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">No organizations found</h3>
              <p className="text-muted-foreground">
                Try adjusting your search or filters
              </p>
            </Card>
          )}

          {/* Disclaimer */}
          <Card className="mt-8 p-4 border-secondary bg-secondary/5">
            <p className="text-sm text-muted-foreground text-center">
              <strong>Demo Notice:</strong> These are sample organizations for demonstration. 
              In a real implementation, this would contain verified, real NGOs and support services.
            </p>
          </Card>
        </div>
      </div>
      
      <Navigation />
    </div>
  );
};

export default DirectoryPage;
