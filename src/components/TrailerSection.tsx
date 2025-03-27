import React, { useState } from 'react';
import { Play } from 'lucide-react';

interface Trailer {
  id: number;
  title: string;
  category: string;
  thumbnail: string;
}

const trailers: Trailer[] = [
  { id: 1, title: "Anushka & Virat", category: "Celebrity", thumbnail: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80" },
  { id: 2, title: "Priya & Rohan", category: "Destination", thumbnail: "https://images.unsplash.com/photo-1509610761684-194f8d5f71d9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80" },
  { id: 3, title: "Classic Love", category: "Classics", thumbnail: "https://images.unsplash.com/photo-1515934751635-c81c6bc962e8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80" },
  { id: 4, title: "Beach Wedding", category: "Popular", thumbnail: "https://images.unsplash.com/photo-1541250628024-1d978b03f615?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80" },
  { id: 5, title: "Deepika & Ranveer", category: "Celebrity", thumbnail: "https://images.unsplash.com/photo-1523438885200-e635ba2c371e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80" },
  { id: 6, title: "Mountain Vows", category: "Destination", thumbnail: "https://images.unsplash.com/photo-1597157639073-69284dc0fdaf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80" },
];

const categories = ["Popular", "Classics", "Celebrity", "Destination"];

const TrailerSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState("Popular");

  const filteredTrailers = trailers.filter(trailer => trailer.category === activeCategory);

  return (
    <section id="films" className="py-16 md:py-24 bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-serif text-center mb-4">Watch a Trailer</h2>
        <p className="text-center text-gray-400 mb-12 max-w-xl mx-auto">
          Get a glimpse into the magical stories we've captured. Select a category to explore our diverse portfolio.
        </p>

        {/* Category Tabs */}
        <div className="flex justify-center space-x-4 md:space-x-8 mb-12">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full text-sm md:text-base font-medium transition duration-300 ${
                activeCategory === category
                  ? 'bg-red-600 text-white'
                  : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Trailer Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredTrailers.map(trailer => (
            <div key={trailer.id} className="group relative overflow-hidden rounded-lg shadow-lg cursor-pointer">
              <img src={trailer.thumbnail} alt={trailer.title} className="w-full h-64 object-cover transition duration-500 group-hover:scale-110" />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-60 transition duration-500 flex items-center justify-center">
                <Play size={48} className="text-white opacity-0 group-hover:opacity-100 transition duration-500 transform scale-75 group-hover:scale-100" />
              </div>
              <div className="absolute bottom-0 left-0 bg-gradient-to-t from-black via-black/70 to-transparent p-4 w-full">
                <h3 className="text-lg font-semibold text-white">{trailer.title}</h3>
              </div>
            </div>
          ))}
          {filteredTrailers.length === 0 && (
             <p className="text-center text-gray-400 col-span-full">No trailers found for this category yet.</p>
          )}
        </div>
      </div>
    </section>
  );
};

export default TrailerSection;
