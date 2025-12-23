
const Footer = () => {
  return (
    <footer className="bg-aelityx-dark text-white pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <h3 className="text-2xl font-bold mb-6">Aelityx Research</h3>
            <p className="text-gray-300 mb-6">
              Investigación académica rigurosa que se transforma en soluciones empresariales aplicadas. 
              Dr. Mauricio Rosales Rivera - SNI Nivel I.
            </p>
            <div className="flex gap-4 mt-4">
              <a href="https://aelityx.com" target="_blank" rel="noopener noreferrer" className="text-aelityx-blue hover:text-white transition-colors text-sm">
                Sitio Corporativo
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-xl font-bold mb-6">Navegación</h4>
            <ul className="space-y-3">
              <li>
                <a href="#inicio" className="text-gray-300 hover:text-white transition-colors">Inicio</a>
              </li>
              <li>
                <a href="#investigacion" className="text-gray-300 hover:text-white transition-colors">Líneas de I+D</a>
              </li>
              <li>
                <a href="#proyectos" className="text-gray-300 hover:text-white transition-colors">Proyectos</a>
              </li>
              <li>
                <a href="#publicaciones" className="text-gray-300 hover:text-white transition-colors">Publicaciones</a>
              </li>
              <li>
                <a href="#investigador" className="text-gray-300 hover:text-white transition-colors">Investigador</a>
              </li>
              <li>
                <a href="#contacto" className="text-gray-300 hover:text-white transition-colors">Colaborar</a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-bold mb-6">Perfil Académico</h4>
            <ul className="space-y-3">
              <li>
                <a href="https://scholar.google.com/citations?user=YOUR_ID" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors">
                  Google Scholar
                </a>
              </li>
              <li>
                <a href="https://orcid.org/YOUR_ID" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors">
                  ORCID
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/rosales-rm" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors">
                  LinkedIn
                </a>
              </li>
              <li className="pt-2">
                <span className="text-gray-400 text-sm">SNI Nivel I (2023-2027)</span>
              </li>
              <li>
                <span className="text-gray-400 text-sm">PhD en Ciencias de la Computación</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-bold mb-6">Contacto</h4>
            <ul className="space-y-3">
              <li className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 mt-0.5 text-aelityx-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="text-gray-300">
                  Aguascalientes, México
                </span>
              </li>
              <li className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-aelityx-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <div className="flex flex-col">
                  <a href="mailto:rslrm.02@gmail.com" className="text-gray-300 hover:text-white transition-colors text-sm">rslrm.02@gmail.com</a>
                  <a href="mailto:info@aelityx.com" className="text-gray-300 hover:text-white transition-colors text-sm">info@aelityx.com</a>
                </div>
              </li>
              <li className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-aelityx-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <a href="tel:+52 777 267 7945" className="text-gray-300 hover:text-white transition-colors">+52 777 267 7945</a>
              </li>
            </ul>
          </div>
        </div>

        <hr className="border-gray-700 my-8" />

        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Aelityx Research. Todos los derechos reservados. Dr. Mauricio Rosales Rivera.
          </p>
          {/*<div className="flex space-x-6">
            <a href="#" className="text-gray-400 hover:text-white transition-colors">Política de Privacidad</a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">Términos de Uso</a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">Cookies</a>
          </div>*/}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
