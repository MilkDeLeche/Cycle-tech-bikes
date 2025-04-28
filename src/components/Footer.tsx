import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-noir-100 pt-16 pb-8">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div>
            <h3 className="text-lg font-bold mb-4">Enlaces Rápidos</h3>
            <ul className="space-y-2">
              <li><a href="/gallery" className="text-noir-500 hover:text-noir-900">Galería</a></li>
              <li><a href="/blog" className="text-noir-500 hover:text-noir-900">Blog</a></li>
              <li><a href="/about" className="text-noir-500 hover:text-noir-900">Nosotros</a></li>
              <li><a href="/contact" className="text-noir-500 hover:text-noir-900">Contacto</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Contacto</h3>
            <ul className="space-y-2">
              <li className="text-noir-500">Av Francisco Villa entre Roberto Guerra y Rio Rhin</li>
              <li className="text-noir-500">Treviño Zapata, 87430 Heroica Matamoros</li>
              <li className="text-noir-500">Tamaulipas, México</li>
              <li className="pt-2"><a href="tel:+1234567890" className="text-noir-500 hover:text-noir-900">+1 (234) 567-890</a></li>
              <li><a href="mailto:info@cycle-tech.com" className="text-noir-500 hover:text-noir-900">info@cycle-tech.com</a></li>
              <li><a href="https://maps.google.com/?q=Av+Francisco+Villa+entre+Roberto+Guerra+y+Rio+Rhin,+Treviño+Zapata,+87430+Heroica+Matamoros,+Tamps.,+Mexico" target="_blank" rel="noopener noreferrer" className="text-noir-500 hover:text-noir-900">Ver en Google Maps</a></li>
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
              <a 
                href="https://www.instagram.com/matamoros_cyclingshop/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-noir-500 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-purple-500 hover:via-pink-500 hover:to-orange-500 transition-colors"
              >
                Instagram
              </a>
              <a 
                href="https://www.facebook.com/people/Matamoros-Cycling-Shop/100061266284180/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-noir-500 hover:text-[#1877F2] transition-colors"
              >
                Facebook
              </a>
              <a href="#" className="text-noir-500 hover:text-noir-900">WhatsApp</a>
            </div>
            
            <p className="text-noir-400 text-sm">
              © {new Date().getFullYear()} Matamoros Cycling Shop. Todos los derechos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
