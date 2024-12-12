import React, { useState, useEffect } from 'react';
import * as Icons from 'react-bootstrap-icons';

const reviews = [
  {
    id: 1,
    name: "John Doe",
    review: "Amazing service! The user interface exceeded my expectations. Highly recommend!",
    rating: 5,
  },
  {
    id: 2,
    name: "Jane Smith",
    review: "Great customer support and the quality is top-notch. Will definitely collaborate again!",
    rating: 4,
  },
  {
    id: 3,
    name: "Sam Wilson",
    review: "Satisfied with my purchase. Delivery was on time and the product was as described.",
    rating: 4,
  },
  {
    id: 4,
    name: "Alex Johnson",
    review: "Good value for the price, but could improve packaging. Overall happy with the service.",
    rating: 3,
  },
];

const Reviews = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Function to move to the next review
  const nextReview = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % reviews.length);
  };

  // Automatically slide the reviews every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      nextReview();
    }, 3000); // Slide every 3 seconds
    return () => clearInterval(interval); // Clean up interval on unmount
  }, []);

  return (
    <div className="w-full bg-gray-100 text-center p-5 md:p-10" id='reviews'>
      <h2 className="text-3xl md:text-4xl font-bold mb-4 md:mb-6 text-indigo-600">Customer Reviews</h2>

      <div className="relative flex items-center justify-center mb-5">
        {/* Slide transition */}
        <div className="bg-indigo-600 hover:bg-white hover:text-black text-white p-6 md:p-8 rounded-lg shadow-lg max-w-sm md:max-w-md transition-all duration-500 ease-in-out transform">
          <div className='justify-center items-center flex'>
            <Icons.PersonFill className='text-slate-900' width={50} height={50} />
          </div>
          <p className="italic text-lg md:text-xl">"{reviews[currentIndex].review}"</p>
          <p className="mt-4 font-semibold text-white">- {reviews[currentIndex].name}</p>
          <div className="mt-2 text-yellow-400 flex flex-row justify-center">
            {Array(reviews[currentIndex].rating).fill(<Icons.StarFill width={30} md:width={40} className='text-slate-900' />)}
          </div>
        </div>
      </div>

      {/* Indicators */}
      <div className="flex justify-center mt-4 md:mt-6 space-x-2">
        {reviews.map((_, index) => (
          <span
            key={index}
            className={`h-2 w-2 md:h-3 md:w-3 rounded-full transition-colors duration-500 ${
              index === currentIndex ? 'bg-white' : 'bg-indigo-300'
            }`}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default Reviews;
