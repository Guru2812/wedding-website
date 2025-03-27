import React from 'react';
import { Star } from 'lucide-react';

const testimonials = [
  { id: 1, name: "Priya & Sameer", quote: "They didn't just film our wedding; they told our story. Every frame is filled with emotion and artistry. Truly magical!", image: "https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=880&q=80" },
  { id: 2, name: "Aisha Khan", quote: "The team was incredibly professional and made us feel so comfortable. The final film exceeded all our expectations. Highly recommend!", image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80" },
  { id: 3, name: "Rohan Sharma", quote: "Cinematic brilliance! They captured moments we didn't even realize were happening. Watching the film brings back all the joy.", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80" },
];

const Testimonials: React.FC = () => {
  // Simplified static display - Replace with a slider if needed
  return (
    <section className="py-16 md:py-24 bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-serif text-center mb-4">Gratitude Notes</h2>
        <p className="text-center text-gray-400 mb-12 max-w-xl mx-auto">
          Hear from couples who entrusted us with their precious moments.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-gray-800 p-6 rounded-lg shadow-lg text-center transform hover:scale-105 transition duration-300">
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-20 h-20 rounded-full mx-auto mb-4 border-2 border-red-500 object-cover"
              />
              <div className="flex justify-center text-yellow-400 mb-4">
                {[...Array(5)].map((_, i) => <Star key={i} size={18} fill="currentColor" />)}
              </div>
              <blockquote className="text-gray-300 italic mb-4">
                "{testimonial.quote}"
              </blockquote>
              <p className="font-semibold text-white">{testimonial.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
