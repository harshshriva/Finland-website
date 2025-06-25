import { Button } from 'antd';
import { Link } from 'react-router-dom';

const services = [
  {
    title: 'COMPREHENSIVE SERVICES FOR YOUR SUCCESS',
    icon: '🤝',
    iconBg: '#FF7B3D',
    desc: 'Our comprehensive approach ensures your success from start to finish with expert guidance at every step.',
    btn: 'GET STARTED',
  },
  {
    title: 'ADMISSION ASSISTANCE',
    icon: '📚',
    iconBg: '#2E7D32',
    desc: 'We help you find the right university and course that matches your career goals and aspirations. Our experts provide comprehensive support in preparing and submitting your application.',
    btn: 'APPLY NOW',
  },
  {
    title: 'VISA PROCESSING',
    icon: '👨‍✈️',
    iconBg: '#1976D2',
    desc: 'Our team guides you through the visa application process, ensuring that all requirements are met and your application is successful.',
    btn: 'GET VISA HELP',
  },
  {
    title: 'CAREER COUNSELING',
    icon: '🧠',
    iconBg: '#7B1FA2',
    desc: 'Receive expert career counseling from professionals who understand the European education system and job market. We help you make informed decisions about your future.',
    btn: 'BOOK CONSULTATION',
  },
  {
    title: 'POST-LANDING SUPPORT',
    icon: '✈️',
    iconBg: '#2E7D32',
    desc: 'Enjoy peace of mind with our post-landing support services. From accommodation to food and transportation, we ensure that your transition to a new country is smooth and hassle-free.',
    btn: 'LEARN MORE',
  },
];

const ServicesPage = () => (
  <div className="py-12 px-2 md:px-0 flex flex-col items-center fade-in-up">
    <h2 className="text-3xl font-bold text-black mb-8 text-center">Our Services</h2>
    <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      {services && services?.map((s, i) => (
        <div key={i} className="rounded-lg shadow p-4 flex flex-col items-center border border-gray-200 fade-in-up" style={{ background: '#74ff33' }}>
            <div 
              className="w-20 h-20 rounded-full flex items-center justify-center text-white text-3xl mb-4"
              style={{ backgroundColor: s.iconBg }}
            >
              {s.icon}
            </div>
          <h3 className="text-xl font-extrabold text-black mb-2 text-center uppercase">{s.title}</h3>
          <p className="text-black text-sm mb-2 text-center">{s.desc}</p>
          <Link to="/contact" className="w-full">
            <Button type="primary" className="text-white w-full font-bold tracking-wider mt-auto">CONTACT US</Button>
          </Link>
        </div>
      ))}
    </div>
  </div>
);

export default ServicesPage;