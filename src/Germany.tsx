import React from "react";
import germanyIcon from "./assets/study destination/germany.png";
import { useNavigate } from "react-router-dom";

const Germany: React.FC = () => {
  const navigate = useNavigate();
  return (
    <div className="py-12 px-2 md:px-0 flex justify-center fade-in-up">
      <div className="w-full max-w-6xl rounded-lg flex flex-col lg:flex-row overflow-hidden">
        {/* Left: Image section */}
        <div className="w-full lg:w-1/2 lg:h-auto fade-in-up">
          <img
            src={germanyIcon}
            alt="Colorful chairs in a classroom"
            className="w-full h-full object-cover"
          />
        </div>
        {/* Right: Content section */}
        <div className="w-full lg:w-1/2 p-8 flex flex-col justify-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-8 text-black">
            Study In Germany
          </h1>
          <div className="mb-6 fade-in-up">
            <div className="text-black md:text-2xl">
              Germany is most renowned amongst international students due to its
              high-quality education and fabulous career prospects and it
              provides versatile and wide range of educational programmes. It
              has world class universities and opens door to international
              labour market.
            </div>
          </div>
          <button className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-full font-semibold shadow hover:bg-blue-700 transition-colors duration-200 w-max" onClick={() => navigate("/contact")}>
            Contact Us
          </button>
        </div>
      </div>
    </div>
  );
};

export default Germany;
