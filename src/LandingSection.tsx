import React from "react";
import LandingPage from "../src/assets/landingIcon.jpg"; // Assuming you have a LandingPage component

const LandingSection: React.FC = () => {
  return (
    <div className="relative w-full h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <img
        src={LandingPage}
        alt="Finland Cathedral"
        className="absolute inset-0 w-full h-full object-cover object-center z-0"
      />
      
      {/* Overlay Content */}
      <div className="relative z-10 flex flex-col items-center justify-center px-4 mt-8 pt-12">
        <div className="text-center mt-10 pt-8">
          {/* Main Title */}
          <h1 className="text-[#002F6C] font-black text-5xl md:text-6xl lg:text-[8rem] leading-none tracking-tight mb-4 pt-4
            drop-shadow-[0_2px_0_white]
            drop-shadow-[2px_0_0_white]
            drop-shadow-[-2px_0_0_white]
            drop-shadow-[0_-2px_0_white]
            ">
            Finland
          </h1>
          <h2 className="text-[#002F6C] font-black text-5xl md:text-6xl lg:text-[8rem] leading-none tracking-tight mb-8 text-stroke-white drop-shadow-[0_2px_0_white]
            drop-shadow-[2px_0_0_white]
            drop-shadow-[-2px_0_0_white]
            drop-shadow-[0_-2px_0_white]">
            Simplified
          </h2>
          
          {/* Subtitle */}
          <p className="text-[#002F6C] text-lg md:text-xl lg:text-2xl font-bold text-center max-w-4xl mx-auto leading-relaxed drop-shadow-[0_4px_8px_rgba(0,0,0,0.7)]">
            Experience the land of a thousand lakes, midnight sun, and innovative design.
            <br />
            Your gateway to authentic Finnish culture and breathtaking Nordic landscapes.
          </p>
        </div>
      </div>
    </div>
  );
};

export default LandingSection;