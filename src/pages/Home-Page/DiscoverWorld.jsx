import React from "react";
import bgImg from "../../assets/Images/what-about-ha-long-bay-1 1.svg";
import Navbar from "../../components/layout/Navbar";

const DiscoverWorld = () => {
  return (
    <div className="w-full">
      
      <div
        className="h-[53rem] w-full bg-cover bg-center flex flex-col justify-between text-white px-12"
        style={{ backgroundImage: `url(${bgImg})` }}
      >
        {/* Header container start */}
        <div className="h-[90px] w-full">
 <Navbar isHomePage={true} />
        </div>
        {/* Header container end */}

        {/* Content Box Start*/}
        <div className="flex justify-between">
          <div className="w-[48rem] h-[20rem] m-0">
            <p className="text-[30px]">Let's Feel Your Trip</p>

            <h1 className="text-[55px] mb-7">
              Discover The World <br />
              With Our Guide At <br />
              A Time.
            </h1>

            <a
              href="#"
              className="bg-[#1CA8CB] py-4 px-5 text-xl rounded-full"
            >
              Explore Tours →
            </a>
          </div>

          <div className="w-[95px] h-[330px] bg-[rgba(255,255,255,0.4)] rounded-full mt-2 flex flex-col justify-center items-center gap-4">
            <img
              src="src/assets/Icons/ArrowRight.svg"
              alt="arrow up"
              className="rotate-270 w-4 h-4"
            />
            <img
              src="src/assets/Images/Ellipse 2834.svg"
              alt="img1"
              className="w-14 h-14"
            />
            <img
              src="src/assets/Images/Ellipse 2835.svg"
              alt="img1"
              className="w-14 h-14"
            />
            <img
              src="src/assets/Images/Ellipse 2836.svg"
              alt="img1"
              className="w-14 h-14"
            />
            <img
              src="src/assets/Icons/ArrowRight.svg"
              alt="arrow down"
              className="rotate-90 w-4 h-4"
            />
          </div>
        </div>
        {/* Content Box end*/}

        {/* Travel Details Section Start */}
        <div className="w-full h-44 flex flex-col pl-25">

          {/* Upper Travel Section */}
          <div className="w-[44rem] h-[4.5rem] border-t-[14px] border-r-[14px] border-l-[14px] border-white/50 rounded-t-[34px]">
            <div className="bg-white h-full w-full rounded-t-[20px] px-4 py-2.5 flex justify-evenly gap-6">

              {/* Buttons */}
              {[
                { icon: "hugeicons_airplane-01.svg", label: "Flights" },
                { icon: "hugeicons_hotel-01.svg", label: "Hotels" },
                { icon: "hugeicons_school-bus.svg", label: "Trains" },
                { icon: "hugeicons_bus-03.svg", label: "Bus" },
                { icon: "hugeicons_car-03.svg", label: "Car Rental" },
              ].map((item, i) => (
                <div
                  key={i}
                  className="w-auto h-[45px] rounded-3xl bg-[rgba(231,231,231,1)] text-[#143F4A]
                  hover:bg-[#143F4A] hover:text-white
                  flex items-center justify-evenly p-1.5 gap-2"
                >
                  <div className="bg-white rounded-3xl p-2">
                    <img
                      className="h-[18px] w-[18px]"
                      src={`src/assets/Icons/${item.icon}`}
                      alt="icon"
                    />
                  </div>
                  <p className="text-[15px] mr-2">{item.label}</p>
                </div>
              ))}

            </div>
          </div>

          {/* Lower Travel Section */}
          <div className="w-[56rem] h-28 border-r-[14px] border-l-[14px] border-white/50 rounded-tr-[32px]">
            <div className="bg-white h-full w-full rounded-tr-[20px] px-4 py-2.5 mr-4 flex items-center">

              {/* Reusable Block */}
              {[
                {
                  icon: "hugeicons_gps-01.svg",
                  title: "Select",
                  sub: "Destination",
                },
                {
                  icon: "hugeicons_calendar-03.svg",
                  title: "Date",
                  sub: "Depart",
                },
                {
                  icon: "hugeicons_calendar-03.svg",
                  title: "Date",
                  sub: "Return",
                },
                {
                  icon: "hugeicons_user.svg",
                  title: "2 Adults, 0 Child",
                  sub: "Travelers",
                },
              ].map((item, i) => (
                <div key={i} className="w-auto h-[45px] flex gap-3">
                  <div className="pl-4 pt-2">
                    <img
                      className="h-[22px] w-[22px]"
                      src={`src/assets/Icons/${item.icon}`}
                      alt="icon"
                    />
                  </div>

                  <div className="mr-8">
                    <p className="text-[#143F4A] text-[20px]">
                      {item.title}
                    </p>
                    <p className="text-[#7E7E7E] text-[14px]">
                      {item.sub}
                    </p>
                  </div>

                  {i !== 4 && (
                    <div className="h-[35px] border border-[#7E7E7E80] mt-2.5 mr-4"></div>
                  )}
                </div>
              ))}

              {/* Search Button */}
              <div className="h-[50px] w-[50px] ml-4 border border-black bg-[#143F4A] rounded-full flex items-center justify-center">
                <img
                  className="h-[22px] w-[22px]"
                  src="src/assets/Icons/hugeicons_search-01.svg"
                  alt="search icon"
                />
              </div>

            </div>
          </div>

        </div>
        {/* Travel Details Section End */}
      </div>
    </div>
  );
};

export default DiscoverWorld;