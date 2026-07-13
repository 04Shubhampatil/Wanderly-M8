
import BlackLogo from "../../assets/Icons/Black_logo.svg";
import WhiteLogo from "../../assets/Icons/White_logo.svg";
import bell from "../../assets/Icons/bell.svg";
import down_arrow from "../../assets/Icons/down_arrow.svg";
import profile_img from "../../assets/Images/profile_img.png";

import { Link } from "react-router-dom";

const Navbar = ({ isHomePage = false }) => {
  return (
    <header
      className={`sticky top-0 z-50 ${
        isHomePage ? "bg-transparent absolute w-full" : "bg-white shadow-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto h-[84px] flex items-center justify-between px-6 lg:px-10">

        {/* Logo */}
        <Link to="/">
          <img
            src={isHomePage ? WhiteLogo : BlackLogo}
            alt="Wanderly"
            className="h-14 w-auto"
          />
        </Link>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-12">
          {[
            { name: "Home", path: "/" },
            { name: "About Us", path: "/about" },
            { name: "Blog", path: "/blog" },
            { name: "Contact Us", path: "/contact" }
          ].map((item) => (
            <Link
              key={item.name}
              to={item.path} 
              className={`font-serif text-[18px] font-medium transition ${
                isHomePage
                  ? "text-white hover:text-gray-200"
                  : "text-[#222] hover:text-[#174B5B]"
              }`}
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Right Side Controls */}
        <div className="flex items-center gap-3">

          {/* Language Selector */}
          <button
            className={`flex items-center gap-2 h-11 px-4 rounded-full border-2 transition-all cursor-pointer ${
              isHomePage
                ? "border-white text-white hover:bg-white/10"
                : "border-[#174B5B] text-[#174B5B] hover:bg-[#174B5B]/5"
            }`}
          >
            <span className="text-[15px] font-semibold tracking-wide">EN</span>
            <img src={down_arrow} alt="" className="w-3 h-3" />
          </button>

          {/* Notification Bell */}
          <button
            className={`w-11 h-11 rounded-full flex items-center justify-center transition-transform hover:scale-105 cursor-pointer ${
              isHomePage ? "bg-[#1D4F5C]" : "bg-[#174B5B]"
            }`}
          >
            <img src={bell} alt="Notifications" className="w-5 h-5" />
          </button>

          {/* Profile Avatar Image */}
          <img
            src={profile_img}
            alt="User profile profile picture"
            className="w-11 h-11 rounded-full object-cover border border-black/5 cursor-pointer"
          />
        </div>
      </div>
    </header>
  );
};

export default Navbar;