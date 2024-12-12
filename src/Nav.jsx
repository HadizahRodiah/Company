import React, { useState, useEffect } from 'react';
import * as Icons from 'react-bootstrap-icons';

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Disable body scrolling when menu is open
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : 'auto';
    return () => {
      document.body.style.overflow = 'auto'; // Cleanup overflow on unmount
    };
  }, [isMenuOpen]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <nav className="bg-white text-black border-b border-indigo-900 px-6 md:px-16 lg:px-24 w-full fixed top-0 left-0 z-50 shadow-md">
        <div className="container mt-2 py-4 flex justify-between items-center">
          {/* Logo Section */}
          <div className="text-2xl font-bold flex items-center">
            <span className="text-black text-4xl font-serif">27+</span>
            <span className="ml-2 md:inline">Almas Tech</span>
          </div>

          {/* Navigation Links for Desktop */}
          <div className="hidden md:flex space-x-8 font-semibold">
            <a href="#home" className="hover:text-indigo-700 transition-colors duration-300">Home</a>
            <a href="#about" className="hover:text-indigo-700 transition-colors duration-300">About</a>
            <a href="#service" className="hover:text-indigo-700 transition-colors duration-300">Service</a>
            <a href="#project" className="hover:text-indigo-700 transition-colors duration-300">Project</a>
            <a href="#reviews" className="hover:text-indigo-700 transition-colors duration-300">Reviews</a>
          </div>

          {/* Contact for Desktop */}
          <div className="hidden md:flex items-center space-x-4">
            <a
              href="#footer"
              className="font-bold text-white px-4 py-2 rounded-full bg-indigo-900 hover:bg-indigo-700 transition duration-300"
            >
              Contact
            </a>
          </div>

          {/* Hamburger Icon for Mobile */}
          <div className="md:hidden">
            <button onClick={toggleMenu} aria-expanded={isMenuOpen} aria-label="Toggle Navigation" className="text-slate-900 focus:outline-none">
              {isMenuOpen ? <Icons.X size={30} /> : <Icons.List size={30} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <>
            {/* Overlay */}
            <div
              className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm z-40"
              onClick={toggleMenu}
            ></div>

            {/* Mobile Menu Content */}
            <div className="fixed top-0 right-0 w-3/4 max-w-xs bg-white shadow-lg z-50 h-full p-6 overflow-y-auto">
              <div className="flex flex-col space-y-6">
                <div className="text-2xl font-bold flex items-center">
                  <span className="text-black text-4xl font-serif">27+</span>
                  <span className="ml-2">Almas Tech</span>
                </div>
                <a href="#home" className="block py-2 text-center font-bold hover:text-indigo-700">Home</a>
                <a href="#about" className="block py-2 text-center font-bold hover:text-indigo-700">About</a>
                <a href="#service" className="block py-2 text-center font-bold hover:text-indigo-700">Service</a>
                <a href="#project" className="block py-2 text-center font-bold hover:text-indigo-700">Project</a>
                <a href="#reviews" className="block py-2 text-center font-bold hover:text-indigo-700">Reviews</a>
                <a
                  href="#footer"
                  className="mt-4 mx-auto font-bold text-white px-4 py-2 w-full rounded-full bg-indigo-900 hover:bg-indigo-700 transition duration-300 text-center"
                >
                  Contact
                </a>
              </div>
            </div>
          </>
        )}
      </nav>
    </>
  );
};

export default Nav;
