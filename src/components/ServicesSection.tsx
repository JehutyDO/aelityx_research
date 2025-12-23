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
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const ResearchAreasSection = () => {
  // Register ScrollTrigger plugin
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
  }, []);

  const cardsContainerRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const sectionRef = useRef<HTMLElement>(null);

  const researchAreas = [
    {
      icon: <Brain className="w-10 h-10 text-aelityx-blue" />,
      title: "Machine Learning y Ciencia de la Salud",
      description: "Investigación en predicción de riesgo, clasificación genómica y vigilancia epidemiológica.",
      academicFocus: "8+ publicaciones científicas en revistas Q1-Q2",
      aelityxApplication: "Servicios de ML aplicado a salud pública y biomedicina",
      modalContent: {
        title: "Machine Learning y Ciencia de la Salud",
        description: "Línea de investigación activa en predicción de riesgo, clasificación de variantes genómicas y análisis epidemiológico. Los resultados se aplican a través de Aelityx en proyectos de salud pública.",
        academicProjects: [
          "COVIGEN-MEX: Vigilancia genómica nacional (2022-2023)",
          "Predicción de letalidad por COVID-19 mediante ML",
          "Análisis filodinámico del SARS-CoV-2",
          "Clasificación de variantes virales con Random Forest"
        ],
        aelityxProjects: [
          "Dashboards de vigilancia epidemiológica",
          "Modelos predictivos para instituciones de salud",
          "Análisis de datos biomédicos"
        ],
        publications: [
          "Risk Factors Associated with COVID-19 Lethality (Journal of Medical Systems, Q2)",
          "SARS-CoV-2 BW Lineage in Southeast Mexico (Infection, Q1)",
          "Omicron-BA.1 Dispersion Rates in Mexico (Viruses, Q2)",
          "Why the Alpha Variant Failed in Mexico (Microbiology Spectrum, Q1)"
        ],
        tools: ["Python", "Scikit-learn", "PyTorch", "TensorFlow", "Pandas", "Power BI"]
      }
    },
    {
      icon: <FlaskConical className="w-10 h-10 text-aelityx-green" />,
      title: "Análisis Ambiental y Geoquímico",
      description: "Evaluación de riesgos ambientales, clasificación de aguas y análisis de contaminantes mediante ML.",
      academicFocus: "5+ publicaciones en revistas Q1-Q2",
      aelityxApplication: "Consultoría en evaluación de riesgos ambientales",
      modalContent: {
        title: "Análisis Ambiental y Geoquímico",
        description: "Investigación en clasificación de aguas, evaluación de riesgos por metales pesados y análisis de contaminantes. Metodologías aplicadas en proyectos comerciales de Aelityx.",
        academicProjects: [
          "Clasificación de aguas con Machine Learning",
          "Riesgo de metales pesados en PM2.5",
          "Evaluación de contaminantes agrícolas",
          "Análisis multivariado de suelos"
        ],
        aelityxProjects: [
          "Evaluación de riesgos ambientales para empresas",
          "Análisis de calidad del agua",
          "Consultoría en sostenibilidad"
        ],
        publications: [
          "Risk Estimation of Heavy Metals Associated with PM2.5 (Atmosphere, Q2)",
          "Machine Learning Models for Water Classification (Journal of Hydrology, Q1)",
          "Assessment of Groundwater Quality in Mexico (Revista Mexicana de Ingeniería Química)",
          "Atrazine and Diuron in Cornfield Water (Water, Q2)"
        ],
        tools: ["R", "Python", "Scikit-learn", "Weka", "QGIS", "RapidMiner"]
      }
    },
    {
      icon: <ChartBar className="w-10 h-10 text-aelityx-blue" />,
      title: "Business Intelligence y Analytics",
      description: "Diseño de dashboards, KPIs y arquitecturas de datos para optimización empresarial.",
      academicFocus: "Metodologías de visualización y análisis de datos",
      aelityxApplication: "Dashboards empresariales, modelos de BI y sistemas de toma de decisiones",
      modalContent: {
        title: "Business Intelligence y Analytics",
        description: "Desarrollo de metodologías de BI y visualización de datos aplicadas en proyectos comerciales de Aelityx. Experiencia en diseño de KPIs, dashboards y arquitecturas de datos.",
        academicProjects: [
          "Metodologías de visualización científica",
          "Análisis de datos para investigación",
          "Dashboards para programas académicos"
        ],
        aelityxProjects: [
          "Dashboards empresariales y modelos de BI (Etafuel, Green Toka, INEEL)",
          "25% mejora promedio en eficiencia operativa",
          "Reducción del 20% en tiempo de decisión ejecutiva",
          "Optimización logística (25% aumento en ventas)"
        ],
        publications: [],
        tools: ["Power BI", "SQL", "Python", "Supabase", "APIs", "ETL/ELT"]
      }
    },
    {
      icon: <Database className="w-10 h-10 text-aelityx-green" />,
      title: "Simulación y Modelado Matemático",
      description: "Simulación Monte Carlo, modelado predictivo y técnicas estadísticas avanzadas.",
      academicFocus: "4+ publicaciones en simulación y estadística",
      aelityxApplication: "Modelos predictivos para empresas",
      modalContent: {
        title: "Simulación y Modelado Matemático",
        description: "Investigación en simulación Monte Carlo, modelado predictivo y técnicas estadísticas avanzadas. Aplicación en proyectos de optimización empresarial.",
        academicProjects: [
          "Simulación de escenarios logísticos",
          "Modelos predictivos energéticos",
          "Técnicas bayesianas aplicadas",
          "Simulación Monte Carlo en investigación"
        ],
        aelityxProjects: [
          "Modelos de predicción para consumo energético",
          "Simulación de escenarios empresariales",
          "Optimización de procesos"
        ],
        publications: [
          "Publicaciones en simulación y estadística aplicada",
          "Capítulos de libro en algoritmos de clasificación"
        ],
        tools: ["Python", "R", "SimPy", "SciPy", "NumPy", "Estadística avanzada"]
      }
    },
    {
      icon: <BookOpen className="w-10 h-10 text-aelityx-blue" />,
      title: "Educación y Divulgación Científica",
      description: "Docencia en posgrado, diplomados y cursos especializados en ciencia de datos.",
      academicFocus: "10+ años de experiencia docente",
      aelityxApplication: "Cursos y capacitación empresarial",
      modalContent: {
        title: "Educación y Divulgación Científica",
        description: "Docencia universitaria y divulgación científica. Cursos y diplomados también disponibles a través de Aelityx para empresas.",
        academicProjects: [
          "Ciencia de Datos con Python (UAEM, 2020-2025)",
          "Evaluación de Riesgos Ambientales (INSP, 2021-2023)",
          "Profesor de Cátedra ITESM (2020-2022)",
          "Profesor de Posgrado UAEM (2019-2024)"
        ],
        aelityxProjects: [
          "Diplomados empresariales en Ciencia de Datos",
          "Capacitación en Power BI y Analytics",
          "Talleres de Machine Learning aplicado"
        ],
        publications: [],
        tools: ["Jupyter", "Colab", "Python", "R", "Overleaf", "Google Scholar"]
      }
    },
    {
      icon: <Layers3 className="w-10 h-10 text-aelityx-green" />,
      title: "Integración y Arquitectura de Datos",
      description: "Arquitecturas de datos, ETL/ELT y orquestación de sistemas para investigación y empresas.",
      academicFocus: "Plataformas para vigilancia genómica",
      aelityxApplication: "Arquitecturas de datos empresariales",
      modalContent: {
        title: "Integración y Arquitectura de Datos",
        description: "Diseño de arquitecturas robustas para investigación científica y aplicaciones empresariales. Experiencia en integración de datos multi-fuente y orquestación de sistemas.",
        academicProjects: [
          "Plataformas para vigilancia genómica (COVIGEN-MEX)",
          "Automatización de flujos de datos científicos",
          "Integración de datasets multi-institucionales"
        ],
        aelityxProjects: [
          "Arquitecturas de datos con Supabase",
          "ETL/ELT automatizados con Python",
          "Integración de APIs y fuentes SQL",
          "Automatización con n8n (25% reducción en esfuerzo manual)"
        ],
        publications: [],
        tools: ["Python", "Supabase", "APIs", "SQL", "Docker", "ETL/ELT", "n8n"]
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

    // Animate accordion items
    const accordionItems = sectionRef.current?.querySelectorAll('[data-accordion-item]');
    if (accordionItems && accordionItems.length > 0) {
      accordionItems.forEach((item, index) => {
        if (item) {
          gsap.fromTo(
            item,
            {
              opacity: 0,
              y: 30,
            },
            {
              opacity: 1,
              y: 0,
              duration: 0.3,
              ease: "power2.out",
              scrollTrigger: {
                trigger: item,
                start: "top bottom-=50",
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
  }, [researchAreas.length]);

  return (
    <section ref={sectionRef} id="investigacion" className="section-padding bg-white dark:bg-gray-900 relative overflow-hidden">
        <div className="absolute -top-32 -right-32 w-[200px] h-[200px] bg-gradient-to-bl from-aelityx-blue/40 to-aelityx-green/20 rounded-full blur-3xl opacity-20"></div>
        <div className="absolute bottom-0 left-0 w-[150px] h-[150px] bg-gradient-to-tr from-aelityx-green/40 to-aelityx-blue/20 rounded-full blur-3xl opacity-20"></div>

        <div className="container mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="section-title">Líneas de Investigación y Desarrollo</h2>
            <p className="section-subtitle hidden sm:block">
              Investigación académica rigurosa que se transforma en soluciones empresariales aplicadas a través de <strong className="text-aelityx-blue">Aelityx</strong>.
            </p>
          </div>

          <div ref={cardsContainerRef} className="max-w-5xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {researchAreas.map((area, index) => (
                <AccordionItem 
                  key={index}
                  value={`area-${index}`}
                  data-accordion-item
                  className="border border-gray-200 dark:border-gray-700 rounded-xl bg-white dark:bg-gray-800 shadow-sm hover:shadow-md transition-shadow px-6 overflow-hidden"
                >
                  <AccordionTrigger className="hover:no-underline py-6">
                    <div className="flex items-start gap-4 w-full text-left">
                      <div className="flex-shrink-0 w-12 h-12 sm:w-16 sm:h-16 rounded-lg bg-gradient-to-br from-aelityx-blue/10 to-aelityx-green/10 dark:from-aelityx-blue/20 dark:to-aelityx-green/20 flex items-center justify-center transition-colors duration-300">
                        {area.icon}
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="text-xl sm:text-2xl font-bold mb-2 text-aelityx-dark dark:text-white">{area.title}</h3>
                        <p className="text-sm sm:text-base text-aelityx-gray dark:text-gray-300">{area.description}</p>
                      </div>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="pt-4 pb-6">
                    <div className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="p-4 bg-aelityx-blue/5 dark:bg-aelityx-blue/10 rounded-lg border-l-4 border-aelityx-blue">
                          <p className="text-sm font-semibold text-aelityx-blue dark:text-aelityx-blue/90 mb-2">Investigación Académica</p>
                          <p className="text-sm text-aelityx-gray dark:text-gray-300">{area.academicFocus}</p>
                        </div>
                        <div className="p-4 bg-aelityx-green/5 dark:bg-aelityx-green/10 rounded-lg border-l-4 border-aelityx-green">
                          <p className="text-sm font-semibold text-aelityx-green dark:text-aelityx-green/90 mb-2">Aplicación Aelityx</p>
                          <p className="text-sm text-aelityx-gray dark:text-gray-300">{area.aelityxApplication}</p>
                        </div>
                      </div>

                      <Dialog open={openDialogIndex === index} onOpenChange={(open) => setOpenDialogIndex(open ? index : null)}>
                        <DialogTrigger asChild>
                          <Button 
                            variant="outline" 
                            size="sm"
                            className="w-full sm:w-auto border-aelityx-blue text-aelityx-blue hover:bg-aelityx-blue hover:text-white dark:border-aelityx-blue/80 dark:text-aelityx-blue/80 dark:hover:bg-aelityx-blue/80 dark:hover:text-white transition-all duration-300"
                          >
                            Ver detalles completos
                          </Button>
                        </DialogTrigger>
                        <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto dark:bg-gray-800 border-t-4 border-aelityx-blue shadow-lg">
                          <DialogHeader>
                            <DialogTitle className="text-2xl font-bold text-aelityx-dark dark:text-white bg-gradient-to-r from-aelityx-blue to-aelityx-green bg-clip-text text-transparent">{area.modalContent.title}</DialogTitle>
                            <DialogDescription className="text-aelityx-gray dark:text-gray-300 mt-2 text-base">
                              {area.modalContent.description}
                            </DialogDescription>
                          </DialogHeader>

                          <div className="space-y-6 mt-6">
                          {/* Proyectos Académicos */}
                          {area.modalContent.academicProjects && area.modalContent.academicProjects.length > 0 && (
                            <div>
                              <h4 className="font-semibold text-lg text-aelityx-dark dark:text-white mb-3 flex items-center">
                                <span className="w-6 h-6 rounded-full bg-aelityx-blue/20 flex items-center justify-center mr-2">
                                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-aelityx-blue">
                                    <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"></path>
                                    <path d="m9 12 2 2 4-4"></path>
                                  </svg>
                                </span>
                                Proyectos de Investigación:
                              </h4>
                              <ul className="list-none pl-5 space-y-2 text-aelityx-gray dark:text-gray-300">
                                {area.modalContent.academicProjects.map((project, i) => (
                                  <li key={i} className="flex items-start">
                                    <span className="text-aelityx-blue mr-2">•</span>
                                    {project}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          )}

                          {/* Proyectos Aelityx */}
                          {area.modalContent.aelityxProjects && area.modalContent.aelityxProjects.length > 0 && (
                            <div>
                              <h4 className="font-semibold text-lg text-aelityx-dark dark:text-white mb-3 flex items-center">
                                <span className="w-6 h-6 rounded-full bg-aelityx-green/20 flex items-center justify-center mr-2">
                                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-aelityx-green">
                                    <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"></path>
                                    <path d="M8 12h8"></path>
                                    <path d="M12 16V8"></path>
                                  </svg>
                                </span>
                                Aplicación Aelityx:
                              </h4>
                              <ul className="list-none pl-5 space-y-2 text-aelityx-gray dark:text-gray-300">
                                {area.modalContent.aelityxProjects.map((project, i) => (
                                  <li key={i} className="flex items-start">
                                    <span className="text-aelityx-green mr-2">•</span>
                                    {project}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          )}

                          {/* Publicaciones */}
                          {area.modalContent.publications && area.modalContent.publications.length > 0 && (
                            <div>
                              <h4 className="font-semibold text-lg text-aelityx-dark dark:text-white mb-3 flex items-center">
                                <span className="w-6 h-6 rounded-full bg-aelityx-orange/20 flex items-center justify-center mr-2">
                                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-aelityx-orange">
                                    <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"></path>
                                  </svg>
                                </span>
                                Publicaciones Relacionadas:
                              </h4>
                              <ul className="list-none pl-5 space-y-2 text-aelityx-gray dark:text-gray-300">
                                {area.modalContent.publications.map((pub, i) => (
                                  <li key={i} className="flex items-start">
                                    <span className="text-aelityx-orange mr-2">•</span>
                                    <span className="text-sm">{pub}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          )}

                          {/* Tecnologías */}
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
                              {area.modalContent.tools.map((tool, i) => (
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
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
    </section>
  );
};

export default ResearchAreasSection;
