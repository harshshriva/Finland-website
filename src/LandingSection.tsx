import React from "react";
import LandingPage from "../src/assets/landingIcon.jpeg"; // Assuming you have a LandingPage component

const LandingSection: React.FC = () => {
  return (
    <div className="relative w-full h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <img
        src={LandingPage}
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
          <span className="bg-gradient-to-r from-blue-400 via-blue-600 to-white bg-clip-text text-transparent inline-block transform hover:-rotate-1 transition-transform duration-300">
            Simplified
          </span>
        </h1>
        
        {/* Description */}
        <p className="text-yellow-400 text-2xl md:text-2xl max-w-3xl mx-auto leading-relaxed font-bold mb-8">
          Experience the land of a thousand lakes, midnight sun, and innovative design. 
          Your gateway to authentic Finnish culture and breathtaking Nordic landscapes.
        </p>
      </div>
      {/* Decorative Elements */}
      <div className="absolute top-10 right-10 w-20 h-20 border border-lime-400/30 rounded-full z-15 animate-spin" style={{ animationDuration: '20s' }}></div>
      <div className="absolute bottom-20 left-10 w-12 h-12 border border-lime-400/40 rounded-full z-15 animate-ping" style={{ animationDuration: '4s' }}></div>
    </div>
  );
};

export default LandingSection;