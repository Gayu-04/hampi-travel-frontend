import { useState } from "react";

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="w-full bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <h1 className="text-2xl font-bold text-sky-500">
          Hampi Travel
        </h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 font-medium">
          <li className="cursor-pointer hover:text-sky-500">Home</li>
          <li className="cursor-pointer hover:text-sky-500">Upcoming</li>
          <li className="cursor-pointer hover:text-sky-500">Categories</li>
          <li className="cursor-pointer hover:text-sky-500">Contact Us</li>
        </ul>

        {/* Desktop Login */}
        <button className="hidden md:block bg-sky-500 text-white px-5 py-2 rounded-3xl hover:bg-sky-600">
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
          <div className="hover:text-sky-500">Home</div>
          <div className="hover:text-sky-500">Upcoming</div>
          <div className="hover:text-sky-500">Categories</div>
          <div className="hover:text-sky-500">Contact Us</div>
          <button className="w-full bg-sky-500 text-white py-2 rounded-3xl">
            Log In
          </button>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
