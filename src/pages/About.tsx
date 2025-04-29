import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const About: React.FC = () => {
  const teamMembers = [
    {
      name: "Alex Chen",
      role: "Fundador y Diseñador Principal",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      bio: "Con más de 15 años de experiencia en diseño de bicicletas, Alex aporta pasión e innovación a cada proyecto."
    },
    {
      name: "Sarah Martinez",
      role: "Directora Técnica",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      bio: "La formación en ingeniería de Sarah garantiza que nuestras bicicletas cumplan con los más altos estándares de rendimiento y seguridad."
    },
    {
      name: "James Wilson",
      role: "Maestro Artesano",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      bio: "James aporta técnicas de artesanía tradicional a nuestro proceso de fabricación moderno."
    }
  ];

  const values = [
    {
      title: "Excelencia en el Taller",
      description: "Nuestros mecánicos expertos proporcionan servicios de afinación de precisión y preparación para carreras, asegurando que tu bicicleta rinda al máximo en cada competencia. Obtenemos e instalamos solo los mejores componentes, respaldados por años de experiencia en carreras.",
      image: "/images/workshop.jpg"
    },
    {
      title: "Soluciones Completas para Ciclistas",
      description: "Desde accesorios esenciales hasta componentes premium, tenemos todo lo que un ciclista necesita. Nuestra selección cuidadosamente curada incluye cascos, zapatos, botellas de agua y equipo para todo tipo de ciclista, asegurando que encuentres exactamente lo que necesitas para tu viaje en bicicleta.",
      image: "/images/cyclingsolutions.jpg"
    },
    {
      title: "Orientación Experta",
      description: "Ya seas principiante o profesional, nuestro personal experto proporciona asesoramiento personalizado para ayudarte a elegir el equipo adecuado. Entendemos que cada ciclista tiene necesidades únicas y estamos aquí para apoyar tus objetivos ciclistas, sin importar tu nivel de experiencia.",
      image: "/images/expertguidance.jpg"
    },
    {
      title: "Centro de la Comunidad Ciclista",
      description: "Más que una tienda, somos un punto de encuentro para ciclistas de todos los niveles. Únete a nuestros eventos comunitarios, paseos en grupo y talleres. Estamos comprometidos a fomentar un ambiente acogedor donde los ciclistas puedan conectarse, aprender y crecer juntos.",
      image: "/images/plazaexodo.jpg"
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-24">
        {/* Hero Section */}
        <section className="relative h-[60vh] min-h-[400px] bg-noir-900">
          <div className="absolute inset-0 bg-[url('/images/plazaexodo.jpg')] bg-cover bg-center opacity-50"></div>
          <div className="relative container mx-auto h-full flex items-center">
            <div className="max-w-2xl text-white">
              <h1 className="text-5xl md:text-6xl font-display font-bold mb-6">Nuestra Historia</h1>
              <p className="text-xl text-white/90">
                Nacidos durante los desafiantes tiempos del COVID-19, hemos crecido de una pequeña tienda a una próspera comunidad ciclista. Gracias al increíble apoyo de nuestros clientes, hemos construido algo especial: un lugar donde ciclistas de todos los niveles pueden encontrar orientación experta, equipo premium y una comunidad acogedora para compartir su pasión por el ciclismo.
              </p>
            </div>
          </div>
        </section>

        {/* Mission Statement */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">Nuestra Misión</h2>
              <p className="text-lg text-noir-600 leading-relaxed">
                En Cycle-Tech, nos dedicamos a empoderar a ciclistas de todos los niveles con servicio experto, 
                equipo premium y apoyo inquebrantable. Desde el ciclista casual hasta el atleta competitivo, 
                proporcionamos las herramientas, el conocimiento y la comunidad necesarios para elevar tu experiencia ciclista. 
                Nuestro compromiso con la excelencia tanto en productos como en servicio asegura que cada ciclista que 
                cruza nuestras puertas salga listo para alcanzar su próximo hito.
              </p>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-center mb-16">Nuestros Valores</h2>
            <div className="space-y-24">
              {values.map((value, index) => (
                <div 
                  key={index} 
                  className={`flex flex-col ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  } items-center gap-8 md:gap-16`}
                >
                  <div className="w-full md:w-1/2">
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <img 
                        src={value.image} 
                        alt={value.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  <div className="w-full md:w-1/2 text-center md:text-left">
                    <h3 className="text-2xl md:text-3xl font-display font-bold mb-4">{value.title}</h3>
                    <p className="text-noir-600 text-lg leading-relaxed">{value.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-center mb-16">Nuestro Equipo</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
              {teamMembers.map((member, index) => (
                <div key={index} className="text-center">
                  <div className="relative w-48 h-48 mx-auto mb-6 rounded-full overflow-hidden">
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{member.name}</h3>
                  <p className="text-noir-500 mb-4">{member.role}</p>
                  <p className="text-noir-600">{member.bio}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-noir-900 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">Únete a Nuestro Viaje</h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Experimenta la diferencia de una bicicleta Cycle-Tech. Visita nuestro showroom o contáctanos para saber más.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#" className="btn-primary bg-white text-noir-900 hover:bg-noir-100">Visitar Showroom</a>
              <a href="#" className="btn-outline text-white border-white hover:bg-white hover:text-noir-900">Contáctanos</a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About; 