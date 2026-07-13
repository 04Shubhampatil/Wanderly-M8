import SideBar from "./SideBar";
import TravelCard from "./TravelCard";

export default function HomePackages() {
  return (
    <div className="flex gap-6 p-6 bg-[#f8f8f8]">

      {/* LEFT SIDEBAR */}
      <div className="w-[25%]">
        <SideBar />
      </div>

      {/* RIGHT CARDS */}
      <div className="w-[75%]">
        <TravelCard />
      </div>

    </div>
  );
}