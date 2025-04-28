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
                className="w-full h-[500px] object-cover object-center rounded-lg"
              />
              <div className="absolute -bottom-6 -right-6 bg-white p-6 w-48 h-48 flex flex-col justify-center shadow-lg">
                <p className="text-5xl font-display font-bold">5+</p>
                <p className="text-noir-500 text-sm mt-1">Años de excelencia</p>
              </div>
            </div>
          </div>
          
          <div className="max-w-xl">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">Tu Tienda de Ciclismo de Confianza</h2>
            <p className="text-noir-600 mb-6 leading-relaxed">
              Somos tu destino para todo lo relacionado con el ciclismo. Ofrecemos una amplia selección de partes premium y accesorios de alta calidad para todos los tipos de ciclistas. Ya sea que busques componentes para tu bicicleta de ruta, de montaña o urbana, tenemos lo que necesitas.
            </p>
            <p className="text-noir-600 mb-8 leading-relaxed">
              Nuestro taller especializado está equipado para manejar cualquier reparación o mantenimiento que tu bicicleta necesite. Nuestros técnicos certificados están comprometidos a mantener tu bicicleta en óptimas condiciones, asegurando que cada paseo sea seguro y placentero.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="/gallery" className="btn-primary">Ver Productos</a>
              <a href="/contact" className="btn-outline">Agendar Servicio</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
