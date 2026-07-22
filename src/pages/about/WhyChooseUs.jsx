import morphBgImg from "../../assets/Images/3D Morph Lines 6.svg";
import collageImg1 from "../../assets/Images/collageImg1.jpg";
import collageImg2 from "../../assets/Images/collageImg2.png";
import collageImg3 from "../../assets/Images/collageImg3.jpg";
import luggageIcon from "../../assets/Images/luggageIcon.png";
import signatureImg from "../../assets/Images/signatureImg.png";

const WhyChooseUs = () => {
  return (
    <div className="relative w-full py-24 px-6 md:px-16 overflow-hidden bg-white select-none">
      {/* Absolute Background Vector Layer */}
      <img
        src={morphBgImg}
        alt=""
        className="absolute top-0 left-0 w-full h-full object-cover pointer-events-none select-none z-0 opacity-40"
      />

      {/* Main Grid Wrapper */}
      <div className="relative max-w-7xl mx-auto z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        {/* LEFT COLUMN: Asymmetric Image Collage Grid (Takes 5 spans) */}
        <div className="lg:col-span-5 relative w-full h-[580px] flex items-center justify-center">
          {/* Top Left Image (Luggage & Airplane) */}
          <div className="absolute  top-0 left-0 w-[68%] h-[46%] rounded-[24px] overflow-hidden border-[8px] border-white shadow-lg z-10">
            <img
              src={collageImg1}
              alt="Luggage and airplane sky"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Bottom Left Image (Airport Terminal window) */}
          <div className="absolute bottom-[2%] left-[8%] w-[58%] h-[40%] rounded-[24px] overflow-hidden border-[8px] border-white shadow-md z-0">
            <img
              src={collageImg3}
              alt="Airport Terminal suitcases"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Right Foreground Overlapping Image (Beach chairs) */}
          <div className="absolute right-0 top-[20%] w-[56%] h-[64%] rounded-[24px] overflow-hidden border-[8px] border-white shadow-xl z-20">
            <img
              src={collageImg2}
              alt="Beach lounge chair view"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* RIGHT COLUMN: Content Text Panel (Takes 7 spans) */}
        <div className="lg:col-span-7 flex flex-col text-[#143F4A]">
          {/* Subtitle with relative hat/luggage position layout */}
          <div className="relative pt-6 self-start">
            <img
              src={luggageIcon}
              alt=""
              className="absolute -top-1 -right-12 w-10 h-10 object-contain opacity-70 select-none pointer-events-none"
            />
            <p className="font-serif italic text-[24px] text-[#143F4A] leading-none">
              Who We Are
            </p>
          </div>

          {/* Main Heading */}
          <h2 className="text-[44px] md:text-[52px] font-serif font-bold text-[#143F4A] leading-tight mt-3 mb-6">
            Why We're Best Agency
          </h2>

          {/* Descriptive Copy Paragraphs */}
          <div className="flex flex-col gap-5 max-w-2xl text-justify">
            <p className="text-[16px] md:text-[17px] leading-relaxed font-serif text-[#143F4A]/90">
              We go beyond bookings to bring destinations, experiences, and
              inspiration together in one seamless place helping you plan
              journeys that feel effortless and exciting.
            </p>

            <p className="text-[15px] md:text-[16px] leading-relaxed text-gray-500 font-sans">
              From vibrant city escapes to peaceful nature retreats, Wanderly
              blends smart technology with human-centered design to create
              travel experiences that feel personal, flexible, and meaningful.
            </p>
          </div>

          {/* Founder Execution Signature block */}
          <div className="mt-8 flex flex-col items-start">
            <img
              src={signatureImg}
              alt="Signature"
              className="h-14 w-auto object-contain mb-2 pointer-events-none select-none"
            />
            <h3 className="text-[26px] font-serif font-bold tracking-tight">
              Robert Harringson
            </h3>
            <p className="text-gray-400 text-[14px] font-medium mt-0.5">
              Founder at Wanderly
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
