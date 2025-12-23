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

const ResearchProjectsSection = () => {
  // Register ScrollTrigger plugin
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
  }, []);

  const cardsContainerRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [activeTab, setActiveTab] = useState<"academic" | "commercial">("academic");

  const projects = {
    academic: [
      {
        title: "COVIGEN-MEX: Vigilancia Genómica Nacional",
        description: "Diseño de dashboards analíticos y supervisión de pipelines de datos en Python para vigilancia genómica a escala nacional.",
        image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        tags: ["Genómica", "Python", "Vigilancia Epidemiológica"],
        result: "3 publicaciones Q1-Q2",
        period: "2022-2023",
        role: "Data Analyst & Functional Lead",
        modalContent: {
          fullTitle: "COVIGEN-MEX: Vigilancia Genómica Nacional",
          detailedDescription: "Proyecto nacional de vigilancia genómica del SARS-CoV-2. Diseñé dashboards analíticos y supervisé pipelines de datos en Python para análisis filodinámico a escala nacional.",
          challenges: [
            "Integración de datasets multi-institucionales",
            "Análisis genómico masivo en tiempo real",
            "Coordinación entre instituciones (UNAM, CONACYT, federales)"
          ],
          solution: "Arquitectura de datos centralizada con Python, integración vía OpenAPI y SQL, dashboards en Power BI para visualización de resultados.",
          technologies: ["Python", "Power BI", "OpenAPI", "SQL", "Machine Learning", "Filodinámica"],
          results: [
            "Coordinación de dashboards analíticos a nivel nacional",
            "3 publicaciones científicas de alto impacto (Q1-Q2)",
            "Contribución a reportes nacionales",
            "Colaboración con equipos de ML en análisis de datasets biológicos"
          ],
          publications: [
            "SARS-CoV-2 BW Lineage in Southeast Mexico (Infection, Q1)",
            "Omicron-BA.1 Dispersion Rates in Mexico (Viruses, Q2)",
            "Why the Alpha Variant Failed in Mexico (Microbiology Spectrum, Q1)"
          ],
          collaborators: ["UNAM", "CONACYT", "Instituciones federales"]
        }
      },
      {
        title: "Predicción de Letalidad por COVID-19 mediante ML",
        description: "Desarrollo de modelos de machine learning para predecir factores de riesgo asociados con letalidad por COVID-19.",
        image: "https://images.unsplash.com/photo-1582719471384-894fbb16e074?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        tags: ["Machine Learning", "Salud Pública", "Predicción"],
        result: "Publicado en Journal of Medical Systems (Q2)",
        period: "2021-2023",
        role: "Investigador Principal",
        modalContent: {
          fullTitle: "Risk Factors Associated with COVID-19 Lethality: A Machine Learning Approach",
          detailedDescription: "Desarrollo de modelos de machine learning para identificar factores de riesgo asociados con letalidad por COVID-19 en contexto mexicano.",
          challenges: [
            "Análisis de factores de riesgo complejos",
            "Modelado predictivo con datos clínicos",
            "Aplicación en contexto mexicano"
          ],
          solution: "Modelos de ML con Scikit-learn, análisis estadístico avanzado y validación cruzada para identificar factores de riesgo.",
          technologies: ["Python", "Scikit-learn", "Pandas", "Machine Learning", "Estadística"],
          results: [
            "Publicación en Journal of Medical Systems (Q2, Springer Nature)",
            "Identificación de factores de riesgo clave",
            "Modelo aplicable en contexto mexicano"
          ],
          publications: [
            "Risk Factors Associated with COVID-19 Lethality: A Machine Learning Approach (Journal of Medical Systems, Q2)"
          ],
          collaborators: ["UNAM", "INSP"]
        }
      },
      {
        title: "Clasificación de Aguas mediante Machine Learning",
        description: "Desarrollo de esquemas innovadores de clasificación de aguas utilizando algoritmos de aprendizaje automático.",
        image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        tags: ["Machine Learning", "Hidrología", "Clasificación"],
        result: "Publicado en Journal of Hydrology (Q1)",
        period: "2020-2023",
        role: "Investigador",
        modalContent: {
          fullTitle: "Machine Learning Models for Water Classification",
          detailedDescription: "Desarrollo de modelos de ML para clasificación de aguas, aplicando técnicas avanzadas de aprendizaje automático a datos hidrológicos.",
          challenges: [
            "Clasificación multiclase en datos ambientales",
            "Selección de algoritmos óptimos",
            "Validación de modelos"
          ],
          solution: "Comparación de algoritmos de ML (Random Forest, SVM, etc.), validación cruzada y evaluación de métricas de rendimiento.",
          technologies: ["Python", "Scikit-learn", "R", "Weka", "RapidMiner", "Machine Learning"],
          results: [
            "Publicación en Journal of Hydrology (Q1, Elsevier)",
            "Publicación en Revista Mexicana de Ingeniería Química",
            "Metodología aplicable a evaluación ambiental"
          ],
          publications: [
            "Machine Learning Models for Water Classification (Journal of Hydrology, Q1)",
            "Assessment of Groundwater Quality in Mexico Using ML Classification"
          ],
          collaborators: ["UAEM", "INSP"]
        }
      },
      {
        title: "Análisis de Riesgos Ambientales por Metales Pesados",
        description: "Evaluación de riesgos a la salud humana asociados con metales pesados en partículas PM2.5.",
        image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        tags: ["Medio Ambiente", "Riesgos a la Salud", "Metales Pesados"],
        result: "Publicado en Atmosphere (Q2)",
        period: "2023-2024",
        role: "Investigador",
        modalContent: {
          fullTitle: "Risk Estimation of Heavy Metals Associated with PM2.5 in Cuernavaca",
          detailedDescription: "Evaluación de riesgos a la salud humana asociados con exposición a metales pesados en partículas PM2.5 en contexto urbano mexicano.",
          challenges: [
            "Análisis de múltiples metales pesados",
            "Evaluación de riesgos a la salud",
            "Aplicación en contexto urbano"
          ],
          solution: "Metodología de evaluación de riesgos, análisis estadístico avanzado y modelado de exposición.",
          technologies: ["R", "Python", "Estadística avanzada", "QGIS", "Análisis de riesgos"],
          results: [
            "Publicación en Atmosphere (Q2, MDPI)",
            "Metodología de evaluación de riesgos",
            "Aplicación en contexto urbano mexicano"
          ],
          publications: [
            "Risk Estimation of Heavy Metals Associated with PM2.5 in Cuernavaca (Atmosphere, Q2)"
          ],
          collaborators: []
        }
      }
    ],
    commercial: [
      {
        title: "Dashboards Empresariales - Etafuel",
        description: "Implementación de KPIs y dashboards para optimización operativa y financiera.",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        tags: ["Power BI", "KPIs", "Business Intelligence"],
        result: "20% reducción en tiempo de decisión",
        period: "2020-2022",
        role: "Business Intelligence Analyst (Aelityx)",
        client: "Etafuel",
        modalContent: {
          fullTitle: "Business Intelligence para Etafuel",
          detailedDescription: "Diseño e implementación de KPIs y dashboards para optimización operativa y financiera. Desarrollo de modelos de datos y pipelines ETL.",
          challenges: [
            "Datos dispersos en múltiples fuentes",
            "Necesidad de visualización ejecutiva",
            "Automatización de reportes"
          ],
          solution: "Arquitectura de datos con Power BI, modelos semánticos, pipelines ETL con Python y APIs, automatización de reportes.",
          technologies: ["Power BI", "SQL", "Python", "APIs", "ETL", "Data Modeling"],
          results: [
            "20% reducción en tiempo de decisión ejecutiva",
            "Automatización de procesos de reporte",
            "KPIs para operaciones y finanzas",
            "Estandarización de procesos de datos"
          ],
          client: "Etafuel"
        }
      },
      {
        title: "Plataforma Logística Inteligente - Green Toka",
        description: "Análisis de eficiencia operativa y dashboards de rendimiento para optimización logística.",
        image: "https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        tags: ["Logística", "Dashboards", "Optimización"],
        result: "25% aumento en ventas",
        period: "2019-2020",
        role: "Logistics & BI Analyst (Aelityx)",
        client: "Green Toka",
        modalContent: {
          fullTitle: "Business Intelligence para Green Toka",
          detailedDescription: "Liderazgo en análisis de eficiencia operativa usando metodologías de BI y frameworks de KPIs. Desarrollo de dashboards para ventas, logística y rendimiento de equipos.",
          challenges: [
            "Análisis de eficiencia operativa",
            "Visualización de métricas de ventas y logística",
            "Optimización de procesos"
          ],
          solution: "Dashboards en Power BI, análisis de datos operativos, KPIs de ventas y logística, estrategias de datos alineadas con métricas de sostenibilidad.",
          technologies: ["Power BI", "SQL", "KPIs", "Data Analysis", "SPSG"],
          results: [
            "25% aumento en ventas",
            "Optimización logística",
            "Dashboards de rendimiento de equipos",
            "Estrategias de datos para sostenibilidad"
          ],
          client: "Green Toka"
        }
      },
      {
        title: "Análisis de Consumo Energético - INEEL",
        description: "Modelado de procesos de negocio y herramientas analíticas para análisis de consumo energético.",
        image: "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        tags: ["Energía", "Análisis", "Dashboards"],
        result: "Herramientas de monitoreo implementadas",
        period: "2018-2019",
        role: "IT Analyst & Developer (Aelityx)",
        client: "INEEL",
        modalContent: {
          fullTitle: "Análisis de Consumo Energético para INEEL",
          detailedDescription: "Modelado de procesos de negocio y desarrollo de herramientas analíticas para análisis de consumo energético y optimización.",
          challenges: [
            "Integración de fuentes de datos energéticos",
            "Análisis de consumo",
            "Monitoreo y optimización"
          ],
          solution: "Modelado de procesos de negocio, integración de fuentes de datos, dashboards para monitoreo y análisis de consumo energético.",
          technologies: ["Power BI", "SQL", "Data Integration", "Business Process Modeling"],
          results: [
            "Herramientas analíticas implementadas",
            "Dashboards de monitoreo",
            "Análisis de consumo energético",
            "Colaboración con equipos técnicos y de gestión"
          ],
          client: "INEEL - Instituto de Electricidad y Energías Limpias"
        }
      },
      {
        title: "DEMS Data Room Sostenible",
        description: "Plataforma de gestión constructiva con Taxonomía Sostenible de México. Integración de datos, trazabilidad y reportes de sostenibilidad.",
        image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        tags: ["AWS", "Data Room", "Sostenibilidad", "Construcción"],
        result: "Plataforma en desarrollo",
        period: "2024-presente",
        role: "Consultor en Ciencia de Datos (Aelityx)",
        client: "DEMS",
        modalContent: {
          fullTitle: "DEMS Data Room Sostenible - Plataforma de Gestión Constructiva",
          detailedDescription: "Desarrollo de plataforma digital para gestión de proyectos constructivos con trazabilidad completa, documentación técnica y reportes de sostenibilidad alineados a la Taxonomía Sostenible de México. Integración de Cempanel® (Mexalit) con infraestructura AWS para crear el primer ecosistema de construcción inteligente en México.",
          challenges: [
            "Fragmentación de información en proyectos constructivos",
            "Baja trazabilidad entre proveedores, arquitectos y clientes",
            "Nula digitalización en productos nacionales",
            "Necesidad de demostrar cumplimiento con Taxonomía Sostenible"
          ],
          solution: "Data Room centralizado en AWS con WorkDocs, S3 y DataZone. Integración de catálogos de Mexalit, flujos estandarizados de instalación, gestión completa de planos, presupuestos, bitácoras y avances por obra. Reportes automáticos de sostenibilidad.",
          technologies: ["AWS", "WorkDocs", "S3", "DataZone", "QuickSight", "IAM", "Python", "Business Intelligence", "Taxonomía Sostenible"],
          results: [
            "Centralización total de documentos del proyecto",
            "Trazabilidad completa desde diseño hasta operación",
            "Reportes de sostenibilidad alineados a TSM",
            "Transparencia total para clientes e inversionistas",
            "Preparación para financiamiento verde"
          ],
          client: "DEMS - Desarrollo de Espacios Modulares Sostenibles"
        }
      }
    ]
  };

  const [openDialogIndex, setOpenDialogIndex] = useState<number | null>(null);

  // Set up the animation for the cards
  useEffect(() => {
    // Reset cardRefs when tab changes
    cardRefs.current = [];
    
    // Small delay to ensure DOM is updated
    const timer = setTimeout(() => {
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
    }, 100);

    return () => {
      clearTimeout(timer);
      // Clean up animations when component unmounts
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, [activeTab]);

  const currentProjects = activeTab === "academic" ? projects.academic : projects.commercial;

  return (
      <section id="proyectos" className="section-padding bg-white dark:bg-gray-900 relative overflow-hidden">
        <div className="absolute -top-32 -right-32 w-[200px] h-[200px] bg-gradient-to-bl from-aelityx-blue/40 to-aelityx-green/20 rounded-full blur-3xl opacity-20"></div>
        <div className="absolute bottom-0 left-0 w-[150px] h-[150px] bg-gradient-to-tr from-aelityx-green/40 to-aelityx-blue/20 rounded-full blur-3xl opacity-20"></div>

        <div className="container mx-auto relative z-10">
          <div className="text-center mb-12">
            <h2 className="section-title">Proyectos de Investigación y Desarrollo</h2>
            <p className="section-subtitle">
              Investigación académica rigurosa y proyectos comerciales que transforman datos en soluciones aplicadas.
            </p>
          </div>

          {/* Tabs */}
          <div className="flex justify-center mb-12">
            <div className="inline-flex bg-gray-100 dark:bg-gray-800 rounded-lg p-1 border border-gray-200 dark:border-gray-700">
              <button
                onClick={() => setActiveTab("academic")}
                className={`px-6 py-3 rounded-md font-medium transition-all duration-300 ${
                  activeTab === "academic"
                    ? "bg-aelityx-blue text-white shadow-md"
                    : "text-aelityx-gray dark:text-gray-300 hover:text-aelityx-blue dark:hover:text-white"
                }`}
              >
                Investigación Académica
              </button>
              <button
                onClick={() => setActiveTab("commercial")}
                className={`px-6 py-3 rounded-md font-medium transition-all duration-300 ${
                  activeTab === "commercial"
                    ? "bg-aelityx-green text-white shadow-md"
                    : "text-aelityx-gray dark:text-gray-300 hover:text-aelityx-green dark:hover:text-white"
                }`}
              >
                Proyectos Aelityx
              </button>
            </div>
          </div>

          <div ref={cardsContainerRef} className="max-w-4xl mx-auto space-y-6">
            {currentProjects.map((project, index) => (
                <div
                    key={`${activeTab}-${index}`}
                    ref={el => {
                      if (el) {
                        cardRefs.current[index] = el;
                      }
                    }}
                    className={`relative flex gap-6 p-6 rounded-xl transition-all duration-300 hover:shadow-lg ${
                      activeTab === "academic"
                        ? "bg-gradient-to-r from-aelityx-blue/5 to-transparent dark:from-aelityx-blue/10 border-l-4 border-aelityx-blue"
                        : "bg-gradient-to-r from-aelityx-green/5 to-transparent dark:from-aelityx-green/10 border-l-4 border-aelityx-green"
                    } border-t border-r border-b border-gray-200 dark:border-gray-700`}
                >
                  {/* Timeline dot */}
                  <div className="flex-shrink-0 relative">
                    <div className={`w-4 h-4 rounded-full mt-2 ${
                      activeTab === "academic" 
                        ? "bg-aelityx-blue border-2 border-aelityx-blue/20" 
                        : "bg-aelityx-green border-2 border-aelityx-green/20"
                    }`}></div>
                    {index < currentProjects.length - 1 && (
                      <div className={`absolute w-0.5 top-6 left-1.5 ${
                        activeTab === "academic" 
                          ? "bg-aelityx-blue/30" 
                          : "bg-aelityx-green/30"
                      }`} style={{ height: 'calc(100% + 0.5rem)' }}></div>
                    )}
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex flex-col gap-3 mb-3">
                      <div className="flex-1 min-w-0">
                        <h3 className="text-xl sm:text-2xl font-bold mb-2 text-aelityx-dark dark:text-white">{project.title}</h3>
                        <div className="flex flex-wrap items-center gap-2 mb-2">
                          {project.period && (
                            <span className="text-xs sm:text-sm text-aelityx-gray dark:text-gray-400">{project.period}</span>
                          )}
                          <span className={`px-2 sm:px-3 py-1 rounded-md text-xs sm:text-sm font-medium ${
                            activeTab === "academic" 
                              ? "bg-aelityx-blue/10 text-aelityx-blue dark:bg-aelityx-blue/20 dark:text-aelityx-blue/90"
                              : "bg-aelityx-green/10 text-aelityx-green dark:bg-aelityx-green/20 dark:text-aelityx-green/90"
                          }`}>
                            {project.result}
                          </span>
                        </div>
                        {project.role && (
                          <p className="text-xs sm:text-sm text-aelityx-blue dark:text-aelityx-blue/80 font-medium">{project.role}</p>
                        )}
                      </div>
                    </div>
                    
                    <p className="text-aelityx-gray dark:text-gray-300 mb-4 text-base leading-relaxed">{project.description}</p>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag, tagIndex) => (
                        <span
                            key={tagIndex}
                            className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-aelityx-gray dark:text-gray-300 rounded-md text-xs font-medium"
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
                          className={`transition-all duration-300 ${
                            activeTab === "academic"
                              ? "border-aelityx-blue text-aelityx-blue hover:bg-aelityx-blue hover:text-white dark:border-aelityx-blue/80 dark:text-aelityx-blue/80 dark:hover:bg-aelityx-blue/80 dark:hover:text-white"
                              : "border-aelityx-green text-aelityx-green hover:bg-aelityx-green hover:text-white dark:border-aelityx-green/80 dark:text-aelityx-green/80 dark:hover:bg-aelityx-green/80 dark:hover:text-white"
                          }`}
                        >
                          Ver detalles completos
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto dark:bg-gray-800 border-t-4 shadow-lg" style={{ borderTopColor: activeTab === "academic" ? "#1E88E5" : "#4CAF50" }}>
                        <DialogHeader>
                          <DialogTitle className="text-2xl font-bold text-aelityx-dark dark:text-white bg-gradient-to-r from-aelityx-blue to-aelityx-green bg-clip-text text-transparent">{project.modalContent.fullTitle}</DialogTitle>
                          <DialogDescription className="text-aelityx-gray dark:text-gray-300 mt-2 text-base">
                            {project.modalContent.detailedDescription}
                          </DialogDescription>
                        </DialogHeader>

                        <div className="space-y-6 mt-6">
                          {/* Desafíos y Solución */}
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                                {project.modalContent.challenges.map((challenge, i) => (
                                  <li key={i} className="flex items-start">
                                    <span className="text-aelityx-blue mr-2">•</span>
                                    {challenge}
                                  </li>
                                ))}
                              </ul>
                            </div>
                            <div>
                              <h4 className="font-semibold text-lg text-aelityx-dark dark:text-white mb-3 flex items-center">
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
                                {project.modalContent.solution}
                              </p>
                            </div>
                          </div>

                          {/* Resultados */}
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
                              {project.modalContent.results.map((result, i) => (
                                <li key={i} className="flex items-start">
                                  <span className="text-aelityx-blue mr-2">•</span>
                                  <span className="font-medium">{result}</span>
                                </li>
                              ))}
                            </ul>
                          </div>

                          {/* Publicaciones (solo académicos) */}
                          {activeTab === "academic" && project.modalContent.publications && project.modalContent.publications.length > 0 && (
                            <div>
                              <h4 className="font-semibold text-lg text-aelityx-dark dark:text-white mb-3 flex items-center">
                                <span className="w-6 h-6 rounded-full bg-aelityx-orange/20 flex items-center justify-center mr-2">
                                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-aelityx-orange">
                                    <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"></path>
                                  </svg>
                                </span>
                                Publicaciones:
                              </h4>
                              <ul className="list-none pl-5 space-y-2 text-aelityx-gray dark:text-gray-300">
                                {project.modalContent.publications.map((pub, i) => (
                                  <li key={i} className="flex items-start">
                                    <span className="text-aelityx-orange mr-2">•</span>
                                    <span className="text-sm">{pub}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          )}

                          {/* Colaboradores (solo académicos) */}
                          {activeTab === "academic" && project.modalContent.collaborators && project.modalContent.collaborators.length > 0 && (
                            <div>
                              <h4 className="font-semibold text-lg text-aelityx-dark dark:text-white mb-3 flex items-center">
                                <span className="w-6 h-6 rounded-full bg-aelityx-green/20 flex items-center justify-center mr-2">
                                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-aelityx-green">
                                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                                    <circle cx="9" cy="7" r="4"></circle>
                                    <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                                    <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                                  </svg>
                                </span>
                                Colaboradores:
                              </h4>
                              <div className="flex flex-wrap gap-2 pl-5">
                                {project.modalContent.collaborators.map((collab, i) => (
                                  <span key={i} className="px-3 py-1 bg-aelityx-green/10 text-aelityx-green dark:bg-aelityx-green/20 dark:text-aelityx-green/90 border border-aelityx-green/20 text-sm rounded-full">
                                    {collab}
                                  </span>
                                ))}
                              </div>
                            </div>
                          )}

                          {/* Cliente (solo comerciales) */}
                          {activeTab === "commercial" && project.modalContent.client && (
                            <div>
                              <h4 className="font-semibold text-lg text-aelityx-dark dark:text-white mb-3 flex items-center">
                                <span className="w-6 h-6 rounded-full bg-aelityx-green/20 flex items-center justify-center mr-2">
                                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-aelityx-green">
                                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                                    <circle cx="9" cy="7" r="4"></circle>
                                    <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                                    <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                                  </svg>
                                </span>
                                Cliente:
                              </h4>
                              <p className="text-aelityx-gray dark:text-gray-300 pl-5">
                                <span className="font-medium text-aelityx-green">{project.modalContent.client}</span>
                              </p>
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
                              {project.modalContent.technologies.map((tech, i) => (
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

export default ResearchProjectsSection;
