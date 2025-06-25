import React from "react";

const LandingSection: React.FC = () => {
  return (
    <div className="relative w-full h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <img
        src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1400&q=80"
        alt="Tropical island and ocean"
        className="absolute inset-0 w-full h-full object-cover z-0 scale-105 animate-pulse"
        style={{ animationDuration: '8s' }}
      />
      
      {/* Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/50 z-10"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-green-900/20 to-lime-900/20 z-10"></div>
      
      {/* Animated particles/dots */}
      <div className="absolute inset-0 z-15">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-white/30 rounded-full animate-bounce"
            style={{
              left: `${20 + i * 15}%`,
              top: `${30 + (i % 2) * 20}%`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: '3s'
            }}
          ></div>
        ))}
      </div>
      
      {/* Main Content */}
      <div className="relative z-20 max-w-6xl text-center px-6 md:px-12 transform transition-all duration-1000 hover:scale-105">
        {/* Main Title */}
        <h1 className="text-white text-6xl md:text-8xl lg:text-9xl font-black leading-none mb-6 tracking-tight">
          <span className="inline-block transform hover:rotate-1 transition-transform duration-300">
            Finland
          </span>
          <br />
          <span className="bg-gradient-to-r from-lime-400 via-green-400 to-emerald-400 bg-clip-text text-transparent inline-block transform hover:-rotate-1 transition-transform duration-300">
            Simplified
          </span>
        </h1>
        
        {/* Description */}
        <p className="text-white/80 text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed font-light mb-8">
          Experience the land of a thousand lakes, midnight sun, and innovative design. 
          Your gateway to authentic Finnish culture and breathtaking Nordic landscapes.
        </p>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <div className="flex flex-col items-center animate-bounce">
          <span className="text-white/60 text-sm mb-2">Scroll to explore</span>
          <svg className="w-6 h-6 text-white/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
      
      {/* Decorative Elements */}
      <div className="absolute top-10 right-10 w-20 h-20 border border-lime-400/30 rounded-full z-15 animate-spin" style={{ animationDuration: '20s' }}></div>
      <div className="absolute bottom-20 left-10 w-12 h-12 border border-lime-400/40 rounded-full z-15 animate-ping" style={{ animationDuration: '4s' }}></div>
    </div>
  );
};

export default LandingSection;