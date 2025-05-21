
import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import ThemeToggle from './ThemeToggle';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Check if page is scrolled
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white dark:bg-gray-900 shadow-md py-3' : 'bg-transparent py-5'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center">
          <a href="#" className="text-2xl font-bold font-poppins text-aelityx-blue">
            Aelityx
          </a>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center space-x-10">
          <a href="#inicio" className="text-aelityx-dark dark:text-white hover:text-aelityx-blue transition-colors">Inicio</a>
          <a href="#propuesta" className="text-aelityx-dark dark:text-white hover:text-aelityx-blue transition-colors">Propuesta</a>
          <a href="#servicios" className="text-aelityx-dark dark:text-white hover:text-aelityx-blue transition-colors">Servicios</a>
          <a href="#casos" className="text-aelityx-dark dark:text-white hover:text-aelityx-blue transition-colors">Casos de Éxito</a>
          <a href="#equipo" className="text-aelityx-dark dark:text-white hover:text-aelityx-blue transition-colors">Equipo</a>
          <a href="#contacto" className="text-aelityx-dark dark:text-white hover:text-aelityx-blue transition-colors">Contacto</a>
          <ThemeToggle />
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center space-x-4">
          <ThemeToggle />
          <button 
            className="text-aelityx-dark dark:text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor" 
              className="w-6 h-6"
            >
              {isMobileMenuOpen ? (
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M6 18L18 6M6 6l12 12" 
                />
              ) : (
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M4 6h16M4 12h16M4 18h16" 
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 shadow-md">
          <nav className="flex flex-col px-6 py-4 space-y-4">
            <a 
              href="#inicio" 
              className="text-aelityx-dark dark:text-white hover:text-aelityx-blue transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Inicio
            </a>
            <a 
              href="#propuesta" 
              className="text-aelityx-dark dark:text-white hover:text-aelityx-blue transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Propuesta
            </a>
            <a 
              href="#servicios" 
              className="text-aelityx-dark dark:text-white hover:text-aelityx-blue transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Servicios
            </a>
            <a 
              href="#casos" 
              className="text-aelityx-dark dark:text-white hover:text-aelityx-blue transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Casos de Éxito
            </a>
            <a 
              href="#equipo" 
              className="text-aelityx-dark dark:text-white hover:text-aelityx-blue transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Equipo
            </a>
            <a 
              href="#contacto" 
              className="text-aelityx-dark dark:text-white hover:text-aelityx-blue transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Contacto
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
