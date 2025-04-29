import React from 'react';

const AboutSection: React.FC = () => {
  return (
    <section className="py-24 bg-noir-50">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1541787457429-b1766a4766b6?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" 
                alt="Bike workshop" 
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute -bottom-6 -right-6 bg-white p-6 w-48 h-48 flex flex-col justify-center shadow-lg">
                <p className="text-5xl font-display font-bold">5+</p>
                <p className="text-noir-500 text-sm mt-1">Años de excelencia</p>
              </div>
            </div>
          </div>
          
          <div className="max-w-xl">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">Artesanía e Innovación</h2>
            <p className="text-noir-600 mb-6 leading-relaxed">
              Desde 2008, Cycle-Tech ha estado creando bicicletas premium que combinan la artesanía con tecnología de vanguardia. Cada una de nuestras bicicletas representa el equilibrio perfecto entre forma y función, diseñadas para ciclistas que exigen lo mejor.
            </p>
            <p className="text-noir-600 mb-8 leading-relaxed">
              Nuestra filosofía de diseño se centra en el minimalismo, el rendimiento y la sostenibilidad. Utilizamos solo materiales de la más alta calidad y trabajamos con proveedores que comparten nuestro compromiso con la responsabilidad ambiental y la fabricación ética.
            </p>
            <a href="/about" className="btn-primary">Nuestra Historia</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
