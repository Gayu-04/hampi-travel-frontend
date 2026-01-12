
import jaipur from "../assets/jaipur.png";
import goa from "../assets/goa.png";
import coorg from "../assets/coorg.png";
import varanasi from "../assets/varanasi.png";
import kochi from "../assets/kochi.png";
import leh from "../assets/leh.png";

function Explore() {

  const cities = [
    {
      name: "Jaipur",
      description: "Royal palaces, forts, and vibrant local bazaars.",
      image: jaipur,
      tag: "Heritage",
    },
    {
      name: "Goa",
      description: "Golden beaches, nightlife, and Portuguese charm.",
      image: goa,
      tag: "Beach",
    },
    {
      name: "Coorg",
      description: "Misty hills, coffee plantations, and lush greenery.",
      image: coorg,
      tag: "Hill Station",
    },
    {
      name: "Varanasi",
      description: "Ancient ghats, temples, and spiritual experiences.",
      image: varanasi,
      tag: "Spiritual",
    },
    {
      name: "Kochi",
      description: "Backwaters, colonial history, and coastal beauty.",
      image: kochi,
      tag: "Nature",
    },
    {
      name: "Leh Ladakh",
      description: "High-altitude deserts, monasteries, and scenic roads.",
      image: leh,
      tag: "Adventure",
    },
  ];

  return (
    <section className="bg-white pt-6 py-12">
      <div className="max-w-7xl mx-auto px-6">

        {/* HEADER */}
        <div className="text-center mb-10">
          <p className="text-sm uppercase tracking-widest text-sky-500 mb-2">
            Explore
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Discover Incredible Indian Cities
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore heritage, beaches, hill stations, and spiritual destinations across India.
          </p>
        </div>

        {/* CITY CARDS */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {cities.map((city, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl shadow-md hover:shadow-xl transition overflow-hidden"
            >
              <div className="h-32">
                <img
                  src={city.image}
                  alt={city.name}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="p-3">
                <h3 className="text-base font-semibold text-gray-900 mb-0.5">
                  {city.name}
                </h3>
                <p className="text-gray-500 text-[11px] mb-2 leading-snug">
                  {city.description}
                </p>

                <div className="flex justify-between items-center text-[11-px]">
                  <span className="text-sky-500 font-semibold text-xs">
                    {city.tag}
                  </span>
                  <button className="text-xs font-medium text-gray-900 hover:text-sky-500">
                    View Trips →
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* SEE ALL BUTTON */}
        <div className="text-center mt-5">
          <button className="px-8 py-3 rounded-full bg-sky-500 text-white hover:bg-gray-800 transition">
            See All
          </button>
        </div>

      </div>
    </section>
  );
}

export default Explore;
