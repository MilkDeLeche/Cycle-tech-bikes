import React from 'react';

const AboutSection: React.FC = () => {
  return (
    <section className="py-24 bg-noir-50">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="relative">
              <img 
                src="/images/innovacion.jpg" 
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
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">Comunidad y Experiencia</h2>
            <p className="text-noir-600 mb-6 leading-relaxed">
              Nacidos durante los desafiantes tiempos del COVID-19, hemos crecido de una pequeña tienda a una próspera comunidad ciclista. Gracias al increíble apoyo de nuestros clientes, hemos construido algo especial: un lugar donde ciclistas de todos los niveles pueden encontrar orientación experta y equipo premium.
            </p>
            <p className="text-noir-600 mb-8 leading-relaxed">
              Nuestro compromiso va más allá de la venta de bicicletas. Ofrecemos servicios de afinación de precisión, preparación para carreras y asesoramiento personalizado. Somos un punto de encuentro para la comunidad ciclista, organizando eventos, paseos en grupo y talleres que fomentan la conexión entre ciclistas.
            </p>
            <a href="/about" className="btn-primary">Conoce Nuestra Historia</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
