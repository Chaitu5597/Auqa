import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Label } from "./ui/label";
import { Card, CardContent } from "./ui/card";
import { Phone, Mail, MapPin, Globe } from "lucide-react";
import { toast } from "sonner";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Thank you for your message! We'll get back to you soon.");
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  const contactInfo = [
    {
      icon: Phone,
      label: "Phone",
      value: "+91 8977729533",
      href: "tel:+918977729533"
    },
    {
      icon: Mail,
      label: "Email",
      value: "info@Aqua Philic.in",
      href: "mailto:info@AquaPhilic.in"
    },
    {
      icon: Globe,
      label: "Website",
      value: "www.Aqua Philic.in",
      href: "https://www.AquaPhilic.in"
    },
    {
      icon: MapPin,
      label: "Address",
      value: "F.No. 202, PT-37, Royal Plaza, Bachupally, Hyderabad, Telangana – 500090",
      href: null
    }
  ];

  return (
    <section id="contact" className=" text-[#4A5A3C] py-20 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        <h2 className="text-[#4A5A3C] mb-12 text-center" style={{ fontSize: '40px', fontWeight: 600 }}>
          Get Connect
        </h2>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto items-start">
          <div className="h-full">
            <Card className="shadow-lg h-full flex flex-col">
              <CardContent className="p-8 flex-1 flex flex-col">
                <h3 className="mb-6" style={{ fontSize: '24px', fontWeight: 600 }}>
                  Send us a message
                </h3>
                <form onSubmit={handleSubmit} className="space-y-6 flex-1 flex flex-col">
                  <div>
                    <Label htmlFor="name">Name</Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                      className="mt-2"
                    />
                  </div>

                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                      className="mt-2"
                    />
                  </div>

                  <div>
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      required
                      className="mt-2"
                    />
                  </div>

                  <div className="flex-1 flex flex-col">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      required
                      rows={5}
                      className="mt-2 flex-1"
                    />
                  </div>

                  <Button type="submit" className="w-full text-white hover:bg-primary/90" >
                    Submit
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          <div className="h-full flex flex-col">
            <h3 className="mb-6" style={{ fontSize: '24px', fontWeight: 600 }}>
              Contact Information
            </h3>
            <div className="space-y-6 flex-1 flex flex-col justify-between">
              {contactInfo.map((item, index) => (
                <Card key={index} className="shadow-md hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                          <item.icon className="w-6 h-6 text-[#4A5A3C]" />
                        </div>
                      </div>
                      <div className="flex-1">
                        <h4 className="text-[#4A5A3C] mb-1" style={{ fontSize: '18px', fontWeight: 600 }}>
                          {item.label}
                        </h4>
                        {item.href ? (
                          <a
                            href={item.href}
                            className="text-foreground hover:text-[#4A5A3C] transition-colors"
                            style={{ fontSize: '16px' }}
                          >
                            {item.value}
                          </a>
                        ) : (
                          <p className="text-foreground" style={{ fontSize: '16px' }}>
                            {item.value}
                          </p>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
