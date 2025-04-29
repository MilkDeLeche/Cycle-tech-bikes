import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { Link } from 'react-router-dom'
import { Logo } from './Logo'

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm border-b border-gray-200 dark:border-gray-800">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center">
            <Logo />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">
              Inicio
            </Link>
            <Link to="/gallery" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">
              Galería
            </Link>
            <Link to="/about" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">
              Sobre Nosotros
            </Link>
            <Link to="/contact" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">
              Contacto
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <nav className="md:hidden py-4">
            <div className="flex flex-col space-y-4">
              <Link
                to="/"
                className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
                onClick={() => setIsOpen(false)}
              >
                Inicio
              </Link>
              <Link
                to="/gallery"
                className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
                onClick={() => setIsOpen(false)}
              >
                Galería
              </Link>
              <Link
                to="/about"
                className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
                onClick={() => setIsOpen(false)}
              >
                Sobre Nosotros
              </Link>
              <Link
                to="/contact"
                className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
                onClick={() => setIsOpen(false)}
              >
                Contacto
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
