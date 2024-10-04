import React from 'react'
import ima from './assets/Ima.jpg'


const About = () => {
    AOS.init();
  return (
    <div className='bg-white text-black py-20' Id='about'>
        <div className='container mx-auto px-8 md:px-16 lg:px-24'>
            <h2 className='text-4xl font-bold text-center mb-12'>About me</h2>
            </div>
        <div className='flex flex-col md:flex-row items-center md:space-x-12'>
            <img src={ima} className='w-80 h-54 p-5 rounded object-cover mb-8 md:mb-0'></img>
            <div>
           <div className='flex-1 p-10'>
           <p className='text-lg mb-8 p-10'>
            I am a passionate junior front-end developer with a solid foundation in html,css,Javascript and react,as well as experienced with frameworks like Bootstrap and Tailwindcss.
            Although i have no work experience my dedication to learning and my skills for the past <span className='font-bold text-stone-900'>3+ years</span>, has provided me with deep understanding of front-end technologies.
            <span className='text-slate-900 font-bold'> i am actively seeking opportunities where i can bring my technical expertise and strong problem-solving skills to real-world application</span>
            </p>
            <div id="skills" className='font-bold'>
            <div className='md:space-x-12'>
                <h2 className='text-2xl font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-slate-900 to-stone-700' >
                Primary Skill</h2>
                <div className='flex item-center'>
                    <label htmlFor='css' className='w-2/12 font-bold mr-5 text-black'>  Html</label>
                    <div className='grow bg-white rounded full m-2 h-2.5'>
                        <div className='bg-slate-900  to-slate-500 h-2.5 rounded-full
                        transform transition-transform duration-300 hover:scale-105 w-10/12'>
                        </div>
                    </div>
                </div>
                <div className='flex item-center'>
                    <label htmlFor='css' className='w-2/12 mr-5 font-bold text-black'>Css</label>
                    <div className='grow bg-white  m-2 rounded full h-2.5'>
                        <div className='bg-slate-900   h-2.5 rounded-full
                        transform transition-transform duration-300 hover:scale-105 w-11/12'>
                        </div>
                    </div>
                </div>
                <div className='flex item-center'>
                    <label htmlFor='React' className='w-2/12 mr-5 font-bold text-black'>React.Js</label>
                    <div className='grow bg-white rounded m-2 full h-2.5'>
                        <div className='bg-slate-900 h-2.5 rounded-full
                        transform transition-transform duration-300 hover:scale-105 w-10/12'>
                        </div>
                    </div>
                </div>
                <div className='flex item-center flex-row'>
                    <label htmlFor='React' className='w-2/12 mr-5  font-bold text-black'>Bootstrap</label>
                    <div className='grow bg-white rounded m-2 full h-2.5'>
                        <div className='bg-slate-900 h-2.5 rounded-full
                        transform transition-transform duration-300 hover:scale-105 w-9/12'>
                        </div>
                    </div>
                </div>
                <div className='flex item-center flex-row'>
                    <label htmlFor='Tailwind.css' className='w-2/12 mr-5 font-bold text-black'>Tailwind.css</label>
                    <div className='grow bg-white rounded m-2  full h-2.5'>
                        <div className='bg-slate-900 h-2.5 rounded-full
                        transform transition-transform duration-300 hover:scale-105 w-10/12'>
                        </div>
                    </div>
                </div>
           </div>
            <div className='flex flex-col m-10  md:flex-row items-center md:space-x-12'>
            <div className='box p-5 shadow-lg '>
               <h2 className='text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-slate-800 to-yellow-400'>
                Additional Skill</h2>
               <ul className='list-disc text-left list-outside'>
               <li>C#</li>
               <li>Asp.net mvc</li>
               <li>flask</li>
               <li>python</li>
               </ul>
            </div>
            <div className='box p-5 shadow-lg ' >
               <h2 className='text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-slate-800 to-yellow-400'>
                Social Skill</h2>
                <ul className='list-disc text-left list-outside'>
               <li> Adaptability</li>
               <li>Team work and Collaboration</li>
               <li>Active Listening</li>
               <li>Conflict Resolution</li>
               <li>Time Management</li>
               <li>Constructive FeedBack</li>
                </ul>
            </div>
            
            <div className='box p-5 shadow-lg' >
               <h2 className='text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-slate-400 to-yellow-800'>
                Languages</h2>
               <ul className='list-disc text-left list-outside'>
               <li>English</li>
               <li>Yoruba(native)</li>
               </ul>
                </div>
            </div>
            </div>
           </div>
           </div>
        </div>

    </div>
  )
}

export default About
