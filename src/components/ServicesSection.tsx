
import { Database, ChartBar, Rocket } from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      icon: <Database className="w-10 h-10 text-aelityx-blue" />,
      title: "Análisis de Datos",
      description: "Implementamos soluciones de análisis de datos que transforman información compleja en insights accionables para la toma de decisiones estratégicas."
    },
    {
      icon: <Rocket className="w-10 h-10 text-aelityx-green" />,
      title: "Innovación Continua",
      description: "Desarrollamos estrategias de innovación tecnológica que mantienen tu empresa a la vanguardia y generan ventajas competitivas sostenibles."
    },
    {
      icon: <ChartBar className="w-10 h-10 text-aelityx-blue" />,
      title: "Proyectos Innovadores",
      description: "Diseñamos y ejecutamos proyectos de transformación digital que optimizan procesos, reducen costos y maximizan el retorno de inversión."
    }
  ];

  return (
    <section id="servicios" className="section-padding bg-gray-50">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="section-title">Servicios Destacados</h2>
          <p className="section-subtitle">
            Nuestros servicios especializados impulsan el crecimiento de tu negocio a través de soluciones tecnológicas de vanguardia.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="service-card group"
            >
              <div className="mb-6 w-20 h-20 rounded-full bg-gray-100 flex items-center justify-center group-hover:bg-gray-200 transition-colors duration-300">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold mb-4 text-aelityx-dark">{service.title}</h3>
              <p className="text-aelityx-gray">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
