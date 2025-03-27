import React from 'react';
import { Camera, Mail, Phone, Facebook, Instagram, Twitter, Youtube } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="relative bg-gray-900 text-gray-400 py-16 md:py-20 overflow-hidden">
       {/* Background Image */}
       <img
        src="https://images.unsplash.com/photo-1519225421980-715cb0215aed?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80"
        alt="Footer Background"
        className="absolute inset-0 w-full h-full object-cover opacity-10 z-0"
      />
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* About */}
          <div>
             <a href="#" className="flex items-center space-x-2 text-white hover:text-gray-300 transition duration-300 mb-4">
                <Camera size={24} />
                <span className="text-lg font-semibold tracking-tight">The Wedding Filmer</span>
            </a>
            <p className="text-sm mb-4">Capturing life's most precious moments with cinematic artistry and heartfelt storytelling.</p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-white transition duration-300"><Facebook size={20} /></a>
              <a href="#" className="hover:text-white transition duration-300"><Instagram size={20} /></a>
              <a href="#" className="hover:text-white transition duration-300"><Twitter size={20} /></a>
              <a href="#" className="hover:text-white transition duration-300"><Youtube size={20} /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#about" className="hover:text-white transition duration-300">About Us</a></li>
              <li><a href="#films" className="hover:text-white transition duration-300">Films</a></li>
              <li><a href="#portfolio" className="hover:text-white transition duration-300">Portfolio</a></li>
              <li><a href="#contact" className="hover:text-white transition duration-300">Contact</a></li>
              <li><a href="#" className="hover:text-white transition duration-300">Blog</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Get In Touch</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center space-x-2">
                <Mail size={16} />
                <span>info@weddingfilmer.com</span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone size={16} />
                <span>+1 (234) 567-890</span>
              </li>
              {/* Add address if needed */}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Newsletter</h4>
            <p className="text-sm mb-4">Stay updated with our latest films and stories.</p>
            <form className="flex">
              <input
                type="email"
                placeholder="Your Email"
                className="bg-gray-800 text-white px-3 py-2 rounded-l-md focus:outline-none focus:ring-2 focus:ring-red-500 text-sm flex-grow"
              />
              <button type="submit" className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-r-md transition duration-300 text-sm">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <hr className="border-gray-700 my-12" />

        <div className="text-center text-sm">
          &copy; {new Date().getFullYear()} The Wedding Filmer. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
