
import BackBlueImg from "../../assets/Images/BackBlueImg.svg";
// import plane from "../../assets/icons/plane.png";
import Airplane from "../../assets/icons/Airplane.svg";


const About = () => {
  return (
    <div
      className="w-full py-16 px-6 md:px-14 bg-cover bg-center  "
      style={{
        backgroundImage: `url(${BackBlueImg})`,
      }}
    >

      {/* Heading */}
      <div className="flex items-center gap-4 mb-10 ml-15 mr-17">
        <h1 className="text-[34px] font-serif font-semibold text-[#143F4A] ">
          About This Tour
        </h1>

        <img
          src={Airplane}
          alt=""
          className="w-[68px] h-[68px] opacity-20"
        />
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-7 ml-15 mr-17">

        {/* Inclusions */}
        <div className="bg-white border border-gray-200 rounded-[24px] px-8 py-9 min-h-[500px]">
          <h2 className="text-[30px] font-medium text-[#22C7A0] underline font-serif mb-8">
            Inclusions
          </h2>




          <ul className="space-y-2 text-[20px] text-[#7A7A7A] leading-[30px]">
            <li>• 6 nights at 5-star waterfront hotel</li>
            <li>• Daily gourmet breakfast</li>
            <li>• All airport & tour transfers</li>
            <li>• Skip-the-line Burj Khalifa tickets</li>
            <li>• Luxury desert safari experience</li>
            <li>• Yacht dinner cruise</li>
            <li>• Professional English-speaking guide</li>
            <li>• All entrance fees & permits</li>
          </ul>

        </div>

        {/* Exclusions */}
        <div className="bg-white border border-gray-200 rounded-[24px] px-8 py-9 min-h-[500px]">

          <h2 className="text-[30px] font-medium text-[#E1251B] underline font-serif mb-8">
            Exclusions
          </h2>

          <ul className="space-y-2 text-[20px] text-[#7A7A7A] leading-[30px]">
            <li>• International flights</li>
            <li>• Travel insurance</li>
            <li>• Personal expenses</li>
            <li>• Optional activities</li>
            <li>• Visa fees (if applicable)</li>
            <li>• Tips & gratuities</li>
          </ul>

        </div>

      </div>
    </div>
  );
};

export default About;