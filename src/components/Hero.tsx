// import { Button } from "./ui/button";
// import { useEffect, useState } from "react";

// interface HeroProps {
//   onNavigate: (section: string) => void;
// }

// interface Fish {
//   id: number;
//   size: number;
//   speed: number;
//   startY: number;
//   delay: number;
//   isJumping: boolean;
// }

// export function Hero({ onNavigate }: HeroProps) {
//   const [fishes, setFishes] = useState<Fish[]>([]);

//   useEffect(() => {
//     // Generate 25 fish with random properties - more fish for dynamic effect
//     const generatedFishes = Array.from({ length: 25 }, (_, i) => ({
//       id: i,
//       size: Math.random() * 50 + 40, // 40-90px - bigger fish
//       speed: Math.random() * 8 + 8, // 8-16s duration - much faster
//       startY: Math.random() * 75 + 12, // 12-87% from top
//       delay: Math.random() * -15, // Negative delay for staggered start
//       isJumping: Math.random() > 0.5, // 50% chance of jumping - more action
//     }));
//     setFishes(generatedFishes);
//   }, []);

//   return (
//     <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
//       <div 
//         className="absolute inset-0 z-0"
//         style={{
//           backgroundImage: 'url(https://images.unsplash.com/photo-1652459569826-ed99561223af?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcXVhY3VsdHVyZSUyMHNocmltcCUyMHBvbmR8ZW58MXx8fHwxNzYwMDAyMjE4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral)',
//           backgroundSize: 'cover',
//           backgroundPosition: 'center',
//         }}
//       >
//         <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-secondary/70" />
        
//         {/* Animated Fish */}
//         {fishes.map((fish) => (
//           <div
//             key={fish.id}
//             className={fish.isJumping ? "animate-fish-jump" : "animate-fish-swim"}
//             style={{
//               position: 'absolute',
//               width: `${fish.size}px`,
//               height: `${fish.size * 0.6}px`,
//               top: `${fish.startY}%`,
//               left: '-50px',
//               animation: fish.isJumping 
//                 ? `fishJump ${fish.speed}s linear infinite`
//                 : `fishSwim ${fish.speed}s linear infinite`,
//               animationDelay: `${fish.delay}s`,
//             }}
//           >
//             <svg viewBox="0 0 50 30" fill="white" opacity="0.3">
//               <path d="M45 15 Q40 8, 30 10 Q20 12, 15 15 Q20 18, 30 20 Q40 22, 45 15 M15 15 Q8 12, 5 15 Q8 18, 15 15" />
//               <circle cx="38" cy="13" r="2" fill="black" opacity="0.5" />
//             </svg>
//           </div>
//         ))}
//       </div>
      
//       <div className="container mx-auto px-4 lg:px-8 relative z-10 text-center">
//         <h1 className="text-white mb-4" style={{ fontSize: '48px', fontWeight: 700, lineHeight: 1.2 }}>
//           <span style={{ color: '#FFD700' }}>The Scientific Way</span> to Sustainable Farming
//         </h1>
//         <p className="text-white/95 mb-8 max-w-3xl mx-auto" style={{ fontSize: '20px' }}>
//           Innovative aquaculture biosolutions for healthier ponds, stronger shrimp, and sustainable productivity.
//         </p>
        
//         <div className="flex flex-col sm:flex-row gap-4 justify-center">
//           <Button 
//             onClick={() => onNavigate('products')}
//             size="lg"
//             variant="outline"
//             className="bg-white/10 text-white border-white hover:bg-white/20"
//             style={{ fontSize: '18px', padding: '12px 32px' }}
//           >
//             Explore Products
//           </Button>
//           <Button 
//             onClick={() => onNavigate('contact')}
//             size="lg"
//             variant="outline"
//             className="bg-white/10 text-white border-white hover:bg-white/20"
//             style={{ fontSize: '18px', padding: '12px 32px' }}
//           >
//             Contact Us
//           </Button>
//         </div>
//       </div>
//     </section>
//   );
// }


import { Button } from "./ui/button";
import { useEffect, useState } from "react";

interface HeroProps {
  onNavigate: (section: string) => void;
}

interface Bubble {
  id: number;
  size: number;
  left: number;
  delay: number;
  duration: number;
}

export function Hero({ onNavigate }: HeroProps) {
  const [bubbles, setBubbles] = useState<Bubble[]>([]);

  // useEffect(() => {
  //   // Generate random bubbles for floating animation
  //   const generatedBubbles = Array.from({ length: 35 }, (_, i) => ({
  //     id: i,
  //     size: Math.random() * 25 + 10, // 10–35px
  //     left: Math.random() * 100, // Random horizontal position
  //     delay: Math.random() * 10, // Random animation delay
  //     duration: Math.random() * 10 + 6, // 6–16s animation speed
  //   }));
  //   setBubbles(generatedBubbles);
  // }, []);



  useEffect(() => {
  const generatedBubbles = Array.from({ length: 35 }, (_, i) => ({
    id: i,
    // Small, realistic bubbles
    size: Math.random() * (22 - 8) + 8,   // 8px – 22px
    left: Math.random() * 100,
    delay: Math.random() * 8,
    duration: Math.random() * 12 + 8,    // Slightly slower for elegance
  }));
  setBubbles(generatedBubbles);
}, []);

  return (
    <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 z-0"
        style={{
          // backgroundImage:
          //   "url(https://images.unsplash.com/photo-1652459569826-ed99561223af?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcXVhY3VsdHVyZSUyMHNocmltcCUyMHBvbmR8ZW58MXx8fHwxNzYwMDAyMjE4fDA&ixlib=rb-4.1.0&q=80&w=1080)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-secondary/70" />

        {/* 🫧 Animated Blue Bubbles */}
        <div className="absolute inset-0 overflow-hidden">
          {bubbles.map((bubble) => (
            <div
              key={bubble.id}
              className="bubble"
              style={{
                width: `${bubble.size}px`,
                height: `${bubble.size}px`,
                left: `${bubble.left}%`,
                animationDelay: `${bubble.delay}s`,
                animationDuration: `${bubble.duration}s`,
              }}
            />
          ))}
        </div>
      </div>

      {/* Hero Content */}
      <div className="container mx-auto px-4 lg:px-8 relative z-10 text-center">
        <h1
          className="text-white mb-4"
          style={{ fontSize: "48px", fontWeight: 700, lineHeight: 1.2 }}
        >
          <span style={{ color: "#FFD700" }}>The Scientific Way</span> to
          Sustainable Farming
        </h1>
        <p
          className="text-white/95 mb-8 max-w-3xl mx-auto"
          style={{ fontSize: "20px" }}
        >
          Innovative aquaculture biosolutions for healthier ponds, stronger
          shrimp, and sustainable productivity.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            onClick={() => onNavigate("products")}
            size="lg"
            variant="outline"
            className="bg-white/10 text-white border-white hover:bg-white/20"
            style={{ fontSize: "18px", padding: "12px 32px" }}
          >
            Explore Products
          </Button>
          <Button
            onClick={() => onNavigate("contact")}
            size="lg"
            variant="outline"
            className="bg-white/10 text-white border-white hover:bg-white/20"
            style={{ fontSize: "18px", padding: "12px 32px" }}
          >
            Contact Us
          </Button>
        </div>
      </div>

      {/* Styles */}
      <style>{`
        // .bubble {
        //   position: absolute;
        //   bottom: -60px;
        //   height: 1px;
        //   width: 1px;
        //   background: rgba(130, 166, 177);
        //   border-radius: 70%;
        //   opacity: 0.75;
        //   filter: blur(0.1px);
        //   animation: rise 10s ease-in infinite;
        // }
  
.bubble {
  background: radial-gradient(circle at 30% 30%, rgba(255,255,255,0.7), rgba(255,255,255,0.15) 40%, transparent 65%);
  border-radius: 50%;
  opacity: 0.8;
  filter: blur(0.3px);
  box-shadow:
    inset 0 1px 2px rgba(255,255,255,0.8),
    0 2px 6px rgba(0, 150, 136, 0.12);
  border: 0.5px solid rgba(255, 255, 255, 0.3);
}

        @keyframes rise {
          0% {
            transform: translateY(0) scale(1);
            opacity: 0.8;
          }
          50% {
            transform: translateY(-50vh) scale(1.1);
            opacity: 1;
          }
          100% {
            transform: translateY(-120vh) scale(1.4);
            opacity: 0;
          }
        }

        @media (max-width: 768px) {
          .bubble {
            opacity: 0.6;
          }
        }
      `}</style>
    </section>
  );
}
