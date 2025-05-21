
import { Database, BarChart } from "lucide-react";

const ProposalSection = () => {
  return (
    <section id="propuesta" className="section-padding bg-white">
      <div className="container mx-auto">
        <div className="text-center">
          <h2 className="section-title">Transformamos datos en conocimiento profundo</h2>
          <p className="section-subtitle">
            Impulsamos la innovación y la evolución tecnológica de tu negocio mediante soluciones avanzadas y análisis precisos.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-16">
          <div className="rounded-lg overflow-hidden shadow-lg group hover:shadow-xl transition-shadow duration-300">
            <div className="p-8">
              <div className="w-16 h-16 rounded-full bg-aelityx-blue/10 flex items-center justify-center mb-6 group-hover:bg-aelityx-blue/20 transition-colors duration-300">
                <Database className="w-8 h-8 text-aelityx-blue" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-aelityx-dark">Soluciones de Datos Inteligentes</h3>
              <p className="text-aelityx-gray">
                Nuestras soluciones integran análisis avanzado, machine learning y visualización de datos para ofrecer insights accionables que impulsan la toma de decisiones y generan ventajas competitivas para tu negocio.
              </p>
            </div>
            <div className="bg-gradient-to-r from-aelityx-blue to-aelityx-green h-1"></div>
          </div>

          <div className="rounded-lg overflow-hidden shadow-lg group hover:shadow-xl transition-shadow duration-300">
            <div className="p-8">
              <div className="w-16 h-16 rounded-full bg-aelityx-green/10 flex items-center justify-center mb-6 group-hover:bg-aelityx-green/20 transition-colors duration-300">
                <BarChart className="w-8 h-8 text-aelityx-green" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-aelityx-dark">Evolución Tecnológica Continua</h3>
              <p className="text-aelityx-gray">
                Acompañamos a tu empresa en el camino de la transformación digital con un enfoque personalizado y escalable que se adapta a tus necesidades específicas y evoluciona con tu negocio.
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
