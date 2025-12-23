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

const CasesSection = () => {
  // Register ScrollTrigger plugin
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
  }, []);

  const cardsContainerRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  const cases = [
    {
      title: "Seguimiento académico con dashboards inteligentes",
      description: "PowerBI + Python para analizar avance estudiantil y prevenir deserción.",
      image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      tags: ["PowerBI", "Python", "Educación"],
      result: "+40% eficiencia en análisis",
      modalContent: {
        fullTitle: "Seguimiento académico con dashboards inteligentes",
        detailedDescription: "Implementamos un sistema de monitoreo para universidades, que centraliza datos académicos, identifica riesgos de deserción y mejora la toma de decisiones.",
        challenges: [
          "Datos dispersos y desconectados",
          "Necesidad de visualización accesible",
          "Predicción de abandono escolar"
        ],
        solution: "Arquitectura de datos centralizada con ETL automatizado en Python, visualizaciones interactivas en Power BI y modelos predictivos.",
        technologies: ["Python", "Power BI", "SQL", "Azure", "Machine Learning"],
        results: [
          "40% más eficiencia en análisis académico",
          "Reducción del 15% en deserción",
          "Implementado en diversos centros educativos"
        ],
        testimonial: "Una herramienta clave para prevenir el abandono escolar y mejorar la gestión institucional."
      }
    },
    {
      title: "Predicción de variantes COVID con COVIGEN-MEX",
      description: "Modelos en Python + AzureML para anticipar variantes del SARS-CoV-2.",
      image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      tags: ["Python", "AzureML", "Salud"],
      result: "Publicado en Infection & Viruses 2023",
      modalContent: {
        fullTitle: "Predicción de variantes COVID-19 para COVIGEN-MEX",
        detailedDescription: "Colaboramos con COVIGEN-MEX y UNAM para anticipar variantes virales mediante análisis filodinámico y modelos de evolución.",
        challenges: [
          "Análisis genómico masivo",
          "Predicciones en tiempo real",
          "Vigilancia epidemiológica integrada"
        ],
        solution: "Pipeline con Python, AzureML y W&B para predecir variantes, identificar mutaciones clave y apoyar decisiones sanitarias.",
        technologies: ["Python", "AzureML", "W&B", "Biopython", "Nextstrain", "Deep Learning"],
        results: [
          "Predicción de comportamiento de la enfermedad",
          "Publicaciones científicas internacionales",
          "Adopción por autoridades sanitarias"
        ],
        testimonial: "Una herramienta crucial para anticipar riesgos sanitarios y responder con mayor agilidad."
      }
    },
    {
      title: "IA para biodiversidad y salud ambiental",
      description: "Análisis de contaminación y metagenómica con modelos predictivos.",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      tags: ["Machine Learning", "Biodiversidad", "Medio Ambiente"],
      result: "Publicado en Gaceta Médica y Atmosphere",
      modalContent: {
        fullTitle: "IA para biodiversidad y salud ambiental",
        detailedDescription: "Aplicamos machine learning a datos metagenómicos y ambientales para identificar riesgos sanitarios y patrones ecológicos.",
        challenges: [
          "Datos multiómicos de alta dimensionalidad",
          "Correlación entre ambiente y salud",
          "Modelado de impactos en biodiversidad"
        ],
        solution: "Clustering, redes neuronales y regresión avanzada para analizar contaminación atmosférica y biodiversidad.",
        technologies: ["Python", "Scikit-learn", "TensorFlow", "R", "QGIS"],
        results: [
          "Identificación de biomarcadores ambientales",
          "Publicaciones científicas destacadas",
          "Aplicación en políticas de conservación"
        ],
        testimonial: "Nos permitió visualizar relaciones invisibles entre salud, biodiversidad y contaminación."
      }
    },
    {
      title: "Plataforma logística y energética inteligente",
      description: "Optimización de rutas y consumo con mapas, BI y modelos predictivos.",
      image: "https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      tags: ["Mapbox", "Python", "PowerBI"],
      result: "+25% optimización logística",
      modalContent: {
        fullTitle: "Plataforma para empresas logísticas y energéticas",
        detailedDescription: "Diseñamos una solución para integrar datos operativos, optimizar rutas y reducir huella energética mediante análisis geoespacial.",
        challenges: [
          "Datos dispersos en múltiples sistemas",
          "Necesidad de análisis georreferenciado",
          "Reducción de consumo energético"
        ],
        solution: "Arquitectura con Mapbox, Python y Power BI, con algoritmos de predicción de demanda y rutas óptimas.",
        technologies: ["Python", "Power BI", "Mapbox", "SQL Server", "Azure", "Optimización"],
        results: [
          "25% más eficiencia logística",
          "18% menos en costos operativos",
          "11% menos en huella de carbono"
        ],
        testimonial: "Una herramienta clave para mejorar eficiencia operativa y sostenibilidad empresarial."
      }
    }
  ];

  const [openDialogIndex, setOpenDialogIndex] = useState<number | null>(null);

  // Set up the animation for the cards
  useEffect(() => {
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
  }, [cases.length]);

  return (
      <section id="casos" className="section-padding bg-white dark:bg-gray-900 relative overflow-hidden">
        <div className="absolute -top-32 -right-32 w-[200px] h-[200px] bg-gradient-to-bl from-aelityx-blue/40 to-aelityx-green/20 rounded-full blur-3xl opacity-20"></div>
        <div className="absolute bottom-0 left-0 w-[150px] h-[150px] bg-gradient-to-tr from-aelityx-green/40 to-aelityx-blue/20 rounded-full blur-3xl opacity-20"></div>

        <div className="container mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="section-title">Proyectos Impactantes</h2>
            <p className="section-subtitle">
              Descubre cómo hemos ayudado a nuestros clientes a transformar sus datos en soluciones efectivas y creativas.
            </p>
          </div>

          <div ref={cardsContainerRef} className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {cases.map((caseStudy, index) => (
                <div
                    key={index}
                    ref={el => cardRefs.current[index] = el}
                    className="flex flex-col h-full justify-between bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2"
                >
                  <div className="h-48 overflow-hidden">
                    <img
                        src={caseStudy.image}
                        alt={caseStudy.title}
                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                    />
                  </div>
                  <div className="p-6 flex flex-col justify-between flex-1">
                    <h3 className="text-xl font-bold mb-3 text-aelityx-dark dark:text-white">{caseStudy.title}</h3>
                    <p className="text-aelityx-gray dark:text-gray-300 mb-4 text-sm">{caseStudy.description}</p>
                    <div className="flex items-center mb-4">
                  <span className="px-3 py-1 bg-aelityx-blue/10 text-aelityx-blue dark:bg-aelityx-blue/20 dark:text-aelityx-blue/90 rounded-full text-sm font-medium">
                    {caseStudy.result}
                  </span>
                    </div>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {caseStudy.tags.map((tag, tagIndex) => (
                          <span
                              key={tagIndex}
                              className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-aelityx-gray dark:text-gray-300 rounded-full text-xs"
                          >
                      {tag}
                    </span>
                      ))}
                    </div>

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
                          <DialogTitle className="text-2xl font-bold text-aelityx-dark dark:text-white bg-gradient-to-r from-aelityx-blue to-aelityx-green bg-clip-text text-transparent">{caseStudy.modalContent.fullTitle}</DialogTitle>
                          <DialogDescription className="text-aelityx-gray dark:text-gray-300 mt-2 text-base">
                            {caseStudy.modalContent.detailedDescription}
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
                              Desafíos:
                            </h4>
                            <ul className="list-none pl-5 space-y-2 text-aelityx-gray dark:text-gray-300">
                              {caseStudy.modalContent.challenges.map((challenge, i) => (
                                  <li key={i} className="flex items-start">
                                    <span className="text-aelityx-blue mr-2">•</span>
                                    {challenge}
                                  </li>
                              ))}
                            </ul>

                            <h4 className="font-semibold text-lg text-aelityx-dark dark:text-white mb-3 mt-5 flex items-center">
                              <span className="w-6 h-6 rounded-full bg-aelityx-green/20 flex items-center justify-center mr-2">
                                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-aelityx-green">
                                  <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"></path>
                                  <path d="M8 12h8"></path>
                                  <path d="M12 16V8"></path>
                                </svg>
                              </span>
                              Solución:
                            </h4>
                            <p className="text-aelityx-gray dark:text-gray-300 pl-5 border-l-2 border-aelityx-green/30 ml-3">
                              {caseStudy.modalContent.solution}
                            </p>
                          </div>

                          <div>
                            <h4 className="font-semibold text-lg text-aelityx-dark dark:text-white mb-3 flex items-center">
                              <span className="w-6 h-6 rounded-full bg-aelityx-blue/20 flex items-center justify-center mr-2">
                                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-aelityx-blue">
                                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                                  <path d="M22 4 12 14.01l-3-3"></path>
                                </svg>
                              </span>
                              Resultados:
                            </h4>
                            <ul className="list-none pl-5 space-y-2 text-aelityx-gray dark:text-gray-300">
                              {caseStudy.modalContent.results.map((result, i) => (
                                  <li key={i} className="flex items-start">
                                    <span className="text-aelityx-blue mr-2">•</span>
                                    <span className="font-medium">{result}</span>
                                  </li>
                              ))}
                            </ul>

                            <h4 className="font-semibold text-lg text-aelityx-dark dark:text-white mb-3 mt-5 flex items-center">
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
                              {caseStudy.modalContent.technologies.map((tech, i) => (
                                  <span
                                      key={i}
                                      className="px-3 py-1 bg-gradient-to-r from-aelityx-blue/10 to-aelityx-green/10 text-aelityx-dark dark:text-white border border-aelityx-blue/20 text-sm rounded-full transition-all duration-300 hover:shadow-sm hover:border-aelityx-blue/40"
                                  >
                              {tech}
                            </span>
                              ))}
                            </div>
                          </div>
                        </div>

                        <div className="mt-8 p-6 bg-gradient-to-r from-aelityx-blue/5 to-aelityx-green/5 dark:from-aelityx-blue/10 dark:to-aelityx-green/10 rounded-xl shadow-inner border border-aelityx-blue/10 relative">
                          <div className="absolute -top-4 left-6 bg-white dark:bg-gray-800 px-4 py-1 rounded-full text-xs font-medium text-aelityx-blue">
                            Testimonio
                          </div>
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-aelityx-blue/30 mb-2">
                            <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z"></path>
                            <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z"></path>
                          </svg>
                          <p className="italic text-aelityx-gray dark:text-gray-300 text-base">"{caseStudy.modalContent.testimonial}"</p>
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

export default CasesSection;
