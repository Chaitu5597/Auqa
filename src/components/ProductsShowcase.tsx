import productsImage from "figma:asset/ec3dbd2fd56a92bcfe474f3afdbf5bf211b40d98.png";

export function ProductsShowcase() {
  return (
    <section id="products" className="py-20 bg-gradient-to-b from-white to-muted/20">
      <div className="container mx-auto px-4 lg:px-8">
        <h2 className="text-[#4A5A3C] mb-12 text-center" style={{ fontSize: '40px', fontWeight: 600 }}>
          Product Range
        </h2>
        <div className="max-w-6xl mx-auto">
          <img
            src={productsImage}
            alt="Water Links Scientific Solutions Product Range"
            className="w-full h-auto object-contain"
          />
        </div>
      </div>
    </section>
  );
}
