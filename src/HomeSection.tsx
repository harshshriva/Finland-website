import React from "react";
import homeIcon from "../src/assets/home.jpeg"
const HomeSection: React.FC = () => {
  return (
    <div className="py-12 px-2 md:px-0 flex justify-center mt-6 fade-in-up">
      <div className="w-full max-w-6xl rounded-lg flex flex-col lg:flex-row overflow-hidden">
        {/* Left: Image section */}
        <div className="w-full lg:w-1/2 h-64 lg:h-auto fade-in-up">
          <img
            src={homeIcon}
            alt="Graduation caps in the air"
            className="w-full h-full object-cover"
          />
        </div>
        {/* Right: Content section */}
        <div className="w-full lg:w-1/2 p-8 flex flex-col justify-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-8 text-black">Home</h1>
          <p className="font-bold mb-2 text-black">Welcome to <span className="italic">Finland Simplified</span>, Your Gateway to Best of European Education</p>
          <p className="mb-2 text-black"><span className="italic">At Finland Simplified</span>, we specialize in helping deserving candidates secure admissions in top universities across Europe, with a focus on Poland, the Nordics, and Finland.</p>
          <p className="mb-4 text-black">Our mission is to provide transparent and honest services, ensuring a smooth and successful journey for every student.</p>
          <div>
            <p className="font-bold mb-2">Why Choose Us?</p>
            <ul className="space-y-2">
              <li className="flex items-start fade-in-up"><span className="text-green-600 mr-2 mt-1">✓</span><span><span className="font-bold">Transparent and Honest Dealings:</span> We believe in complete transparency and honesty in all our dealings.</span></li>
              <li className="flex items-start fade-in-up"><span className="text-green-600 mr-2 mt-1">✓</span><span><span className="font-bold">Personalized Guidance:</span> Step-by-step personalized guidance at every stage.</span></li>
              <li className="flex items-start fade-in-up"><span className="text-green-600 mr-2 mt-1">✓</span><span><span className="font-bold">Multiple City Touchpoints:</span> Access our services no matter where you are.</span></li>
              <li className="flex items-start fade-in-up"><span className="text-green-600 mr-2 mt-1">✓</span><span><span className="font-bold">Post-Landing Facilities:</span> Comprehensive support upon arrival, including accommodation, food, and transportation.</span></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeSection;