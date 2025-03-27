import React from 'react';
import { MapPin, Film } from 'lucide-react';

// Simplified data - replace with actual data or API call
const latestFilms = [
  { id: 1, title: "Venice Vows", location: "Venice, Italy" },
  { id: 2, title: "Santorini Sunset", location: "Santorini, Greece" },
  { id: 3, title: "Jaipur Jewels", location: "Jaipur, India" },
  { id: 4, title: "Parisian Promise", location: "Paris, France" },
];

const MapSection: React.FC = () => {
  // In a real app, this would be an interactive map component (e.g., Leaflet, Google Maps)
  // For now, it's a static representation.
  return (
    <section id="portfolio" className="py-16 md:py-24 bg-black">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-serif text-center mb-12">Our Global Presence</h2>
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          {/* Simplified Map Representation */}
          <div className="w-full lg:w-2/3 h-64 md:h-96 bg-gray-800 rounded-lg relative flex items-center justify-center overflow-hidden">
             <img
                src="https://images.unsplash.com/photo-1571510068100-c76e03b144a8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1812&q=80"
                alt="World Map Background"
                className="absolute inset-0 w-full h-full object-cover opacity-30"
             />
             <p className="text-gray-400 z-10 text-center px-4">Interactive Map Placeholder <br/> (Markers would show wedding locations)</p>
             {/* Example Markers (Static) */}
             <MapPin className="absolute text-red-500" style={{ top: '30%', left: '45%' }} />
             <MapPin className="absolute text-red-500" style={{ top: '40%', left: '52%' }} />
             <MapPin className="absolute text-red-500" style={{ top: '35%', left: '70%' }} />
             <MapPin className="absolute text-red-500" style={{ top: '65%', left: '80%' }} />
          </div>

          {/* Latest Films List */}
          <div className="w-full lg:w-1/3">
            <h3 className="text-2xl font-semibold mb-6 text-red-500">Latest Wedding Films</h3>
            <ul className="space-y-4">
              {latestFilms.map(film => (
                <li key={film.id} className="flex items-start space-x-3 group cursor-pointer">
                  <Film size={20} className="text-gray-500 mt-1 group-hover:text-red-500 transition duration-300" />
                  <div>
                    <h4 className="font-medium group-hover:text-white transition duration-300">{film.title}</h4>
                    <p className="text-sm text-gray-400">{film.location}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MapSection;
