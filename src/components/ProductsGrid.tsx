import { Card, CardContent } from "./ui/card";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import aquaGreenImage from "figma:asset/ff243c41f01a698a230e33885f147c842ec2f87c.png";
import maricidinImage from "figma:asset/8e90a94e646fff4300c359c9fd3fd740f93579ca.png";
import impetusImage from "figma:asset/2608a8ab4ec5328e416fde9ffa1530c230b9dc88.png";
import sporexImage from "figma:asset/90a054d9bfa598447e9de92d12d0e44f499229af.png";
import vibroshieldImage from "figma:asset/9a5df071eff348ca70d82f419387c3e9dfac9a35.png";
import marinoxImage from "figma:asset/c98c28ab4c6e554a78851e6400edec30d2be2f9d.png";
import ecocystImage from "figma:asset/14d8af624793e8d0f082e17ab7e48bd15b11348a.png";
import crustaminImage from "figma:asset/cbc3358981187dafacb4b935c086931a8dc388b5.png";
import detoxifyXImage from "figma:asset/974f30d6b2c40b6d356029d77fa6df96f7827936.png";

interface ProductsGridProps {
  onProductClick: (productId: string) => void;
}

export function ProductsGrid({ onProductClick }: ProductsGridProps) {
  const products = [
    {
      id: "aqua-green",
      name: "AQUA GREEN",
      tagline: "Soil Organic Carbon Enhancer",
      image: "https://i.postimg.cc/4dJ3zPq6/Aqua-Greenn.png",
      isProductImage: true
    },
    {
      id: "impetus",
      name: "IMPETUS",
      tagline: "Granulated Aqua Probiotics",
      image: "https://i.postimg.cc/8PjWxk5Y/Impetus.png",
      isProductImage: true
    },
    {
      id: "maricidin",
      name: "MARICIDIN",
      tagline: "Nano Disinfectant for clean ponds",
      image: "https://i.postimg.cc/59n9Lwx1/Maricidin.png",
      isProductImage: true
    },
    {
      id: "sporex",
      name: "SPOREX",
      tagline: "EHP Control solution",
      image: "https://i.postimg.cc/25wMM7cx/Sporex.png",
      isProductImage: true
    },
    {
      id: "vibroshield",
      name: "VIBROSHIELD",
      tagline: "Vibrio Control for shrimp health",
      image: "https://i.postimg.cc/Wbq1cMBR/Vibro-Shield.png",
      isProductImage: true
    },
    {
      id: "marinox",
      name: "MARINOX",
      tagline: "Nano Selenium + Vitamin C",
      image: "https://i.postimg.cc/Y9zHMmrj/Marinox.png",
      isProductImage: true
    },
    {
      id: "ecocyst",
      name: "ECOCYST",
      tagline: "Microcystis Control",
      image: "https://i.postimg.cc/nz7yT99V/Ecocyst.png",
      isProductImage: true
    },
    {
      id: "crustamin",
      name: "CRUSTAMIN PRO",
      tagline: "Chelated Mineral Supplement",
      image: "https://i.postimg.cc/cJKCxh2Q/Crusta-MIN-Pro.png",
      isProductImage: true
    },
    {
      id: "detoxify-x",
      name: "DETOXIFY-X",
      tagline: "Pond Bottom Management",
      image: "https://i.postimg.cc/mgCpvW2Y/Detoxify.png",
      isProductImage: true
    }
  ];

  return (
    <section id="products" className="py-20 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        <h2 className="text-[#4A5A3C] mb-12 text-center" style={{ fontSize: '40px', fontWeight: 600 }}>
          Our Products
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <Card
              key={product.id}
              className="cursor-pointer hover:shadow-xl transition-all duration-300 overflow-hidden group"
              onClick={() => onProductClick(product.id)}
            >
              <div className={`relative overflow-hidden ${product.isProductImage ? 'h-64 bg-white' : 'h-48'}`}>
                {product.isProductImage ? (
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-contain p-4 group-hover:scale-105 transition-transform duration-300"
                  />
                ) : (
                  <>
                    <ImageWithFallback
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  </>
                )}
              </div>
              <CardContent className="p-6">
                <h3 className="text-primary mb-2" style={{ fontSize: '22px', fontWeight: 600 }}>
                  {product.name}
                </h3>
                <p className="text-foreground" style={{ fontSize: '16px' }}>
                  {product.tagline}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
