import React from 'react';
import * as Icons from 'react-bootstrap-icons';
import logo from './assets/logo.jpg';
import logox from './assets/logox.jpg';
import logoy from './assets/logoy.jpg';
import logoz from './assets/logoz.jpg';
import logow from './assets/logow.jpg';

const Collab = () => {
  return (
    <div className='bg-gray-100 w-screen overflow-x-hidden'>
      {/* Title Section */}
      <div className='text-black text-center font-bold mb-8'>
        <h1 className='text-3xl md:text-2xl bg-gray-100 font-serif tracking-wide'>Trusted by:</h1>
      </div>

      {/* Logos Section */}
      <div className='p-5 bg-gray-100 flex flex-wrap justify-center items-center gap-8'>
        <img src={logo} alt="Partner 1" className='w-16 md:w-24 h-16 md:h-24 rounded-full hover:scale-110 transition-transform duration-300 shadow-lg hover:shadow-2xl' />
        <img src={logox} alt="Partner 2" className='w-16 md:w-24 h-16 md:h-24 rounded-full hover:scale-110 transition-transform duration-300 shadow-lg hover:shadow-2xl' />
        <img src={logoy} alt="Partner 3" className='w-16 md:w-24 h-16 md:h-24 rounded-full hover:scale-110 transition-transform duration-300 shadow-lg hover:shadow-2xl' />
        <img src={logoz} alt="Partner 4" className='w-16 md:w-24 h-16 md:h-24 rounded-full hover:scale-110 transition-transform duration-300 shadow-lg hover:shadow-2xl' />
        <img src={logow} alt="Partner 5" className='w-16 md:w-24 h-16 md:h-24 rounded-full hover:scale-110 transition-transform duration-300 shadow-lg hover:shadow-2xl' />
      </div>
    </div>
  );
};

export default Collab;
