import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Logo } from "./Logo"

const Navigation: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 bg-white z-50 border-b border-noir-100">
      <div className="container mx-auto">
        <div className="flex items-center justify-between py-4">
          <Logo />

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="/" className="text-sm uppercase tracking-wider hover:text-noir-500">Inicio</a>
            <a href="/gallery" className="text-sm uppercase tracking-wider hover:text-noir-500">Galería</a>
            <a href="/about" className="text-sm uppercase tracking-wider hover:text-noir-500">Nosotros</a>
            <a href="/blog" className="text-sm uppercase tracking-wider hover:text-noir-500">Blog</a>
            <a href="/contact" className="text-sm uppercase tracking-wider hover:text-noir-500">Contacto</a>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="p-1 hover:text-noir-500 md:hidden" 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white absolute w-full border-b border-noir-100 animate-fade-in">
          <nav className="container mx-auto py-6">
            <div className="flex flex-col space-y-4">
              <a href="/" className="text-sm uppercase tracking-wider hover:text-noir-500">Inicio</a>
              <a href="/gallery" className="text-sm uppercase tracking-wider hover:text-noir-500">Galería</a>
              <a href="/about" className="text-sm uppercase tracking-wider hover:text-noir-500">Nosotros</a>
              <a href="/blog" className="text-sm uppercase tracking-wider hover:text-noir-500">Blog</a>
              <a href="/contact" className="text-sm uppercase tracking-wider hover:text-noir-500">Contacto</a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navigation;
