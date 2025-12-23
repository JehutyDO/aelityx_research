import {
  Database,
  ChartBar,
  FlaskConical,
  Brain,
  Globe,
  BookOpen,
  Rocket,
  Layers3
} from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const ServicesSection = () => {
  // Register ScrollTrigger plugin
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
  }, []);

  const cardsContainerRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const sectionRef = useRef<HTMLElement>(null);

  const services = [
    {
      icon: <Database className="w-10 h-10 text-aelityx-blue" />,
      title: "Ciencia de Datos y Modelado Predictivo",
      description: "Análisis estadístico, clasificación, regresión y simulación avanzada para resolver retos científicos e industriales.",
      modalContent: {
        title: "Ciencia de Datos y Modelado Predictivo",
        description: "Aplicamos técnicas de ciencia de datos, simulación Monte Carlo y modelado matemático para descubrir patrones ocultos y optimizar procesos complejos.",
        examples: [
          "Modelos de predicción para consumo energético y riesgo de salud",
          "Simulación de escenarios para planeación logística y financiera",
          "Clasificación multiclase en datos ambientales",
          "Técnicas bayesianas y no paramétricas en investigación aplicada"
        ],
        tools: ["Python", "R", "SimPy", "SciPy", "NumPy", "Scikit-learn"]
      }
    },
    {
      icon: <ChartBar className="w-10 h-10 text-aelityx-green" />,
      title: "Business Intelligence Estratégico",
      description: "Desarrollo de tableros e indicadores de impacto usando Power BI, Tableau y Looker.",
      modalContent: {
        title: "Business Intelligence Estratégico",
        description: "Traducimos los datos crudos en inteligencia visual y estratégica para tomadores de decisiones.",
        examples: [
          "KPI para ventas, rentabilidad y eficiencia operativa",
          "Indicadores para evaluación de programas académicos y científicos",
          "Seguimiento geoespacial en logística",
          "Paneles ejecutivos de alto impacto visual"
        ],
        tools: ["Power BI", "Tableau", "Looker", "Metabase", "D3.js", "Python"]
      }
    },
    {
      icon: <Brain className="w-10 h-10 text-aelityx-blue" />,
      title: "Machine Learning y Ciencia de la Salud",
      description: "Aplicación de modelos de ML en salud pública, bioinformática y vigilancia genómica.",
      modalContent: {
        title: "Machine Learning y Ciencia de la Salud",
        description: "Desarrollamos modelos de IA para predicción de riesgo, clasificación de variantes genómicas y procesamiento de datos biomédicos.",
        examples: [
          "Predicción de letalidad por COVID-19 usando ML",
          "Clasificación de secuencias virales con Random Forest",
          "Estimación de riesgos ambientales con regresión",
          "Análisis de variantes con PyTorch y TensorFlow"
        ],
        tools: ["Scikit-learn", "PyTorch", "TensorFlow", "Keras", "Pandas", "Bash"]
      }
    },
    {
      icon: <FlaskConical className="w-10 h-10 text-aelityx-green" />,
      title: "Análisis Geoquímico y Medioambiental",
      description: "Estudios de calidad del agua, aire y suelos usando modelos estadísticos y clasificación multidimensional.",
      modalContent: {
        title: "Análisis Geoquímico y Medioambiental",
        description: "Evaluamos y clasificamos datos ambientales con enfoques estadísticos avanzados y herramientas de análisis multidimensional.",
        examples: [
          "Clasificación de aguas residuales mediante ML",
          "Análisis multivariado de suelos contaminados",
          "Evaluación del riesgo ambiental por metales pesados",
          "Simulación de dispersión de contaminantes"
        ],
        tools: ["R", "Weka", "RapidMiner", "QGIS", "Python"]
      }
    },
    {
      icon: <Globe className="w-10 h-10 text-aelityx-blue" />,
      title: "Desarrollo Web y UX/UI Científico",
      description: "Aplicaciones web con React y diseño centrado en el usuario para plataformas científicas y educativas.",
      modalContent: {
        title: "Desarrollo Web y UX/UI Científico",
        description: "Diseñamos soluciones web con arquitectura moderna y enfoque UX certificado por Google.",
        examples: [
          "Plataformas educativas con dashboards integrados",
          "Sistemas de gestión para investigación científica",
          "Interfaces personalizadas para análisis de datos",
          "Integración de visualización científica con D3.js"
        ],
        tools: ["React", "Three.js", "GSAP", "Node.js", "Next.js", "Figma"]
      }
    },
    {
      icon: <Rocket className="w-10 h-10 text-aelityx-green" />,
      title: "Consultoría y Estrategia con Hoshin Kanri",
      description: "Implementación de sistemas de objetivos estratégicos para innovación organizacional.",
      modalContent: {
        title: "Consultoría y Estrategia con Hoshin Kanri",
        description: "Guiamos a empresas en la planeación táctica y evaluación de resultados usando metodologías como Hoshin Kanri y OKRs.",
        examples: [
          "Planeación estratégica para instituciones académicas",
          "Sistemas de objetivos y resultados clave (OKRs)",
          "Evaluación de impacto de proyectos de IA",
          "Visualización de indicadores estratégicos"
        ],
        tools: ["Hoshin Kanri", "OKRs", "Balanced Scorecard", "Power BI", "KPIs"]
      }
    },
    {
      icon: <BookOpen className="w-10 h-10 text-aelityx-blue" />,
      title: "Educación y Divulgación Científica",
      description: "Diseño de diplomados, mentoría académica y divulgación en IA, estadística y simulación.",
      modalContent: {
        title: "Educación y Divulgación Científica",
        description: "Compartimos conocimiento mediante cursos universitarios, publicaciones científicas y talleres especializados.",
        examples: [
          "Diplomados en Ciencia de Datos con Python",
          "Cursos de maestría en simulación y ML",
          "Asesoría de tesis con enfoque aplicado",
          "Conferencias y participación en congresos internacionales"
        ],
        tools: ["Jupyter", "Colab", "Python", "R", "Overleaf", "Google Scholar"]
      }
    },
    {
      icon: <Layers3 className="w-10 h-10 text-aelityx-green" />,
      title: "Integración y Orquestación de Sistemas",
      description: "Soluciones full-stack con API REST, ETL, monitoreo y despliegue de plataformas de datos.",
      modalContent: {
        title: "Integración y Orquestación de Sistemas",
        description: "Diseñamos arquitecturas robustas que conectan pipelines, dashboards y microservicios con tecnologías modernas.",
        examples: [
          "Automatización de flujos de datos científicos",
          "Plataformas para vigilancia genómica y de salud",
          "Orquestación con Docker y RabbitMQ",
          "Sistemas ETL para datos ambientales y clínicos"
        ],
        tools: ["FastAPI", "Node.js", "Docker", "MongoDB", "RabbitMQ", "Grafana"]
      }
    }
  ];

  const [openDialogIndex, setOpenDialogIndex] = useState<number | null>(null);

  // Set up the animation for the cards
  useEffect(() => {
    // Create a timeline for the section title animation
    const sectionTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top bottom-=100",
        end: "top center",
        toggleActions: "play none none reverse",
      }
    });

    // Animate the section title and subtitle
    if (sectionRef.current) {
      const title = sectionRef.current.querySelector(".section-title");
      const subtitle = sectionRef.current.querySelector(".section-subtitle");

      if (title && subtitle) {
        sectionTimeline
          .fromTo(title, 
            { opacity: 0, y: 20 }, 
            { opacity: 1, y: 0, duration: 0.4, ease: "power2.out" }
          )
          .fromTo(subtitle, 
            { opacity: 0, y: 20 }, 
            { opacity: 1, y: 0, duration: 0.4, ease: "power2.out" },
            "-=0.3"
          );
      }
    }

    // Animate each card with a staggered effect - simplified like CasesSection
    if (cardRefs.current.length > 0) {
      cardRefs.current.forEach((card, index) => {
        if (card) {
          gsap.fromTo(
            card,
            {
              opacity: 0,
              y: 50,
              scale: 0.9
            },
            {
              opacity: 1,
              y: 0,
              scale: 1,
              duration: 0.2,
              ease: "power2.inOut",
              scrollTrigger: {
                trigger: card,
                start: "top bottom",
                end: "bottom bottom",
                toggleActions: "play none none reverse",
              }
            }
          );
        }
      });
    }

    return () => {
      // Clean up animations when component unmounts
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, [services.length]);

  return (
      <section ref={sectionRef} id="servicios" className="section-padding bg-white dark:bg-gray-900 relative overflow-hidden">
        <div className="absolute -top-32 -right-32 w-[200px] h-[200px] bg-gradient-to-bl from-aelityx-blue/40 to-aelityx-green/20 rounded-full blur-3xl opacity-20"></div>
        <div className="absolute bottom-0 left-0 w-[150px] h-[150px] bg-gradient-to-tr from-aelityx-green/40 to-aelityx-blue/20 rounded-full blur-3xl opacity-20"></div>

        <div className="container mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="section-title">Servicios Principales</h2>
            <p className="section-subtitle hidden sm:block">
              Soluciones avanzadas basadas en datos, ciencia y tecnología. Al servicio de la inteligencia estratégica.
            </p>
          </div>

          <div ref={cardsContainerRef} className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
                <div
                    key={index}
                    ref={el => cardRefs.current[index] = el}
                    className="flex flex-col h-full justify-between bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2"
                >
                  <div className="p-6 flex flex-col items-center">
                    <div className="mb-6 w-16 h-16 rounded-full bg-gradient-to-br from-aelityx-blue/10 to-aelityx-green/10 dark:from-aelityx-blue/20 dark:to-aelityx-green/20 flex items-center justify-center transition-colors duration-300 shadow-sm">
                      {service.icon}
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-aelityx-dark dark:text-white text-center">{service.title}</h3>
                    <p className="text-aelityx-gray dark:text-gray-300 mb-4 text-sm text-center">{service.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4 justify-center">
                      <span className="px-3 py-1 bg-aelityx-blue/10 text-aelityx-blue dark:bg-aelityx-blue/20 dark:text-aelityx-blue/90 rounded-full text-xs font-medium">
                        Servicio especializado
                      </span>
                    </div>
                  </div>

                  <div className="p-6 pt-0 mt-auto">
                    <Dialog open={openDialogIndex === index} onOpenChange={(open) => setOpenDialogIndex(open ? index : null)}>
                      <DialogTrigger asChild>
                        <Button 
                          variant="outline" 
                          size="sm"
                          className="w-full border-aelityx-blue text-aelityx-blue hover:bg-aelityx-blue hover:text-white dark:border-aelityx-blue/80 dark:text-aelityx-blue/80 dark:hover:bg-aelityx-blue/80 dark:hover:text-white transition-all duration-300 group"
                        >
                          <span className="mr-2">Ver detalle</span>
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto dark:bg-gray-800 border-t-4 border-aelityx-blue shadow-lg">
                        <DialogHeader>
                          <DialogTitle className="text-2xl font-bold text-aelityx-dark dark:text-white bg-gradient-to-r from-aelityx-blue to-aelityx-green bg-clip-text text-transparent">{service.modalContent.title}</DialogTitle>
                          <DialogDescription className="text-aelityx-gray dark:text-gray-300 mt-2 text-base">
                            {service.modalContent.description}
                          </DialogDescription>
                        </DialogHeader>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                          <div>
                            <h4 className="font-semibold text-lg text-aelityx-dark dark:text-white mb-3 flex items-center">
                              <span className="w-6 h-6 rounded-full bg-aelityx-blue/20 flex items-center justify-center mr-2">
                                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-aelityx-blue">
                                  <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"></path>
                                  <path d="m9 12 2 2 4-4"></path>
                                </svg>
                              </span>
                              Casos de aplicación:
                            </h4>
                            <ul className="list-none pl-5 space-y-2 text-aelityx-gray dark:text-gray-300">
                              {service.modalContent.examples.map((example, i) => (
                                <li key={i} className="flex items-start">
                                  <span className="text-aelityx-blue mr-2">•</span>
                                  {example}
                                </li>
                              ))}
                            </ul>
                          </div>

                          <div>
                            <h4 className="font-semibold text-lg text-aelityx-dark dark:text-white mb-3 flex items-center">
                              <span className="w-6 h-6 rounded-full bg-aelityx-green/20 flex items-center justify-center mr-2">
                                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-aelityx-green">
                                  <path d="m16 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z"></path>
                                  <path d="m2 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z"></path>
                                  <path d="M7 21h10"></path>
                                  <path d="M12 3v18"></path>
                                  <path d="M3 7h2c2 0 5-1 7-2 2 1 5 2 7 2h2"></path>
                                </svg>
                              </span>
                              Tecnologías:
                            </h4>
                            <div className="flex flex-wrap gap-2 pl-5">
                              {service.modalContent.tools.map((tool, i) => (
                                <span
                                  key={i}
                                  className="px-3 py-1 bg-gradient-to-r from-aelityx-blue/10 to-aelityx-green/10 text-aelityx-dark dark:text-white border border-aelityx-blue/20 text-sm rounded-full transition-all duration-300 hover:shadow-sm hover:border-aelityx-blue/40"
                                >
                                  {tool}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>

                        <div className="mt-8 text-center">
                          <Button 
                            onClick={() => setOpenDialogIndex(null)} 
                            className="bg-gradient-to-r from-aelityx-blue to-aelityx-green text-white hover:opacity-90 transition-all duration-300 px-8 py-2 rounded-full shadow-md hover:shadow-lg"
                          >
                            <span className="mr-2">Cerrar</span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                              <path d="M18 6 6 18"></path>
                              <path d="m6 6 12 12"></path>
                            </svg>
                          </Button>
                        </div>
                      </DialogContent>
                    </Dialog>
                  </div>
                </div>
            ))}
          </div>
        </div>
      </section>
  );
};

export default ServicesSection;
