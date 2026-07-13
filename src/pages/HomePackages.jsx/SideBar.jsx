import { useState } from "react";
import { ChevronDown, ChevronRight } from "lucide-react";

const Sidebar = () => {
  const [openRegion, setOpenRegion] = useState("Asia");
  const [selected, setSelected] = useState([]);
  const [price, setPrice] = useState(1120);

  const destinations = {
    Africa: ["Egypt", "Kenya", "Morocco"],
    Asia: [
      "Dubai",
      "Japan",
      "Thailand",
      "Maldives",
      "Vietnam",
      "Sri Lanka",
      "South Korea",
      "Hong Kong",
      "Singapore",
      "Bali",
    ],
    Europe: ["France", "Italy", "Germany"],
    "Middle East": ["Qatar", "Oman"],
    "North America": ["USA", "Canada"],
    Oceania: ["Australia", "New Zealand"],
  };

  // 👇 ORDER FIXED HERE
  const regionOrder = [
    "Africa",
    "Asia",
    "Europe",
    "Middle East",
    "North America",
    "Oceania",
  ];

  const toggleSelect = (item) => {
    setSelected((prev) =>
      prev.includes(item)
        ? prev.filter((i) => i !== item)
        : [...prev, item]
    );
  };

  return (
    <div className="w-full h-full  border-gray-800 overflow-y-auto bg-white p-10 mt-5 ml-5  rounded-4xl shadow-md ">

      {/* Header */}
      <div className="flex justify-between items-center mb-4  border-gray-800">
        <h2 className="text-lg font-semibold">Filter</h2>
        <button
          onClick={() => setSelected([])}
          className="text-sm text-gray-400 hover:text-black"
        >
          Clear All
        </button>
      </div>
      

      {/* Destination */}
      <div className="mb-6">
        <h3 className="font-medium mb-3">Destination</h3>

        {regionOrder.map((region) => {
          const isOpen = openRegion === region;

          return (
            <div key={region} className="mb-2">
              <div
                onClick={() => setOpenRegion(isOpen ? null : region)}
                className="flex justify-between items-center cursor-pointer text-sm font-medium"
              >
                <span>{region}</span>
                {isOpen ? (
                  <ChevronDown size={16} />
                ) : (
                  <ChevronRight size={16} />
                )}
              </div>

              {isOpen && (
                <div className="ml-3 mt-2 space-y-2 max-h-40 overflow-y-auto">
                  {destinations[region].map((place) => (
                    <label
                      key={place}
                      className="flex items-center gap-2 text-sm"
                    >
                      <input
                        type="checkbox"
                        checked={selected.includes(place)}
                        onChange={() => toggleSelect(place)}
                        className="accent-teal-900"
                      />
                      {place}
                    </label>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </div>
      <hr />

      {/* Tour Type */}
      <div className="mb-6">
        <h3 className="font-medium mb-3">Tour Type</h3>
        <div className="flex flex-wrap gap-2">
          {["Walking", "Airbirds", "Hiking", "Cruises", "Wildlife"].map(
            (type) => (
              <span
                key={type}
                className="px-3 py-1 text-sm bg-gray-100 rounded-full cursor-pointer hover:bg-teal-100 border"
              >
                {type}
              </span>
            )
          )}
        </div>
      </div>
      

      {/* Pricing */}
      <div className="relative border border-gray-300 rounded-md p-4"  >
      <h3 className="font-medium mb-3">Pricing</h3>

        {/* Moving Price Tag */}
        <div
          className="  w-95px h-[25px] absolute -top-0 transform -translate-x-1/2"
          style={{
            left: `${((price - 65) / (2450 - 65)) * 100}%`,
          }}
        >
          <div className="relative bg-teal-900 text-white px-2 py-1 rounded-md text-sm font-semibold">
            ${price}

            {/* Triangle */}
            <div className="absolute left-1/2 -bottom-2 transform -translate-x-1/2 w-0 h-0 border-l-[8px] border-l-transparent border-r-[8px] border-r-transparent border-t-[8px] border-t-teal-900"></div>
          </div>
        </div>

        {/* Slider */}
        <input
          type="range"
          min="65"
          max="2450"
          value={price}
          onChange={(e) => setPrice(Number(e.target.value))}
          className="w-full accent-teal-900"
        />
         {/* Min & Max */}
        <div className="flex justify-between mt-2 text-sm font-medium">
          <span>$65</span>
          <span>$2,450</span>
        </div>
      </div>
      
      {/* Discount */}
      <div>
        <h3 className="font-medium mb-3">Discount & Offer</h3>
        <div className="space-y-2 text-sm">
          <label className="flex items-center gap-2">
            <input type="checkbox" className="accent-teal-900" />
            Last Minute Deal
          </label>
          <label className="flex items-center gap-2">
            <input type="checkbox" className="accent-teal-900" />
            Special Offer
          </label>
        </div>
       
      </div>

    </div>
    
  );
};

export default Sidebar;