import React from 'react';
import canva from './assets/canv1.jpg';
import * as Icons from 'react-bootstrap-icons';

const Service = () => {
  return (
    <div className='w-full bg-slate-900 overflow-x-hidden relative' id='service'>
      {/* Background image with overlay */}
      <img
        src={canva}
        alt="Background"
        className='w-screen h-full object-cover opacity-30 blur-sm absolute top-0 left-0'
      />
      <div className='relative z-10'>
        {/* Main Section */}
        <div className="p-10 flex flex-col md:flex-row items-center justify-center text-center">
          <div className='w-full md:w-1/2 py-5'>
            <h1 className='font-bold text-4xl md:text-6xl text-white'>Our Services</h1>
            <p className='italic p-6 text-lg text-gray-300'>
              There is nothing serious about this website.Contact the developer for future Collaboration.
              check the <span><a href='#footer' className='underline text-indigo-700'>Footer</a></span> for developers Contact.
              we ensure premium--satisfaction
            </p>
            <h2 className='md:text-3xl text-xl text-white font-bold'>A wonderful Collaboration!</h2>
          </div>
        </div>

        {/* Service Cards Section */}
        <div className='flex flex-wrap justify-center p-5'>
          {/* Service Card 1 */}
          <div className='m-4 p-6 text-white shadow-lg bg-gradient-to-r from-indigo-600 to-purple-600 rounded-lg transition-transform duration-300 transform hover:scale-105'>
            <Icons.Code className="mx-auto text-4xl mb-4" />
            <h3 className='font-bold text-xl mb-2'>Front-end Development</h3>
            <p className='mt-2 text-left'>
              Building responsive, user-friendly interfaces using React, JSX, and CSS.
            </p>
            <p className='mt-2 text-left'>
              Implementing client-side routing (e.g., React-Router).
            </p>
          </div>

          {/* Service Card 2 */}
          <div className='m-4 p-6 text-white shadow-lg bg-gradient-to-r from-indigo-600 to-purple-600 rounded-lg transition-transform duration-300 transform hover:scale-105'>
            <Icons.CodeSlash className="mx-auto text-4xl mb-4" />
            <h3 className='font-bold text-xl mb-2'>Back-end Development</h3>
            <p className='mt-2 text-left'>
              Creating robust, scalable back-end solutions using Node.js and Express.
            </p>
            <p className='mt-2 text-left'>
              Integrating APIs and databases for seamless app performance.
            </p>
          </div>

          {/* Service Card 3 */}
          <div className='m-4 p-6 text-white shadow-lg bg-gradient-to-r from-indigo-600 to-purple-600 rounded-lg transition-transform duration-300 transform hover:scale-105'>
            <Icons.PcDisplay className="mx-auto text-4xl mb-4" />
            <h3 className='font-bold text-xl mb-2'>UI/UX Design</h3>
            <p className='mt-2 text-left'>
              Designing intuitive, user-centered interfaces for an enhanced user experience.
            </p>
            <p className='mt-2 text-left'>
              Prototyping and wireframing user flows for better interaction.
            </p>
          </div>

          {/* Service Card 4 */}
          <div className='m-4 p-6 text-white shadow-lg bg-gradient-to-r from-indigo-600 to-purple-600 rounded-lg transition-transform duration-300 transform hover:scale-105'>
            <Icons.Tools className="mx-auto text-4xl mb-4" />
            <h3 className='font-bold text-xl mb-2'>DevOps Services</h3>
            <p className='mt-2 text-left'>
              Streamlining development and operations for faster delivery cycles.
            </p>
            <p className='mt-2 text-left'>
              Implementing CI/CD pipelines for enhanced productivity.
            </p>
          </div>
        </div>

        {/* Footer Section */}
        <div className='py-10 text-center'>
          <h2 className='text-2xl md:text-3xl text-white font-bold'>Enjoy premium experience!</h2>
        </div>
      </div>
    </div>
  );
};

export default Service;
