import React from 'react';
import * as Icons from 'react-bootstrap-icons';

const Footer = () => {
  return (
    <footer className='bg-slate-900 text-gary-100 py-20 w-full' id='footer'>
      {/* Navigation Links */}
      <nav className='flex flex-row md:flex-row justify-between items-center px-6 md:px-20 mb-10'>
        <FooterLink href="#home" icon={<Icons.House />} label="Home" />
        <FooterLink href="#about" icon={<Icons.Book/>} label="About" />
        <FooterLink href="#service" icon={<Icons.Screwdriver />} label="Service" />
        <FooterLink href="#project" icon={<Icons.PencilSquare />} label="project" />
      </nav>

      {/* Content Sections */}
      <div className='flex flex-col md:flex-row justify-between px-6 md:px-20'>
        {/* Contact Us */}
        <div className='mb-10 md:mb-0'>
          <h2 className='text-2xl font-bold text-gray-200 mb-4'>Contact Us!</h2>
          <ul>
            <ContactItem icon={<Icons.Whatsapp />} label="Whatsapp" href="https://wa.me/+2349155140115" />
            <ContactItem icon={<Icons.Envelope />} label="Email" href="mailto:hadizahrodiah@gmail.com" />
            <ContactItem icon={<Icons.Facebook />} label="Facebook" href="https://facebook.com/rodiah.hadizah" />
            <ContactItem icon={<Icons.Telephone />} label="Phone" href="tel:+2349155140115" />
            <ContactItem icon={<Icons.Linkedin />} label="LinkedIn" href="https://bit.ly/4dbrkDV" />
          </ul>
        </div>

        {/* Subscribe Section */}
        <div className='mb-10 md:mb-0'>
          <h2 className='text-2xl font-bold text-gray-200 mb-4'>Stay Updated!</h2>
          <form className='flex flex-col'>
            <label htmlFor="subscribeEmail" className='mb-2 text-gray-200 font-semibold'>Email address</label>
            <input
              type="email"
              id="subscribeEmail"
              className='p-2 rounded mb-4 text-gray-100'
              placeholder='Enter your email...'
              required
            />
            <button
              type="submit"
              className='bg-white text-slate-900 font-bold py-2 rounded hover:bg-slate-200 transition duration-300'
            >
              Subscribe
            </button>
          </form>
          <p className='text-gray-400 text-sm mt-2'>We'll never share your email with anyone else.</p>
        </div>

        {/* Review Section */}
        <div className='hidden md:block'>
          <h2 className='text-2xl font-bold text-gray-200 mb-4'>Give us a review</h2>
          <form className='flex flex-col'>
            <label htmlFor="reviewName" className='flex items-center mb-2'>
              <Icons.Person className='mr-2 text-gray-200' />
              Name
            </label>
            <input
              type="text"
              id="reviewName"
              className='p-2 rounded mb-4 text-slate-900'
              placeholder='Enter your name'
              required
            />

            <label htmlFor="reviewEmail" className='flex items-center mb-2 text-gray-200'>
              <Icons.Envelope className='mr-2' />
              Email
            </label>
            <input
              type="email"
              id="reviewEmail"
              className='p-2 rounded mb-4 text-slate-900'
              placeholder='Enter your email'
              required
            />

            <label htmlFor="reviewMessage" className='flex items-center mb-2 text-gray-200'>
              <Icons.Book className='mr-2' />
              Message
            </label>
            <textarea
              id="reviewMessage"
              rows="5"
              className='p-2 rounded mb-4 text-slate-900 resize-none'
              placeholder='Your message...'
              required
            ></textarea>

            <button
              type="submit"
              className='bg-white text-slate-900 font-bold py-2 rounded hover:bg-slate-200 transition duration-300'
            >
              Submit Review
            </button>
          </form>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className='mt-10 text-center text-slate-500'>
        &copy; {new Date().getFullYear()} All rights reserved.
      </div>
    </footer>
  );
};

// Reusable Footer Link Component
const FooterLink = ({ href, icon, label }) => (
  <a
    href={href}
    className='flex items-center text-gray-100 mb-4 md:mb-0 hover:text-slate-500 transition-colors duration-300'
    aria-label={label}
  >
    {React.cloneElement(icon, { className: 'mr-2', size: 25 })}
    {label}
  </a>
);

// Reusable Contact Item Component
const ContactItem = ({ icon, label, href }) => (
  <li className='flex items-center mb-3 hover:text-slate-400 transition-colors duration-300'>
    <a href={href} className='flex items-center' aria-label={label}>
      {React.cloneElement(icon, { className: 'mr-2', size: 25 })}
      <span>{label}</span>
    </a>
  </li>
);

export default Footer;
