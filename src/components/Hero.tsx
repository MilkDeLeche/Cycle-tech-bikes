import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Hero: React.FC = () => {
  const images = [
    'https://images.unsplash.com/photo-1511994298241-608e28f14fde?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
    '/images/cannon.png',
    '/images/mountainbike.jpg'
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-screen overflow-hidden bg-noir-900">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-50 transition-opacity duration-1000"
        style={{ 
          backgroundImage: `url(${images[currentImageIndex]})`,
          opacity: 0.5
        }}
      ></div>
      
      <div className="relative container mx-auto flex items-center h-full">
        <div className="max-w-lg pt-24">
          <h1 className="text-5xl md:text-7xl font-display font-bold text-white mb-6 leading-tight">
            Vive la <br />Diferencia
          </h1>
          <p className="text-lg text-white/90 mb-8 max-w-md">
            Experimenta la combinación perfecta de rendimiento, estilo y artesanía con nuestra colección exclusiva.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link 
              to="/gallery" 
              className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-noir-900 bg-white hover:bg-noir-100 transition-colors"
            >
              Ver Galería
            </Link>
            <Link 
              to="/contact" 
              className="inline-flex items-center justify-center px-8 py-3 border border-white text-base font-medium rounded-md text-white hover:bg-white hover:text-noir-900 transition-colors"
            >
              Contactar
            </Link>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-0 right-0">
        <div className="container mx-auto flex justify-center">
          <div className="flex space-x-2">
            {images.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                  index === currentImageIndex ? 'bg-white' : 'bg-white/30'
                }`}
                onClick={() => setCurrentImageIndex(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
