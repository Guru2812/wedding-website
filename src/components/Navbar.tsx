import React, { useState } from 'react';
import { Camera, Search, Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = ['Home', 'About', 'Films', 'Music', 'Portfolio', 'Contact'];

  return (
    <nav className="sticky top-0 z-50 bg-black bg-opacity-80 backdrop-blur-md p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <a href="#" className="flex items-center space-x-2 text-white hover:text-gray-300 transition duration-300">
          <Camera size={28} />
          <span className="text-xl font-semibold tracking-tight">The Wedding Filmer</span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          {navLinks.map((link) => (
            <a key={link} href={`#${link.toLowerCase()}`} className="text-gray-300 hover:text-white transition duration-300">
              {link}
            </a>
          ))}
          <div className="relative">
            <input
              type="text"
              placeholder="Search..."
              className="bg-gray-800 text-white px-3 py-1 rounded-full focus:outline-none focus:ring-2 focus:ring-gray-500 text-sm w-32"
            />
            <Search size={16} className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          </div>
          <button className="bg-red-600 hover:bg-red-700 text-white px-4 py-1 rounded-full transition duration-300 text-sm font-medium">
            Book Now
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-white focus:outline-none">
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden mt-4 bg-black bg-opacity-90 rounded-lg p-4">
          <div className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="text-gray-300 hover:text-white transition duration-300 block px-3 py-2 rounded-md text-base font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link}
              </a>
            ))}
            <div className="relative mt-2">
              <input
                type="text"
                placeholder="Search..."
                className="bg-gray-800 text-white px-3 py-2 rounded-full focus:outline-none focus:ring-2 focus:ring-gray-500 text-sm w-full"
              />
              <Search size={18} className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
            </div>
            <button className="w-full mt-2 bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-full transition duration-300 text-sm font-medium">
              Book Now
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
