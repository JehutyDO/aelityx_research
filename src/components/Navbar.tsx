import { useState, useEffect } from "react";
import ThemeToggle from "./ThemeToggle";

const navItems = [
  ["#inicio", "Inicio"],
  ["#propuesta", "Propuesta"],
  ["#servicios", "Servicios"],
  ["#casos", "Casos de Éxito"],
  ["#vision", "Visión"],
  ["#contacto", "Contacto"],
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("");
  const [isDark, setIsDark] = useState(false);
  const [isThemeReady, setIsThemeReady] = useState(false); // Nueva bandera

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Detecta la sección activa
      let current = "";
      navItems.forEach(([id]) => {
        const section = document.querySelector(id);
        if (section) {
          const top = section.getBoundingClientRect().top;
          if (top < window.innerHeight * 0.3) {
            current = id;
          }
        }
      });
      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const matchDark = window.matchMedia("(prefers-color-scheme: dark)");

    const updateTheme = () => {
      const theme = localStorage.getItem("theme");
      if (theme === "dark" || (!theme && matchDark.matches)) {
        setIsDark(true);
      } else {
        setIsDark(false);
      }
      setIsThemeReady(true); // Marca que el tema ya fue evaluado
    };

    updateTheme();

    // Escucha cambios en la preferencia del sistema
    matchDark.addEventListener("change", updateTheme);

    // Observa cambios manuales en la clase del <html>
    const observer = new MutationObserver(updateTheme);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => {
      matchDark.removeEventListener("change", updateTheme);
      observer.disconnect();
    };
  }, []);

  // Evita renderizar hasta que se haya determinado el tema (para evitar el "flash")
  if (!isThemeReady) return null;

  return (
      <header
          className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
              isScrolled ? "bg-white dark:bg-gray-900 shadow-md py-3" : "bg-transparent py-5"
          }`}
      >
        <div className="container mx-auto px-6 flex justify-between items-center">
          {/* Logo */}
          <a href="#" className="flex items-center space-x-2 transition-transform hover:scale-105">
            <img
                src={isDark ? "/aelityx_white.svg" : "/aelityx_blue.svg"}
                alt="Aelityx Logo"
                className="h-8 md:h-10 w-auto transition-all"
            />
            <span className="hidden md:block text-2xl font-bold font-poppins text-aelityx-blue dark:text-white">
            Aelityx
          </span>
          </a>

          {/* Navegación Desktop */}
          <nav className="hidden lg:flex items-center space-x-10">
            {navItems.map(([href, label]) => (
                <a
                    key={href}
                    href={href}
                    className={`transition-colors font-medium ${
                        activeSection === href
                            ? "text-aelityx-blue dark:text-aelityx-green"
                            : "text-aelityx-dark dark:text-white hover:text-aelityx-blue dark:hover:text-aelityx-green"
                    }`}
                >
                  {label}
                </a>
            ))}
            <ThemeToggle isDark={isDark} />
          </nav>

          {/* Mobile Toggle */}
          <div className="lg:hidden flex items-center space-x-4">
            <ThemeToggle isDark={isDark} />
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
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Menú Mobile */}
        {isMobileMenuOpen && (
            <div className="lg:hidden bg-white dark:bg-gray-900 shadow-md">
              <nav className="flex flex-col px-6 py-4 space-y-4">
                {navItems.map(([href, label]) => (
                    <a
                        key={href}
                        href={href}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className={`transition-colors font-medium ${
                            activeSection === href
                                ? "text-aelityx-blue dark:text-aelityx-green"
                                : "text-aelityx-dark dark:text-white hover:text-aelityx-blue dark:hover:text-aelityx-green"
                        }`}
                    >
                      {label}
                    </a>
                ))}
              </nav>
            </div>
        )}
      </header>
  );
};

export default Navbar;
