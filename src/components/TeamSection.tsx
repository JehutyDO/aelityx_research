
import { useState } from "react";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";

const TeamSection = () => {
  const team = [
    {
      name: "Mauricio Rosales Rivera",
      position: "Cofundador y Científico de Datos",
      bio: "Fusiono ciencia, narrativa y análisis para impulsar decisiones con propósito.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      expanded: {
        education: "Doctorado en Ciencias de la Computación e Ingeniería de Datos",
        expertise: ["Ciencia de Datos", "IA", "Simulación", "Docencia"],
        hobbies: "Fotografía, senderismo, lectura de ciencia ficción"
      }
    },
    {
      name: "Especialista en IA",
      position: "Machine Learning Engineer",
      bio: "Implementando modelos de IA para transformar datos en decisiones inteligentes.",
      image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      expanded: {
        education: "Maestría en Inteligencia Artificial",
        expertise: ["Deep Learning", "NLP", "Computer Vision", "MLOps"],
        hobbies: "Ajedrez, música, programación creativa"
      }
    },
    {
      name: "Desarrollador Full Stack",
      position: "Tech Lead",
      bio: "Arquitecto de soluciones digitales con enfoque en experiencias de usuario significativas.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      expanded: {
        education: "Ingeniería en Sistemas Computacionales",
        expertise: ["React", "Node.js", "Python", "AWS", "DevOps"],
        hobbies: "Viajes, ciclismo, desarrollo de videojuegos independientes"
      }
    },
    {
      name: "Educador Científico",
      position: "Especialista en Data Literacy",
      bio: "Experto en capacitación y traducción de datos complejos a narrativas comprensibles.",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      expanded: {
        education: "Maestría en Educación y Estadística Aplicada",
        expertise: ["Visualización", "Narrativa de datos", "Estadística aplicada", "Pedagogía"],
        hobbies: "Escritura, jardinería, divulgación científica"
      }
    }
  ];

  const [hoveredMember, setHoveredMember] = useState<number | null>(null);

  return (
    <section id="equipo" className="section-padding bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="section-title">Nuestro Equipo</h2>
          <p className="section-subtitle">
            Expertos en Datos. Aliados en tu evolución.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <HoverCard key={index} openDelay={200} closeDelay={100}>
              <HoverCardTrigger asChild>
                <div 
                  className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer"
                  onMouseEnter={() => setHoveredMember(index)}
                  onMouseLeave={() => setHoveredMember(null)}
                >
                  <div className="relative h-64 overflow-hidden">
                    <img 
                      src={member.image} 
                      alt={member.name} 
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-t from-aelityx-dark/70 to-transparent transition-opacity duration-300 ${hoveredMember === index ? 'opacity-70' : 'opacity-50'}`}></div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-1 text-aelityx-dark dark:text-white">{member.name}</h3>
                    <p className="text-aelityx-blue dark:text-aelityx-blue/80 font-medium mb-3">{member.position}</p>
                    <p className="text-aelityx-gray dark:text-gray-300 text-sm italic">"{member.bio}"</p>
                  </div>
                </div>
              </HoverCardTrigger>
              <HoverCardContent className="w-80 dark:bg-gray-800 border-gray-200 dark:border-gray-700">
                <div className="flex justify-between">
                  <div>
                    <h4 className="text-lg font-bold text-aelityx-dark dark:text-white">{member.name}</h4>
                    <p className="text-sm text-aelityx-blue dark:text-aelityx-blue/80">{member.position}</p>
                  </div>
                </div>
                <div className="mt-4 space-y-3">
                  <div>
                    <h5 className="text-sm font-medium text-aelityx-dark dark:text-gray-300">Formación</h5>
                    <p className="text-sm text-aelityx-gray dark:text-gray-400">{member.expanded.education}</p>
                  </div>
                  <div>
                    <h5 className="text-sm font-medium text-aelityx-dark dark:text-gray-300">Expertise</h5>
                    <div className="flex flex-wrap gap-1 mt-1">
                      {member.expanded.expertise.map((skill, i) => (
                        <span 
                          key={i} 
                          className="px-2 py-1 text-xs bg-aelityx-blue/10 text-aelityx-blue dark:bg-aelityx-blue/20 dark:text-aelityx-blue/90 rounded-full"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h5 className="text-sm font-medium text-aelityx-dark dark:text-gray-300">Intereses</h5>
                    <p className="text-sm text-aelityx-gray dark:text-gray-400">{member.expanded.hobbies}</p>
                  </div>
                </div>
              </HoverCardContent>
            </HoverCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
