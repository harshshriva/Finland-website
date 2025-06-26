import React from "react";
import genevaIcon from "./assets/study destination/Geneva.png";

const Geneva: React.FC = () => {
  return (
    <div className="py-12 px-2 md:px-0 flex justify-center fade-in-up">
      <div className="w-full max-w-6xl rounded-lg flex flex-col lg:flex-row overflow-hidden">
        {/* Left: Image section */}
        <div className="w-full lg:w-1/2 lg:h-auto fade-in-up">
          <img
            src={genevaIcon}
            alt="Colorful chairs in a classroom"
            className="w-full h-full object-cover"
          />
        </div>
        {/* Right: Content section */}
        <div className="w-full lg:w-1/2 p-8 flex flex-col justify-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-8 text-black">Study In Geneva</h1>
          <div className="mb-6 fade-in-up">
            <div className="text-black mt-1">
              Geneva is known for its multicultural environment and top-notch universities with presence of many global organizations. It offers high quality of life and gives access to many cultural activities. It provides numerous career opportunities and a strong educational platform for professional development.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Geneva;
