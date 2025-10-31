import { FlaskConical, Leaf, Users } from "lucide-react";
import { Card, CardContent } from "./ui/card";

export function Commitment() {
  const commitments = [
    {
      icon: FlaskConical,
      title: "Scientific BioSolutions",
      description: "Pioneering bio-innovations for aquaculture using advanced research and development.",
      color: "text-[#4A5A3C]"
    },
    {
      icon: Leaf,
      title: "Eco-Friendly Practices",
      description: "Non-toxic, safe, and sustainable solutions that protect our environment.",
      color: "text-secondary"
    },
    {
      icon: Users,
      title: "Farmer-Centric",
      description: "Cost-effective, innovative, and export-friendly products designed for farmers.",
      color: "text-accent"
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        <h2 className="text-[#4A5A3C] mb-12 text-center" style={{ fontSize: '40px', fontWeight: 600 }}>
          Our Commitment
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {commitments.map((item, index) => (
            <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-8 text-center">
                <div className="flex justify-center mb-6">
                  <div className={`w-16 h-16 rounded-full bg-white shadow-md flex items-center justify-center ${item.color}`}>
                    <item.icon className="w-8 h-8" />
                  </div>
                </div>
                <h3 className="mb-4" style={{ fontSize: '22px', fontWeight: 600 }}>
                  {item.title}
                </h3>
                <p className="text-foreground" style={{ fontSize: '16px', lineHeight: 1.7 }}>
                  {item.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
