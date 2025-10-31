import { useState } from "react";
import { Download, FileText, BookOpen, FileSpreadsheet, X, Languages, Filter } from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";

interface DownloadsDropdownProps {
  isOpen: boolean;
  onClose: () => void;
}

export function DownloadsDropdown({ isOpen, onClose }: DownloadsDropdownProps) {
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
        name: "Product Catalog 2025",
        size: "2.5 MB",
        pages: 24,
        thumbnail: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=400",
        available: ["english", "telugu", "hindi"],
      },
      {
        id: 2,
        name: "Aquaculture Solutions Guide",
        size: "3.1 MB",
        pages: 32,
        thumbnail: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=400",
        available: ["english", "hindi", "marathi", "tamil"],
      },
      {
        id: 3,
        name: "Sustainable Farming Practices",
        size: "1.8 MB",
        pages: 16,
        thumbnail: "https://images.unsplash.com/photo-1554224311-beee4ece8c35?w=400",
        available: ["english", "telugu", "kannada"],
      },
    ],
    leaflets: [
      {
        id: 4,
        name: "AQUA GREEN Information",
        size: "850 KB",
        pages: 2,
        thumbnail: "https://images.unsplash.com/photo-1560264280-88b68371db39?w=400",
        available: ["english", "telugu", "hindi", "tamil"],
      },
      {
        id: 5,
        name: "Vibrio Control Solutions",
        size: "920 KB",
        pages: 2,
        thumbnail: "https://images.unsplash.com/photo-1589802829985-817e51171b92?w=400",
        available: ["english", "hindi", "marathi"],
      },
      {
        id: 6,
        name: "Water Quality Management",
        size: "1.1 MB",
        pages: 4,
        thumbnail: "https://images.unsplash.com/photo-1576086213369-97a306d36557?w=400",
        available: ["english", "telugu", "kannada", "tamil"],
      },
    ],
    pamphlets: [
      {
        id: 7,
        name: "Quick Start Guide",
        size: "650 KB",
        pages: 1,
        thumbnail: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=400",
        available: ["english", "telugu", "hindi", "marathi", "tamil", "kannada"],
      },
      {
        id: 8,
        name: "Dosage Calculator",
        size: "480 KB",
        pages: 1,
        thumbnail: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400",
        available: ["english", "hindi", "tamil"],
      },
      {
        id: 9,
        name: "Contact Information",
        size: "320 KB",
        pages: 1,
        thumbnail: "https://images.unsplash.com/photo-1516321497487-e288fb19713f?w=400",
        available: ["english", "telugu", "hindi", "marathi", "tamil", "kannada"],
      },
    ],
  };

  const handleDownload = (materialName: string, language: string) => {
    console.log(`Downloading ${materialName} in ${language}`);
    // In a real application, this would trigger an actual download
    const langName = languages.find(l => l.code === language)?.name || language;
    alert(`Downloading: ${materialName} (${langName})`);
  };

  const filterMaterialsByLanguage = (materials: any[]) => {
    if (selectedLanguage === "all") return materials;
    return materials.filter(material => material.available.includes(selectedLanguage));
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

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/30 z-40 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Dropdown Modal */}
      <div className="fixed top-4 md:top-20 left-1/2 -translate-x-1/2 z-50 w-[98vw] md:w-[95vw] max-w-7xl max-h-[92vh] md:max-h-[85vh] overflow-hidden">
        <Card className="border-2 border-primary/20 shadow-2xl bg-white">
          <CardContent className="p-0">
            {/* Header */}
            <div className="bg-gradient-to-r from-primary to-secondary p-4 md:p-6 text-white relative">
              <button
                onClick={onClose}
                className="absolute top-2 right-2 md:top-4 md:right-4 text-white/80 hover:text-white transition-colors"
              >
                <X className="h-5 w-5 md:h-6 md:w-6" />
              </button>
              <div className="flex items-center gap-2 md:gap-3 mb-2">
                <Download className="h-6 w-6 md:h-8 md:w-8" />
                <h2 style={{ fontSize: '20px', fontWeight: 700 }} className="md:text-[28px]">Download Center</h2>
              </div>
              <p style={{ fontSize: '14px' }} className="text-white/90 md:text-[16px]">
                Access our comprehensive library of aquaculture resources
              </p>
            </div>

            {/* Single Filter Container */}
            <div className="bg-gradient-to-r from-blue-50 to-teal-50 p-4 md:p-6 border-b-2 border-primary/20">
              <div className="flex items-center gap-2 mb-4">
                <Filter className="h-5 w-5 md:h-6 md:w-6 text-[#4A5A3C]" />
                <h3 className="text-[#4A5A3C]" style={{ fontSize: '16px', fontWeight: 700 }}>
                  Filters
                </h3>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Filter by Category Section */}
                <div className="bg-white rounded-lg p-4 border-2 border-primary/20 shadow-sm">
                  <div className="flex items-center gap-2 mb-3">
                    <BookOpen className="h-4 w-4 md:h-5 md:w-5 text-[#4A5A3C]" />
                    <p className="text-[#4A5A3C]" style={{ fontSize: '14px', fontWeight: 600 }}>
                      Filter by Category
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {categories.map((category) => (
                      <button
                        key={category.id}
                        onClick={() => setSelectedCategory(category.id)}
                        className={`px-3 md:px-4 py-2 md:py-2.5 rounded-lg transition-all duration-300 flex items-center gap-1.5 border-2 ${selectedCategory === category.id
                            ? "bg-primary text-white shadow-lg scale-105 border-primary"
                            : "bg-white text-foreground hover:bg-primary/5 border-primary/30 hover:border-primary/60"
                          }`}
                        style={{ fontSize: '13px', fontWeight: 600 }}
                      >
                        <span className="text-base">{category.icon}</span>
                        <span className="md:text-[14px]">{category.name}</span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Filter by Language Section */}
                <div className="bg-white rounded-lg p-4 border-2 border-secondary/20 shadow-sm">
                  <div className="flex items-center gap-2 mb-3">
                    <Languages className="h-4 w-4 md:h-5 md:w-5 text-secondary" />
                    <p className="text-secondary" style={{ fontSize: '14px', fontWeight: 600 }}>
                      Filter by Language
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {languages.map((lang) => (
                      <button
                        key={lang.code}
                        onClick={() => setSelectedLanguage(lang.code)}
                        className={`px-3 md:px-4 py-2 md:py-2.5 rounded-lg transition-all duration-300 border-2 ${selectedLanguage === lang.code
                            ? "bg-secondary text-white shadow-lg scale-105 border-secondary"
                            : "bg-white text-foreground hover:bg-secondary/5 border-secondary/30 hover:border-secondary/60"
                          }`}
                        style={{ fontSize: '12px', fontWeight: 500 }}
                      >
                        <span className="md:text-[13px]">{lang.name}</span>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Content Area - Dynamic Columns Based on Category */}
            <div className="overflow-y-auto max-h-[60vh] md:max-h-[50vh] p-3 md:p-6">
              <div className={`grid grid-cols-1 gap-4 md:gap-6 ${selectedCategory === "all" ? "md:grid-cols-3" : "md:grid-cols-2 lg:grid-cols-3"
                }`}>

                {/* Brochures Column */}
                {filteredMaterials.brochures.length > 0 && (
                  <div className="space-y-3 md:space-y-4">
                    <div className="flex items-center gap-2 mb-3 md:mb-4 pb-2 md:pb-3 border-b-2 border-primary/30 sticky top-0 bg-white z-10">
                      <BookOpen className="h-5 w-5 md:h-6 md:w-6 text-[#4A5A3C]" />
                      <h3 className="text-[#4A5A3C]" style={{ fontSize: '18px', fontWeight: 700 }}>
                        📘 Brochures
                      </h3>
                    </div>
                    <div className="space-y-3">
                      {filteredMaterials.brochures.map((material) => (
                        <Card
                          key={material.id}
                          className="hover:shadow-lg transition-all duration-300 border-2 border-muted/40 hover:border-primary/50 overflow-hidden"
                        >
                          <CardContent className="p-3">
                            {/* Thumbnail */}
                            <div className="relative mb-3 rounded-lg overflow-hidden bg-gradient-to-br from-primary/10 to-secondary/10 group">
                              <img
                                src={material.thumbnail}
                                alt={material.name}
                                className="w-full h-28 md:h-32 object-cover group-hover:scale-110 transition-transform duration-300"
                              />
                              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent flex items-end justify-center pb-2">
                                <span className="text-white" style={{ fontSize: '10px', fontWeight: 700 }}>PDF</span>
                              </div>
                            </div>

                            {/* Details */}
                            <div className="mb-3">
                              <h4 className="text-[#4A5A3C] mb-1.5 md:mb-2" style={{ fontSize: '13px', fontWeight: 600 }}>
                                {material.name}
                              </h4>
                              <div className="flex items-center gap-2 md:gap-3 text-xs text-muted-foreground mb-2">
                                <span>📄 {material.pages}</span>
                                <span>💾 {material.size}</span>
                              </div>
                            </div>

                            {/* Download Button */}
                            <Button
                              onClick={() => handleDownload(material.name, selectedLanguage)}
                              className="w-full bg-primary hover:bg-primary/90 text-white flex items-center justify-center gap-2 shadow-md hover:shadow-lg transition-shadow min-h-[36px]"
                              size="sm"
                            >
                              <Download className="h-3.5 w-3.5 md:h-4 md:w-4" />
                              <span className="text-xs md:text-sm">Download</span>
                            </Button>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </div>
                )}

                {/* Leaflets Column */}
                {filteredMaterials.leaflets.length > 0 && (
                  <div className="space-y-3 md:space-y-4">
                    <div className="flex items-center gap-2 mb-3 md:mb-4 pb-2 md:pb-3 border-b-2 border-secondary/30 sticky top-0 bg-white z-10">
                      <FileText className="h-5 w-5 md:h-6 md:w-6 text-secondary" />
                      <h3 className="text-secondary" style={{ fontSize: '18px', fontWeight: 700 }}>
                        📄 Leaflets
                      </h3>
                    </div>
                    <div className="space-y-3">
                      {filteredMaterials.leaflets.map((material) => (
                        <Card
                          key={material.id}
                          className="hover:shadow-lg transition-all duration-300 border-2 border-muted/40 hover:border-secondary/50 overflow-hidden"
                        >
                          <CardContent className="p-3">
                            {/* Thumbnail */}
                            <div className="relative mb-3 rounded-lg overflow-hidden bg-gradient-to-br from-secondary/10 to-muted/10 group">
                              <img
                                src={material.thumbnail}
                                alt={material.name}
                                className="w-full h-28 md:h-32 object-cover group-hover:scale-110 transition-transform duration-300"
                              />
                              <div className="absolute inset-0 bg-gradient-to-t from-secondary/80 to-transparent flex items-end justify-center pb-2">
                                <span className="text-white" style={{ fontSize: '10px', fontWeight: 700 }}>PDF</span>
                              </div>
                            </div>

                            {/* Details */}
                            <div className="mb-3">
                              <h4 className="text-secondary mb-1.5 md:mb-2" style={{ fontSize: '13px', fontWeight: 600 }}>
                                {material.name}
                              </h4>
                              <div className="flex items-center gap-2 md:gap-3 text-xs text-muted-foreground mb-2">
                                <span>📄 {material.pages}</span>
                                <span>💾 {material.size}</span>
                              </div>
                            </div>

                            {/* Download Button */}
                            <Button
                              onClick={() => handleDownload(material.name, selectedLanguage)}
                              className="w-full bg-primary hover:bg-primary/90 text-white flex items-center justify-center gap-2 shadow-md hover:shadow-lg transition-shadow min-h-[36px]"
                              size="sm"
                            >
                              <Download className="h-3.5 w-3.5 md:h-4 md:w-4" />
                              <span className="text-xs md:text-sm">Download</span>
                            </Button>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </div>
                )}

                {/* Pamphlets Column */}
                {filteredMaterials.pamphlets.length > 0 && (
                  <div className="space-y-3 md:space-y-4">
                    <div className="flex items-center gap-2 mb-3 md:mb-4 pb-2 md:pb-3 border-b-2 border-accent/30 sticky top-0 bg-white z-10">
                      <FileSpreadsheet className="h-5 w-5 md:h-6 md:w-6 text-accent" />
                      <h3 className="text-accent" style={{ fontSize: '18px', fontWeight: 700 }}>
                        📰 Pamphlets
                      </h3>
                    </div>
                    <div className="space-y-3">
                      {filteredMaterials.pamphlets.map((material) => (
                        <Card
                          key={material.id}
                          className="hover:shadow-lg transition-all duration-300 border-2 border-muted/40 hover:border-accent/50 overflow-hidden"
                        >
                          <CardContent className="p-3">
                            {/* Thumbnail */}
                            <div className="relative mb-3 rounded-lg overflow-hidden bg-gradient-to-br from-accent/10 to-muted/10 group">
                              <img
                                src={material.thumbnail}
                                alt={material.name}
                                className="w-full h-28 md:h-32 object-cover group-hover:scale-110 transition-transform duration-300"
                              />
                              <div className="absolute inset-0 bg-gradient-to-t from-accent/80 to-transparent flex items-end justify-center pb-2">
                                <span className="text-white" style={{ fontSize: '10px', fontWeight: 700 }}>PDF</span>
                              </div>
                            </div>

                            {/* Details */}
                            <div className="mb-3">
                              <h4 className="text-accent mb-1.5 md:mb-2" style={{ fontSize: '13px', fontWeight: 600 }}>
                                {material.name}
                              </h4>
                              <div className="flex items-center gap-2 md:gap-3 text-xs text-muted-foreground mb-2">
                                <span>📄 {material.pages}</span>
                                <span>💾 {material.size}</span>
                              </div>
                            </div>

                            {/* Download Button */}
                            <Button
                              onClick={() => handleDownload(material.name, selectedLanguage)}
                              className="w-full bg-primary hover:bg-primary/90 text-white flex items-center justify-center gap-2 shadow-md hover:shadow-lg transition-shadow min-h-[36px]"
                              size="sm"
                            >
                              <Download className="h-3.5 w-3.5 md:h-4 md:w-4" />
                              <span className="text-xs md:text-sm">Download</span>
                            </Button>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </div>
                )}

              </div>
            </div>

            {/* Footer */}
            <div className="bg-muted/20 px-3 md:px-6 py-3 md:py-4 border-t border-primary/10 text-center">
              <p className="text-xs md:text-sm text-muted-foreground">
                Need help? Contact us at <a href="mailto:info@AquaPhilic.in" className="text-[#4A5A3C] hover:underline">info@AquaPhilic.in</a>
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </>
  );
}
