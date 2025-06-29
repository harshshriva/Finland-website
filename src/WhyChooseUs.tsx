import React from "react";
import whyChooseUsIcon from "../src/assets/whychoose.jpeg"; // Assuming you have an icon for this section

const WhyChooseUs: React.FC = () => {
  return (
    <div className="py-12 px-2 md:px-0 flex justify-center fade-in-up">
      <div className="w-full max-w-6xl rounded-lg flex flex-col lg:flex-row overflow-hidden">
        {/* Left: Text section */}
        <div className="w-full lg:w-1/2 p-8 flex flex-col justify-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-8 text-black">Why Choose Us?</h1>
          <ul className="list-disc pl-6 space-y-3 text-black">
            <li className="fade-in-up">
              <span className="font-bold">Transparent and Honest Dealings</span>
              <div className="text-sm mt-1">
                At Finland Simplified, we pride ourselves on our commitment to transparency and honesty. We understand that the process of applying for higher education abroad can be daunting and filled with uncertainties. That's why we ensure that every step of your journey is clear and straightforward.
              </div>
            </li>
            <li className="fade-in-up">
              <span className="font-bold">Clear Communication:</span> From the very first consultation, we provide you with all the necessary information about the admission process, including timelines, requirements, and potential challenges. We believe that well-informed students make the best decisions.
            </li>
            <li className="fade-in-up">
              <span className="font-bold">No Hidden Fees:</span> Our pricing structure is straightforward with no hidden costs. We provide a detailed breakdown of all expenses involved, so you know exactly what you're paying for.
            </li>
            <li className="fade-in-up">
              <span className="font-bold">Accurate Information:</span> Our team stays up-to-date with the latest admission criteria, visa regulations, and university requirements. We ensure that the information we provide is accurate and current, so you can trust that you are making decisions based on reliable data.
            </li>
            <li className="fade-in-up">
              <span className="font-bold">Ethical Practices:</span> We adhere to the highest ethical standards in all our dealings. We do not make false promises or guarantees. Instead, we provide realistic expectations and work diligently to help you achieve your goals.
            </li>
            <li className="fade-in-up">
              <span className="font-bold">Personalized Support:</span> Each student is unique, and so are their needs. We offer personalized guidance tailored to your specific situation, ensuring you receive the support you need at every stage of the process.
            </li>
            <li className="fade-in-up">
              By choosing Finland Simplified, you are choosing a partner who values integrity and transparency, ensuring that your journey to studying abroad is as smooth and stress-free as possible.
            </li>
          </ul>
        </div>
        {/* Right: Image section */}
        <div className="w-full lg:w-1/2 h-64 lg:h-auto fade-in-up">
          <img
            src={whyChooseUsIcon}
            alt="Student in nature with mountains"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs; 