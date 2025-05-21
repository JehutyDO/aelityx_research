
const CasesSection = () => {
  const cases = [
    {
      title: "Optimización de Procesos para Empresa de Manufactura",
      description: "Implementación de sistemas de análisis de datos que redujeron costos operativos en un 30% y mejoraron la eficiencia en la cadena de suministro.",
      image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      tags: ["Análisis de Datos", "Optimización", "Manufactura"]
    },
    {
      title: "Plataforma de Business Intelligence para Retail",
      description: "Desarrollo de dashboard interactivo que centraliza información de ventas y comportamiento del consumidor, aumentando las ventas cruzadas en un 25%.",
      image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      tags: ["BI", "Retail", "Dashboard"]
    },
    {
      title: "Sistema Predictivo para Institución Financiera",
      description: "Implementación de modelo de machine learning para la detección temprana de riesgos crediticios, reduciendo la tasa de impago en un 15%.",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      tags: ["Machine Learning", "Finanzas", "Riesgo"]
    }
  ];

  return (
    <section id="casos" className="section-padding bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="section-title">Casos de Éxito</h2>
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
                <p className="text-aelityx-gray mb-6">{caseStudy.description}</p>
                <div className="flex flex-wrap gap-2">
                  {caseStudy.tags.map((tag, tagIndex) => (
                    <span 
                      key={tagIndex} 
                      className="px-3 py-1 bg-gray-100 text-aelityx-gray rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
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
