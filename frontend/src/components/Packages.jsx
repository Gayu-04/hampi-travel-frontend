import { useState } from "react"; 
import templeImg from "../assets/temple.png";
import beachImg from "../assets/beach.png";

function Packages() {
  const tabs = ["Highlight", "Itinerary", "Available Dates", "Costing"];
  const [activeTab, setActiveTab] = useState("Highlight");

  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

        {/* LEFT CONTENT */}
        <div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">
            Hampi Gokarna <br />
            Murudeshwar Tour <br />
            Package – 3 Days <br />
            Group Trip
          </h1>

          <p className="text-gray-600 max-w-xl mb-8">
            The Hampi–Gokarna–Murudeshwar circuit is one of Karnataka’s most
            rewarding short getaways, offering a rare blend of heritage ruins,
            coastal beauty, adventure experiences, and spiritual calm. This
            3-day group tour.
          </p>

          {/* TAB BUTTONS */}
          <div className="flex flex-wrap gap-3 mb-10">
            {["Highlight", "Itinerary", "Available Dates", "Costing"].map(
              (tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-5 py-2 rounded-full text-sm transition
                    ${
                      activeTab === tab
                        ? "bg-sky-500 text-white"
                        : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                    }`}
                >
                  {tab}
                </button>
              )
            )}
          </div>

          {/* TAB CONTENT */}
          <div className="bg-white rounded-3xl p-8 text-gray-800 min-h-[200px] shadow-md">
            {activeTab === "Highlight" && (
              <div className="grid grid-cols-2 gap-6">
                <ul className="space-y-3 font-medium">
                  <li>Coracle Ride</li>
                  <li>Hampi Ruins</li>
                  <li>Honnavar Backwater</li>
                </ul>

                <ul className="space-y-3 font-medium">
                  <li>Virupaksha Temple</li>
                  <li>Murudeshwar Temple</li>
                  <li>Om Beach, Gokarna</li>
                </ul>
              </div>
            )}

            {activeTab === "Itinerary" && (
              <div>
                <h2 className="font-bold text-lg mb-2">Day-wise Plan:</h2>
                <ul className="list-disc list-inside space-y-2">
                  <li>
                    <strong>Day 1:</strong> Arrival at Hampi, visit Virupaksha Temple
                  </li>
                  <li>
                    <strong>Day 2:</strong> Explore Hampi ruins, coracle ride
                  </li>
                  <li>
                    <strong>Day 3:</strong> Murudeshwar Temple & Om Beach visit
                  </li>
                </ul>
              </div>
            )}

            {activeTab === "Available Dates" && (
              <div>
                <p>Next available dates:</p>
                <ul className="list-disc list-inside">
                  <li>Jan 15 - Jan 17</li>
                  <li>Feb 10 - Feb 12</li>
                  <li>Mar 05 - Mar 07</li>
                </ul>
              </div>
            )}

            {activeTab === "Costing" && (
              <div>
                <p>Price per person:</p>
                <ul className="list-disc list-inside">
                  <li>Standard: ₹12,000</li>
                  <li>Premium: ₹18,000</li>
                  <li>Luxury: ₹25,000</li>
                </ul>
              </div>
            )}
          </div>
        </div>

        {/* RIGHT IMAGES */}
        <div className="relative flex gap-6 justify-center transform translate-x-10">
          <img
            src={templeImg}
            alt="Temple"
            className="w-64 h-[420px] object-cover rounded-[120px]"
          />

          <img
            src={beachImg}
            alt="Beach"
            className="w-64 h-[420px] object-cover rounded-[120px] mt-16"
          />
        </div>

        {/* RIGHT SIDE Dots */}
        <div className="hidden md:flex flex-col gap-4 absolute right-0 top-1/2 -translate-y-1/2 pr-50">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`w-4 h-4 rounded-full transition
                ${activeTab === tab ? "bg-sky-500" : "bg-gray-300"}`}
              title={tab}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Packages;
