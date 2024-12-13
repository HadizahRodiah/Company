import React from 'react';
import * as Icons from 'react-bootstrap-icons';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-200 py-16 w-full" id="footer">
      <div className="container mx-auto px-6 md:px-12">
        {/* Navigation Links */}
        <nav className="flex flex-col md:flex-row justify-start md:justify-between items-start md:items-center mb-10">
          <FooterLink href="#home" icon={<Icons.House />} label="Home" />
          <FooterLink href="#about" icon={<Icons.InfoCircle />} label="About" />
          <FooterLink href="#service" icon={<Icons.Wrench />} label="Service" />
          <FooterLink href="#project" icon={<Icons.Briefcase />} label="Project" />
        </nav>

        <div className="flex flex-col md:flex-row justify-between mb-8">
          {/* Contact Us */}
          <div className="mb-10 md:mb-0 md:w-1/3">
            <h2 className="text-xl font-semibold mb-4">Contact Us</h2>
            <ul>
              <ContactItem icon={<Icons.Whatsapp />} label="Whatsapp" href="https://wa.me/+2349155140115" />
              <ContactItem icon={<Icons.Envelope />} label="Email" href="mailto:hadizahrodiah@gmail.com" />
              <ContactItem icon={<Icons.Facebook />} label="Facebook" href="https://facebook.com/rodiah.hadizah" />
              <ContactItem icon={<Icons.Telephone />} label="Phone" href="tel:+2349155140115" />
              <ContactItem icon={<Icons.Linkedin />} label="LinkedIn" href="https://bit.ly/4dbrkDV" />
            </ul>
          </div>

          {/* Subscribe Section */}
          <div className="mb-10 md:mb-0 md:w-1/3">
            <h2 className="text-xl font-semibold mb-4">Stay Updated</h2>
            <form>
              <label htmlFor="subscribeEmail" className="block text-sm font-medium mb-2">Email address</label>
              <div className="flex flex-col md:flex-row">
                <input
                  type="email"
                  id="subscribeEmail"
                  className="flex-grow p-2 mb-2 md:mb-0 md:mr-2 rounded text-black"
                  placeholder="Enter your email..."
                  required
                />
                <button
                  type="submit"
                  className="p-2 bg-indigo-600 text-white font-bold rounded hover:bg-indigo-700 transition duration-300"
                >
                  Subscribe
                </button>
              </div>
            </form>
            <p className="text-sm mt-2">We'll never share your email with anyone else.</p>
          </div>

          {/* Review Section */}
          <div className="md:w-1/3">
            <h2 className="text-xl font-semibold mb-4">Give Us a Review</h2>
            <form className="flex flex-col space-y-4">
              <div className="flex flex-col">
                <label htmlFor="reviewName" className="mb-2">Name</label>
                <input
                  type="text"
                  id="reviewName"
                  className="p-2 rounded text-black"
                  placeholder="Enter your name"
                  required
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="reviewEmail" className="mb-2">Email</label>
                <input
                  type="email"
                  id="reviewEmail"
                  className="p-2 rounded text-black"
                  placeholder="Enter your email"
                  required
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="reviewMessage" className="mb-2">Message</label>
                <textarea
                  id="reviewMessage"
                  rows="5"
                  className="p-2 rounded text-black resize-none"
                  placeholder="Your message..."
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="py-2 bg-indigo-600 text-white font-bold rounded hover:bg-indigo-700 transition duration-300"
              >
                Submit Review
              </button>
            </form>
          </div>
        </div>

        {/* Social Media Links */}
        <div className="flex justify-center space-x-4 mt-8">
          <a href="https://facebook.com" className="text-gray-200 hover:text-indigo-400 transition duration-300">
            <Icons.Facebook size={25} />
          </a>
          <a href="https://twitter.com" className="text-gray-200 hover:text-indigo-400 transition duration-300">
            <Icons.Twitter size={25} />
          </a>
          <a href="https://instagram.com" className="text-gray-200 hover:text-indigo-400 transition duration-300">
            <Icons.Instagram size={25} />
          </a>
          <a href="https://linkedin.com" className="text-gray-200 hover:text-indigo-400 transition duration-300">
            <Icons.Linkedin size={25} />
          </a>
        </div>

        {/* Footer Bottom */}
        <div className="mt-10 text-center text-gray-500">
          &copy; {new Date().getFullYear()} All rights reserved.
        </div>
      </div>
    </footer>
  );
};

// Reusable Footer Link Component
const FooterLink = ({ href, icon, label }) => (
  <a
    href={href}
    className="flex items-center text-white hover:text-indigo-400 transition duration-300 mb-2 md:mb-0"
    aria-label={label}
  >
    {React.cloneElement(icon, { className: "mr-2", size: 20 })}
    {label}
  </a>
);

// Reusable Contact Item Component
const ContactItem = ({ icon, label, href }) => (
  <li className="flex items-center text-white hover:text-indigo-400 transition duration-300 mb-2">
    <a href={href} className="flex items-center" aria-label={label}>
      {React.cloneElement(icon, { className: "mr-2", size: 20 })}
      {label}
    </a>
  </li>
);

export default Footer;
