
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center bg-gradient-to-r from-gray-50 to-gray-100">
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute right-0 top-1/4 w-1/2 h-1/2 bg-aelityx-blue/5 rounded-full blur-3xl"></div>
        <div className="absolute left-1/4 bottom-1/4 w-1/3 h-1/3 bg-aelityx-green/5 rounded-full blur-3xl"></div>
      </div>
      <div className="container mx-auto px-6 pt-24 pb-16 z-10 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-black mb-6 text-aelityx-dark font-roboto">
              Conexión con los <span className="text-aelityx-blue">Datos</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-aelityx-gray max-w-lg">
              Innovación y confianza a través de tecnología de vanguardia para tu evolución empresarial.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button className="bg-aelityx-blue hover:bg-aelityx-blue/90 text-white px-8 py-6 rounded-md text-lg flex items-center gap-2 group">
                Descubre Más
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button variant="outline" className="border-aelityx-blue text-aelityx-blue hover:bg-aelityx-blue hover:text-white px-8 py-6 rounded-md text-lg">
                Contáctanos
              </Button>
            </div>
          </div>
          <div className="relative h-[400px] md:h-[500px] animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <div className="absolute w-full h-full bg-gradient-to-br from-aelityx-blue/80 to-aelityx-green/80 rounded-2xl transform rotate-3"></div>
            <div className="absolute w-full h-full bg-white rounded-2xl shadow-lg overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
                alt="Análisis de datos" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-aelityx-dark/70 to-transparent flex items-end">
                <div className="p-6">
                  <p className="text-white text-lg font-medium">Transformamos datos en conocimiento profundo</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#propuesta" className="bg-white p-3 rounded-full shadow-md flex items-center justify-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-aelityx-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
