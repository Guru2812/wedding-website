import React from 'react';
import { PlayCircle } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center text-center overflow-hidden">
      {/* Background Image/Video */}
      <img
        src="https://images.unsplash.com/photo-1519741497674-611481863552?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80"
        alt="Wedding Couple"
        className="absolute inset-0 w-full h-full object-cover z-0"
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-60 z-10"></div>

      {/* Content */}
      <div className="relative z-20 text-white px-4">
        <h1 className="text-5xl md:text-7xl font-serif mb-4 animate-fade-in-down">Nikita & Varun</h1>
        <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto animate-fade-in-up">
          A cinematic journey capturing the essence of love, laughter, and happily ever after. Experience their magical day.
        </p>
        <button className="bg-white text-black px-8 py-3 rounded-full font-semibold hover:bg-gray-200 transition duration-300 flex items-center mx-auto animate-fade-in">
          <PlayCircle size={20} className="mr-2" />
          Watch Film
        </button>
      </div>

      {/* Add subtle animation styles if needed */}
      <style jsx>{`
        @keyframes fade-in-down {
          from { opacity: 0; transform: translateY(-20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
         @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .animate-fade-in-down { animation: fade-in-down 1s ease-out forwards; }
        .animate-fade-in-up { animation: fade-in-up 1s ease-out 0.5s forwards; animation-fill-mode: backwards; }
        .animate-fade-in { animation: fade-in 1s ease-out 1s forwards; animation-fill-mode: backwards; }
      `}</style>
    </section>
  );
};

export default Hero;
