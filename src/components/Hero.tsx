import React, { useState, useEffect } from 'react';

const Hero: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const slides = [
    {
      image: "https://images.unsplash.com/photo-1511994298241-608e28f14fde?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      title: "Vive la Diferencia",
      description: "Experimenta la combinación perfecta de rendimiento, estilo y artesanía con nuestra colección exclusiva."
    },
    {
      image: "/images/cannon.png",
      title: "Equipamiento Premium",
      description: "Descubre nuestra selección de componentes y accesorios de la más alta calidad para tu bicicleta."
    },
    {
      image: "/images/mountainbike.jpg",
      title: "Aventuras sin Límites",
      description: "Explora nuevos senderos con nuestras bicicletas de montaña diseñadas para el máximo rendimiento."
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full h-screen overflow-hidden bg-noir-900">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-50"
            style={{ backgroundImage: `url('${slide.image}')` }}
          ></div>
        </div>
      ))}
      
      <div className="relative container mx-auto flex items-center h-full">
        <div className="max-w-lg pt-24">
          <h1 className="text-5xl md:text-7xl font-display font-bold text-white mb-6 leading-tight">
            {slides[currentSlide].title}
          </h1>
          <p className="text-lg text-white/90 mb-8 max-w-md">
            {slides[currentSlide].description}
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="/gallery" className="btn-primary">Ver Colección</a>
            <a href="/contact" className="btn-outline text-white border-white hover:bg-white hover:text-noir-900">Saber Más</a>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-0 right-0">
        <div className="container mx-auto flex justify-center">
          <div className="flex space-x-2">
            {slides.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentSlide ? 'bg-white' : 'bg-white/30'
                }`}
                onClick={() => setCurrentSlide(index)}
                aria-label={`Ir a slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
