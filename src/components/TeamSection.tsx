
const TeamSection = () => {
  const team = [
    {
      name: "Ana Rodríguez",
      position: "CEO & Fundadora",
      bio: "Experta en análisis de datos con más de 15 años de experiencia en el sector tecnológico.",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
    },
    {
      name: "Carlos López",
      position: "Director de Tecnología",
      bio: "Ingeniero de software especializado en arquitecturas de big data y sistemas distribuidos.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
    },
    {
      name: "Elena Martínez",
      position: "Jefa de Análisis",
      bio: "Doctora en matemáticas aplicadas con experiencia en modelado predictivo y machine learning.",
      image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
    },
    {
      name: "Javier Sánchez",
      position: "Líder de Innovación",
      bio: "Especialista en transformación digital y desarrollo de productos tecnológicos innovadores.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
    }
  ];

  return (
    <section id="equipo" className="section-padding bg-gray-50">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="section-title">Nuestro Equipo</h2>
          <p className="section-subtitle">
            Conoce a los profesionales detrás de Aelityx que hacen posible la transformación de datos en soluciones efectivas.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <div 
              key={index} 
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="h-64 overflow-hidden">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-1 text-aelityx-dark">{member.name}</h3>
                <p className="text-aelityx-blue font-medium mb-3">{member.position}</p>
                <p className="text-aelityx-gray text-sm">{member.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
