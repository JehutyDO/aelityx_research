
import { Button } from "@/components/ui/button";

const CasesSection = () => {
  const cases = [
    {
      title: "Plataforma educativa + dashboards para monitoreo académico",
      description: "Diseño de sistema de seguimiento estudiantil con tableros de rendimiento y asistencia para optimizar la experiencia de aprendizaje.",
      image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      tags: ["Dashboards", "Educación", "Monitoreo"],
      result: "Implementado con 5 universidades"
    },
    {
      title: "Proyecto de simulación financiera (Doctorado)",
      description: "Modelos Monte Carlo para análisis de riesgo y optimización de variables críticas en decisiones de inversión para escenarios complejos.",
      image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      tags: ["Monte Carlo", "Finanzas", "Simulación"],
      result: "+40% precisión en proyecciones"
    },
    {
      title: "Desarrollo de modelo de predicción de abandono escolar",
      description: "Regresión logística y árboles de decisión en contexto universitario mexicano para identificar factores de riesgo y prevenir deserción.",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      tags: ["Machine Learning", "Educación", "Predicción"],
      result: "+30% precisión predictiva"
    },
    {
      title: "Asesoría de IA para plataforma tipo Hotels.com",
      description: "Diseño de estructura algorítmica para recomendar destinos y visualizar datos de comportamiento del usuario, mejorando la experiencia.",
      image: "https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      tags: ["IA", "Recomendaciones", "UX"],
      result: "+25% conversión de usuarios"
    }
  ];

  return (
    <section id="casos" className="section-padding bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="section-title">Proyectos Impactantes</h2>
          <p className="section-subtitle">
            Descubre cómo hemos ayudado a nuestros clientes a transformar sus datos en soluciones efectivas y creativas.
          </p>
        </div>

        <div className="space-y-16">
          {cases.map((caseStudy, index) => (
            <div 
              key={index} 
              className={`grid grid-cols-1 ${index % 2 === 0 ? 'lg:grid-cols-[3fr,2fr]' : 'lg:grid-cols-[2fr,3fr]'} gap-8 items-center`}
            >
              <div className={`${index % 2 !== 0 && 'lg:order-2'}`}>
                <h3 className="text-2xl font-bold mb-4 text-aelityx-dark">{caseStudy.title}</h3>
                <p className="text-aelityx-gray mb-4">{caseStudy.description}</p>
                <div className="flex items-center mb-6">
                  <span className="px-3 py-1 bg-aelityx-blue/10 text-aelityx-blue rounded-full text-sm font-medium">
                    {caseStudy.result}
                  </span>
                </div>
                <div className="flex flex-wrap gap-2 mb-6">
                  {caseStudy.tags.map((tag, tagIndex) => (
                    <span 
                      key={tagIndex} 
                      className="px-3 py-1 bg-gray-100 text-aelityx-gray rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <Button variant="outline" className="border-aelityx-blue text-aelityx-blue hover:bg-aelityx-blue hover:text-white">
                  Ver más
                </Button>
              </div>
              <div className={`relative h-80 overflow-hidden rounded-lg shadow-md ${index % 2 !== 0 && 'lg:order-1'}`}>
                <img 
                  src={caseStudy.image} 
                  alt={caseStudy.title} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-aelityx-dark/50 to-transparent"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CasesSection;
