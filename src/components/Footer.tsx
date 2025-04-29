import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, MapPin, Clock, Phone, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-noir-100">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          {/* Navigation Links */}
          <div>
            <h3 className="text-lg font-display font-bold mb-4">Navegación</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-noir-500 hover:text-noir-900 transition-colors">
                  Inicio
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="text-noir-500 hover:text-noir-900 transition-colors">
                  Galería
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-noir-500 hover:text-noir-900 transition-colors">
                  Nosotros
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-noir-500 hover:text-noir-900 transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-noir-500 hover:text-noir-900 transition-colors">
                  Contacto
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-lg font-display font-bold mb-4">Contacto</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3 justify-center md:justify-start">
                <MapPin className="w-5 h-5 mt-1 text-noir-500" />
                <div>
                  <p className="text-noir-500">Matamoros Cycling Shop</p>
                  <p className="text-noir-500">Av Francisco Villa entre Roberto Guerra y Rio Rhin</p>
                  <p className="text-noir-500">Treviño Zapata, 87430</p>
                  <p className="text-noir-500">Heroica Matamoros, Tamps., México</p>
                </div>
              </div>
              <div className="flex items-center space-x-3 justify-center md:justify-start">
                <Clock className="w-5 h-5 text-noir-500" />
                <p className="text-noir-500">Lunes a Viernes: 9:00 AM - 7:00 PM</p>
              </div>
              <div className="flex items-center space-x-3 justify-center md:justify-start">
                <Phone className="w-5 h-5 text-noir-500" />
                <p className="text-noir-500">+52 123 456 7890</p>
              </div>
              <div className="flex items-center space-x-3 justify-center md:justify-start">
                <Mail className="w-5 h-5 text-noir-500" />
                <p className="text-noir-500">info@matamoroscyclingshop.com</p>
              </div>
            </div>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-lg font-display font-bold mb-4">Síguenos</h3>
            <div className="flex space-x-4 justify-center md:justify-start">
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-noir-500 hover:text-[#E1306C] transition-colors"
              >
                <Instagram className="w-6 h-6" />
              </a>
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-noir-500 hover:text-[#1877F2] transition-colors"
              >
                <Facebook className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-noir-100 mt-12 pt-8 text-center text-noir-400">
          <p>&copy; {new Date().getFullYear()} Matamoros Cycling Shop. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
