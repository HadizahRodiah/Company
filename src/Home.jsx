import React from 'react';
import rbg1 from './assets/lap1.jpg';

const Home = () => {
  return (
    <div className='w-full bg-white'>
      {/* Main Content Section */}
      <div className='flex flex-col md:flex-row md:h-screen pt-10 font-serif italic'>
        {/* Left Side - Text Section */}
        <div className='flex-1 py-10 px-5 text-left m-10'>
          <span className='text-indigo-900 text-6xl md:text-8xl'>27+</span>
          <span className='block text-slate-900 text-4xl md:text-5xl font-mono'>Almas Tech</span>
          <span className='text-indigo-900 text-4xl md:text-6xl font-bold'>COMPANY</span>
        </div>

        {/* Right Side - Image Section */}
        <div className='flex-1 w-full md:w-auto h-64 md:h-screen'>
          <img src={rbg1} alt="Laptop" className='w-full h-full object-cover' />
        </div>
      </div>

      {/* Buttons Section - Mobile Only */}
      <div className='flex flex-row md:hidden items-center justify-center mt-8'>
        <a
          href="https://docs.google.com/document/d/1RilV56pTzrDKzdUYXLVXio2wTN6OEnJN5rsezgMSpBA/edit?usp=drivesdk"
          className='font-bold bg-gradient-to-r from-slate-200 to-stone-500 text-black mx-2 mb-2 transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full'
          download
        >
          Resume
        </a>
        <a
          href='#contact'
          className='font-bold bg-gradient-to-r from-stone-500 to-slate-200 text-black mx-2 transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full'
        >
          Contact
        </a>
      </div>
    </div>
  );
};

export default Home;
