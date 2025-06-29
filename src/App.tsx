import { Menu, Dropdown } from "antd";
import { DownOutlined } from "@ant-design/icons";
import { Routes, Route, Link } from "react-router-dom";
import LandingSection from "./LandingSection";
import HomeSection from "./HomeSection";
import ServicesPage from "./ServicesPage";
import ContactSection from "./ContactSection";
import logo from "./assets/logo.png";
import Destinations from "./Destinations";
import WhyChooseUs from "./WhyChooseUs";
import { useNavigate } from "react-router-dom";
import GermanyPage from "./germanyPage";
import SpainPage from "./Spain";
import GenevaPage from "./Geneva";

// Constants
const cream = "bg-[#FFFFFF]";
const black = "text-white";

// Menus
const studyMenu = (
  <Menu className={`${cream} ${black}`}>
    <Menu.Item key="1">
      <Link to="/germany">STUDY IN GERMANY</Link>
    </Menu.Item>
    <Menu.Item key="3">
      <Link to="/spain">STUDY IN SPAIN</Link>
    </Menu.Item>
    <Menu.Item key="4">
      <Link to="/geneva">STUDY IN GENEVA</Link>
    </Menu.Item>
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
      <WhyChooseUs />
      <ContactSection />
    </>
  );
}

// Main App
const App = () => {
  const navigate = useNavigate();

  return (
    <div className={`min-h-screen ${cream}`}>
      {/* Header */}
      <header
        className="flex flex-col md:flex-row items-center justify-between px-6 py-4 border-b border-gray-200 fade-in-up"
        style={{ background: "#002F6C " }}
      >
        <div className="flex items-center gap-3">
          <img
            onClick={() => navigate("/")}
            src={logo}
            alt="logo"
            className="h-16 w-16 object-contain rounded-full shadow-md border-2 border-white bg-white p-1"
            style={{ background: "#2d3e50" }}
          />
        </div>
        <div className="flex items-center gap-4 mt-2 md:mt-0 text-white">
          +35 8415798714 <span className="text-sm ml-1">(Call/WhatsApp)</span>
        </div>
      </header>

      {/* Navigation */}
      <nav
        className="flex flex-wrap items-center justify-center gap-6 md:gap-14 py-3 border-b border-gray-200 fade-in-up"
        style={{ background: "#002F6C" }}
      >
        <Link
          to="/"
          className="font-bold text-base md:text-lg text-white"
        ></Link>
        <Link
          to="/homeSection"
          className="font-bold text-base md:text-lg text-white"
        >
          HOME
        </Link>
        <Dropdown overlay={studyMenu} trigger={["hover"]}>
          <a className="font-bold text-base md:text-lg text-white flex items-center gap-1 cursor-pointer">
            STUDY DESTINATIONS <DownOutlined />
          </a>
        </Dropdown>
        <Link
          to="/whyChooseUs"
          className="font-bold text-base md:text-lg text-white"
        >
          WHY CHOOSE US
        </Link>
        <Link
          to="/services"
          className="font-bold text-base md:text-lg text-white"
        >
          SERVICES
        </Link>
        <Link
          to="/contact"
          className="font-bold text-base md:text-lg text-white"
        >
          CONTACT US
        </Link>
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
          <Route path="/germany" element={<GermanyPage />} />
          <Route path="/spain" element={<SpainPage />} />
          <Route path="/geneva" element={<GenevaPage />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
