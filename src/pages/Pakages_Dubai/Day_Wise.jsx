import React, { useState } from "react";

const Day_Wise  = () => {
  const [activeDay, setActiveDay] = useState(1);

  const days = [
    "Day 01",
    "Day 02",
    "Day 03",
    "Day 04",
    "Day 05",
    "Day 06",
    "Day 07",
  ];

  return (
    <div className="w-342 px-4 md:px-8 py-10 bg-white rounded-[20px] mt-10  ml-18">

      {/* Heading */}
      <h1 className="text-[34px] font-serif font-semibold text-[#143F4A] ">
        Day-wise Itinerary
      </h1>

      {/* Days Tabs */}
      <div className="w-full border border-gray-200 rounded-full bg-white p-2 flex items-center justify-between overflow-x-auto shadow-sm  mt-8">

        {days.map((day, index) => (
          <button
            key={index}
            onClick={() => setActiveDay(index + 1)}
            className={`px-8 py-4 rounded-full text-[18px] font-medium transition-all duration-300 whitespace-nowrap

              ${
                activeDay === index + 1
                  ? "bg-[#143F4A] text-white shadow-md"
                  : "text-[#143F4A] hover:bg-[#143F4A] hover:text-white"
              }
            `}
          >
            {day}
          </button>
        ))}

      </div>

      {/* Card */}
      <div className="mt-8 border border-gray-200 rounded-[20px] bg-white p-8">

        {/* Top */}
        <div className="flex items-start gap-4">

          {/* Number Box */}
          <div className="w-[56px] h-[56px] rounded-[14px] bg-[#143F4A] flex items-center justify-center text-white text-[28px] font-semibold">
            01
          </div>

          {/* Content */}
          <div>

            <p className="text-[#143F4A] text-[26px] font-medium">
              Day 1
              <span className="text-[#143F4A] text-[18px] ml-2">
                (Departure: 8:00 am - 8:30am)
              </span>
            </p>

            <h2 className="text-[32px] font-bold text-[#143F4A] leading-tight mt-1 font-serif">
              Arrival & Welcome to Dubai
            </h2>

          </div>
        </div>

        {/* Description */}
        <p className="text-gray-500 text-[20px] leading-[38px] mt-8 max-w-[95%]">
          Begin your luxury journey in Dubai with a warm welcome and seamless
          airport arrival experience. After landing, relax as you are
          transferred to your premium hotel, followed by a leisurely evening to
          unwind and explore the vibrant marina surroundings.
        </p>

        {/* Included */}
        <h3 className="text-[#143F4A] text-[28px] font-bold mt-10 font-serif">
          What’s Included Today:
        </h3>

        {/* List */}
        <ul className="mt-5 space-y-4 text-gray-500 text-[20px]">
          <li>• Airport pickup with luxury private transfer</li>
          <li>• Smooth check-in at a 5-star hotel with scenic views</li>
          <li>• Welcome dinner at a premium restaurant</li>
          <li>• Free evening to explore Dubai Marina at your own pace</li>
        </ul>

        {/* View Details */}
        <div className="flex justify-end mt-8">
          <button className="text-[#143F4A] text-[28px] underline hover:text-[#0f3139] transition">
            View details
          </button>
        </div>

      </div>
    </div>
  );
};

export default Day_Wise;