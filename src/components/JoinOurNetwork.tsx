

import { useState, useRef, ChangeEvent, FormEvent } from "react";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { RadioGroup, RadioGroupItem } from "./ui/radio-group";
import { Label } from "./ui/label";
import { ArrowLeft, Users, Briefcase, GraduationCap, Stethoscope } from "lucide-react";
import { toast } from "sonner";
import emailjs from "@emailjs/browser";
import { styleText } from "util";

interface JoinNetworkProps {
  onBack?: () => void;
}

type TabType = "dealer" | "farmer" | "intern" | "professional";

interface FormDataType {
  [key: string]: string | File | undefined;
}

export function JoinOurNetwork({ onBack }: JoinNetworkProps) {
  const form = useRef<HTMLFormElement>(null);
  const [selectedCategory, setSelectedCategory] = useState<TabType>("dealer");
  const [formData, setFormData] = useState<FormDataType>({});
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<{ type: "success" | "error"; text: string } | null>(null);

  const bgActive = {
  backgroundColor: "#4A5A3C",
  color: 'white',
};
  const categories = [
    {
      id: "dealer",
      name: "Dealer",
      icon: Briefcase,
      description: "Partner with us to distribute our premium aquaculture products",
    },
    {
      id: "farmer",
      name: "Farmer",
      icon: Users,
      description: "Join our network of successful aquaculture farmers",
    },

  ];

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type, files } = e.target as HTMLInputElement;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "file" ? files?.[0] : value,
    }));
  };

  const handleFarmTypeChange = (value: string) => {
    setFormData((prev) => ({
      ...prev,
      farmType: value,
    }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setMessage(null);

    try {
      if (!form.current) throw new Error("Form reference is missing");

      // Farmer validation
      if (selectedCategory === "farmer" && !formData.farmType) {
        throw new Error("Please select a farming type (Fish or Shrimp).");
      }

      // Prepare template parameters
      const templateParams: any = {
        to_email: "nunna.chaitanyakumar@gmail.com",
        tab: selectedCategory,
        ...formData,
      };

      // Handle file for intern/professional
      if (["intern", "professional"].includes(selectedCategory) && formData.document instanceof File) {
        templateParams.document = `A document (${formData.document.name}) was uploaded by ${formData.name || "user"}. Please contact ${formData.email || formData.phno || "submitter"} to request it.`;
      } else if (["intern", "professional"].includes(selectedCategory)) {
        templateParams.document = "No document uploaded";
      }

      // Map activeTab to template ID
      const templateIds: Record<TabType, string> = {
        dealer: "template_rybc1jm",
        farmer: "template_6eq35cq",
        intern: "your_actual_intern_template_id",
        professional: "your_actual_professional_template_id",
      };

      if (templateIds[selectedCategory].startsWith("your_")) {
        throw new Error(`Invalid template ID for ${selectedCategory}. Configure a valid EmailJS template.`);
      }

      // Send form
      const res = await emailjs.sendForm(
        "service_vjvp0xo",
        templateIds[selectedCategory],
        form.current,
        { publicKey: "K3IyCsHsVnuhIJNjN" }
      );

      if (res.status === 200) {
        setMessage({ type: "success", text: "Application submitted successfully! We'll contact you soon." });
        toast.success("Application submitted successfully! We'll contact you soon.");
        setFormData({});
        form.current.reset();
      } else {
        throw new Error(`Failed to send email: Status ${res.status}`);
      }
    } catch (err: any) {
      setMessage({ type: "error", text: err.message || "Failed to submit form." });
      toast.error(err.message || "Failed to submit form.");
    } finally {
      setLoading(false);
    }
  };

  const selectedCategoryData = categories.find((cat) => cat.id === selectedCategory);

  const renderForm = () => {
    switch (selectedCategory) {
      case "dealer":
        return (
          <>
            <div>
              <label htmlFor="name" className="block text-foreground mb-2">
                Full Name *
              </label>
              <Input
                id="name"
                name="name"
                type="text"
                required
                value={typeof formData.name === "string" ? formData.name : ""}
                onChange={handleInputChange}
                placeholder="Enter your full name"
                className="border-2 border-primary/20 focus:border-primary"
              />
            </div>
            <div>
              <label htmlFor="mobile" className="block text-foreground mb-2">
                Mobile Number *
              </label>
              <Input
                id="mobile"
                name="mobile"
                type="tel"
                required
                value={typeof formData.mobile === "string" ? formData.mobile : ""}
                onChange={handleInputChange}
                placeholder="Enter your mobile number"
                className="border-2 border-primary/20 focus:border-primary"
              />
            </div>
            <div>
              <label htmlFor="shopname" className="block text-foreground mb-2">
                Shop Name *
              </label>
              <Input
                id="shopname"
                name="shopname"
                type="text"
                required
                value={typeof formData.shopname === "string" ? formData.shopname : ""}
                onChange={handleInputChange}
                placeholder="Enter your shop name"
                className="border-2 border-primary/20 focus:border-primary"
              />
            </div>
            <div>
              <label htmlFor="address" className="block text-foreground mb-2">
                Shop Address *
              </label>
              <Textarea
                id="address"
                name="address"
                required
                value={typeof formData.address === "string" ? formData.address : ""}
                onChange={handleInputChange}
                placeholder="Enter your shop address"
                rows={4}
                className="border-2 border-primary/20 focus:border-primary"
              />
            </div>
          </>
        );

      case "farmer":
        return (
          <>
            <div>
              <label htmlFor="name" className="block text-foreground mb-2">
                Full Name *
              </label>
              <Input
                id="name"
                name="name"
                type="text"
                required
                value={typeof formData.name === "string" ? formData.name : ""}
                onChange={handleInputChange}
                placeholder="Enter your full name"
                className="border-2 border-primary/20 focus:border-primary"
              />
            </div>
            <div>
              <label htmlFor="phno" className="block text-foreground mb-2">
                Mobile Number *
              </label>
              <Input
                id="phno"
                name="phno"
                type="tel"
                required
                value={typeof formData.phno === "string" ? formData.phno : ""}
                onChange={handleInputChange}
                placeholder="Enter your mobile number"
                className="border-2 border-primary/20 focus:border-primary"
              />
            </div>
            {/* <div>
              <label className="block text-foreground mb-3">
                Farm Type *
              </label>
              <RadioGroup
                value={typeof formData.farmType === "string" ? formData.farmType : "shrimp"}
                onValueChange={handleFarmTypeChange}
                className="flex gap-6"
              >
                <div className="flex items-center space-x-2 ">
                  <RadioGroupItem value="shrimp" id="shrimp" />
                  <Label htmlFor="shrimp" className="cursor-pointer">
                    Shrimp
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="fish" id="fish" />
                  <Label htmlFor="fish" className="cursor-pointer">
                    Fish
                  </Label>
                </div>
              </RadioGroup>
            </div> */}



            <div>
              <label className="block text-foreground mb-3 font-medium" style={{ fontSize: "16px" }}>
                Farm Type *
              </label>
              <div className="flex gap-4">
                {["shrimp", "fish"].map((type) => (
                  <Button
                    key={type}
                    type="button"
                    onClick={() => handleFarmTypeChange(type)}
                    className={`flex-1 px-6 py-3 rounded-lg transition-all duration-300 capitalize ${formData.farmType === type
                        ? "bg-primary text-white shadow-lg scale-105"
                        : "bg-white text-foreground hover:bg-primary/10 border-2 border-primary/20"
                      }`}
                    style={{ fontSize: "15px", fontWeight: 600 }}
                  >
                    {type}
                  </Button>
                ))}
              </div>
            </div>




            <div>
              <label htmlFor="landAcres" className="block text-foreground mb-2">
                Acres of Land *
              </label>
              <Input
                id="landAcres"
                name="landAcres"
                type="number"
                step="0.01"
                required
                value={typeof formData.landAcres === "string" ? formData.landAcres : ""}
                onChange={handleInputChange}
                placeholder="Enter acres of land"
                className="border-2 border-primary/20 focus:border-primary"
              />
            </div>
            <div>
              <label htmlFor="address" className="block text-foreground mb-2">
                Address *
              </label>
              <Textarea
                id="address"
                name="address"
                required
                value={typeof formData.address === "string" ? formData.address : ""}
                onChange={handleInputChange}
                placeholder="Enter your address"
                rows={4}
                className="border-2 border-primary/20 focus:border-primary"
              />
            </div>
          </>
        );

      case "intern":
      case "professional":
        return (
          <>
            <div>
              <label htmlFor="name" className="block text-foreground mb-2">
                Full Name *
              </label>
              <Input
                id="name"
                name="name"
                type="text"
                required
                value={typeof formData.name === "string" ? formData.name : ""}
                onChange={handleInputChange}
                placeholder="Enter your full name"
                className="border-2 border-primary/20 focus:border-primary"
              />
            </div>
            <div>
              <label htmlFor="phno" className="block text-foreground mb-2">
                Mobile Number *
              </label>
              <Input
                id="phno"
                name="phno"
                type="tel"
                required
                value={typeof formData.phno === "string" ? formData.phno : ""}
                onChange={handleInputChange}
                placeholder="Enter your mobile number"
                className="border-2 border-primary/20 focus:border-primary"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-foreground mb-2">
                Email *
              </label>
              <Input
                id="email"
                name="email"
                type="email"
                required
                value={typeof formData.email === "string" ? formData.email : ""}
                onChange={handleInputChange}
                placeholder="Enter your email"
                className="border-2 border-primary/20 focus:border-primary"
              />
            </div>
            <div>
              <label htmlFor="organization" className="block text-foreground mb-2">
                Organization/College
              </label>
              <Input
                id="organization"
                name="organization"
                type="text"
                value={typeof formData.organization === "string" ? formData.organization : ""}
                onChange={handleInputChange}
                placeholder="Enter your organization or college"
                className="border-2 border-primary/20 focus:border-primary"
              />
            </div>
            <div>
              <label htmlFor="document" className="block text-foreground mb-2">
                Upload Document
              </label>
              <Input
                id="document"
                name="document"
                type="file"
                onChange={handleInputChange}
                className="border-2 border-primary/20 focus:border-primary"
              />
            </div>
          </>
        );

      default:
        return null;
    }
  };

  return (
    <section className="py-16 bg-gradient-to-b from-blue-50 to-white min-h-screen">
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
        <div className="text-center mb-12">
          <h2 className="text-[#4A5A3C] mb-4" style={{ fontSize: "36px", fontWeight: 700 }}>
            Join Our Network
          </h2>
          <p className="text-foreground/70 max-w-2xl mx-auto" style={{ fontSize: "18px" }}>
            Be a part of our growing community and contribute to sustainable aquaculture
          </p>
        </div>

        {/* Category Selection */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12 max-w-3xl mx-auto">
          {categories.map((category) => {
            const Icon = category.icon;
            return (
              <Card
                key={category.id}
                onClick={() => setSelectedCategory(category.id as TabType)}
                className={`cursor-pointer transition-all duration-300 hover:shadow-xl ${selectedCategory === category.id
                    ? "border-2 border-primary shadow-lg scale-105" 
                    : "border-2 border-primary/20 hover:border-primary/40"
                  }`}
              >
                <CardContent className="p-6 text-center">
                  <div
                    className={`mx-auto w-16 h-16 rounded-full flex items-center justify-center mb-4 ${selectedCategory === category.id ? "bg-primary text-white" : "bg-primary/10 text-[#4A5A3C]"
                      }`}
                  >
                    <Icon className="h-8 w-8" />
                  </div>
                  <h3 style={{ fontSize: "20px", fontWeight: 700 }} className="text-[#4A5A3C] mb-2">
                    {category.name}
                  </h3>
                  <p className="text-foreground/70" style={{ fontSize: "14px" }}>
                    {category.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Application Form */}
        <div className="max-w-3xl mx-auto">
          <Card className="border-2 border-primary/20 shadow-xl">
            <CardContent className="p-8">
              <div className="mb-6">
                <h3 className="text-[#4A5A3C] mb-2" style={{ fontSize: "24px", fontWeight: 700 }}>
                  Apply as {selectedCategoryData?.name}
                </h3>
                <p className="text-foreground/70">{selectedCategoryData?.description}</p>
              </div>

              <form ref={form} onSubmit={handleSubmit} className="space-y-6">
                {renderForm()}
                {message && (
                  <div
                    className={`mt-4 text-center font-medium ${message.type === "success" ? "text-green-600" : "text-red-600"
                      }`}
                  >
                    {message.text}
                  </div>
                )}
                <Button
                  type="submit"
                  disabled={loading}
                  className="w-full  hover:bg-primary/90 text-white py-6"
                  style={{ fontSize: "16px", fontWeight: 600 , backgroundColor: '#4A5A3C'}}
                >
                  {loading ? "Submitting..." : "Submit Application"}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}