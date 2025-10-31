// import { useState } from "react";
// import { Download, FileText, BookOpen, FileSpreadsheet, ArrowLeft } from "lucide-react";
// import { Button } from "./ui/button";
// import { Card, CardContent } from "./ui/card";
// import svgPaths from "../imports/svg-5easi6mpdm";

// interface DownloadsProps {
//   onBack?: () => void;
// }

// export function Downloads({ onBack }: DownloadsProps) {
//   const [selectedLanguage, setSelectedLanguage] = useState<string>("all");
//   const [selectedCategory, setSelectedCategory] = useState<string>("all");

//   const languages = [
//     { code: "all", name: "All Languages" },
//     { code: "english", name: "English" },
//     { code: "telugu", name: "తెలుగు" },
//     { code: "hindi", name: "हिन्दी" },
//     { code: "marathi", name: "मराठी" },
//     { code: "tamil", name: "தமிழ்" },
//     { code: "kannada", name: "ಕನ್ನಡ" },
//   ];

//   const categories = [
//     { id: "all", name: "All Categories", icon: "📚" },
//     { id: "brochures", name: "Brochures", icon: "📘" },
//     { id: "leaflets", name: "Leaflets", icon: "📄" },
//     { id: "pamphlets", name: "Pamphlets", icon: "📰" },
//   ];

//   const downloadMaterials = {
//     brochures: [
//       {
//         id: 1,
//         name: "Product Catalog 2025",
//         size: "2.5 MB",
//         pages: 24,
//         thumbnail: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=400",
//         available: ["english", "telugu", "hindi"],
//       },
//       {
//         id: 2,
//         name: "Aquaculture Solutions Guide",
//         size: "3.1 MB",
//         pages: 32,
//         thumbnail: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=400",
//         available: ["english", "hindi", "marathi", "tamil"],
//       },
//       {
//         id: 3,
//         name: "Sustainable Farming Practices",
//         size: "1.8 MB",
//         pages: 16,
//         thumbnail: "https://images.unsplash.com/photo-1554224311-beee4ece8c35?w=400",
//         available: ["english", "telugu", "kannada"],
//       },
//     ],
//     leaflets: [
//       {
//         id: 4,
//         name: "AQUA GREEN Information",
//         size: "850 KB",
//         pages: 2,
//         thumbnail: "https://images.unsplash.com/photo-1560264280-88b68371db39?w=400",
//         available: ["english", "telugu", "hindi", "tamil"],
//       },
//       {
//         id: 5,
//         name: "Vibrio Control Solutions",
//         size: "920 KB",
//         pages: 2,
//         thumbnail: "https://images.unsplash.com/photo-1589802829985-817e51171b92?w=400",
//         available: ["english", "hindi", "marathi"],
//       },
//       {
//         id: 6,
//         name: "Water Quality Management",
//         size: "1.1 MB",
//         pages: 4,
//         thumbnail: "https://images.unsplash.com/photo-1576086213369-97a306d36557?w=400",
//         available: ["english", "telugu", "kannada", "tamil"],
//       },
//     ],
//     pamphlets: [
//       {
//         id: 7,
//         name: "Quick Start Guide",
//         size: "650 KB",
//         pages: 1,
//         thumbnail: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=400",
//         available: ["english", "telugu", "hindi", "marathi", "tamil", "kannada"],
//       },
//       {
//         id: 8,
//         name: "Dosage Calculator",
//         size: "480 KB",
//         pages: 1,
//         thumbnail: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400",
//         available: ["english", "hindi", "tamil"],
//       },
//       {
//         id: 9,
//         name: "Contact Information",
//         size: "320 KB",
//         pages: 1,
//         thumbnail: "https://images.unsplash.com/photo-1516321497487-e288fb19713f?w=400",
//         available: ["english", "telugu", "hindi", "marathi", "tamil", "kannada"],
//       },
//     ],
//   };

//   const handleDownload = (materialName: string, language: string) => {
//     console.log(`Downloading ${materialName} in ${language}`);
//     const langName = languages.find(l => l.code === language)?.name || language;
//     alert(`Downloading: ${materialName} (${langName})`);
//   };

//   const filterMaterialsByLanguage = (materials: any[]) => {
//     if (selectedLanguage === "all") return materials;
//     return materials.filter(material => material.available.includes(selectedLanguage));
//   };

//   const getFilteredMaterials = () => {
//     if (selectedCategory === "all") {
//       return {
//         brochures: filterMaterialsByLanguage(downloadMaterials.brochures),
//         leaflets: filterMaterialsByLanguage(downloadMaterials.leaflets),
//         pamphlets: filterMaterialsByLanguage(downloadMaterials.pamphlets),
//       };
//     } else if (selectedCategory === "brochures") {
//       return {
//         brochures: filterMaterialsByLanguage(downloadMaterials.brochures),
//         leaflets: [],
//         pamphlets: [],
//       };
//     } else if (selectedCategory === "leaflets") {
//       return {
//         brochures: [],
//         leaflets: filterMaterialsByLanguage(downloadMaterials.leaflets),
//         pamphlets: [],
//       };
//     } else {
//       return {
//         brochures: [],
//         leaflets: [],
//         pamphlets: filterMaterialsByLanguage(downloadMaterials.pamphlets),
//       };
//     }
//   };

//   const filteredMaterials = getFilteredMaterials();

//   const renderMaterialCard = (material: any) => (
//     <Card 
//       key={material.id}
//       className="hover:shadow-lg transition-all duration-300 border-2 border-muted/40 hover:border-primary/50 overflow-hidden shrink-0 w-[280px]"
//     >
//       <CardContent className="p-3">
//         <div className="relative mb-3 rounded-lg overflow-hidden bg-gradient-to-br from-primary/10 to-secondary/10 group">
//           <img
//             src={material.thumbnail}
//             alt={material.name}
//             className="w-full h-32 object-cover group-hover:scale-110 transition-transform duration-300"
//           />
//           <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent flex items-end justify-center pb-2">
//             <span className="text-white" style={{ fontSize: '10px', fontWeight: 700 }}>PDF</span>
//           </div>
//         </div>

//         <div className="mb-3">
//           <h4 className="text-[#4A5A3C] mb-2" style={{ fontSize: '13px', fontWeight: 600 }}>
//             {material.name}
//           </h4>
//           <div className="flex items-center gap-3 text-xs text-muted-foreground mb-2">
//             <span>📄 {material.pages}</span>
//             <span>💾 {material.size}</span>
//           </div>
//         </div>

//         <Button
//           onClick={() => handleDownload(material.name, selectedLanguage)}
//           className="w-full bg-primary hover:bg-primary/90 text-white flex items-center justify-center gap-2 shadow-md hover:shadow-lg transition-shadow"
//           size="sm"
//         >
//           <Download className="h-4 w-4" />
//           <span className="text-xs">Download</span>
//         </Button>
//       </CardContent>
//     </Card>
//   );

//   return (
//     <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white pt-28 pb-16">
//       <div className="container mx-auto px-4 lg:px-8">
//         {/* Back Button */}
//         {onBack && (
//           <button
//             onClick={onBack}
//             className="flex items-center gap-2 text-[#4A5A3C] hover:text-[#4A5A3C]/80 transition-colors mb-6 group"
//           >
//             <ArrowLeft className="h-5 w-5 group-hover:-translate-x-1 transition-transform" />
//             <span style={{ fontSize: '16px', fontWeight: 600 }}>Back to Home</span>
//           </button>
//         )}

//         {/* Header */}
//         <div className="text-center mb-8">
//           <div className="flex items-center justify-center gap-3 mb-3">
//             <Download className="h-10 w-10 text-[#4A5A3C]" />
//             <h1 className="text-[#4A5A3C]" style={{ fontSize: '32px', fontWeight: 700 }}>Download Center</h1>
//           </div>
//           <p className="text-muted-foreground" style={{ fontSize: '16px' }}>
//             Access our comprehensive library of aquaculture resources
//           </p>
//         </div>

//         {/* Filters Container - Figma Design */}
//         <div className="max-w-6xl mx-auto mb-8">
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
//             {/* Filter by Category */}
//             <div className="bg-white rounded-lg p-4 border-2 border-primary/20 shadow-sm">
//               <div className="flex items-center gap-2 mb-3">
//                 <div className="relative shrink-0 size-[20px]">
//                   <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
//                     <g>
//                       <path d="M10 5.83333V17.5" stroke="#0077B6" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
//                       <path d={svgPaths.p25713000} stroke="#0077B6" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
//                     </g>
//                   </svg>
//                 </div>
//                 <p className="text-[#4A5A3C]" style={{ fontSize: '14px', fontWeight: 700 }}>
//                   Filter by Category
//                 </p>
//               </div>
//               <div className="flex flex-wrap gap-2">
//                 {categories.map((category) => (
//                   <button
//                     key={category.id}
//                     onClick={() => setSelectedCategory(category.id)}
//                     className={`px-4 py-2 rounded-lg transition-all duration-300 flex items-center gap-2 border-2 ${
//                       selectedCategory === category.id
//                         ? "bg-primary text-white shadow-lg scale-105 border-primary"
//                         : "bg-white text-foreground hover:bg-primary/5 border-primary/30 hover:border-primary/60"
//                     }`}
//                     style={{ fontSize: '14px', fontWeight: 600 }}
//                   >
//                     <span>{category.icon}</span>
//                     <span>{category.name}</span>
//                   </button>
//                 ))}
//               </div>
//             </div>

//             {/* Filter by Language */}
//             <div className="bg-white rounded-lg p-4 border-2 border-secondary/20 shadow-sm">
//               <div className="flex items-center gap-2 mb-3">
//                 <div className="relative shrink-0 size-[20px]">
//                   <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
//                     <g clipPath="url(#clip0_149_121)">
//                       <path d={svgPaths.pc5cc480} stroke="#009688" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
//                       <path d={svgPaths.p114c6ec0} stroke="#009688" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
//                       <path d="M1.66667 4.16667H11.6667" stroke="#009688" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
//                       <path d="M5.83333 1.66667H6.66667" stroke="#009688" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
//                       <path d={svgPaths.p3be0dd80} stroke="#009688" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
//                       <path d="M11.6667 15H16.6667" stroke="#009688" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
//                     </g>
//                     <defs>
//                       <clipPath id="clip0_149_121">
//                         <rect fill="white" height="20" width="20" />
//                       </clipPath>
//                     </defs>
//                   </svg>
//                 </div>
//                 <p className="text-secondary" style={{ fontSize: '14px', fontWeight: 700 }}>
//                   Filter by Language
//                 </p>
//               </div>
//               <div className="flex flex-wrap gap-2">
//                 {languages.map((lang) => (
//                   <button
//                     key={lang.code}
//                     onClick={() => setSelectedLanguage(lang.code)}
//                     className={`px-4 py-2 rounded-lg transition-all duration-300 border-2 ${
//                       selectedLanguage === lang.code
//                         ? "bg-secondary text-white shadow-lg scale-105 border-secondary"
//                         : "bg-white text-foreground hover:bg-secondary/5 border-secondary/30 hover:border-secondary/60"
//                     }`}
//                     style={{ fontSize: '13px', fontWeight: 500 }}
//                   >
//                     {lang.name}
//                   </button>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Content Area */}
//         <div className="space-y-8 max-w-6xl mx-auto">
//           {/* Brochures Section */}
//           {filteredMaterials.brochures.length > 0 && (
//             <div>
//               <div className="flex items-center gap-2 mb-4">
//                 <BookOpen className="h-6 w-6 text-[#4A5A3C]" />
//                 <h3 className="text-[#4A5A3C]" style={{ fontSize: '20px', fontWeight: 700 }}>
//                   📘 Brochures
//                 </h3>
//               </div>
//               <div className="overflow-x-auto pb-4">
//                 <div className="flex gap-4">
//                   {filteredMaterials.brochures.map(renderMaterialCard)}
//                 </div>
//               </div>
//             </div>
//           )}

//           {/* Leaflets Section */}
//           {filteredMaterials.leaflets.length > 0 && (
//             <div>
//               <div className="flex items-center gap-2 mb-4">
//                 <FileText className="h-6 w-6 text-secondary" />
//                 <h3 className="text-secondary" style={{ fontSize: '20px', fontWeight: 700 }}>
//                   📄 Leaflets
//                 </h3>
//               </div>
//               <div className="overflow-x-auto pb-4">
//                 <div className="flex gap-4">
//                   {filteredMaterials.leaflets.map(renderMaterialCard)}
//                 </div>
//               </div>
//             </div>
//           )}

//           {/* Pamphlets Section */}
//           {filteredMaterials.pamphlets.length > 0 && (
//             <div>
//               <div className="flex items-center gap-2 mb-4">
//                 <FileSpreadsheet className="h-6 w-6 text-accent" />
//                 <h3 className="text-accent" style={{ fontSize: '20px', fontWeight: 700 }}>
//                   📰 Pamphlets
//                 </h3>
//               </div>
//               <div className="overflow-x-auto pb-4">
//                 <div className="flex gap-4">
//                   {filteredMaterials.pamphlets.map(renderMaterialCard)}
//                 </div>
//               </div>
//             </div>
//           )}
//         </div>

//         {/* Footer Help Text */}
//         <div className="text-center mt-12 p-4 bg-muted/20 rounded-lg">
//           <p className="text-sm text-muted-foreground">
//             Need help? Contact us at <a href="mailto:info@waterlinks.in" className="text-[#4A5A3C] hover:underline">info@waterlinks.in</a>
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// }


















import { useState } from "react";
import { Download, FileText, BookOpen, FileSpreadsheet, ArrowLeft } from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import svgPaths from "../imports/svg-5easi6mpdm";

interface DownloadsProps {
  onBack?: () => void;
}

export function Downloads({ onBack }: DownloadsProps) {
  const [selectedLanguage, setSelectedLanguage] = useState<string>("all");
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const languages = [
    { code: "all", name: "All Languages" },
    { code: "english", name: "English" },
    { code: "telugu", name: "తెలుగు" },
    { code: "hindi", name: "हिन्दी" },
    { code: "marathi", name: "मराठी" },
    { code: "tamil", name: "தமிழ்" },
    { code: "kannada", name: "ಕನ್ನಡ" },
  ];

  const categories = [
    { id: "all", name: "All Categories", icon: "📚" },
    { id: "brochures", name: "Brochures", icon: "📘" },
    { id: "leaflets", name: "Leaflets", icon: "📄" },
    { id: "pamphlets", name: "Pamphlets", icon: "📰" },
  ];

  const downloadMaterials = {
    brochures: [
      {
        id: 1,
        name: "Aqua Green",
        size: "2.5 MB",
        pages: 24,
        thumbnail: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=400",
        available: ["english", "telugu", "hindi"],
      },
      {
        id: 2,
        name: "Impetus",
        size: "3.1 MB",
        pages: 32,
        thumbnail: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=400",
        available: ["english", "hindi", "marathi", "tamil"],
      },
      {
        id: 3,
        name: "Maricidin",
        size: "1.8 MB",
        pages: 16,
        thumbnail: "https://images.unsplash.com/photo-1554224311-beee4ece8c35?w=400",
        available: ["english", "telugu", "kannada"],
      },
      {
        id: 10,
        name: "Sporex",
        size: "2.2 MB",
        pages: 20,
        thumbnail: "https://images.unsplash.com/photo-1565619801261-f21f0c6e0edf?w=400",
        available: ["english", "telugu", "hindi", "tamil"],
      },
      {
        id: 11,
        name: "VibroShield",
        size: "2.8 MB",
        pages: 28,
        thumbnail: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=400",
        available: ["english", "hindi", "marathi"],
      },
      {
        id: 12,
        name: "Marinox",
        size: "2.0 MB",
        pages: 18,
        thumbnail: "https://images.unsplash.com/photo-1590682680031-87708a088f54?w=400",
        available: ["english", "telugu", "kannada", "tamil"],
      },
      {
        id: 13,
        name: "EcoCyst",
        size: "1.9 MB",
        pages: 14,
        thumbnail: "https://images.unsplash.com/photo-1562155955-1cb2d73488d7?w=400",
        available: ["english", "hindi", "tamil", "kannada"],
      },
      {
        id: 14,
        name: "CrustaMin Pro",
        size: "2.4 MB",
        pages: 22,
        thumbnail: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=400",
        available: ["english", "telugu", "hindi", "marathi"],
      },
      {
        id: 15,
        name: "Detoxify-X",
        size: "2.1 MB",
        pages: 16,
        thumbnail: "https://images.unsplash.com/photo-1533713692156-f70938dc0d54?w=400",
        available: ["english", "telugu", "hindi", "tamil", "kannada"],
      },
    ],
    leaflets: [
      {
        id: 4,
        name: "Aqua Green",
        size: "850 KB",
        pages: 2,
        thumbnail: "https://images.unsplash.com/photo-1560264280-88b68371db39?w=400",
        available: ["english", "telugu", "hindi", "tamil"],
      },
      {
        id: 5,
        name: "Impetus",
        size: "920 KB",
        pages: 2,
        thumbnail: "https://images.unsplash.com/photo-1589802829985-817e51171b92?w=400",
        available: ["english", "hindi", "marathi"],
      },
      {
        id: 6,
        name: "Maricidin",
        size: "1.1 MB",
        pages: 4,
        thumbnail: "https://images.unsplash.com/photo-1576086213369-97a306d36557?w=400",
        available: ["english", "telugu", "kannada", "tamil"],
      },
      {
        id: 10,
        name: "Sporex",
        size: "2.2 MB",
        pages: 20,
        thumbnail: "https://images.unsplash.com/photo-1565619801261-f21f0c6e0edf?w=400",
        available: ["english", "telugu", "hindi", "tamil"],
      },
      {
        id: 16,
        name: "VibroShield",
        size: "780 KB",
        pages: 2,
        thumbnail: "https://images.unsplash.com/photo-1583623025817-d180a2221d0a?w=400",
        available: ["english", "hindi", "tamil", "kannada"],
      },
      {
        id: 17,
        name: "MarinoX",
        size: "890 KB",
        pages: 2,
        thumbnail: "https://images.unsplash.com/photo-1609087887663-c0ecf1d71c09?w=400",
        available: ["english", "telugu", "hindi", "marathi"],
      },
      {
        id: 18,
        name: "Detoxify-X",
        size: "950 KB",
        pages: 3,
        thumbnail: "https://images.unsplash.com/photo-1604537529586-54d6325ba6fe?w=400",
        available: ["english", "telugu", "hindi", "tamil", "kannada"],
      },
    ],
    pamphlets: [
      {
        id: 7,
        name: "Aqua Green",
        size: "650 KB",
        pages: 1,
        thumbnail: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=400",
        available: ["english", "telugu", "hindi", "marathi", "tamil", "kannada"],
      },
      {
        id: 8,
        name: "Impetus",
        size: "480 KB",
        pages: 1,
        thumbnail: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400",
        available: ["english", "hindi", "tamil"],
      },
      {
        id: 9,
        name: "Maricidin",
        size: "320 KB",
        pages: 1,
        thumbnail: "https://images.unsplash.com/photo-1516321497487-e288fb19713f?w=400",
        available: ["english", "telugu", "hindi", "marathi", "tamil", "kannada"],
      },
      {
        id: 19,
        name: "Sporex",
        size: "580 KB",
        pages: 1,
        thumbnail: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=400",
        available: ["english", "hindi", "marathi", "tamil"],
      },
      {
        id: 20,
        name: "VibroShield",
        size: "520 KB",
        pages: 1,
        thumbnail: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=400",
        available: ["english", "telugu", "hindi", "kannada"],
      },
      {
        id: 21,
        name: "Marinox",
        size: "420 KB",
        pages: 1,
        thumbnail: "https://images.unsplash.com/photo-1524661135-423995f22d0b?w=400",
        available: ["english", "telugu", "hindi", "marathi", "tamil", "kannada"],
      },
    ],
  };

  const handleDownload = (materialName: string, language: string) => {
    console.log(`Downloading ${materialName} in ${language}`);
    const langName = languages.find((l) => l.code === language)?.name || language;
    alert(`Downloading: ${materialName} (${langName})`);
  };

  const handleImageDownload = async (materialName: string, thumbnailUrl: string) => {
    try {
      // Fetch the image as a blob
      const response = await fetch(thumbnailUrl);
      if (!response.ok) throw new Error("Failed to fetch image");
      const blob = await response.blob();

      // Create a temporary URL for the blob
      const url = window.URL.createObjectURL(blob);

      // Create a temporary <a> element to trigger the download
      const link = document.createElement("a");
      link.href = url;
      link.download = `${materialName.replace(/\s+/g, "_")}.jpg`; // Use material name for file
      document.body.appendChild(link);
      link.click();

      // Clean up
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error("Image download failed:", error);
      alert(`Failed to download image for ${materialName}. Please try again.`);
    }
  };

  const filterMaterialsByLanguage = (materials: any[]) => {
    if (selectedLanguage === "all") return materials;
    return materials.filter((material) => material.available.includes(selectedLanguage));
  };

  const getFilteredMaterials = () => {
    if (selectedCategory === "all") {
      return {
        brochures: filterMaterialsByLanguage(downloadMaterials.brochures),
        leaflets: filterMaterialsByLanguage(downloadMaterials.leaflets),
        pamphlets: filterMaterialsByLanguage(downloadMaterials.pamphlets),
      };
    } else if (selectedCategory === "brochures") {
      return {
        brochures: filterMaterialsByLanguage(downloadMaterials.brochures),
        leaflets: [],
        pamphlets: [],
      };
    } else if (selectedCategory === "leaflets") {
      return {
        brochures: [],
        leaflets: filterMaterialsByLanguage(downloadMaterials.leaflets),
        pamphlets: [],
      };
    } else {
      return {
        brochures: [],
        leaflets: [],
        pamphlets: filterMaterialsByLanguage(downloadMaterials.pamphlets),
      };
    }
  };

  const filteredMaterials = getFilteredMaterials();

  const renderMaterialCard = (material: any) => (
    <Card
      key={material.id}
      className={`hover:shadow-lg transition-all duration-300 border-2 border-muted/40 hover:border-primary/50 overflow-hidden ${
        selectedCategory === "all" ? "shrink-0 w-[280px]" : ""
      }`}
    >
      <CardContent className="p-3">
        <div className="relative mb-3 rounded-lg overflow-hidden bg-gradient-to-br from-primary/10 to-secondary/10 group">
          <button
            onClick={() => handleImageDownload(material.name, material.thumbnail)}
            className="w-full h-32 relative cursor-pointer"
            aria-label={`Download thumbnail image for ${material.name}`}
          >
            <img
              src={material.thumbnail}
              alt={material.name}
              className="w-full h-32 object-cover group-hover:scale-110 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent flex items-end justify-center pb-2">
              <span className="text-white" style={{ fontSize: "10px", fontWeight: 700 }}>
                PDF
              </span>
            </div>
            {/* Optional: Add a download icon on hover */}
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/30">
              <Download className="h-6 w-6 text-white" />
            </div>
          </button>
        </div>

        <div className="mb-3">
          <h4 className="text-[#4A5A3C] mb-2" style={{ fontSize: "13px", fontWeight: 600 }}>
            {material.name}
          </h4>
          <div className="flex items-center gap-3 text-xs text-muted-foreground mb-2">
            <span>📄 {material.pages}</span>
            <span>💾 {material.size}</span>
          </div>
        </div>

        <Button
          onClick={() => handleDownload(material.name, selectedLanguage)}
          className="w-full bg-primary hover:bg-primary/90 text-white flex items-center justify-center gap-2 shadow-md hover:shadow-lg transition-shadow"
          size="sm"
        >
          <Download className="h-4 w-4" />
          <span className="text-xs">Download</span>
        </Button>
      </CardContent>
    </Card>
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white pt-28 pb-16">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Back Button */}
        {onBack && (
          <button
            onClick={onBack}
            className="flex items-center gap-2 text-[#4A5A3C] hover:text-[#4A5A3C]/80 transition-colors mb-6 group"
          >
            <ArrowLeft className="h-5 w-5 group-hover:-translate-x-1 transition-transform" />
            <span style={{ fontSize: "16px", fontWeight: 600 }}>Back to Home</span>
          </button>
        )}

        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-3 mb-3">
            <Download className="h-10 w-10 text-[#4A5A3C]" />
            <h1 className="text-[#4A5A3C]" style={{ fontSize: "32px", fontWeight: 700 }}>
              Download Center
            </h1>
          </div>
          <p className="text-muted-foreground" style={{ fontSize: "16px" }}>
            Access our comprehensive library of aquaculture resources
          </p>
        </div>

        {/* Filters Container - Figma Design */}
        <div className="max-w-6xl mx-auto mb-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {/* Filter by Category */}
            <div className="bg-white rounded-lg p-4 border-2 border-primary/20 shadow-sm">
              <div className="flex items-center gap-2 mb-3">
                <div className="relative shrink-0 size-[20px]">
                  <svg
                    className="block size-full"
                    fill="none"
                    preserveAspectRatio="none"
                    viewBox="0 0 20 20"
                  >
                    <g>
                      <path
                        d="M10 5.83333V17.5"
                        stroke="#0077B6"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.66667"
                      />
                      <path
                        d={svgPaths.p25713000}
                        stroke="#0077B6"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.66667"
                      />
                    </g>
                  </svg>
                </div>
                <p className="text-[#4A5A3C]" style={{ fontSize: "14px", fontWeight: 700 }}>
                  Filter by Category
                </p>
              </div>
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`px-4 py-2 rounded-lg transition-all duration-300 flex items-center gap-2 border-2 ${
                      selectedCategory === category.id
                        ? "bg-primary text-white shadow-lg scale-105 border-primary"
                        : "bg-white text-foreground hover:bg-primary/5 border-primary/30 hover:border-primary/60"
                    }`}
                    style={{ fontSize: "14px", fontWeight: 600 }}
                  >
                    <span>{category.icon}</span>
                    <span>{category.name}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Filter by Language */}
            <div className="bg-white rounded-lg p-4 border-2 border-secondary/20 shadow-sm">
              <div className="flex items-center gap-2 mb-3">
                <div className="relative shrink-0 size-[20px]">
                  <svg
                    className="block size-full"
                    fill="none"
                    preserveAspectRatio="none"
                    viewBox="0 0 20 20"
                  >
                    <g clipPath="url(#clip0_149_121)">
                      <path
                        d={svgPaths.pc5cc480}
                        stroke="#009688"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.66667"
                      />
                      <path
                        d={svgPaths.p114c6ec0}
                        stroke="#009688"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.66667"
                      />
                      <path
                        d="M1.66667 4.16667H11.6667"
                        stroke="#009688"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.66667"
                      />
                      <path
                        d="M5.83333 1.66667H6.66667"
                        stroke="#009688"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.66667"
                      />
                      <path
                        d={svgPaths.p3be0dd80}
                        stroke="#009688"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.66667"
                      />
                      <path
                        d="M11.6667 15H16.6667"
                        stroke="#009688"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.66667"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_149_121">
                        <rect fill="white" height="20" width="20" />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
                <p className="text-secondary" style={{ fontSize: "14px", fontWeight: 700 }}>
                  Filter by Language
                </p>
              </div>
              <div className="flex flex-wrap gap-2">
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => setSelectedLanguage(lang.code)}
                    className={`px-4 py-2 rounded-lg transition-all duration-300 border-2 ${
                      selectedLanguage === lang.code
                        ? "bg-secondary text-white shadow-lg scale-105 border-secondary"
                        : "bg-white text-foreground hover:bg-secondary/5 border-secondary/30 hover:border-secondary/60"
                    }`}
                    style={{ fontSize: "13px", fontWeight: 500 }}
                  >
                    {lang.name}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Content Area */}
        <div className="space-y-8 max-w-6xl mx-auto mb-8">
          {/* Brochures Section */}
          {filteredMaterials.brochures.length > 0 && (
            <div>
              <div className="flex items-center  gap-2 mb-4">
                <BookOpen className="h-6 w-6 text-[#4A5A3C]" />
                <h3 className="text-[#4A5A3C]" style={{ fontSize: "20px", fontWeight: 700 }}>
                  📘 Brochures
                </h3>
              </div>
              {selectedCategory === "all" ? (
                <div className="overflow-x-auto pb-4">
                  <div className="flex gap-4">
                    {filteredMaterials.brochures.slice(0,6).map(renderMaterialCard)}
                  </div>
                </div>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                  {filteredMaterials.brochures.map(renderMaterialCard)}
                </div>
              )}
            </div>
          )}

          {/* Leaflets Section */}
          {filteredMaterials.leaflets.length > 0 && (
            <div>
              <div className="flex items-center gap-2 mb-4">
                <FileText className="h-6 w-6 text-secondary" />
                <h3 className="text-secondary" style={{ fontSize: "20px", fontWeight: 700 }}>
                  📄 Leaflets
                </h3>
              </div>
              {selectedCategory === "all" ? (
                <div className="overflow-x-auto pb-4">
                  <div className="flex gap-4">
                    {filteredMaterials.leaflets.map(renderMaterialCard)}
                  </div>
                </div>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                  {filteredMaterials.leaflets.map(renderMaterialCard)}
                </div>
              )}
            </div>
          )}

          {/* Pamphlets Section */}
          {filteredMaterials.pamphlets.length > 0 && (
            <div>
              <div className="flex items-center gap-2 mb-4">
                <FileSpreadsheet className="h-6 w-6 text-accent" />
                <h3 className="text-accent" style={{ fontSize: "20px", fontWeight: 700 }}>
                  📰 Pamphlets
                </h3>
              </div>
              {selectedCategory === "all" ? (
                <div className="overflow-x-auto pb-4">
                  <div className="flex gap-4">
                    {filteredMaterials.pamphlets.map(renderMaterialCard)}
                  </div>
                </div>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                  {filteredMaterials.pamphlets.map(renderMaterialCard)}
                </div>
              )}
            </div>
          )}
        </div>

        {/* Footer Help Text */}
        <div className="text-center mt-12 p-4 bg-muted/20 rounded-lg">
          <p className="text-sm text-muted-foreground">
            Need help? Contact us at{" "}
            <a href="mailto:info@AquaPhilic.in" className="text-[#4A5A3C] hover:underline">
              info@AquaPhilic.in
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}