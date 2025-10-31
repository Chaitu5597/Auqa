import { ImageWithFallback } from "./figma/ImageWithFallback";
import aboutImage from "figma:asset/c8367aae257e11d2521b267f32e4f7e7c158a546.png";

export function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        <h2
          className="text-[#4A5A3C] mb-12 text-center "
          style={{ fontSize: "40px", fontWeight: 600 }}
        >
          About Aqua Philic
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p
              className="text-foreground"
              style={{ fontSize: "18px", lineHeight: 1.8 }}
            >
              Aqua Philic Scientific Solutions Pvt. Ltd. is a
              pioneering aquaculture bio-science company
              dedicated to revolutionizing sustainable farming
              practices. Founded by a team of expert
              microbiologists, we combine cutting-edge research
              with practical innovation.
            </p>
            <p
              className="text-foreground"
              style={{ fontSize: "18px", lineHeight: 1.8 }}
            >
              Our commitment to eco-friendly solutions drives us
              to develop non-toxic, scientifically-validated
              products using advanced nanotechnology,
              probiotics, and phytogenic extracts. We focus on
              creating cost-effective solutions that enhance
              productivity while maintaining environmental
              integrity.
            </p>
            <p
              className="text-foreground"
              style={{ fontSize: "18px", lineHeight: 1.8 }}
            >
              With a farmer-centric approach, we ensure our
              products meet international export standards,
              helping aquaculture farmers achieve healthier
              ponds, stronger shrimp, and sustainable growth.
            </p>
          </div>

          <div className="relative h-[400px] rounded-[10px] overflow-hidden shadow-[0px_20px_25px_-5px_rgba(0,0,0,0.1),0px_8px_10px_-6px_rgba(0,0,0,0.1)]">
            <img
              src={aboutImage}
              alt="About Aqua Philic Scientific Solutions - Lab Research"
              className="w-full h-full object-cover object-center"
            />
          </div>
        </div>
      </div>
    </section>
  );
}