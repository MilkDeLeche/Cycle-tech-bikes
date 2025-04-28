import React from 'react';
import Navigation from '../components/Navigation';
import Hero from '../components/Hero';
import FeaturedBikes from '../components/FeaturedBikes';
import AboutSection from '../components/AboutSection';
import Footer from '../components/Footer';

const Index: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <Hero />
        <FeaturedBikes />
        <AboutSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
