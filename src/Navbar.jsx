// src/components/Navbar.js
import React, { useState } from "react";
import Earth from "./public/planet.png";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false); // State to control mobile menu visibility
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const onClickHandler = () => {
    navigate('/about');
  };

  return (
    <nav className="text-white p-4 fixed w-full z-20 top-0  bg-opacity-70 ">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo Section */}
        <Link to="/" className="text-2xl md:text-5xl font-bold text-white flex items-center">
          ST
          <img src={Earth} alt="Earth Icon" className="globe w-10 h-10 md:w-14 md:h-14 ml-1 opacity-60" />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6 text-lg">
          <Link to="/about" className="hover:text-gray-400">About</Link>
          <Link to="/chartinfo" className="hover:text-gray-400">Charts</Link>
          <Link to="/signup" className="bg-orange-600 hover:bg-orange-700 text-white py-1 px-4 rounded-full">
            Sign Up
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-gray-400 focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden mt-2 p-4 rounded-lg  bg-opacity-90">
          <Link to="/about" className="block py-2 text-center text-white hover:text-gray-400">
            About
          </Link>
          <Link to="/chartinfo" className="block py-2 text-center text-white hover:text-gray-400">
            Charts
          </Link>
          <Link to="/signup" className="block py-2 text-center bg-orange-600 hover:bg-orange-700 text-white rounded-full mt-2">
            Sign Up
          </Link>
        </div>
      )}
    </nav>
  );
}
