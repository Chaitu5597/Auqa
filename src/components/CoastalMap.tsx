export function CoastalMap() {
  return (
    <section className="py-20 bg-gradient-to-b from-white via-green-50/30 to-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle, #0077B6 1px, transparent 1px)',
          backgroundSize: '30px 30px'
        }}></div>
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <h2 className="text-[#4A5A3C] mb-4 text-center" style={{ fontSize: '40px', fontWeight: 600 }}>
          Our Presence
        </h2>
        <p className="text-center text-foreground/80 mb-12 max-w-2xl mx-auto" style={{ fontSize: '18px' }}>
          Serving the coastal aquaculture regions of India with cutting-edge solutions
        </p>
        
        <div className="max-w-6xl mx-auto bg-gradient-to-br from-white to-green-50/20 rounded-3xl shadow-2xl p-8 md:p-12 border border-primary/10">
          <svg 
            viewBox="0 0 1200 700" 
            className="w-full h-auto"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Background gradient */}
            <defs>
              <linearGradient id="bgGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#ffffff" stopOpacity="0.3" />
                <stop offset="50%" stopColor="#f0fdf4" stopOpacity="0.2" />
                <stop offset="100%" stopColor="#ffffff" stopOpacity="0.3" />
              </linearGradient>
              
              {/* Glow filters for each state */}
              <filter id="emeraldGlow" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
                <feMerge>
                  <feMergeNode in="coloredBlur"/>
                  <feMergeNode in="SourceGraphic"/>
                </feMerge>
              </filter>
              
              <filter id="tealGlow" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
                <feMerge>
                  <feMergeNode in="coloredBlur"/>
                  <feMergeNode in="SourceGraphic"/>
                </feMerge>
              </filter>
              
              <filter id="goldGlow" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
                <feMerge>
                  <feMergeNode in="coloredBlur"/>
                  <feMergeNode in="SourceGraphic"/>
                </feMerge>
              </filter>
            </defs>

            <rect width="1200" height="700" fill="url(#bgGradient)" />
            
            {/* West Bengal - Golden Yellow Glow */}
            <g id="west-bengal" className="state-group">
              {/* State outline with dots */}
              <g className="dot-pattern">
                {[...Array(80)].map((_, i) => {
                  const angle = (i / 80) * Math.PI * 1.5 + 0.2;
                  const radius = 100 + Math.sin(i * 0.3) * 20;
                  const cx = 850 + Math.cos(angle) * radius;
                  const cy = 180 + Math.sin(angle) * radius;
                  return (
                    <circle
                      key={`wb-${i}`}
                      cx={cx}
                      cy={cy}
                      r="2.5"
                      fill="#FFB020"
                      opacity="0.7"
                      className="state-dot"
                      style={{ animationDelay: `${i * 0.02}s` }}
                    />
                  );
                })}
              </g>
              
              {/* Coastal dots - glowing golden */}
              <g filter="url(#goldGlow)">
                {[...Array(25)].map((_, i) => {
                  const angle = (i / 25) * Math.PI * 0.8 + 0.6;
                  const radius = 120;
                  const cx = 850 + Math.cos(angle) * radius;
                  const cy = 180 + Math.sin(angle) * radius;
                  return (
                    <circle
                      key={`wb-coast-${i}`}
                      cx={cx}
                      cy={cy}
                      r="3"
                      fill="#FFD700"
                      className="coastal-glow-dot"
                      style={{ animationDelay: `${i * 0.1}s` }}
                    />
                  );
                })}
              </g>
              
              {/* Connection lines */}
              <path
                d={`M ${850 + Math.cos(0.6) * 120} ${180 + Math.sin(0.6) * 120} ${[...Array(25)].map((_, i) => {
                  const angle = (i / 25) * Math.PI * 0.8 + 0.6;
                  const radius = 120;
                  return `L ${850 + Math.cos(angle) * radius} ${180 + Math.sin(angle) * radius}`;
                }).join(' ')}`}
                stroke="#FFD700"
                strokeWidth="1"
                fill="none"
                opacity="0.3"
                className="connection-line"
              />
              
              <text x="780" y="190" fill="#FFB020" fontSize="22" fontWeight="700" className="state-label">West Bengal</text>
            </g>

            {/* Odisha - Blue-Teal Glow */}
            <g id="odisha" className="state-group">
              {/* State outline with dots */}
              <g className="dot-pattern">
                {[...Array(100)].map((_, i) => {
                  const angle = (i / 100) * Math.PI * 1.6 + 0.1;
                  const radius = 130 + Math.sin(i * 0.25) * 25;
                  const cx = 600 + Math.cos(angle) * radius;
                  const cy = 350 + Math.sin(angle) * radius;
                  return (
                    <circle
                      key={`od-${i}`}
                      cx={cx}
                      cy={cy}
                      r="2.5"
                      fill="#14B8A6"
                      opacity="0.7"
                      className="state-dot"
                      style={{ animationDelay: `${i * 0.02}s` }}
                    />
                  );
                })}
              </g>
              
              {/* Coastal dots - glowing teal */}
              <g filter="url(#tealGlow)">
                {[...Array(30)].map((_, i) => {
                  const angle = (i / 30) * Math.PI * 0.9 + 0.5;
                  const radius = 150;
                  const cx = 600 + Math.cos(angle) * radius;
                  const cy = 350 + Math.sin(angle) * radius;
                  return (
                    <circle
                      key={`od-coast-${i}`}
                      cx={cx}
                      cy={cy}
                      r="3"
                      fill="#0D9488"
                      className="coastal-glow-dot"
                      style={{ animationDelay: `${i * 0.1}s` }}
                    />
                  );
                })}
              </g>
              
              {/* Connection lines */}
              <path
                d={`M ${600 + Math.cos(0.5) * 150} ${350 + Math.sin(0.5) * 150} ${[...Array(30)].map((_, i) => {
                  const angle = (i / 30) * Math.PI * 0.9 + 0.5;
                  const radius = 150;
                  return `L ${600 + Math.cos(angle) * radius} ${350 + Math.sin(angle) * radius}`;
                }).join(' ')}`}
                stroke="#14B8A6"
                strokeWidth="1"
                fill="none"
                opacity="0.3"
                className="connection-line"
              />
              
              <text x="530" y="360" fill="#3FBAD7" fontSize="22" fontWeight="700" className="state-label">Odisha</text>
            </g>

            {/* Andhra Pradesh - Emerald Green Glow */}
            <g id="andhra-pradesh" className="state-group">
              {/* State outline with dots */}
              <g className="dot-pattern">
                {[...Array(120)].map((_, i) => {
                  const angle = (i / 120) * Math.PI * 1.7 + 0.05;
                  const radius = 150 + Math.sin(i * 0.2) * 30;
                  const cx = 400 + Math.cos(angle) * radius;
                  const cy = 550 + Math.sin(angle) * radius;
                  return (
                    <circle
                      key={`ap-${i}`}
                      cx={cx}
                      cy={cy}
                      r="2.5"
                      fill="#10B981"
                      opacity="0.7"
                      className="state-dot"
                      style={{ animationDelay: `${i * 0.02}s` }}
                    />
                  );
                })}
              </g>
              
              {/* Coastal dots - glowing emerald */}
              <g filter="url(#emeraldGlow)">
                {[...Array(35)].map((_, i) => {
                  const angle = (i / 35) * Math.PI + 0.4;
                  const radius = 170;
                  const cx = 400 + Math.cos(angle) * radius;
                  const cy = 550 + Math.sin(angle) * radius;
                  return (
                    <circle
                      key={`ap-coast-${i}`}
                      cx={cx}
                      cy={cy}
                      r="3"
                      fill="#059669"
                      className="coastal-glow-dot"
                      style={{ animationDelay: `${i * 0.1}s` }}
                    />
                  );
                })}
              </g>
              
              {/* Connection lines */}
              <path
                d={`M ${400 + Math.cos(0.4) * 170} ${550 + Math.sin(0.4) * 170} ${[...Array(35)].map((_, i) => {
                  const angle = (i / 35) * Math.PI + 0.4;
                  const radius = 170;
                  return `L ${400 + Math.cos(angle) * radius} ${550 + Math.sin(angle) * radius}`;
                }).join(' ')}`}
                stroke="#10B981"
                strokeWidth="1"
                fill="none"
                opacity="0.3"
                className="connection-line"
              />
              
              <text x="260" y="560" fill="#059669" fontSize="22" fontWeight="700" className="state-label">Andhra Pradesh</text>
            </g>

            {/* Bay of Bengal subtle waves */}
            <g opacity="0.15">
              {[...Array(5)].map((_, i) => (
                <path
                  key={`wave-${i}`}
                  d={`M ${900} ${100 + i * 120} Q ${950} ${90 + i * 120}, ${1000} ${100 + i * 120} T ${1100} ${100 + i * 120}`}
                  stroke="#0077B6"
                  strokeWidth="1.5"
                  fill="none"
                  className="ocean-wave"
                  style={{ animationDelay: `${i * 0.3}s` }}
                />
              ))}
            </g>
            
            {/* <text x="950" y="360" fill="#0077B6" fontSize="16" fontWeight="500" opacity="0.4" className="bay-label">
              Bay of Bengal
            </text> */}
          </svg>
        </div>

        <div className="mt-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="bg-white/80 backdrop-blur-sm px-6 py-4 rounded-xl shadow-lg border border-emerald-200/50 hover:shadow-xl transition-all">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-4 h-4 rounded-full bg-emerald-500 animate-pulse-slow" style={{ boxShadow: '0 0 10px rgba(16, 185, 129, 0.6)' }}></div>
                <span className="text-emerald-700" style={{ fontSize: '16px', fontWeight: 700 }}>Andhra Pradesh</span>
              </div>
              <p className="text-sm text-foreground/70">Emerald Coast</p>
            </div>
            
            <div className="bg-white/80 backdrop-blur-sm px-6 py-4 rounded-xl shadow-lg border border-teal-200/50 hover:shadow-xl transition-all">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-4 h-4 rounded-full  animate-pulse-slow" style={{ boxShadow: '0 0 10px rgba(13, 148, 136, 0.6)', animationDelay: '0.5s',backgroundColor: "#3FBAD7" }}></div>
                <span className="text-teal-700" style={{ fontSize: '16px', fontWeight: 700 , color: "#3FBAD7" }}>Odisha</span>
              </div>
              <p className="text-sm text-foreground/70">Teal Waters</p>
            </div>
            
            <div className="bg-white/80 backdrop-blur-sm px-6 py-4 rounded-xl shadow-lg border border-yellow-200/50 hover:shadow-xl transition-all">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-4 h-4 rounded-full bg-yellow-500 animate-pulse-slow" style={{ boxShadow: '0 0 10px rgba(255, 215, 0, 0.6)', animationDelay: '1s' }}></div>
                <span className="text-yellow-700" style={{ fontSize: '16px', fontWeight: 700 }}>West Bengal</span>
              </div>
              <p className="text-sm text-foreground/70">Golden Coast</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
