import React from 'react';
// In a real app, use a library like Swiper.js for a proper carousel
// This is a simplified static representation

const showcaseImages = [
  "https://images.unsplash.com/photo-1520854221256-17451cc331bf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
  "https://images.unsplash.com/photo-1515934751635-c81c6bc962e8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
  "https://images.unsplash.com/photo-1485965120184-e220f721d03e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
  "https://images.unsplash.com/photo-1511285560921-4c9a8cf3301c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
];

const Showcase: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-black overflow-hidden">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-serif text-center mb-12">Cinematic Moments</h2>
        {/* Simplified Showcase - Replace with Carousel */}
        <div className="flex space-x-6 overflow-x-auto pb-4 scrollbar-hide">
          {showcaseImages.map((img, index) => (
            <div key={index} className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/3 rounded-lg overflow-hidden shadow-lg">
              <img src={img} alt={`Showcase ${index + 1}`} className="w-full h-80 object-cover" />
            </div>
          ))}
        </div>
         {/* Basic scrollbar styling (optional, might not work everywhere) */}
         <style jsx>{`
          .scrollbar-hide::-webkit-scrollbar {
            display: none; /* Safari and Chrome */
          }
          .scrollbar-hide {
            -ms-overflow-style: none;  /* IE and Edge */
            scrollbar-width: none;  /* Firefox */
          }
        `}</style>
      </div>
    </section>
  );
};

export default Showcase;
