
// import { CheckCircle } from "lucide-react";
import img from "../../assets/Images/3D Morph Lines 6.svg"
import Accomodation from "../../assets/Icons/Accomodation.svg";
import Meal from "../../assets/Icons/Meals.svg";
import transportation from "../../assets/Icons/Transportation.svg";
import Group from "../../assets/Icons/Group-Size.svg";
import Meals from "../../assets/Icons/Meal-1.svg";
import Category from "../../assets/Icons/Category.svg";
import age from "../../assets/Icons/Age-Range.svg";
import Breakfast from "../../assets/Icons/Meal-2.svg";
import Burj from "../../assets/Icons/Burj.svg";
import Luxury from "../../assets/Icons/Luxury.svg";
import Marina from "../../assets/Icons/Marina.svg";
import Palm from "../../assets/Icons/Palm.svg";
import Gold from "../../assets/Icons/Gold.svg";
import Premium from "../../assets/Icons/Premium.svg";
import tick from "../../assets/Icons/tick.svg";
import photo1 from "../../assets/Images/photo1.svg";
import photo2 from "../../assets/Images/photo2.svg";
import photo3 from "../../assets/Images/photo3.svg";
import photo4 from "../../assets/Images/photo4.svg";
import tick2 from "../../assets/Icons/tick2.svg";




const About_This_Tour = () => {
  return (
    <div className=" w-full flex justify-between min-h-screen   bg-cover bg-center border border-white "
      style={{
        backgroundImage: `url(${img})`,
      }}>
      <div className=" flex justify-between  ml-20 mr-20  w-full mx-auto grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-10" >


        {/* LEFT SIDE */}
        <div  >

          {/* ABOUT */}
          <h2 className="text-[34px] font-serif font-semibold text-[#143F4A]  ">
            About This Tour
          </h2>

          <p className="text-[#6b7280] text-[14px] leading-[22px] mt-4 max-w-[720px] align-justify mb-5">
            Experience the pinnacle of luxury in Dubai, where breathtaking modern
            architecture meets rich Arabian heritage. From the world's tallest building
            to the golden dunes of the desert, this carefully curated 7-day journey
            combines opulent accommodations, exclusive experiences, and unforgettable
            moments in one of the world's most glamorous destinations.
          </p>

          <p className="text-[#6b7280] text-[14px] leading-[22px] mt-3 max-w-[720px] mb-5">
            Whether you're seeking adventure in the desert, world-class shopping, or
            serene beachfront relaxation, this tour delivers an unparalleled blend of
            luxury and authenticity.
          </p>

          {/* INFO BOX */}

          <div className="w-180 border border-gray-200 rounded-[20px] p-8 mr-5  bg-white">

            <div className="grid grid-cols-3 gap-y-10 gap-x-12 ">

              {/* 1 */}
              <div className="flex items-start gap-3   ">
                <img src={Accomodation} className="w-6 h-6" />
                <div>
                  <p className="text-gray-400 text-sm">Accomodation</p>
                  <p className="text-[#143F4A] font-semibold">5 Star Hotel</p>
                </div>
              </div>

              {/* 2 */}
              <div className="flex items-start gap-3">
                <img src={Meal} className="w-6 h-6" />
                <div>
                  <p className="text-gray-400 text-sm">Meals</p>
                  <p className="text-[#143F4A] font-semibold">Breakfast & Dinner</p>
                </div>
              </div>

              {/* 3 */}
              <div className="flex items-start gap-3">
                <img src={transportation} className="w-6 h-6" />
                <div>
                  <p className="text-gray-400 text-sm">Transportation</p>
                  <p className="text-[#143F4A] font-semibold">Taxi & Car</p>
                </div>
              </div>

              {/* 4 */}
              <div className="flex items-start gap-3">
                <img src={Group} className="w-6 h-6" />
                <div>
                  <p className="text-gray-400 text-sm">Group Size</p>
                  <p className="text-[#143F4A] font-semibold">10-20</p>
                </div>
              </div>

              {/* 5 */}
              <div className="flex items-start gap-3">
                <img src={Meals} className="w-6 h-6" />
                <div>
                  <p className="text-gray-400 text-sm">Meals</p>
                  <p className="text-[#143F4A] font-semibold">Breakfast & Dinner</p>
                </div>
              </div>

              {/* 6 */}
              <div className="flex items-start gap-3">
                <img src={Category} className="w-6 h-6" />
                <div>
                  <p className="text-gray-400 text-sm">Category</p>
                  <p className="text-[#143F4A] font-semibold">Walking</p>
                </div>
              </div>

              {/* 7 */}
              <div className="flex items-start gap-3">
                <img src={age} className="w-6 h-6" />
                <div>
                  <p className="text-gray-400 text-sm">Age Range</p>
                  <p className="text-[#143F4A] font-semibold">18-45 (Year)</p>
                </div>
              </div>

              {/* 8 */}
              <div className="flex items-start gap-3">
                <img src={Breakfast} className="w-6 h-6" />
                <div>
                  <p className="text-gray-400 text-sm">Meals</p>
                  <p className="text-[#143F4A] font-semibold">Breakfast & Dinner</p>
                </div>
              </div>

            </div>

          </div>

          {/* HIGHLIGHTS */}
          <h2 className="text-[30px] font-serif font-semibold text-[#143F4A] mt-10  bg-white">
            Tour Highlights
          </h2>

          <div className="bg-white border border-gray-200 rounded-3xl p-8 space-y-6 mt-5 w-180 ">

            <div className="flex items-start gap-4">
              <img src={Burj} className="w-6 h-6 mt-1" />
              <p className="text-[#7E7E7E]">
                <span className="font-semibold text-[#7E7E7E]">
                  Burj Khalifa & Dubai Mall
                </span>{" "}
                - Visit the world's tallest tower with iconic city views.
              </p>
            </div>

            <div className="flex items-start gap-4">
              <img src={Luxury} className="w-6 h-6 mt-1" />
              <p className="text-[#7E7E7E]">
                <span className="font-semibold text-[#7E7E7E]">
                  Luxury Desert Safari
                </span>{" "}
                - Dune bashing, camel rides & traditional Arabian entertainment.
              </p>
            </div>

            <div className="flex items-start gap-4">
              <img src={Marina} className="w-6 h-6 mt-1" />
              <p className="text-[#7E7E7E]">
                <span className="font-semibold text-[#7E7E7E]">
                  Marina Dinner Cruise
                </span>{" "}
                - Enjoy a scenic evening cruise with buffet dining.
              </p>
            </div>

            <div className="flex items-start gap-4">
              <img src={Palm} className="w-6 h-6 mt-1" />
              <p className="text-[#7E7E7E]">
                <span className="font-semibold text-[#7E7E7E]">
                  Palm Jumeirah & Atlantis
                </span>{" "}
                - Explore Dubai's iconic man-made island and landmarks.
              </p>
            </div>

            <div className="flex items-start gap-4">
              <img src={Gold} className="w-6 h-6 mt-1" />
              <p className="text-[#7E7E7E]">
                <span className="font-semibold text-[#7E7E7E]">
                  Gold & Spice Souk
                </span>{" "}
                - Discover vibrant markets filled with local culture and aromas.
              </p>
            </div>

            <div className="flex items-start gap-4">
              <img src={Premium} className="w-6 h-6 mt-1" />
              <p className="text-[#7E7E7E]">
                <span className="font-semibold text-[#7E7E7E]">
                  Premium Hotel Stay
                </span>{" "}
                - Relax in carefully selected 5-star accommodations.
              </p>
            </div>

          </div>

        </div>

        {/* RIGHT SIDE */}
        <div className="space-y-6 ">

          {/* PRICE CARD */}
          <div className="bg-white border border-gray-200 rounded-3xl p-6 shadow-sm  ">
            <p className="text-13  text-gray-400 ">Starting from</p>

            <h3 className="text-[30px] font-bold text-[#143F4A] mt-1">
              $870.00
              <span className="text-[14px] text-gray-400 ml-1">/Person</span>
            </h3>

            <div className="mt-5 space-y-2 text-[13px]  text-gray-600 ">
              <p className="flex items-center gap-2 mb-3">
              <img src={tick2} alt="tick" className="h-6" />
                Your Safety Is Our Top Priority
              </p>
              <p className="flex items-center gap-2 mb-3">
               <img src={tick2} alt="Tick" className="h-6"/>
                Free cancellation up to 14 days before
              </p>
            </div>

            <button className="w-100 h-13 mt-6 bg-[#143F4A] text-white py-3 rounded-full text-[18px] font-medium ">
              Check Availability
            </button>

            <button className="w-100 h-13 mt-4 border border-[#143F4A] text-[#143F4A] py-3 rounded-full text-[14px] font-medium">
              Submit an Enquiry
            </button>

            <p className="text-[11px] text-gray-400 mt-3 text-center">
              Secure your spot with flexible booking options
            </p>
          </div>

          {/* CUSTOMIZE CARD */}
          <div className="bg-[#eaf4f5] rounded-3xl p-6   ">
            <p className="text-[25px] mt-4 italic text-gray-500">Customize</p>

            <h3 className="text-[44px] font-serif font-semibold text-[#143F4A]">
              Travel Package!
            </h3>

            <ul className="  text-[16px] text-gray-600 space-y-2">
              <li className=" flex gap-2"><img src={tick} alt="Tick" /> Make Your Perfect Package</li> 
              <li className="flex gap-2"><img src={tick} alt="Tick" /> Travel Your Way, Stress-Free</li>
            </ul>

            {/* AVATARS */}
            <div className="flex items-center gap-3 mt-5 h-20 ">
              <div className="flex -space-x-2 ">
                <div className="w-10 h-10  rounded-full "><img src={photo1} alt=""/></div>
                <div className="w-10 h-10 rounded-full"><img src={photo2} alt="" /></div>
                <div className="w-10 h-10 rounded-full"><img src={photo3} alt="" /></div>
                <div className="w-10 h-10 rounded-full"><img src={photo4} alt="" /></div>
              </div>
              <p className="text-[12px] text-gray-600">
                60+ Guide Ready to help You
              </p>
            </div>

            <button className="w-100 h-13  bg-[#143F4A] text-white py-3 rounded-full text-[18px]">
              Customize Package →
            </button>
          </div>

          {/* DOWNLOAD CARD */}
          <div className="bg-[#143F4A] text-white rounded-[18px] p-6">
            <h3 className="text-[16px] font-semibold">
              Download Tour Brochure
            </h3>

            <p className="text-[12px] mt-2 text-gray-200">
              Get the complete itinerary, inclusions, and highlights in one PDF.
            </p>

            <button className="w-full mt-5 bg-white text-[#143F4A] py-3 rounded-full text-[14px] font-medium">
              Download PDF
            </button>

            <p className="text-[11px] mt-2 text-gray-300 text-center">
              Instant download • No spam
            </p>
          </div>

        </div>


      </div>
    </div>
  );
};

export default About_This_Tour;