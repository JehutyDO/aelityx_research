import { Database, Lightbulb } from "lucide-react";
import { Button } from "@/components/ui/button";

const ProposalSection = () => {
  return (
      <section id="propuesta" className="relative section-padding bg-white dark:bg-gray-900 overflow-hidden">
        {/* Fondo difuminado decorativo */}
        <div
            className="absolute inset-0 z-0 pointer-events-none"
            aria-hidden="true"
        >
          <div className="absolute -top-32 -left-32 w-[200px] h-[200px] bg-gradient-to-br from-aelityx-blue/50 to-aelityx-green/20 rounded-full blur-3xl opacity-20"></div>
          <div className="absolute bottom-0 right-0 w-[100px] h-[100px] bg-gradient-to-tl from-aelityx-green/50 to-aelityx-blue/20 rounded-full blur-3xl opacity-20"></div>
        </div>

        <div className="relative z-10 container mx-auto">
          <div className="text-center">
            <h2 className="section-title">Investigación que se Transforma en Soluciones</h2>
            <p className="text-3xl font-bold mb-6 text-aelityx-blue dark:text-aelityx-blue/90">
              "Los datos no solo informan: los datos iluminan."
            </p>
            <p className="section-subtitle">
              Investigación académica rigurosa que se transforma en soluciones empresariales aplicadas. 
              Combinamos pensamiento estadístico, herramientas digitales e inteligencia aplicada a través de <strong className="text-aelityx-blue">Aelityx</strong>.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-16">
            <div className="rounded-lg overflow-hidden shadow-lg group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 bg-white dark:bg-gray-800 flex flex-col h-full justify-between">
              <div className="p-8 flex-1 flex flex-col justify-between items-center text-center">
                <div className="w-16 h-16 rounded-full bg-aelityx-blue/10 dark:bg-aelityx-blue/20 flex items-center justify-center mb-6 group-hover:bg-aelityx-blue/20 dark:group-hover:bg-aelityx-blue/30 transition-colors duration-300">
                  <Database className="w-8 h-8 text-aelityx-blue dark:text-aelityx-blue/90" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-aelityx-dark dark:text-white">Investigación Académica Rigurosa</h3>
                <p className="text-aelityx-gray dark:text-gray-300 mb-6">
                  Más de 20 publicaciones científicas en revistas indexadas (JCR, Scopus, WoS). Investigación en ML, salud pública, 
                  medio ambiente y análisis de datos con metodologías científicas validadas.
                </p>
              </div>
              <div className="bg-gradient-to-r from-aelityx-blue to-aelityx-green h-1"></div>
            </div>

            <div className="rounded-lg overflow-hidden shadow-lg group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 bg-white dark:bg-gray-800 flex flex-col h-full justify-between">
              <div className="p-8 flex-1 flex flex-col justify-between items-center text-center">
                <div className="w-16 h-16 rounded-full bg-aelityx-green/10 dark:bg-aelityx-green/20 flex items-center justify-center mb-6 group-hover:bg-aelityx-green/20 dark:group-hover:bg-aelityx-green/30 transition-colors duration-300">
                  <Lightbulb className="w-8 h-8 text-aelityx-green dark:text-aelityx-green/90" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-aelityx-dark dark:text-white">Aplicación Práctica con Aelityx</h3>
                <p className="text-aelityx-gray dark:text-gray-300 mb-6">
                  De la investigación surgen <strong className="text-aelityx-green">dashboards empresariales</strong>, <strong className="text-aelityx-green">modelos predictivos</strong> y <strong className="text-aelityx-green">sistemas de BI</strong> que transforman datos en decisiones estratégicas. Optimización operativa, arquitecturas de datos y soluciones de toma de decisiones que generan valor real para las organizaciones.
                </p>
              </div>
              <div className="bg-gradient-to-r from-aelityx-green to-aelityx-blue h-1"></div>
            </div>
          </div>
        </div>
      </section>
  );
};

export default ProposalSection;
