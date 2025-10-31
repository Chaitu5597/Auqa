export function RnD() {
  return (
    <section id="rnd" className="relative py-32 overflow-hidden">
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1580795479025-93d13fd9aa6c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiaW90ZWNobm9sb2d5JTIwbGFifGVufDF8fHx8MTc2MDAwMjIxOXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-secondary/90 to-primary/85" />
      </div>
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10 text-center">
        <h2 className="text-white mb-6" style={{ fontSize: '40px', fontWeight: 600 }}>
          Innovation at the Core
        </h2>
        <div className="max-w-4xl mx-auto space-y-4">
          <p className="text-white/95" style={{ fontSize: '20px', lineHeight: 1.8 }}>
            At Aqua Philic, innovation drives everything we do. Our state-of-the-art R&D facility is equipped with cutting-edge technology and staffed by expert microbiologists dedicated to advancing aquaculture science.
          </p>
          <p className="text-white/95" style={{ fontSize: '20px', lineHeight: 1.8 }}>
            We leverage nanotechnology, probiotics, phytogenic extracts, and biotechnology to create groundbreaking solutions that address the most pressing challenges in sustainable aquaculture farming.
          </p>
          <p className="text-white/95" style={{ fontSize: '20px', lineHeight: 1.8 }}>
            Our commitment to research ensures that every product we develop is backed by rigorous scientific validation, delivering real results for farmers worldwide.
          </p>
        </div>
      </div>
    </section>
  );
}
