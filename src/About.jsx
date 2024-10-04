import React from 'react';
import imp from './assets/Imp.jpg';

const About = () => {
  return (
    <div className='w-full bg-gray-100 py-20' id='about'>
      {/* About Section */}
      <div className='container mx-auto px-8 md:px-16 lg:px-24 text-center'>
        <h1 className='font-bold text-4xl text-indigo-900 mb-6'>About Almas Tech</h1>
        <p className='text-slate-700 text-lg mb-12'>
          Established in 1457, Almas Tech has upheld a reputation for excellence for centuries. With a commitment to innovation, we continually evolve with the times, 
          delivering cutting-edge solutions in the tech industry. Our success is attributed to the leadership and vision of our dedicated board of directors, whose unwavering 
          spirit and commitment have shaped Almas Tech into the global powerhouse it is today.
        </p>
      </div>

      {/* Directors Section */}
      <div className='container mx-auto px-8 md:px-16 lg:px-24'>
        <div className='flex flex-col md:flex-row justify-center items-center space-y-8 md:space-y-0 md:space-x-8'>
          {/* Director 1 */}
          <div className='bg-slate-900 text-white p-6 rounded-lg shadow-lg w-80 transition-transform duration-300 hover:shadow-xl hover:scale-105'>
            <img src={imp} alt="Director 1" className='rounded-lg shadow-lg w-full mb-4' />
            <h2 className='text-xl font-bold mb-2'>John Doe</h2>
            <p className='text-sm'>Chief Executive Officer</p>
            <p className='text-gray-300'>Worked for the company for 16 years, demonstrating strong leadership, punctuality, and perseverance.</p>
          </div>

          {/* Director 2 */}
          <div className='bg-slate-900 text-white p-6 rounded-lg shadow-lg w-80 transition-transform duration-300 hover:shadow-xl hover:scale-105'>
            <img src={imp} alt="Director 2" className='rounded-lg shadow-lg w-full mb-4' />
            <h2 className='text-xl font-bold mb-2'>Jane Smith</h2>
            <p className='text-sm'>Chief Operating Officer</p>
            <p className='text-gray-300'>Worked for the company for 16 years, demonstrating strong leadership, punctuality, and perseverance.</p>
          </div>

          {/* Director 3 */}
          <div className='bg-slate-900 text-white p-6 rounded-lg shadow-lg w-80 transition-transform duration-300 hover:shadow-xl hover:scale-105'>
            <img src={imp} alt="Director 3" className='rounded-lg shadow-lg w-full mb-4' />
            <h2 className='text-xl font-bold mb-2'>Michael Brown</h2>
            <p className='text-sm'>Chief Technology Officer</p>
            <p className='text-gray-300'>Worked for the company for 16 years, demonstrating strong leadership, punctuality, and perseverance.</p>
          </div>
        </div>

        {/* Metrics Section */}
        <div className='flex flex-shrink md:flex-row justify-center items-center space-x-8 mt-12'>
          <MetricCard value="99.9%" label="Accuracy" />
          <MetricCard value="100%" label="Collaboration" />
          <MetricCard value="200%" label="Time Keeper" />
        </div>
      </div>
    </div>
  );
};

const MetricCard = ({ value, label }) => (
  <div className='text-center'>
    <h1 className='text-slate-900 font-bold 3xl md:text-5xl'>{value}</h1>
    <button className='rounded-lg w-30 md:w-40 mx-auto mt-2 shadow-lg text-white ring ring-offset-2 ring-slate-900 bg-gradient-to-r from-indigo-600 to-purple-600 transition-transform duration-300 transform hover:scale-105 hover:shadow-xl'>
      {label}
    </button>
  </div>
);

export default About;
