
import badgeBg from '../../assets/Icons/star.svg'; // 4.8 Rating badge background if applicable

const ReviewCard = ({ review, avatarImg, isActive }) => {
  return (
    <div className={`flex flex-col items-center transition-all duration-500 ease-in-out ${
      isActive 
        ? 'w-[400px] z-20 opacity-100 scale-100' 
        : 'w-[320px] z-10 opacity-40 scale-90 blur-[0.5px] hidden md:flex'
    }`}>
      
      {/* Testimonial Bubble */}
      <div className={`relative w-full bg-white border border-gray-100 rounded-[24px] px-8 pt-12 pb-8 flex flex-col items-center justify-between text-center min-h-[320px] ${
        isActive ? 'shadow-xl' : 'shadow-sm'
      }`}>
        
        {/* Quote Icon Background Decorative Accent */}
        <div className="text-[120px] font-serif text-gray-100 leading-none absolute top-2 select-none pointer-events-none">
          “
        </div>

        {/* Review Text */}
        <p className="text-[#143F4A]/80 text-[16px] leading-relaxed font-medium z-10 mt-4 px-2">
          "{review.dec}"
        </p>

        {/* Star Rating Row */}
        <div className="flex gap-1 mt-6 z-10">
          {[...Array(review.rate)].map((_, i) => (
            <span key={i} className='w-6 h-6'><img src={badgeBg} alt="rating" /></span>
          ))}
        </div>
      </div>

      {/* User Info Block (Appears Underneath Card) */}
      <div className="mt-6 flex flex-col items-center text-center">
        <div className={`rounded-full border-4 overflow-hidden transition-all ${
          isActive ? 'w-[100px] h-[100px] border-[#143F4A]' : 'w-[80px] h-[80px] border-gray-200'
        }`}>
          <img src={avatarImg} alt={review.title} className="w-full h-full object-cover" />
        </div>
        
        <h4 className={`text-[#143F4A] font-bold mt-3 ${isActive ? 'text-[20px]' : 'text-[16px]'}`}>
          {review.title}
        </h4>
        <p className="text-gray-400 text-[13px] font-medium mt-0.5">
          {review.location}
        </p>
      </div>

    </div>
  );
};

export default ReviewCard;