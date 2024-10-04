import React from 'react';
import rbg1 from './assets/lap1.jpg';
import * as Icons from 'react-bootstrap-icons'

const Home = () => {
  return (
    <div className='w-full bg-gray-100' id='home'>
      {/* Main Content Section */}
      <div className='flex flex-col md:flex-row md:h-screen pt-10 font-serif italic'>
        {/* Left Side - Text Section */}
        <div className='flex-1 py-10 '>
          <div className='py-10 px-5 m-5 text-left'>
          <span className='text-indigo-900 text-6xl md:text-8xl'>27+</span>
          <span className='block text-slate-900 text-4xl md:text-5xl font-mono'>Almas Tech</span>
          <span className='text-indigo-900 text-4xl md:text-6xl font-bold'>COMPANY</span>
          </div>
          <div className='flex ml-20 m-2  justify-center items-center hidden  md:block md:py-5'>
            <button className='text-black w-96 shadow-lg hover:scale-105 bg-gray-300 ring ring-offset-2 ring-black flex items-center justify-center flex-row rounded-full p-2'> <Icons.Star/> premium satisfaction <Icons.Star/> </button>
          </div>
          <div className='py-10 px-5 m-5 text-left hidden md:inline'>
          <p className='italic p-6 text-lg text-black'>
              There is nothing serious about this website.Contact the developer for future Collaboration.
              check the <span><a href='#service' className='underline text-indigo-700'>Services</a></span> we offer that makes us stands out,we ensure premium--satisfaction
            </p>
          </div>
        </div>
        <div className='w-full flex justify-center item-center  md:hidden'>
            <button className='text-black shadow-lg hover:scale-105 bg-white ring ring-offset-2 ring-indigo-700 flex items-center justify-center flex-row rounded-full p-1'> <Icons.Star/> premium satisfaction <Icons.Star/> </button>
          </div>
        <div className='w-full md:w-1/2 py-5 md:hidden'>
            <p className='italic p-6 text-lg text-black'>
              There is nothing serious about this website.Contact the developer for future Collaboration.
              check the <span><a href='#service' className='underline text-indigo-700'>Services</a></span> we offer that makes us stands out,we ensure premium--satisfaction
            </p>
          </div>
        
                        {/* Buttons Section - Mobile Only */}
      <div className='flex flex-row md:hidden items-center justify-center mt-2'>
        <a
          href="#reviews"
          className='font-bold bg-indigo-900 text-white mx-2 mb-2 transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-lg'
          download
        >
          Reviews
        </a>
        <a
          href='#footer'
          className='font-bold bg-indigo-900 text-white mx-2 mb-2 transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-lg'
        >
          Contact
        </a>
      </div>

        {/* Right Side - Image Section */}
        <div className='flex-1 w-full md:w-auto h-64 md:h-screen'>
          <img src={rbg1} alt="Laptop" className='w-full h-full object-cover' />
        </div>
      </div>

     </div>
  );
};

export default Home;
