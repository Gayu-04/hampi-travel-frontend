import { useState } from "react";

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="w-full bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <h1 className="text-2xl font-bold text-blue-600">
          Hampi Travel
        </h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 font-medium">
          <li className="cursor-pointer hover:text-blue-600">Home</li>
          <li className="cursor-pointer hover:text-blue-600">Upcoming</li>
          <li className="cursor-pointer hover:text-blue-600">Categories</li>
          <li className="cursor-pointer hover:text-blue-600">Contact Us</li>
        </ul>

        {/* Desktop Login */}
        <button className="hidden md:block bg-blue-600 text-white px-5 py-2 rounded-md hover:bg-blue-700">
          Log In
        </button>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-white px-6 pb-4 space-y-4 font-medium">
          <div className="hover:text-blue-600">Home</div>
          <div className="hover:text-blue-600">Upcoming</div>
          <div className="hover:text-blue-600">Categories</div>
          <div className="hover:text-blue-600">Contact Us</div>
          <button className="w-full bg-blue-600 text-white py-2 rounded-md">
            Log In
          </button>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
