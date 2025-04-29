import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-noir-100 pt-16 pb-8">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          <div>
            <h3 className="text-lg font-bold mb-4">Tienda</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-noir-500 hover:text-noir-900">Bicicletas de Ruta</a></li>
              <li><a href="#" className="text-noir-500 hover:text-noir-900">Bicicletas de Montaña</a></li>
              <li><a href="#" className="text-noir-500 hover:text-noir-900">Bicicletas Urbanas</a></li>
              <li><a href="#" className="text-noir-500 hover:text-noir-900">Bicicletas Eléctricas</a></li>
              <li><a href="#" className="text-noir-500 hover:text-noir-900">Accesorios</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Empresa</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-noir-500 hover:text-noir-900">Sobre Nosotros</a></li>
              <li><a href="#" className="text-noir-500 hover:text-noir-900">Sostenibilidad</a></li>
              <li><a href="#" className="text-noir-500 hover:text-noir-900">Nuestro Proceso</a></li>
              <li><a href="#" className="text-noir-500 hover:text-noir-900">Carreras</a></li>
              <li><a href="#" className="text-noir-500 hover:text-noir-900">Contáctanos</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Soporte</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-noir-500 hover:text-noir-900">Preguntas Frecuentes</a></li>
              <li><a href="#" className="text-noir-500 hover:text-noir-900">Envíos y Devoluciones</a></li>
              <li><a href="#" className="text-noir-500 hover:text-noir-900">Garantía</a></li>
              <li><a href="#" className="text-noir-500 hover:text-noir-900">Tallas de Bicicletas</a></li>
              <li><a href="#" className="text-noir-500 hover:text-noir-900">Instrucciones de Cuidado</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Contacto</h3>
            <ul className="space-y-2">
              <li className="text-noir-500">VG67+F9 Matamoros</li>
              <li className="text-noir-500">Tamaulipas, México</li>
              <li className="pt-2"><a href="tel:+1234567890" className="text-noir-500 hover:text-noir-900">+1 (234) 567-890</a></li>
              <li><a href="mailto:info@cycle-tech.com" className="text-noir-500 hover:text-noir-900">info@cycle-tech.com</a></li>
            </ul>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-noir-100">
          <a href="/" className="mb-4 md:mb-0">
            <img 
              src="/lovable-uploads/8398ad8c-d082-4894-8b1d-ce3fd6482b0b.png" 
              alt="CYCLE-TECH BIKES" 
              className="h-8 md:h-10"
            />
          </a>
          
          <div className="flex flex-col md:flex-row items-center">
            <div className="flex space-x-4 mb-4 md:mb-0 md:mr-8">
              <a href="#" className="text-noir-500 hover:text-noir-900">Instagram</a>
              <a href="#" className="text-noir-500 hover:text-noir-900">Twitter</a>
              <a href="#" className="text-noir-500 hover:text-noir-900">Facebook</a>
            </div>
            
            <p className="text-noir-400 text-sm">
              © {new Date().getFullYear()} Cycle-Tech. Todos los derechos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
