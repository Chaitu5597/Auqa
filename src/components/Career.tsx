'use client';

import { useState } from "react";
import { Toaster, toast } from "sonner"; // ✅ correct import
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { ArrowLeft, Briefcase, MapPin, Clock, FileText } from "lucide-react";

interface CareerProps {
  onBack?: () => void;
}

export function Career({ onBack }: CareerProps) {
  const [selectedJob, setSelectedJob] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    location: "",
    coverLetter: "",
  });





  const jobOpenings = [
    {
      id: "1",
      title: "Research Scientist",
      location: "Hyderabad, India",
      type: "Full-time",
      department: "Research & Development",
      description:
        "Join our R&D team to develop innovative solutions for sustainable aquaculture practices.",
      requirements: [
        "Ph.D. in Aquaculture, Marine Biology, or related field",
        "3+ years of research experience",
        "Knowledge of probiotics and aquaculture nutrition",
        "Strong analytical and problem-solving skills",
      ],
    },
    {
      id: "2",
      title: "Field Officer",
      location: "Multiple locations",
      type: "Full-time",
      department: "Field Operations",
      description:
        "Provide technical support to farmers and dealers, ensuring optimal use of our products.",
      requirements: [
        "B.Sc./M.Sc. in Fisheries or Aquaculture",
        "2+ years of field experience in aquaculture",
        "Strong communication skills",
        "Willingness to travel extensively",
      ],
    },
    {
      id: "3",
      title: "Quality Control Manager",
      location: "Hyderabad, India",
      type: "Full-time",
      department: "Quality Assurance",
      description:
        "Lead quality control processes to ensure product excellence and regulatory compliance.",
      requirements: [
        "M.Sc. in Microbiology, Biotechnology, or related field",
        "5+ years of QC experience in pharmaceutical/aquaculture industry",
        "Knowledge of GMP and quality standards",
        "Leadership and team management skills",
      ],
    },
    {
      id: "4",
      title: "Sales & Marketing Executive",
      location: "Regional offices",
      type: "Full-time",
      department: "Sales & Marketing",
      description:
        "Drive sales growth and build strong relationships with dealers and farmers.",
      requirements: [
        "Bachelor's degree in any field",
        "2+ years of sales experience (aquaculture industry preferred)",
        "Excellent communication and negotiation skills",
        "Valid driver's license",
      ],
    },
  ];

  const handleApply = (jobId: string) => {
    setSelectedJob(jobId);
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 600, behavior: "smooth" });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const job = jobOpenings.find((j) => j.id === selectedJob);
    if (!job) {
      toast.error("Please select a job before submitting.");
      return;
    }
    toast.success(`Application submitted for ${job.title}! We'll contact you soon.`);
    setFormData({
      name: "",
      email: "",
      phone: "",
      location: "",
      coverLetter: "",
    });
    setSelectedJob(null);
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const selectedJobData = jobOpenings.find((job) => job.id === selectedJob);

  return (
    <section className="py-16 bg-gradient-to-b from-blue-50 to-white min-h-screen">
      {/* You can also put <Toaster /> once at app root (e.g., in layout.tsx) */}
      <Toaster richColors position="top-center" />

      <div className="container mx-auto px-4 lg:px-8">
        {/* Back Button */}
        {onBack && (
          <button
            onClick={onBack}
            className="flex items-center gap-2 text-[#4A5A3C] hover:text-[#4A5A3C] transition-colors mb-6 group"
          >
            <ArrowLeft className="h-5 w-5 group-hover:-translate-x-1 transition-transform" />
            <span style={{ fontSize: "16px", fontWeight: 600 }}>
              Back to Home
            </span>
          </button>
        )}

        {/* Header */}
        <div className="text-center mb-12">
          <h2
            className="text-[#4A5A3C] mb-4"
            style={{ fontSize: "36px", fontWeight: 700 }}
          >
            Career Opportunities
          </h2>
          <p
            className="text-foreground/70 max-w-2xl mx-auto"
            style={{ fontSize: "18px" }}
          >
            Join our team and contribute to sustainable aquaculture solutions
          </p>
        </div>

        {/* Job Openings */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-12">
          {jobOpenings.map((job) => (
            <Card
              key={job.id}
              className={`border-2 transition-all duration-300 hover:shadow-xl ${selectedJob === job.id
                  ? "border-primary shadow-lg"
                  : "border-primary/20 hover:border-primary/40"
                }`}
            >
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3
                      style={{ fontSize: "20px", fontWeight: 700 }}
                      className="text-[#4A5A3C] mb-2"
                    >
                      {job.title}
                    </h3>
                    <div className="flex flex-col gap-2 text-foreground/70">
                      <div className="flex items-center gap-2">
                        <MapPin className="h-4 w-4" />
                        <span style={{ fontSize: "14px" }}>{job.location}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="h-4 w-4" />
                        <span style={{ fontSize: "14px" }}>{job.type}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Briefcase className="h-4 w-4" />
                        <span style={{ fontSize: "14px" }}>{job.department}</span>
                      </div>
                    </div>
                  </div>
                </div>

                <p
                  className="text-foreground/80 mb-4"
                  style={{ fontSize: "15px" }}
                >
                  {job.description}
                </p>

                <div className="mb-4">
                  <p
                    style={{ fontSize: "15px", fontWeight: 600 }}
                    className="text-[#4A5A3C] mb-2"
                  >
                    Requirements:
                  </p>
                  <ul className="list-disc list-inside space-y-1 text-foreground/70">
                    {job.requirements.map((req, idx) => (
                      <li key={idx} style={{ fontSize: "14px" }}>
                        {req}
                      </li>
                    ))}
                  </ul>
                </div>

                <Button
                  onClick={() => handleApply(job.id)}
                  className="w-full hover:bg-primary/90 text-white"
                  style={{ fontSize: "15px", fontWeight: 600 , backgroundColor: '#4A5A3C'}}
                >
                  Apply Now
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Application Form */}
        {selectedJob && (
          <div className="max-w-3xl mx-auto">
            <Card className="border-2 border-primary/20 shadow-xl">
              <CardContent className="p-8">
                <div className="mb-6">
                  <h3
                    className="text-[#4A5A3C] mb-2"
                    style={{ fontSize: "24px", fontWeight: 700 }}
                  >
                    Apply for {selectedJobData?.title}
                  </h3>
                  <p className="text-foreground/70">
                    Fill out the form below to submit your application
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-foreground mb-2">
                      Full Name *
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Enter your full name"
                      className="border-2 border-primary/20 focus:border-primary"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-foreground mb-2">
                      Email Address *
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="Enter your email address"
                      className="border-2 border-primary/20 focus:border-primary"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-foreground mb-2">
                      Phone Number *
                    </label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="Enter your phone number"
                      className="border-2 border-primary/20 focus:border-primary"
                    />
                  </div>

                  <div>
                    <label htmlFor="location" className="block text-foreground mb-2">
                      Current Location *
                    </label>
                    <Input
                      id="location"
                      name="location"
                      type="text"
                      required
                      value={formData.location}
                      onChange={handleInputChange}
                      placeholder="Enter your city/state"
                      className="border-2 border-primary/20 focus:border-primary"
                    />
                  </div>

                  <div>
                    <label htmlFor="coverLetter" className="block text-foreground mb-2">
                      Cover Letter *
                    </label>
                    <Textarea
                      id="coverLetter"
                      name="coverLetter"
                      required
                      value={formData.coverLetter}
                      onChange={handleInputChange}
                      placeholder="Tell us why you're interested in this position..."
                      rows={6}
                      className="border-2 border-primary/20 focus:border-primary"
                    />
                  </div>

                  <div className="border-2 border-dashed border-primary/30 rounded-lg p-6 text-center">
                    <FileText className="h-12 w-12 mx-auto mb-3 text-[#4A5A3C]/60" />
                    <p className="text-foreground/70 mb-2">
                      Upload your resume (PDF, DOC, DOCX)
                    </p>
                    <p className="text-foreground/50" style={{ fontSize: "14px" }}>
                      Note: File upload functionality will be implemented in production
                    </p>
                  </div>

                  <div className="flex gap-4">
                    <Button
                      type="button"
                      onClick={() => setSelectedJob(null)}
                      variant="outline"
                      className="flex-1 border-2 border-primary/20 hover:bg-primary/5"
                      style={{ fontSize: "16px", fontWeight: 600 }}
                    >
                      Cancel
                    </Button>
                    <Button
                      type="submit"
                      className="flex-1 bg-primary hover:bg-primary/90 text-white py-6"
                      style={{ fontSize: "16px", fontWeight: 600 }}
                    >
                      Submit Application
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>
        )}
      </div>
    </section>
  );
}
