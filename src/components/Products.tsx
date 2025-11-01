import { useState } from "react";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { ArrowLeft } from "lucide-react";
import arualife from "../assets/aqualife.png"
import vikranth from "../assets/vikranth.png"
import meik from "../assets/meik.png"
import meiclProductImage from "../assets/meicl.png";
import seal from "../assets/seal.png";
import TRUBOONProductImage from "../assets/turboon.png";
import BIOMASSProductImage from "../assets/biomass.png";
import ALLCIDAProductImage from "../assets/allcida.png";
import ride from "../assets/ride.png";
import thinkmin from "../assets/thinkmin.png";
import meizn from "../assets/meizn.png";
import ensure from "../assets/ensure.png";
import liquipro from "../assets/liquipro.png";
import algae from "../assets/algae.png";
import neo from "../assets/neo.png";
import proline from "../assets/proline.png";
import invictus from "../assets/invictus.png";
import Armour from "../assets/Armour.png";





interface ProductsProps {
  onProductClick: (productId: string) => void;
  onBack?: () => void;
}

export function Products({ onProductClick, onBack }: ProductsProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const categories = [
    { id: "all", name: "All Products" },
    { id: "pond-management", name: "Bacillus megaterium" },
    { id: "probiotics", name: "Probiotics" },
    // { id: "disinfectant", name: "Disinfectant" },
    { id: "disease-control", name: "Disease Control" },
    { id: "algae-control", name: "Algae Control" },
    { id: "feed-suppliment", name: "Feed Suppliment" },
  ];

  const products = [
    {
      id: "Aqua-Life",
      name: "Aqua Life",
      // tagline: "Advanced Solution for Water Quality and Pond Ecosystem Health",
      image: arualife,
      isProductImage: true,
      category: "pond-management"
    },
    {
      id: "Vikrant",
      name: "Vikrant",
      // tagline: "Granulated Aqua Probiotics",
      image: vikranth,
      isProductImage: true,
      category: "probiotics"
    },
    {
      id: "Meik",
      name: "Mei-k",
      // tagline: "Nano Disinfectant ",
      image: meik,
      isProductImage: true,
      category: "disease-control"
    },

    {
      id: "meicl",
      name: "meicl",
      // tagline: "EHP Control",
      image: meiclProductImage,
      isProductImage: true,
      category: "disease-control"
    },
    {
      id: "SEAL",
      name: "SEAL",
      tagline: "A Growth Zeal Liquid",
      image: seal,
      isProductImage: true,
      category: "disease-control"
    },
    {
      id: "TRUBOON",
      name: "TRUBOON",
      tagline: "Shrimp Protector Farmer Benefiter",
      image: TRUBOONProductImage,
      isProductImage: true,
      category: "feed-suppliment"
    },
    {
      id: "BIOMASS",
      name: "BIOMASS",
      tagline: "PRODUCTIVITY · SUSTAINABILITY · PROFITABILITY",
      image: BIOMASSProductImage,
      isProductImage: true,
      category: "algae-control"
    },
    {
      id: "ALLCIDA",
      name: "ALLCIDA Pro",
      tagline: "Shrimp Protector Farmer Benefiter",
      image: ALLCIDAProductImage,
      isProductImage: true,
      category: "feed-suppliment"
    },
    // {
    //   id: "detoxify-x",
    //   name: "Detoxify-X",
    //   tagline: "Pond Bottom Management",
    //   image: "https://i.postimg.cc/mgCpvW2Y/Detoxify.png",
    //   isProductImage: true,
    //   category: "pond-management"
    // },
    {
  id: "ride",
  name: "RIDE",
  tagline: "For Red Disease & Columnaris",
  image: ride,
  isProductImage: true,
  category: "feed-suppliment",
},
{
  id: "thinkmin",
  name: "Thinkmin",
  tagline: "Liquid Micro Sized Minerals",
  image: thinkmin,
  isProductImage: true,
  category: "feed-suppliment",
},
{
  id: "meizn",
  name: "MeiZn",
  tagline: "For Shrimp Growth & Immunity",
  image: meizn,
  category: "feed-suppliment"
},
{
  id: "ensure",
  name: "Ensure",
  tagline: "A Shrimp Sure Liquid (EHP Control)",
  image: ensure,
  isProductImage: true,
  category: "feed-suppliment"
},
{
  id: "liquipro",
  name: "Liquipro",
  tagline: "Liquid Probiotic",
  image: liquipro,
  isProductImage: true,
  category: "feed-suppliment"
},
{
  id: "algaedefender",
  name: "Algae Defender",
  tagline: "Botanical Algae Control Solution",
  image: algae,
  isProductImage: true,
  category: "feed-suppliment"
},
{
  id: "neo",
  name: "Neo",
  tagline: "Plant-Based Solution for WSSV Management",
  image: neo,
  isProductImage: true,
  category: "feed-suppliment",
},
{
  id: "proline",
  name: "Proline",
  tagline: "Gut Probiotic for Enhanced Digestive Health & Feed Efficiency",
  image: proline,
  category: "feed-suppliment",
  isProductImage: true,
},
{
  id: "invictus",
  name: "Invictus",
  tagline: "For Vibriosis",
  image: invictus,
  category: "feed-suppliment",
  isProductImage: true,
},
{
  id: "armour",
  name: "Armour",
  tagline: "For White Gut Diseases",
  image: Armour,
  isProductImage: true,
  category: "feed-suppliment",
},




  ];

  const filteredProducts = selectedCategory === "all"
    ? products
    : products.filter(p => p.category === selectedCategory);

  return (
    <section className="py-16 bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Back Button */}
        {onBack && (
          <button
            onClick={onBack}
            className="flex items-center gap-2 text-[#4A5A3C] hover:text-[#4A5A3C]/80 transition-colors mb-6 group"
          >
            <ArrowLeft className="h-5 w-5 group-hover:-translate-x-1 transition-transform" />
            <span style={{ fontSize: '16px', fontWeight: 600 }}>Back to Home</span>
          </button>
        )}

        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-[#4A5A3C]y mb-4" style={{ fontSize: '36px', fontWeight: 700 }}>
            Our Products
          </h2>
          <p className="text-[#4A5A3C]/70 max-w-2xl mx-auto" style={{ fontSize: '18px' }}>
            Comprehensive range of  aquaculture solutions for sustainable farming
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-3 rounded-lg transition-all duration-300 ${selectedCategory === category.id
                ? "bg-primary text-white shadow-lg scale-105"
                : "bg-white text-foreground hover:bg-primary/10 border-2 border-primary/20"
                }`}
              style={{ fontSize: '15px', fontWeight: 600 }}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <Card
              key={product.id}
              className="group   hover:shadow-2xl transition-all duration-300 cursor-pointer border-2 border-primary/10 hover:border-primary/30 overflow-hidden"
              onClick={() => onProductClick(product.id)}
            >
              <CardContent className="p-6">
                <div className="relative mb-6 bg-gradient-to-br from-muted/30 to-muted/10 rounded-xl p-8 flex items-center justify-center min-h-[280px] overflow-hidden" style={{ background: "linear-gradient(135deg, #fbfbfbff 0%, #a8effdff 100%)" }}>
                  <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <img
                    src={product.image}
                    alt={product.name}
                    className="max-h-[240px] w-auto object-contain relative z-10 group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <h3 style={{ fontSize: '24px', fontWeight: 700 }} className="text-[#4A5A3C] mb-2">
                  {product.name}
                </h3>
                <p className="text-foreground/70">
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
