import Navbar from '../../components/layout/Navbar.jsx'
import WhyChooseUs from './WhyChooseUs.jsx'
import bgImg from "../../assets/Images/what-about-ha-long-bay-1 1.svg";

const AboutUs = () => {
  return (
    <div>
      <Navbar />

      {/* Hero Section */}
      <div className="relative w-full h-[328px] overflow-hidden">
        <img
          src={bgImg}
          alt="About Us hero background"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Dark overlay for text contrast */}
        <div className="absolute inset-0 bg-[#143F4A]/80" />

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-4">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-3 tracking-wide">
            About Us
          </h1>
          <p className="text-sm md:text-base font-light tracking-wide text-white/90 font-mono">
            <span className="hover:text-white cursor-pointer transition-colors">Home /</span>
            <span className="text-[#1CA8CB]  ">About</span>
          </p>
        </div>
      </div>

      <WhyChooseUs />
    </div>
  )
}

export default AboutUs