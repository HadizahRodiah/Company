import React from 'react'
const Nav = () => {
  return (
    <nav className='bg-slate-900 text-white w-screen px-8 md:px-16 lg:px-24'>
    <div className='container py-2 flex justify-center md:justify-between item-center z-40'>
        <div className='text-2xl font-bolder hidden md:inline'>
         ALMAS
        </div>
        <div className='space-x-6 font-bold'>
        <a href="#royy" className='hover:text-yellow-700'>Home</a>
        <a href="#about" className='hover:text-yellow-700'>About</a>
        <a href="#project" className='hover:text-yellow-700'>Project</a>
        <a href="#contact" className='hover:text-yellow-700'>Contact</a>
        </div>
        <a href='#contact'className='font-bold hover:text-black bg-gradient-to-r from-yellow-900 to-yello-50 text-white hidden md:inline
        transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full'>connect me</a>
    </div>
</nav>
  )
}

export default Nav