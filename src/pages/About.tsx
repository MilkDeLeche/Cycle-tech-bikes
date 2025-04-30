import React, { useEffect, useState } from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';

const About: React.FC = () => {
  const [isVisible, setIsVisible] = useState<boolean[]>([]);

  useEffect(() => {
    // Add smooth scrolling behavior to the page
    document.documentElement.style.scrollBehavior = 'smooth';

    // Initialize visibility state for each section
    setIsVisible(new Array(values.length + teamMembers.length + 2).fill(false));

    // Set up intersection observer for scroll animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute('data-index') || '0');
            setIsVisible(prev => {
              const newState = [...prev];
              newState[index] = true;
              return newState;
            });
          }
        });
      },
      { threshold: 0.1 }
    );

    // Observe all sections
    document.querySelectorAll('[data-section]').forEach((section, index) => {
      section.setAttribute('data-index', index.toString());
      observer.observe(section);
    });

    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
      observer.disconnect();
    };
  }, []);

  const teamMembers = [
    {
      name: "[Nombre del Técnico]",
      role: "Técnico Especialista",
      image: "/images/placeholder.jpg",
      bio: "Especialista en mantenimiento y reparación de bicicletas de montaña y ruta."
    },
    {
      name: "[Nombre del Técnico]",
      role: "Técnico Especialista",
      image: "/images/placeholder.jpg",
      bio: "Experto en ajustes de suspensión y sistemas de transmisión."
    },
    {
      name: "[Nombre del Técnico]",
      role: "Técnico Especialista",
      image: "/images/placeholder.jpg",
      bio: "Especialista en personalización y optimización de bicicletas."
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
        <section 
          data-section="hero"
          className={`relative h-[60vh] min-h-[400px] bg-noir-900 transition-opacity duration-1000 ${
            isVisible[0] ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div className="absolute inset-0 bg-[url('/images/plazaexodo.jpg')] bg-cover bg-center"></div>
        </section>

        {/* History Section */}
        <section 
          data-section="history"
          className={`py-20 bg-white transition-all duration-1000 ${
            isVisible[1] ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-display font-bold mb-6 text-center">Nuestra Historia</h1>
              <p className="text-lg text-noir-600 leading-relaxed">
                Nacidos durante los desafiantes tiempos del COVID-19, hemos crecido de una pequeña tienda a una próspera comunidad ciclista. Gracias al increíble apoyo de nuestros clientes, hemos construido algo especial: un lugar donde ciclistas de todos los niveles pueden encontrar orientación experta, equipo premium y una comunidad acogedora para compartir su pasión por el ciclismo.
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
                  data-section={`value-${index}`}
                  className={`flex flex-col ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  } items-center gap-8 md:gap-16 transition-all duration-1000 ${
                    isVisible[index + 2] ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                  }`}
                >
                  <div className="w-full md:w-1/2">
                    <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
                      <img 
                        src={value.image} 
                        alt={value.title}
                        className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
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
                <div 
                  key={index}
                  data-section={`team-${index}`}
                  className={`text-center transition-all duration-1000 ${
                    isVisible[index + values.length + 2] ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                  }`}
                >
                  <div className="relative w-48 h-48 mx-auto mb-6 rounded-full overflow-hidden">
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
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
        <section 
          data-section="cta"
          className={`py-20 bg-noir-900 text-white transition-all duration-1000 ${
            isVisible[values.length + teamMembers.length + 2] ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">Nuestros Técnicos Expertos</h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Nuestro equipo de técnicos certificados está listo para ayudarte con cualquier necesidad de mantenimiento o reparación de tu bicicleta. Con años de experiencia y las mejores herramientas, garantizamos un servicio de calidad.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/gallery" 
                className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-noir-900 bg-white hover:bg-noir-100 transition-colors duration-300"
              >
                Ver Galería
              </Link>
              <Link 
                to="/contact" 
                className="inline-flex items-center justify-center px-8 py-3 border border-white text-base font-medium rounded-md text-white hover:bg-white hover:text-noir-900 transition-colors duration-300"
              >
                Agendar Cita
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About; 