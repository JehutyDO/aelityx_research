
import { 
  Database, 
  ChartBar, 
  Rocket, 
  Brain, 
  Globe, 
  BookOpen, 
  FlaskConical
} from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const ServicesSection = () => {
  const services = [
    {
      icon: <Database className="w-10 h-10 text-aelityx-blue" />,
      title: "Ciencia de Datos Aplicada",
      description: "Modelado predictivo, análisis exploratorio, minería de datos, dashboards para análisis avanzado de información.",
      modalContent: {
        title: "Ciencia de Datos Aplicada",
        description: "Transformamos datos complejos en insights accionables a través de metodologías científicas rigurosas y herramientas avanzadas de análisis.",
        examples: [
          "Análisis predictivo de rendimiento estudiantil en educación superior",
          "Minería de datos para patrones de consumo en retail",
          "Modelos predictivos para detección temprana en salud",
          "Análisis multivariado para optimización de procesos agrícolas",
        ],
        tools: ["Python", "R", "SQL", "Pandas", "Numpy", "Scikit-learn"]
      }
    },
    {
      icon: <ChartBar className="w-10 h-10 text-aelityx-green" />,
      title: "Business Intelligence y Visualización",
      description: "Dashboards con Power BI, Metabase y Python. Desarrollo de KPIs estratégicos y tableros operativos.",
      modalContent: {
        title: "Business Intelligence y Visualización",
        description: "Creamos dashboards interactivos que permiten visualizar datos complejos de forma clara e intuitiva para la toma de decisiones estratégicas.",
        examples: [
          "Dashboards logísticos para seguimiento de KPIs por región",
          "Visualización de patrones de consumo energético",
          "Tableros de rendimiento financiero en tiempo real",
          "Análisis geoespacial para distribución de recursos",
        ],
        tools: ["Power BI", "Tableau", "Looker", "D3.js", "Metabase", "Python"]
      }
    },
    {
      icon: <Brain className="w-10 h-10 text-aelityx-blue" />,
      title: "Inteligencia Artificial & Machine Learning",
      description: "Modelos de regresión, clasificación, IA aplicada con PyTorch, Scikit-learn y TensorFlow para soluciones inteligentes.",
      modalContent: {
        title: "Inteligencia Artificial & Machine Learning",
        description: "Diseñamos e implementamos algoritmos y modelos de aprendizaje automático para resolver problemas complejos y generar valor a partir de datos estructurados y no estructurados.",
        examples: [
          "Sistemas de recomendación personalizados",
          "Modelos de clasificación para detección de patrones",
          "Procesamiento de lenguaje natural para análisis de sentimiento",
          "Segmentación de clientes mediante clustering",
        ],
        tools: ["PyTorch", "TensorFlow", "Scikit-learn", "Keras", "Hugging Face", "BERT"]
      }
    },
    {
      icon: <FlaskConical className="w-10 h-10 text-aelityx-green" />,
      title: "Simulación y Análisis Cuantitativo",
      description: "Simulación Monte Carlo, escenarios What-if, análisis de sensibilidad y optimización para toma de decisiones.",
      modalContent: {
        title: "Simulación y Análisis Cuantitativo",
        description: "Utilizamos técnicas de simulación avanzada para modelar escenarios complejos, evaluar riesgos y optimizar decisiones en entornos de incertidumbre.",
        examples: [
          "Simulación Monte Carlo para análisis de riesgo financiero",
          "Modelado de escenarios para gestión de recursos energéticos",
          "Optimización de cadenas de suministro",
          "Análisis de sensibilidad para variables críticas en COVID-19",
        ],
        tools: ["Python", "SimPy", "R", "Modelado estadístico", "Optimización lineal"]
      }
    },
    {
      icon: <Globe className="w-10 h-10 text-aelityx-blue" />,
      title: "Desarrollo Web Interactivo",
      description: "React, Vite, TailwindCSS, páginas institucionales, plataformas inteligentes para visualización y gestión de datos.",
      modalContent: {
        title: "Desarrollo Web Interactivo",
        description: "Creamos aplicaciones web modernas e interactivas que integran visualización de datos, APIs y dashboards para proporcionar experiencias de usuario excepcionales.",
        examples: [
          "Plataformas para visualización de datos en tiempo real",
          "Aplicaciones web para gestión y análisis de información",
          "Integración de APIs y servicios de terceros",
          "Interfaces de usuario modernas y responsivas",
        ],
        tools: ["React", "Vite", "TailwindCSS", "D3.js", "Node.js", "GraphQL"]
      }
    },
    {
      icon: <Rocket className="w-10 h-10 text-aelityx-green" />,
      title: "Estrategia de Innovación",
      description: "Planeación estratégica con Hoshin Kanri, OKRs, mapeo de indicadores y tableros de seguimiento para innovación.",
      modalContent: {
        title: "Estrategia de Innovación",
        description: "Implementamos metodologías de planeación estratégica basadas en datos para alinear objetivos organizacionales, medir resultados y fomentar la innovación continua.",
        examples: [
          "Desarrollo de roadmaps estratégicos basados en Hoshin Kanri",
          "Implementación de sistemas OKR para seguimiento de objetivos",
          "Planificación táctica basada en datos",
          "Tableros de mando para seguimiento de KPIs estratégicos",
        ],
        tools: ["Hoshin Kanri", "OKRs", "Balanced Scorecard", "Design Thinking", "Lean Innovation"]
      }
    },
    {
      icon: <BookOpen className="w-10 h-10 text-aelityx-blue" />,
      title: "Capacitación y Mentoría Técnica",
      description: "Cursos universitarios, bootcamps, talleres de IA, estadística aplicada, programación y data storytelling.",
      modalContent: {
        title: "Capacitación y Mentoría Técnica",
        description: "Compartimos conocimiento y formamos equipos a través de programas de capacitación personalizados en ciencia de datos, IA y estrategias basadas en datos.",
        examples: [
          "Cursos de pregrado y posgrado en universidades",
          "Bootcamps intensivos de ciencia de datos",
          "Talleres de IA y aprendizaje automático",
          "Capacitación en Python, R y herramientas estadísticas",
        ],
        tools: ["Jupyter", "Python", "R", "Google Colab", "Git", "Kaggle"]
      }
    },
  ];

  const [openDialogIndex, setOpenDialogIndex] = useState<number | null>(null);

  return (
    <section id="servicios" className="section-padding bg-gray-50 dark:bg-gray-900">
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
              className="service-card group transition-all duration-300 hover:-translate-y-2 dark:bg-gray-800"
            >
              <div className="mb-6 w-20 h-20 rounded-full bg-gray-100 dark:bg-gray-700 flex items-center justify-center group-hover:bg-gray-200 dark:group-hover:bg-gray-600 transition-colors duration-300">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold mb-4 text-aelityx-dark dark:text-white">{service.title}</h3>
              <p className="text-aelityx-gray dark:text-gray-300 mb-6">{service.description}</p>
              <Dialog open={openDialogIndex === index} onOpenChange={(open) => setOpenDialogIndex(open ? index : null)}>
                <DialogTrigger asChild>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="border-aelityx-blue text-aelityx-blue hover:bg-aelityx-blue hover:text-white dark:border-aelityx-blue/80 dark:text-aelityx-blue/80 dark:hover:bg-aelityx-blue/80 dark:hover:text-white"
                  >
                    Ver más
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[600px] dark:bg-gray-800">
                  <DialogHeader>
                    <DialogTitle className="text-2xl font-bold text-aelityx-dark dark:text-white">{service.modalContent.title}</DialogTitle>
                    <DialogDescription className="text-aelityx-gray dark:text-gray-300 mt-2 text-base">
                      {service.modalContent.description}
                    </DialogDescription>
                  </DialogHeader>
                  
                  <div className="mt-6">
                    <h4 className="font-semibold text-lg text-aelityx-dark dark:text-white mb-2">Casos de aplicación:</h4>
                    <ul className="list-disc pl-5 space-y-1 text-aelityx-gray dark:text-gray-300">
                      {service.modalContent.examples.map((example, i) => (
                        <li key={i}>{example}</li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="mt-6">
                    <h4 className="font-semibold text-lg text-aelityx-dark dark:text-white mb-2">Tecnologías:</h4>
                    <div className="flex flex-wrap gap-2">
                      {service.modalContent.tools.map((tool, i) => (
                        <span 
                          key={i}
                          className="px-3 py-1 bg-aelityx-blue/10 text-aelityx-blue dark:bg-aelityx-blue/20 dark:text-aelityx-blue/90 text-sm rounded-full"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
