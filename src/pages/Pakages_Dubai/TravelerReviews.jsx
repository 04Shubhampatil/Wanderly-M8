import  { useState } from 'react';
import cardData from '../../json/Dubai_Luxury_Escape.json'; // Importing your JSON data

// Decorative Assets
import hatIcon from '../../assets/Icons/Hat.svg'; // Testimonials small hat icon
import badgeBg from '../../assets/Icons/star.svg'; // 4.8 Rating badge background if applicable

// Mocking the three user avatars matching your data index
import avatar1 from '../../assets/Images/poster1.png'; 
import avatar2 from '../../assets/Images/poster2.png'; // Sarah Mitchell image style
import avatar3 from '../../assets/Images/poster3.png'; // John Doe image style
import ReviewCard from './ReviewCard';

const TravelerReviews = () => {
  const reviews = cardData.Traveler_Reviews;
  const avatars = [avatar1, avatar2, avatar3];
  
  // Start with the middle card (index 1) active
  const [activeIndex, setActiveIndex] = useState(1);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? reviews.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === reviews.length - 1 ? 0 : prev + 1));
  };

  // Helper utility to safely compute card offsets
  const getCardIndex = (position) => {
    if (position === 'left') {
      return activeIndex === 0 ? reviews.length - 1 : activeIndex - 1;
    }
    if (position === 'right') {
      return activeIndex === reviews.length - 1 ? 0 : activeIndex + 1;
    }
    return activeIndex;
  };

  return (
   <div className="w-full flex flex-col items-center py-16 px-12 bg-white relative overflow-hidden select-none">
  
  {/* Header Container - Holds Headings & Floating Badge */}
  <div className="relative flex flex-col items-center text-center mb-16 w-full max-w-xl">
    
    {/* Testimonials Subtitle Wrapper */}
    <div className="relative pt-6"> 
      {/* Absolutely positioned hat icon matching the image layout */}
      <img 
        src={hatIcon || "src/assets/Icons/Hat.svg"} 
        alt="" 
        className="absolute -top-5 -left-9 w-16 h-16 object-contain select-none pointer-events-none" 
      />
      <p className="font-serif italic text-[26px] text-[#143F4A]">
        Testimonials
      </p>
    </div>

    {/* Main Heading */}
    <h2 className="text-[48px] font-serif font-bold text-[#143F4A] leading-tight mt-2">
      Traveler Reviews
    </h2>

    {/* Top-Right Absolute Floating 4.8 Badge Block */}
    <div className="absolute -right-24 top-0 w-[115px] h-[115px] bg-[#F2FAFC] border border-[#143F4A]/5 rotate-[12deg] rounded-2xl shadow-md flex flex-col items-center justify-center p-2 z-10">
      <span className="text-[34px] font-bold text-[#143F4A] leading-none">4.8</span>
      <div className="flex items-center gap-1 mt-1.5 text-[12px] text-[#143F4A] font-bold">
        <img src={badgeBg} alt="star" className="w-4 h-4 object-contain" />
        Excellent
      </div>
    </div>

  </div> {/* ✅ Fixed HTML nesting structure: Header Container closes correctly here */}

  {/* Main Slider Display Window Frame */}
  <div className="relative flex justify-center items-center w-full max-w-6xl gap-6 min-h-[480px]">
    
    {/* Navigation Action Arrow Buttons */}
    {/* Left Arrow Button - Shifted outward to clear the edge of active card */}
    <button 
      onClick={handlePrev}
      className="absolute left-[20%] lg:left-[24%] top-[35%] -translate-y-1/2 z-30 bg-[#143F4A] text-white p-4 rounded-full shadow-lg hover:bg-[#1c5361] transition-all cursor-pointer hidden md:block"
    >
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 19l-7-7 7-7" />
      </svg>
    </button>

    {/* Right Arrow Button - Shifted outward to clear the edge of active card */}
    <button 
      onClick={handleNext}
      className="absolute right-[20%] lg:right-[24%] top-[35%] -translate-y-1/2 z-30 bg-[#143F4A] text-white p-4 rounded-full shadow-lg hover:bg-[#1c5361] transition-all cursor-pointer hidden md:block"
    >
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" />
      </svg>
    </button>

    {/* Layout Cards Grid context */}
    {/* Left Peripheral Card */}
    <ReviewCard 
      review={reviews[getCardIndex('left')]} 
      avatarImg={avatars[getCardIndex('left')]} 
      isActive={false} 
    />

    {/* Center Main Spotlight Card */}
    <ReviewCard 
      review={reviews[getCardIndex('center')]} 
      avatarImg={avatars[getCardIndex('center')]} 
      isActive={true} 
    />

    {/* Right Peripheral Card */}
    <ReviewCard 
      review={reviews[getCardIndex('right')]} 
      avatarImg={avatars[getCardIndex('right')]} 
      isActive={false} 
    />

  </div>

  {/* Pagination Dot Navigation Row indicators */}
  <div className="flex gap-2.5 mt-12 items-center justify-center">
    {reviews.map((_, index) => (
      <div
        key={index}
        className={`transition-all duration-300 rounded-full h-2.5 ${
          index === activeIndex ? 'bg-[#143F4A] w-7' : 'bg-gray-300 w-2.5'
        }`}
      />
    ))}
  </div>

</div>
  );
};

export default TravelerReviews;