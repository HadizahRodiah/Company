import React from 'react'
import ima from './assets/Ima.jpg'
import {useTypewriter, Cursor } from 'react-simple-typewriter'

const Intro = () => {
    const [text] = useTypewriter({
        words:['Student', 'Front-end Developer','React js Developer'],
        loop:{},
        typeSpeed:150,
        delaySpeed:150,
        deleteSpeed:100,
    })

    return(
        <div className='text-white text-center py-16  m-20 ' id="intro" >
        <div className='flex flex-col md:flex-row bg-transparent'>
        <div className='flex-1'>
            <img src={ima} alt=""  className=' justify-end mx-auto mb-50 w-48 h-50 rounded-full object-cover transform-transition-transform duration-300 hover:scale-105'/>
        
            <h1 className='text-4xl text-transparent bg-clip-text bg-gradient-to-r from-slate-700  to-slate-900 font-bold'>I'm{" "}
                <span className='text-black text-transparent bg-clip-text bg-gradient-to-r from-slate-400 to-slate-700'>Yusuf Rodiah Hadizah</span>
               ,  {text} <Cursor cursorStyle='<'/>
            </h1>
            <p className='mt-4 mb-5 text-lg text-stone-900 px-4'>
            <span className='text-black font-bold'>Undergraduate</span> <span className='font-bold text-slate-700'>Student</span>,University of Ilorin, Kwara State.
            </p>
            <div>
                <a href="https://docs.google.com/document/d/1RilV56pTzrDKzdUYXLVXio2wTN6OEnJN5rsezgMSpBA/edit?usp=drivesdk" className=' font-bold bg-gradient-to-r from-slate-900 to-yellow-500 text-white hover:text-black transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full' download>Resume</a>
                <a href='#contact' className='font-bold bg-gradient-to-r from-yellow-500 to-slate-900 text-white hover:text-black transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full'>Contact me</a>
            </div>
        </div>
        </div>
        </div>
  )
}

export default Intro