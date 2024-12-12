import React from 'react';
import rbg1 from './assets/lap1.jpg';
import * as Icons from 'react-bootstrap-icons';

const Home = () => {
  return (
    <div className="w-full bg-gray-100" id="home">
      {/* Main Content Section */}
      <div className="flex flex-col md:flex-row md:h-screen pt-10 font-serif italic">
        {/* Left Side - Text Section */}
        <div className="flex-1 py-10 md:py-20 px-6 md:px-10">
          <div className="py-5 text-left">
            <span className="text-indigo-900 text-6xl md:text-8xl">27+</span>
            <span className="block text-slate-900 text-4xl md:text-5xl font-mono mt-2">Almas Tech</span>
            <span className="text-indigo-900 text-4xl md:text-6xl font-bold mt-2">COMPANY</span>
          </div>
          <div className="flex justify-center md:justify-start items-center mt-6 md:mt-12">
            <button className="text-black w-64 md:w-80 lg:w-96 shadow-lg hover:scale-105 bg-gray-300 ring ring-offset-2 ring-black flex items-center justify-center rounded-full p-2">
              <Icons.Star className="mr-2" /> Premium Satisfaction <Icons.Star className="ml-2" />
            </button>
          </div>
          <div className="py-5 text-left md:mt-10">
            <p className="italic text-lg text-black">
              There is nothing serious about this website. Contact the developer for future collaboration. Check the <span><a href="#service" className="underline text-indigo-700">Services</a></span> we offer that make us stand out. We ensure premium satisfaction.
            </p>
          </div>
        </div>

        {/* Buttons Section - Mobile Only */}
        <div className="flex md:hidden items-center justify-center mt-4 mb-4 space-x-4">
          <a
            href="#reviews"
            className="font-bold bg-indigo-900 text-white transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-lg"
          >
            Reviews
          </a>
          <a
            href="#footer"
            className="font-bold bg-indigo-900 text-white transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-lg"
          >
            Contact
          </a>
        </div>

        {/* Right Side - Image Section */}
        <div className="flex-1 w-full md:w-auto h-64 md:h-screen">
          <img src={rbg1} alt="Laptop" className="w-full h-full object-cover" />
        </div>
      </div>
    </div>
  );
};

export default Home;
