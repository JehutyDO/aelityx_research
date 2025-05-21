
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

const CasesSection = () => {
  const cases = [
    {
      title: "Sistema de seguimiento académico con dashboards inteligentes",
      description: "Implementado con PowerBI y Python para universidades con enfoque en análisis de datos educativos.",
      image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      tags: ["PowerBI", "Python", "Educación"],
      result: "+60% eficiencia en análisis",
      modalContent: {
        fullTitle: "Sistema de seguimiento académico con dashboards inteligentes",
        detailedDescription: "Diseñamos e implementamos un sistema integral para el seguimiento de indicadores académicos que permite a las universidades monitorear en tiempo real el progreso de los estudiantes, identificar patrones de deserción y optimizar la asignación de recursos educativos.",
        challenges: [
          "Datos dispersos en múltiples sistemas",
          "Necesidad de visualizaciones dinámicas y accesibles",
          "Requerimientos de predicción de deserción"
        ],
        solution: "Desarrollamos una arquitectura de datos centralizada con ETL automatizado en Python y visualizaciones interactivas en Power BI, complementada con modelos predictivos para identificación temprana de estudiantes en riesgo.",
        technologies: ["Python", "Power BI", "SQL", "Azure", "Machine Learning"],
        results: [
          "60% más de eficiencia en análisis de avance estudiantil",
          "Reducción del 15% en tasas de deserción",
          "Implementado en 5 universidades en México"
        ],
        testimonial: "Este sistema ha transformado nuestra capacidad para tomar decisiones basadas en datos, permitiéndonos intervenir de manera proactiva y mejorar significativamente la experiencia educativa."
      }
    },
    {
      title: "Modelo COVID + análisis filodinámico en UNAM / COVIGEN-MEX",
      description: "Python + AzureML + W&B para predicción de linajes y evolución viral con impacto en salud pública.",
      image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      tags: ["Python", "AzureML", "Salud"],
      result: "Publicado en Infection & Viruses 2023",
      modalContent: {
        fullTitle: "Modelo predictivo de evolución viral COVID-19 para COVIGEN-MEX",
        detailedDescription: "Colaboramos con el Consorcio Mexicano de Vigilancia Genómica (COVIGEN-MEX) y la UNAM para desarrollar modelos predictivos de evolución viral que permitieron anticipar la aparición de nuevas variantes de SARS-CoV-2 en México.",
        challenges: [
          "Análisis de secuencias genómicas a gran escala",
          "Necesidad de predicciones en tiempo real",
          "Integración con sistemas de vigilancia epidemiológica"
        ],
        solution: "Implementamos un pipeline de análisis filodinámico utilizando Python, AzureML y Weights & Biases para modelar la evolución viral, identificar mutaciones significativas y predecir el comportamiento de nuevas variantes.",
        technologies: ["Python", "AzureML", "W&B", "Biopython", "Nextstrain", "Deep Learning"],
        results: [
          "Predicción exitosa de linajes dominantes con 3-4 semanas de anticipación",
          "Publicación en la revista Infection & Viruses 2023",
          "Sistema adoptado por autoridades sanitarias para la toma de decisiones"
        ],
        testimonial: "La precisión de estos modelos ha sido fundamental para nuestra capacidad de respuesta ante la evolución de la pandemia, permitiéndonos ajustar estrategias de manera oportuna."
      }
    },
    {
      title: "IA aplicada a biodiversidad y salud ambiental",
      description: "Modelos predictivos y clustering en metagenómica y aire contaminado con enfoque en sustentabilidad.",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      tags: ["Machine Learning", "Biodiversidad", "Medio Ambiente"],
      result: "Publicado en Gaceta Médica y Atmosphere",
      modalContent: {
        fullTitle: "Inteligencia Artificial aplicada a biodiversidad y salud ambiental",
        detailedDescription: "Desarrollamos modelos de machine learning para analizar datos metagenómicos y de calidad del aire, identificando patrones y relaciones que impactan en la salud pública y la conservación de la biodiversidad.",
        challenges: [
          "Análisis de datos multiómicos de alta dimensionalidad",
          "Correlación entre variables ambientales y biodiversidad",
          "Modelos predictivos para impactos en salud"
        ],
        solution: "Implementamos algoritmos de clustering y redes neuronales para identificar patrones en datos metagenómicos, complementados con modelos de regresión avanzada para predecir impactos de contaminación atmosférica en la salud.",
        technologies: ["Python", "Scikit-learn", "TensorFlow", "R", "QGIS"],
        results: [
          "Identificación de biomarcadores de contaminación ambiental",
          "Publicaciones en revistas Gaceta Médica y Atmosphere",
          "Adopción de métodos por organismos de protección ambiental"
        ],
        testimonial: "Estos modelos nos han permitido entender relaciones complejas entre biodiversidad, contaminación y salud pública que eran imposibles de detectar con métodos tradicionales."
      }
    },
    {
      title: "Plataforma analítica para empresas logísticas y energéticas",
      description: "Visualización de datos de consumo, rutas, eficiencia implementada con tecnologías geoespaciales.",
      image: "https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      tags: ["Mapbox", "Python", "PowerBI"],
      result: "+25% optimización logística",
      modalContent: {
        fullTitle: "Plataforma analítica para empresas logísticas y energéticas",
        detailedDescription: "Diseñamos una plataforma integral para monitoreo y optimización de operaciones logísticas y consumo energético, integrando análisis geoespacial, predicción de demanda y visualización avanzada de datos operativos.",
        challenges: [
          "Datos distribuidos en múltiples sistemas y formatos",
          "Necesidad de análisis geoespacial en tiempo real",
          "Optimización de rutas y consumo energético"
        ],
        solution: "Desarrollamos una arquitectura basada en Mapbox, Python y Power BI para integrar, analizar y visualizar datos operativos, complementada con algoritmos de optimización para rutas y modelos predictivos para demanda energética.",
        technologies: ["Python", "Power BI", "Mapbox", "SQL Server", "Azure", "Algoritmos de optimización"],
        results: [
          "25% de mejora en eficiencia logística",
          "Reducción del 18% en costos operativos",
          "Disminución del 15% en huella de carbono"
        ],
        testimonial: "La plataforma ha transformado nuestra operación, permitiéndonos tomar decisiones basadas en datos que han resultado en ahorros significativos y un mejor servicio a nuestros clientes."
      }
    }
  ];

  const [openDialogIndex, setOpenDialogIndex] = useState<number | null>(null);

  return (
    <section id="casos" className="section-padding bg-white dark:bg-gray-900">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="section-title">Proyectos Impactantes</h2>
          <p className="section-subtitle">
            Descubre cómo hemos ayudado a nuestros clientes a transformar sus datos en soluciones efectivas y creativas.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {cases.map((caseStudy, index) => (
            <div 
              key={index} 
              className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src={caseStudy.image} 
                  alt={caseStudy.title} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-aelityx-dark/50 to-transparent"></div>
              </div>
              <div className="p-6">
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
                    <Button variant="outline" className="w-full border-aelityx-blue text-aelityx-blue hover:bg-aelityx-blue hover:text-white dark:border-aelityx-blue/80 dark:text-aelityx-blue/80 dark:hover:bg-aelityx-blue/80 dark:hover:text-white">
                      Ver detalle
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-[700px] dark:bg-gray-800">
                    <DialogHeader>
                      <DialogTitle className="text-2xl font-bold text-aelityx-dark dark:text-white">{caseStudy.modalContent.fullTitle}</DialogTitle>
                      <DialogDescription className="text-aelityx-gray dark:text-gray-300 mt-2 text-base">
                        {caseStudy.modalContent.detailedDescription}
                      </DialogDescription>
                    </DialogHeader>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                      <div>
                        <h4 className="font-semibold text-lg text-aelityx-dark dark:text-white mb-2">Desafíos:</h4>
                        <ul className="list-disc pl-5 space-y-1 text-aelityx-gray dark:text-gray-300">
                          {caseStudy.modalContent.challenges.map((challenge, i) => (
                            <li key={i}>{challenge}</li>
                          ))}
                        </ul>
                        
                        <h4 className="font-semibold text-lg text-aelityx-dark dark:text-white mb-2 mt-4">Solución:</h4>
                        <p className="text-aelityx-gray dark:text-gray-300">
                          {caseStudy.modalContent.solution}
                        </p>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold text-lg text-aelityx-dark dark:text-white mb-2">Resultados:</h4>
                        <ul className="list-disc pl-5 space-y-1 text-aelityx-gray dark:text-gray-300">
                          {caseStudy.modalContent.results.map((result, i) => (
                            <li key={i}>{result}</li>
                          ))}
                        </ul>
                        
                        <h4 className="font-semibold text-lg text-aelityx-dark dark:text-white mb-2 mt-4">Tecnologías:</h4>
                        <div className="flex flex-wrap gap-2">
                          {caseStudy.modalContent.technologies.map((tech, i) => (
                            <span 
                              key={i}
                              className="px-3 py-1 bg-aelityx-green/10 text-aelityx-green dark:bg-aelityx-green/20 dark:text-aelityx-green/90 text-sm rounded-full"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                    
                    <div className="mt-6 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg italic text-aelityx-gray dark:text-gray-300">
                      <p>"{caseStudy.modalContent.testimonial}"</p>
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
