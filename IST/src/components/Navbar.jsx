/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom"; // Only if using React Router
import logo from "../assets/logo.png";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Gift a Therapy", path: "/gift" },
    { name: "Testimonials", path: "/testi" },
    { name: "Gallery", path: "/gallery" },
    { name: "Blog", path: "/blog" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav
      className={`fixed w-full z-30 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-lg text-gray-900" : "bg-transparent text-gray-950"
      }`} style={{backgroundColor:"#2C7873"}}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-1 lg:px-2">
        <div className="flex justify-between items-center h-16 px-0">
          {/* Left: Logo */}
          <div className="flex items-center space-x-1">
            <Link to="/">
              <img src={logo} alt="Logo" className="h-10" />
            </Link>
            <Link to="/" className="text-lg font-bold hover:text-gray-200 text-white">
              Inner Spark Therapy
            </Link>
          </div>

          {/* Right: Menu Items */}
          <div className="flex items-center">
            <div className="hidden md:flex space-x-8">
              {navLinks.map((item, index) => (
                <Link
                  key={index}
                  to={item.path}
                  className="hover:text-gray-200 text-white relative group"
                >
                  {item.name}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-300"></span>
                </Link>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="focus:outline-none text-white"
              >
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d={
                      isMenuOpen
                        ? "M6 18L18 6M6 6l12 12"
                        : "M4 6h16M4 12h16M4 18h16"
                    }
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden" style={{ backgroundColor: "#2C7873" }}>
          {navLinks.map((item, index) => (
            <Link
              key={index}
              to={item.path}
              className="block px-4 py-2 hover:text-gray-200 relative group text-white" 
            >
              {item.name}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gray-200 group-hover:w-full transition-all duration-300"></span>
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}

export default Navbar;
