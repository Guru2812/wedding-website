import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TrailerSection from './components/TrailerSection';
import MapSection from './components/MapSection';
import MusicSection from './components/MusicSection';
import FeaturedProject from './components/FeaturedProject';
import Showcase from './components/Showcase';
import Testimonials from './components/Testimonials';
import BlogSection from './components/BlogSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-black text-white font-sans">
      <Navbar />
      <Hero />
      <TrailerSection />
      <MapSection />
      <MusicSection />
      <FeaturedProject />
      <Showcase />
      <Testimonials />
      <BlogSection />
      <Footer />
    </div>
  );
}

export default App;
