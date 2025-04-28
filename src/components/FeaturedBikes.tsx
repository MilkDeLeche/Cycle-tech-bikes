import React from 'react';
import { ArrowRight } from 'lucide-react';

interface BikeCardProps {
  imageSrc: string;
  name: string;
  price: string;
  category: string;
}

const BikeCard: React.FC<BikeCardProps> = ({ imageSrc, name, price, category }) => {
  return (
    <div className="group">
      <div className="relative overflow-hidden bg-noir-50 aspect-square mb-4">
        <img 
          src={imageSrc} 
          alt={name} 
          className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-noir-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        <button className="absolute bottom-4 left-4 bg-white text-noir-900 px-5 py-2 text-sm uppercase tracking-wider translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
          Vista Rápida
        </button>
      </div>
      <div className="flex justify-between items-start">
        <div>
          <h3 className="text-lg font-medium mb-1">{name}</h3>
          <p className="text-sm text-noir-500">{category}</p>
        </div>
        <p className="font-medium">{price}</p>
      </div>
    </div>
  );
};

const FeaturedBikes: React.FC = () => {
  const bikes = [
    {
      imageSrc: "https://images.unsplash.com/photo-1576435728678-68d0fbf94e91?ixlib=rb-4.0.3&auto=format&fit=crop&w=2068&q=80",
      name: "Road Master Elite",
      price: "$3,299",
      category: "Bicicleta de Ruta"
    },
    {
      imageSrc: "https://images.unsplash.com/photo-1485965120184-e220f721d03e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      name: "Urban Commuter",
      price: "$1,899",
      category: "Bicicleta Urbana"
    },
    {
      imageSrc: "https://images.unsplash.com/photo-1571068316344-75bc76f77890?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      name: "Mountain Explorer Pro",
      price: "$2,599",
      category: "Bicicleta de Montaña"
    },
    {
      imageSrc: "https://images.unsplash.com/photo-1532298229144-0ec0c57515c7?ixlib=rb-4.0.3&auto=format&fit=crop&w=2022&q=80",
      name: "Tour Elite Carbon",
      price: "$4,199",
      category: "Bicicleta de Ruta"
    }
  ];

  return (
    <section className="section container mx-auto">
      <div className="flex justify-between items-end mb-12">
        <div>
          <h2 className="text-3xl md:text-4xl font-display font-bold">Bicicletas Destacadas</h2>
          <p className="text-noir-500 mt-2">Hechas a mano con materiales premium</p>
        </div>
        <a href="#" className="hidden sm:flex items-center text-sm uppercase tracking-wider hover:text-noir-500">
          Ver todo <ArrowRight size={16} className="ml-1" />
        </a>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
        {bikes.map((bike, index) => (
          <BikeCard key={index} {...bike} />
        ))}
      </div>
      
      <div className="mt-10 flex justify-center sm:hidden">
        <a href="#" className="btn-outline">Ver Todos los Productos</a>
      </div>
    </section>
  );
};

export default FeaturedBikes;
