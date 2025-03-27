import React from 'react';
import { ArrowRight } from 'lucide-react';

const blogPosts = [
  { id: 1, title: "Heartfelt Dialogues", description: "Unveiling the unspoken emotions behind wedding vows.", image: "https://images.unsplash.com/photo-1455853659719-47fec8f27a82?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80", category: "Wedding Stories" },
  { id: 2, title: "Creative Excellence", description: "A peek into the techniques that make our films cinematic.", image: "https://images.unsplash.com/photo-1516410529446-2c777cb7366d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80", category: "Behind-the-Scenes" },
  { id: 3, title: "Timeless Tales", description: "Reliving iconic wedding moments captured through our lens.", image: "https://images.unsplash.com/photo-1500051638674-ff996a0ec29e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80", category: "Memorable Moments" },
];

const BlogSection: React.FC = () => {
  return (
    <section id="about" className="py-16 md:py-24 bg-black">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-serif text-center mb-12">From Our Blog</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <div key={post.id} className="group bg-gray-900 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition duration-300">
              <div className="relative h-56">
                <img src={post.image} alt={post.title} className="w-full h-full object-cover transition duration-500 group-hover:opacity-80" />
                 <span className="absolute top-4 left-4 bg-red-600 text-white text-xs font-semibold px-2 py-1 rounded">{post.category}</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3 group-hover:text-red-500 transition duration-300">{post.title}</h3>
                <p className="text-gray-400 text-sm mb-4">{post.description}</p>
                <a href="#" className="inline-flex items-center text-red-500 hover:text-red-400 text-sm font-medium">
                  Read More <ArrowRight size={16} className="ml-1" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
