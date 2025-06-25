import React from "react";

const Destinations: React.FC = () => {
  return (
    <div className="py-12 px-2 md:px-0 flex justify-center fade-in-up">
      <div className="w-full max-w-6xl rounded-lg flex flex-col lg:flex-row overflow-hidden">
        {/* Left: Image section */}
        <div className="w-full lg:w-1/2 h-64 lg:h-auto fade-in-up">
          <img
            src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80"
            alt="Colorful chairs in a classroom"
            className="w-full h-full object-cover"
          />
        </div>
        {/* Right: Content section */}
        <div className="w-full lg:w-1/2 p-8 flex flex-col justify-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-8 text-black">Study Destinations</h1>
          <h2 className="text-lg font-semibold mb-6 text-black">Explore Your Study Options</h2>
          <div className="mb-6 fade-in-up">
            <span className="font-bold text-black">Poland</span>
            <div className="text-black mt-1">
              Discover top universities and vibrant student life in Poland. Benefit from high-quality education and affordable living costs.
            </div>
          </div>
          <div className="mb-6 fade-in-up">
            <span className="font-bold text-black">Nordic Countries including Denmark and Netherlands</span>
            <div className="text-black mt-1">
              Experience the excellence of education in the Nordics, known for their innovative teaching methods and high living standards.
            </div>
          </div>
          <div className="fade-in-up">
            <span className="font-bold bg-blue-100 px-2 py-0.5 rounded text-black">Finland</span>
            <div className="text-black mt-1">
              Study in one of the world's best education systems. <br />
              Finland offers a unique blend of academic excellence and a high quality of life.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Destinations;
