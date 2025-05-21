
import { Database, Lightbulb } from "lucide-react";
import { Button } from "@/components/ui/button";

const ProposalSection = () => {
  return (
    <section id="propuesta" className="section-padding bg-white">
      <div className="container mx-auto">
        <div className="text-center">
          <h2 className="section-title">Nuestra Esencia</h2>
          <p className="text-3xl font-bold mb-6 text-aelityx-blue">
            "Los datos no solo informan: los datos iluminan."
          </p>
          <p className="section-subtitle">
            En Aelityx creemos que el conocimiento nace de la observación crítica. Creamos soluciones con pensamiento estadístico, 
            herramientas digitales, e inteligencia emocional.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-16">
          <div className="rounded-lg overflow-hidden shadow-lg group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
            <div className="p-8">
              <div className="w-16 h-16 rounded-full bg-aelityx-blue/10 flex items-center justify-center mb-6 group-hover:bg-aelityx-blue/20 transition-colors duration-300">
                <Database className="w-8 h-8 text-aelityx-blue" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-aelityx-dark">Soluciones de Datos Inteligentes</h3>
              <p className="text-aelityx-gray mb-6">
                Nuestras soluciones integran análisis avanzado, machine learning y visualización de datos para ofrecer insights accionables que impulsan la toma de decisiones y generan ventajas competitivas para tu organización.
              </p>
              <Button variant="outline" className="border-aelityx-blue text-aelityx-blue hover:bg-aelityx-blue hover:text-white">
                Ver más
              </Button>
            </div>
            <div className="bg-gradient-to-r from-aelityx-blue to-aelityx-green h-1"></div>
          </div>

          <div className="rounded-lg overflow-hidden shadow-lg group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
            <div className="p-8">
              <div className="w-16 h-16 rounded-full bg-aelityx-green/10 flex items-center justify-center mb-6 group-hover:bg-aelityx-green/20 transition-colors duration-300">
                <Lightbulb className="w-8 h-8 text-aelityx-green" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-aelityx-dark">Evolución Tecnológica Continua</h3>
              <p className="text-aelityx-gray mb-6">
                Combinamos la precisión de la ciencia con el diseño de experiencias tecnológicas para acompañar a tu empresa en el camino de la transformación digital con un enfoque personalizado y escalable.
              </p>
              <Button variant="outline" className="border-aelityx-green text-aelityx-green hover:bg-aelityx-green hover:text-white">
                Ver más
              </Button>
            </div>
            <div className="bg-gradient-to-r from-aelityx-green to-aelityx-blue h-1"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProposalSection;
