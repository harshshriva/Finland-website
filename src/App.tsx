import React from 'react';
import { Menu, Dropdown, Button } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import { Routes, Route, Link } from 'react-router-dom';
import LandingSection from './LandingSection';
import HomeSection from './HomeSection';
import ServicesPage from './ServicesPage';
import FaqSection from './FaqSectionPage';
import ContactSection from './ContactSection';
import logo from './assets/logo.png.png';
import Destinations from './Destinations';
import WhyChooseUs from './WhyChooseUs';

// Constants
const cream = 'bg-[#FFF7E6]';
const black = 'text-black';

// Menus
const studyMenu = (
  <Menu className={`${cream} ${black}`}>
    <Menu.Item key="1">
      <Link to="/destinations">STUDY IN GERMANY</Link>
    </Menu.Item>
    <Menu.Item key="2">STUDY IN FINLAND</Menu.Item>
    <Menu.Item key="3">STUDY IN SPAIN</Menu.Item>
  </Menu>
);

const movingMenu = (
  <Menu className={`${cream} ${black}`}>
    <Menu.Item key="1">RELOCATION WITH FAMILY</Menu.Item>
    <Menu.Item key="2">JOB ASSISTANCE</Menu.Item>
    <Menu.Item key="3">SETTLEMENT ASSISTANCE</Menu.Item>
    <Menu.Item key="4">AFFORDABLE LIVING</Menu.Item>
  </Menu>
);

// Home Page with all sectionss
function HomePage() {
  return (
    <>
      <LandingSection />
      {/* Optional Sections on Homepage */}
      <HomeSection />
      <ServicesPage />
      <Destinations />
      <WhyChooseUs />
        <ContactSection />
    </>
  );
}

// Main App
const App = () => {
  return (
    <div className={`min-h-screen ${cream}`}>
      {/* Header */}
      <header className="flex flex-col md:flex-row items-center justify-between px-6 py-4 border-b border-gray-200 fade-in-up" style={{ background: '#74ff33 ' }}>
        <div className="flex items-center gap-3">
          <img
            src={logo}
            alt="logo"
            className="h-16 w-16 object-contain rounded-full shadow-md border-2 border-white bg-white p-1"
            style={{ background: '#2d3e50' }}
          />
          <span className="text-3xl font-extrabold text-black flex items-center gap-2">
          </span>
        </div>
        <div className="flex items-center gap-4 mt-2 md:mt-0">
          <span className="text-lg font-medium text-black">+35 8415798714 <span className="text-sm">(Call/WhatsApp)</span></span>
          <span className="flex gap-2">
            <i className="fa-brands fa-facebook-f text-xl"></i>
            <i className="fa-brands fa-instagram text-xl"></i>
            <i className="fa-brands fa-youtube text-xl"></i>
          </span>
        </div>
      </header>

      {/* Navigation */}
      <nav className="flex flex-wrap items-center justify-center gap-2 md:gap-8 py-3 border-b border-gray-200 fade-in-up" style={{ background: '#74ff33' }}>
        <Link to="/" className="font-bold text-base md:text-lg text-black"></Link>
        <Link to="/homeSection" className="font-bold text-base md:text-lg text-black">HOME</Link>
        <Dropdown overlay={studyMenu} trigger={['hover']}>
          <a className="font-bold text-base md:text-lg text-black flex items-center gap-1 cursor-pointer">
            STUDY DESTINATIONS <DownOutlined />
          </a>
        </Dropdown>
        <Dropdown overlay={movingMenu} trigger={['hover']}>
          <a className="font-bold text-base md:text-lg text-black flex items-center gap-1 cursor-pointer">
            MOVING ABROAD <DownOutlined />
          </a>
        </Dropdown>
        <Link to="/whyChooseUs" className="font-bold text-base md:text-lg text-black">WHY CHOOSE US</Link>
        <Link to="/services" className="font-bold text-base md:text-lg text-black">SERVICES</Link>
        {/* <a href="#" className="text-base md:text-lg text-black">BLOG</a> */}
        <Link to="/contact" className="font-bold text-base md:text-lg text-black">CONTACT US</Link>
      </nav>

      {/* Routes */}
      <div className="fade-in-up">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/homeSection" element={<HomeSection />} />
          <Route path="/services" element={<ServicesPage />} /> 
          <Route path="/whyChooseUs" element={<WhyChooseUs />} />
          <Route path="/destinations" element={<Destinations />} />
          <Route path="/contact" element={<ContactSection />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
