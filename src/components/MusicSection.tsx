import React from 'react';
import { Play, Disc } from 'lucide-react';

const soundtracks = [
  { id: 1, title: "Ik Onkar", thumbnail: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80" },
  { id: 2, title: "Vehem", thumbnail: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80" },
  { id: 3, title: "Sadiyaan", thumbnail: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80" },
  { id: 4, title: "Mangalyam", thumbnail: "https://images.unsplash.com/photo-1487180144351-b8472da7d491?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1772&q=80" },
];

const MusicSection: React.FC = () => {
  // Basic vinyl animation placeholder
  return (
    <section id="music" className="py-16 md:py-24 bg-gray-900">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-serif mb-12">Music & Soundtracks</h2>

        <div className="flex flex-col md:flex-row items-center justify-center gap-12 mb-16">
          {/* Vinyl Animation Placeholder */}
          <div className="relative w-48 h-48 md:w-64 md:h-64 flex items-center justify-center">
            <Disc size={180} className="text-gray-700 animate-spin-slow" />
            <div className="absolute w-16 h-16 md:w-20 md:h-20 bg-red-600 rounded-full flex items-center justify-center shadow-lg">
              <Play size={32} className="text-white" />
            </div>
          </div>
          <p className="md:text-left max-w-md text-gray-400">
            The perfect soundtrack elevates every moment. Discover the melodies that bring our wedding films to life. Click play to listen.
          </p>
        </div>


        {/* Soundtrack Thumbnails */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 md:gap-8 max-w-4xl mx-auto">
          {soundtracks.map(track => (
            <div key={track.id} className="group cursor-pointer text-center">
              <div className="relative overflow-hidden rounded-lg shadow-lg mb-3 aspect-square">
                <img src={track.thumbnail} alt={track.title} className="w-full h-full object-cover transition duration-500 group-hover:scale-110" />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition duration-500 flex items-center justify-center">
                  <Play size={36} className="text-white opacity-0 group-hover:opacity-100 transition duration-500" />
                </div>
              </div>
              <h4 className="font-medium text-gray-300 group-hover:text-white transition duration-300">{track.title}</h4>
            </div>
          ))}
        </div>
      </div>
       {/* Add animation styles */}
       <style jsx>{`
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow { animation: spin 20s linear infinite; }
      `}</style>
    </section>
  );
};

export default MusicSection;
