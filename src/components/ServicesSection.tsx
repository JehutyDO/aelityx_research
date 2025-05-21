
import { 
  Database, 
  ChartBar, 
  Rocket, 
  Brain, 
  Globe, 
  BookOpen, 
  FlaskConical
} from "lucide-react";
import { Button } from "@/components/ui/button";

const ServicesSection = () => {
  const services = [
    {
      icon: <Database className="w-10 h-10 text-aelityx-blue" />,
      title: "Ciencia de Datos Aplicada",
      description: "Modelado predictivo, análisis exploratorio, minería de datos, dashboards para análisis avanzado de información."
    },
    {
      icon: <ChartBar className="w-10 h-10 text-aelityx-green" />,
      title: "Business Intelligence y Visualización",
      description: "Dashboards con Power BI, Metabase y Python. Desarrollo de KPIs estratégicos y tableros operativos."
    },
    {
      icon: <Brain className="w-10 h-10 text-aelityx-blue" />,
      title: "Inteligencia Artificial & Machine Learning",
      description: "Modelos de regresión, clasificación, IA aplicada con PyTorch, Scikit-learn y TensorFlow para soluciones inteligentes."
    },
    {
      icon: <FlaskConical className="w-10 h-10 text-aelityx-green" />,
      title: "Simulación y Análisis Cuantitativo",
      description: "Simulación Monte Carlo, escenarios What-if, análisis de sensibilidad y optimización para toma de decisiones."
    },
    {
      icon: <Globe className="w-10 h-10 text-aelityx-blue" />,
      title: "Desarrollo Web Interactivo",
      description: "React, Vite, TailwindCSS, páginas institucionales, plataformas inteligentes para visualización y gestión de datos."
    },
    {
      icon: <Rocket className="w-10 h-10 text-aelityx-green" />,
      title: "Estrategia de Innovación",
      description: "Planeación estratégica con Hoshin Kanri, OKRs, mapeo de indicadores y tableros de seguimiento para innovación."
    },
    {
      icon: <BookOpen className="w-10 h-10 text-aelityx-blue" />,
      title: "Capacitación y Mentoría Técnica",
      description: "Cursos universitarios, bootcamps, talleres de IA, estadística aplicada, programación y data storytelling."
    },
  ];

  return (
    <section id="servicios" className="section-padding bg-gray-50">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="section-title">Servicios Principales</h2>
          <p className="section-subtitle">
            Nuestros servicios especializados impulsan el crecimiento de tu negocio a través de soluciones tecnológicas de vanguardia.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="service-card group transition-all duration-300 hover:-translate-y-2"
            >
              <div className="mb-6 w-20 h-20 rounded-full bg-gray-100 flex items-center justify-center group-hover:bg-gray-200 transition-colors duration-300">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold mb-4 text-aelityx-dark">{service.title}</h3>
              <p className="text-aelityx-gray mb-6">{service.description}</p>
              <Button variant="outline" size="sm" className="border-aelityx-blue text-aelityx-blue hover:bg-aelityx-blue hover:text-white">
                Ver más
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
