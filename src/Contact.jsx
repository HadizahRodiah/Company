import React from "react";
import { useRef } from "react";
import emailjs from '@emailjs/browser'
import Soc3 from './assets/soc3.png'
import Soc1 from './assets/soc1.png'
import Soc2 from './assets/soc2.jpg'
import Soc4 from './assets/soc4.jpg'
const Contact=()=>{

    const form = useRef();
    
    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs
        .sendForm('service_38znrfu', 'template_7od855f', form.current, {
          publicKey: 'P_2P6AfRqaD22IOwt',
        })
        .then(
          () => {
            window.alert('SUCCESS! message sent');
          },
          (error) => {
           window.alert('FAILED...', error.text);
          },
        );
    };
  
return(
    
      <div className='text-white text-center py-16  m-20' id="contact">    
              <h2 className='text-4xl font-bold text-transparent bg-clip-text 
          bg-gradient-to-r from-black to-slate-800 mb-4'>Contact</h2>
           <div className='flex-1 flex flex-col  py-4 text-center '>
           <h2 className='text-4xl font-bold text-black mb-4'> Let's Talk</h2>
          <p className='font-bold text-black'>Connect with me let's collaborate and Work together on your next project</p>
      <div className='flex flex-row md:flex-row items-center md:space-x-12 p-20  justify-between' >
          <div className='mb-4 mt-8 font-bold tex-black flex flex-col'>
          <a href="mailto:hadizahrodiah@gmail.com" className='inline-block  text-yellow-300 mr-2 hover:w-10'><img src={Soc2} className='w-12 h-15 bg-white rounded-full'/></a>
          <p className="hidden md:inline">Email</p>
          </div>
          <div className='mb-4 mt-8 font-bold flex flex-col'>
          <a href="https://wa.me/message/OXFRWM6MUANGE1  " className='inline-block text-white mr-2 hover:w-10 '><img src={Soc4} className='w-12 h-15 bg-white  rounded-full'/></a>
          <p className='mr-2 hidden md:inline'>WhatsAPP</p>
          </div>
          <div className='mb-4 mt-8 font-bold flex flex-col'>
          <a href="https://bit.ly/4dbrkDV" className='inline-block text-white mr-2  hover:w-10'><img src={Soc1} className='w-12 h-15 rounded-full '/> </a>
          <p className='mr-2 hidden md:inline'>Linkedin</p>
          </div>
          <div className='mb-4 mt-8 font-bold flex flex-col'>
          <a href="tel:+2349155140115" className='inline-block text-white mr-2 hover:w-10 '><img src={Soc3} className='w-12 h-15 rounded-full '/> </a>
          <p className='mr-2 hidden md:inline'>Phone</p>
          </div>
 
        </div>
  
        <div className='font-bold p-10  items-center'>
          <form ref={form} onSubmit={sendEmail}>
        <label htmlFor='Name' className='block mb-2'>Name</label>
        <input type='text' placeholder='Enter your name' name='from_name' className='w-full p-2 rounded bg-white border border-slate-600 focus:outline-none focus:border-stone-400'></input>  
        <label htmlFor='Email' className='block mb-2'>Email</label>
        <input type='text' placeholder='Enter your Email' name='from_email' className='w-full p-2 rounded bg-white border border-slate-600 focus:outline-none focus:border-stone-400'></input>  
        <label htmlFor='Text' className='block mb-2'name='message'>Message</label>
        <textarea type='text' rows='5' className='w-full p-2 rounded bg-white border border-black focus:outline-none focus:border-stone-400' placeholder='Enter your message'></textarea>
        <button type='submit' value='Send'className='font-bold bg-gradient-to-r from-stone-500 to-slate-50 text-black hidden
         md:inline transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full'>Send</button>
            </form>  
        </div>
    
          </div>
          </div>
  
      )
  }
  
  export default Contact