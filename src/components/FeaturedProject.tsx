import React from 'react';

const FeaturedProject: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-black to-gray-900">
      <div className="container mx-auto px-4">
        <div className="bg-gray-800 rounded-lg shadow-xl overflow-hidden md:flex items-center">
          <div className="md:w-1/2 p-8 md:p-12 lg:p-16 text-center md:text-left">
            <span className="text-red-500 font-semibold uppercase tracking-wider text-sm">Netflix Special Feature</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif my-4">
              Nayanthara: <br className="hidden md:block" />Beyond the Fairytale
            </h2>
            <p className="text-gray-400 mb-8">
              Experience the intimate journey of superstar Nayanthara as she embarks on a new chapter. A story of love, dreams, and stardom.
            </p>
            <button className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-full font-semibold transition duration-300">
              Watch Now on Netflix
            </button>
          </div>
          <div className="md:w-1/2 h-64 md:h-auto">
            <img
              src="https://images.unsplash.com/photo-1604975701397-6365ccbd028a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80" // Replace with a relevant image
              alt="Nayanthara: Beyond the Fairytale"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProject;
