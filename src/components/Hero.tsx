import React from 'react';

const Hero: React.FC = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden bg-noir-900">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1511994298241-608e28f14fde?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')] bg-cover bg-center bg-no-repeat opacity-50"></div>
      
      <div className="relative container mx-auto flex items-center h-full">
        <div className="max-w-lg pt-24">
          <h1 className="text-5xl md:text-7xl font-display font-bold text-white mb-6 leading-tight">
            Vive la <br />Diferencia
          </h1>
          <p className="text-lg text-white/90 mb-8 max-w-md">
            Experimenta la combinación perfecta de rendimiento, estilo y artesanía con nuestra colección exclusiva.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="#" className="btn-primary">Ver Colección</a>
            <a href="#" className="btn-outline text-white border-white hover:bg-white hover:text-noir-900">Saber Más</a>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-0 right-0">
        <div className="container mx-auto flex justify-center">
          <div className="flex space-x-2">
            <button className="w-3 h-3 rounded-full bg-white"></button>
            <button className="w-3 h-3 rounded-full bg-white/30"></button>
            <button className="w-3 h-3 rounded-full bg-white/30"></button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
