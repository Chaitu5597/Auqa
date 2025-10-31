

import newFooterLogo from "../assets/Aquaphilic.jpg";
import {
  Linkedin,
  Youtube,
  Twitter,
  Instagram,
  Facebook,
  MapPin,
} from "lucide-react";

interface FooterProps {
  onNavigate: (section: string) => void;
}

export function Footer({ onNavigate }: FooterProps) {
  const socialLinks = [
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/company/AquaPhilic",
      color: "#4A5A3C",
      label: "LinkedIn",
    },
    {
      icon: Youtube,
      href: "https://www.youtube.com/@AquaPhilic",
      color: "#6E8B64",
      label: "YouTube",
    },
    {
      icon: Twitter,
      href: "https://twitter.com/AquaPhilic",
      color: "#4A5A3C",
      label: "Twitter",
    },
    {
      icon: Instagram,
      href: "https://www.instagram.com/AquaPhilic",
      color: "#6E8B64",
      label: "Instagram",
    },
    {
      icon: Facebook,
      href: "https://www.facebook.com/AquaPhilic",
      color: "#4A5A3C",
      label: "Facebook",
    },
  ];

  const companyAddress =
    "F.No. 202, PT-37, Royal Plaza, Bachupally, Hyderabad, Telangana – 500090";
  const googleMapsUrl =
    "https://www.google.com/maps/search/?api=1&query=Royal+Plaza+Bachupally+Hyderabad+500090";

  return (
    <footer className="footer-section bg-gradient-to-b from-[#F5F6F4] to-[#E9EEE7] text-[#4A5A3C] py-12 border-t border-[#DCE1D8]" style={{
                      backgroundColor: "#F5F6F4", 
                    }}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Grid layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 ">
          {/* Column 1 - Logo */}
          <div className="flex flex-col items-start">
            <img
              src={newFooterLogo}
              alt="WaterLinks Scientific Solutions"
              className="h-16 md:h-40 w-auto mb-3 ml-4"
              style={{
                height: "72px",
                cursor:" pointer",

              }}
            />
            <p className="text-[#4A5A3C] text-sm sm:text-base leading-relaxed">
              The Scientific Way to Sustainable Farming
            </p>
          </div>

          {/* Column 2 - Quick Links */}
          <div>
            <h4 className="mb-3 sm:mb-4 text-xl font-semibold text-[#4A5A3C]">
              Quick Links
            </h4>
            <div className="flex flex-col space-y-2 text-base sm:text-lg">
              {[
                { id: "home", label: "Home" },
                { id: "products", label: "Products" },
                { id: "downloads", label: "Downloads" },
                { id: "career", label: "Career" },
                { id: "join-network", label: "Join our Network" },
                { id: "contact", label: "Contact" },
              ].map((link) => (
                <button
                  key={link.id}
                  onClick={() => onNavigate(link.id)}
                  className="text-left text-[#4A5A3C]/80 hover:text-[#6E8B64] transition-colors underline-offset-4 hover:underline"
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>

          {/* Column 3 - Contact */}
          <div>
            <h4 className="mb-4 text-xl font-semibold text-[#4A5A3C]">
              Contact
            </h4>
            <div className="space-y-3 text-[#4A5A3C]/80 text-base sm:text-lg">
              <p>
                Phone:{" "}
                <a
                  href="tel:+918977729533"
                  className="hover:text-[#6E8B64] transition-colors"
                >
                  +91 8977729533
                </a>
              </p>
              <p>
                Email:{" "}
                <a
                  href="mailto:info@AquaPhilic.in"
                  className="hover:text-[#6E8B64] transition-colors underline-offset-4 hover:underline"
                >
                  info@AquaPhilic.in
                </a>
              </p>
              <p>
                Website:{" "}
                <a
                  href="https://www.AquaPhilic.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#6E8B64] transition-colors underline-offset-4 hover:underline"
                >
                  www.AquaPhilic.in
                </a>
              </p>

              <div className="pt-1">
                <h5 className="mb-2 text-base font-semibold text-[#4A5A3C]">
                  Address:
                </h5>
                <p className="text-[#4A5A3C]/80 text-sm leading-relaxed mb-3">
                  {companyAddress}
                </p>
                <a
                  href={googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 text-sm rounded-lg border border-[#6E8B64] text-[#4A5A3C] hover:bg-[#6E8B64]/10 transition-all duration-300"
                >
                  <MapPin className="w-4 h-4 text-[#6E8B64]" />
                  Get Directions
                </a>
              </div>
            </div>
          </div>

          {/* Column 4 - Follow Us */}
          <div>
            <h4 className="mb-3 sm:mb-4 text-lg font-semibold text-[#4A5A3C]">
              Follow Us
            </h4>
            <div className="flex flex-wrap gap-3 sm:gap-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="flex items-center justify-center w-10 h-10 rounded-full transition-transform duration-300 hover:scale-110 shadow-sm"
                    style={{
                      backgroundColor: "#F5F6F4",
                      border: `2px solid ${social.color}`,
                    }}
                  >
                    <Icon
                      className="w-5 h-5"
                      style={{ color: social.color }}
                    />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-[#DCE1D8] text-center pt-6 ">
          <p className="text-[#4A5A3C]/70 text-xs sm:text-sm">
            © 2025 Aqua Philic Scientific Solutions Pvt. Ltd. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
