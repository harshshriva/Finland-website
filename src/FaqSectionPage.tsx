import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

const FAQSection = () => {
  const [openItems, setOpenItems] = useState(new Set([0])); // First item open by default

  const toggleItem = (index: number) => {
    const newOpenItems = new Set(openItems);
    if (newOpenItems.has(index)) {
      newOpenItems.delete(index);
    } else {
      newOpenItems.add(index);
    }
    setOpenItems(newOpenItems);
  };

  const faqData = [
    {
      question: "Are there scholarships available for Indian students in Spain?",
      answer: {
        publicUniversities: "Yes, there are scholarships, however not many. In Public universities where the Study programs are in Spanish yes, there are scholarships like Erasmus Joven, Erasmus +, Erasmus Mundus, Banco Santander Scholarships and some of the public universities offer tuition fee waiver, free accommodation, internship opportunities too.",
        privateUniversities: "Yes, but only in the form of discount in the Tuition Fee."
      }
    },
    {
      question: "Can I work in Spain as an international student?",
      answer: "Yes, international students can work part-time in Spain. EU students have unlimited work rights, while non-EU students can work up to 20 hours per week during studies and full-time during holiday periods. You'll need to obtain proper work authorization from Spanish authorities."
    },
    {
      question: "What are the requirements for studying in Spain as Non-EU student?",
      answer: "Non-EU students typically need: a valid passport, academic transcripts and certificates (apostilled), proof of Spanish/English proficiency, student visa, health insurance, proof of financial means (around €6,000-€10,000 per year), and acceptance letter from a Spanish institution. Requirements may vary by program and university."
    },
    {
      question: "What are the benefits of studying in Spain?",
      answer: "Spain offers high-quality education at affordable costs, rich cultural experience, opportunity to learn Spanish (world's 2nd most spoken language), excellent weather and lifestyle, diverse academic programs, strong job market in various sectors, and easy travel access to Europe and beyond."
    },
    {
      question: "Can I stay in Spain after I finish my studies?",
      answer: "Yes, graduates can apply for a residence permit to seek employment (1 year initially, renewable). After completing studies, you have various pathways including work visas, entrepreneur visas, or applying for long-term residence. EU Blue Card is also available for highly skilled professionals."
    },
    {
      question: "Which are the cheapest and most expensive cities in Spain?",
      answer: "Cheapest cities include Salamanca, Granada, Murcia, Córdoba, and Cáceres (€400-600/month living costs). Most expensive are Madrid, Barcelona, San Sebastián, Bilbao, and Valencia (€800-1200/month). Smaller university towns generally offer the best value for students."
    },
    {
      question: "What are the most popular courses of study for Indian students in Spain?",
      answer: "Popular programs include Business Administration (MBA), Engineering (Industrial, Computer Science), International Relations, Tourism Management, Spanish Language & Literature, Architecture, Medicine, Data Science, Renewable Energy, and Fashion Design. Business and technology programs are particularly in demand."
    }
  ];

  return (
    <section className="bg-[#FFF7E6] py-8 md:py-16 px-4 sm:px-6 lg:px-8 fade-in-up">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black mb-4 md:mb-6">
            FREQUENTLY ASKED QUESTIONS
          </h2>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-2 text-black">
            <Mail className="w-5 h-5" />
            <span className="text-base sm:text-lg">Email us your questions </span>
            <a 
              href="mailto:info@indiatospain.com" 
              className="text-[#fbbf24] font-semibold hover:underline text-base sm:text-lg"
            >
              info@indiatospain.com
            </a>
          </div>
        </div>

        {/* FAQ Items */}
        <div className="space-y-3 md:space-y-4">
          {faqData.map((item, index) => (
            <div 
              key={index}
              className="bg-white rounded-lg shadow-md border border-gray-200 overflow-hidden transition-all duration-300 hover:shadow-lg fade-in-up"
            >
              {/* Question Header */}
              <button
                onClick={() => toggleItem(index)}
                className="w-full px-4 sm:px-6 py-3 sm:py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
              >
                <h3 className="text-base sm:text-lg md:text-xl font-semibold text-black pr-2 sm:pr-4">
                  {item.question}
                </h3>
                <div className="flex-shrink-0">
                  {openItems.has(index) ? (
                    <ChevronUp className="w-5 h-5 sm:w-6 sm:h-6 text-[#fbbf24]" />
                  ) : (
                    <ChevronDown className="w-5 h-5 sm:w-6 sm:h-6 text-[#2d3e50]" />
                  )}
                </div>
              </button>

              {/* Answer Content */}
              {openItems.has(index) && (
                <div className="px-4 sm:px-6 pb-4 sm:pb-6 border-t border-gray-100">
                  <div className="pt-3 sm:pt-4 text-black leading-relaxed">
                    {typeof item.answer === 'string' ? (
                      <p className="text-sm sm:text-base">{item.answer}</p>
                    ) : (
                      <div className="space-y-3 sm:space-y-4">
                        <div>
                          <h4 className="font-semibold text-black mb-1 sm:mb-2 text-sm sm:text-base">Public Universities</h4>
                          <p className="text-sm sm:text-base">{item.answer.publicUniversities}</p>
                        </div>
                        <div>
                          <h4 className="font-semibold text-black mb-1 sm:mb-2 text-sm sm:text-base">Private Universities</h4>
                          <p className="text-sm sm:text-base">{item.answer.privateUniversities}</p>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-8 md:mt-12">
          <div className="bg-white rounded-lg shadow-md p-6 sm:p-8 border border-gray-200">
            <h3 className="text-xl sm:text-2xl font-bold text-black mb-3 sm:mb-4">
              Still have questions?
            </h3>
            <p className="text-sm sm:text-base text-black mb-4 sm:mb-6">
              Our expert advisors are here to help you with personalized guidance for your journey to Spain.
            </p>
            <div className="flex justify-center">
              <Link
                to="/contact"
                className="bg-[#fbbf24] text-[#2d3e50] px-6 sm:px-8 py-2 sm:py-3 rounded-lg font-bold hover:bg-[#f59e0b] hover:text-white transition-all duration-300 shadow-lg text-sm sm:text-base uppercase tracking-wider"
              >
                GET IN TOUCH WITH US
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;