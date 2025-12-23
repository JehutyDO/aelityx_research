import { ExternalLink, BookOpen } from "lucide-react";
import { useRef } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const PublicationsSection = () => {
  const sectionRef = useRef<HTMLElement>(null);

  const publications = [
    {
      title: "Risk Estimation of Heavy Metals Associated with PM2.5 in Cuernavaca",
      journal: "Atmosphere (Q2, MDPI)",
      year: 2024,
      doi: "10.3390/atmos15040409",
      authors: ["M. Rosales Rivera", "et al."],
      tags: ["Contaminación ambiental", "Riesgos a la salud", "Metales pesados"],
      impact: "Q2",
      link: "https://doi.org/10.3390/atmos15040409"
    },
    {
      title: "Risk Factors Associated with COVID-19 Lethality: A Machine Learning Approach",
      journal: "Journal of Medical Systems (Q2, Springer Nature)",
      year: 2023,
      doi: "10.1007/s10916-023-01979-4",
      authors: ["M. Rosales Rivera", "et al."],
      tags: ["Machine Learning", "COVID-19", "Predicción de mortalidad"],
      impact: "Q2",
      link: "https://doi.org/10.1007/s10916-023-01979-4"
    },
    {
      title: "Assessment of Groundwater Quality in Mexico Using ML Classification",
      journal: "Revista Mexicana de Ingeniería Química (Q4, Scopus)",
      year: 2023,
      doi: "10.24275/RMIQ/IA235",
      authors: ["M. Rosales Rivera", "et al."],
      tags: ["Machine Learning", "Clasificación", "Calidad del agua"],
      impact: "Q4",
      link: "https://doi.org/10.24275/RMIQ/IA235"
    },
    {
      title: "SARS-CoV-2 BW Lineage in Southeast Mexico",
      journal: "Infection (Q1, Springer)",
      year: 2023,
      doi: "10.1007/s15010-023-02034-7",
      authors: ["M. Rosales Rivera", "et al."],
      tags: ["Genómica", "Filodinámica", "COVID-19"],
      impact: "Q1",
      link: "https://doi.org/10.1007/s15010-023-02034-7"
    },
    {
      title: "Omicron-BA.1 Dispersion Rates in Mexico",
      journal: "Viruses (Q2, MDPI)",
      year: 2023,
      doi: "10.3390/v15010243",
      authors: ["M. Rosales Rivera", "et al."],
      tags: ["Epidemiología", "Vigilancia genómica", "COVID-19"],
      impact: "Q2",
      link: "https://doi.org/10.3390/v15010243"
    },
    {
      title: "Why the Alpha Variant Failed in Mexico",
      journal: "Microbiology Spectrum (Q1, ASM)",
      year: 2022,
      doi: "10.1128/Spectrum.02240-21",
      authors: ["M. Rosales Rivera", "et al."],
      tags: ["Filodinámica", "Evolución viral", "COVID-19"],
      impact: "Q1",
      link: "https://doi.org/10.1128/Spectrum.02240-21"
    },
    {
      title: "Determinantes Socioeconómicos de Salud y COVID-19",
      journal: "Gaceta Médica de México",
      year: 2022,
      doi: "10.24875/GMM.21000302",
      authors: ["M. Rosales Rivera", "et al."],
      tags: ["Salud pública", "Análisis socioeconómico", "COVID-19"],
      impact: "Indexada",
      link: "https://doi.org/10.24875/GMM.21000302"
    },
    {
      title: "Machine Learning Models for Water Classification",
      journal: "Journal of Hydrology (Q1, Elsevier)",
      year: 2021,
      doi: "10.1016/j.jhydrol.2021.126234",
      authors: ["M. Rosales Rivera", "et al."],
      tags: ["Machine Learning", "Hidrología", "Clasificación"],
      impact: "Q1",
      link: "https://doi.org/10.1016/j.jhydrol.2021.126234"
    },
    {
      title: "Atrazine and Diuron in Cornfield Water: Risk Assessment",
      journal: "Water (Q2, MDPI)",
      year: 2022,
      doi: "10.3390/w14223790",
      authors: ["M. Rosales Rivera", "et al."],
      tags: ["Medio ambiente", "Evaluación de riesgos", "Contaminantes"],
      impact: "Q2",
      link: "https://doi.org/10.3390/w14223790"
    }
  ];

  const getImpactColor = (impact: string) => {
    switch (impact) {
      case "Q1":
        return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200 border-green-300 dark:border-green-700";
      case "Q2":
        return "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 border-blue-300 dark:border-blue-700";
      case "Q4":
        return "bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200 border-gray-300 dark:border-gray-600";
      default:
        return "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200 border-purple-300 dark:border-purple-700";
    }
  };

  return (
    <section ref={sectionRef} id="publicaciones" className="section-padding bg-white dark:bg-gray-900 relative overflow-hidden">
      <div className="absolute -top-32 -right-32 w-[200px] h-[200px] bg-gradient-to-bl from-aelityx-blue/40 to-aelityx-green/20 rounded-full blur-3xl opacity-20"></div>
      <div className="absolute bottom-0 left-0 w-[150px] h-[150px] bg-gradient-to-tr from-aelityx-green/40 to-aelityx-blue/20 rounded-full blur-3xl opacity-20"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-12">
          <h2 className="section-title">Publicaciones Científicas</h2>
          <p className="section-subtitle">
            Más de 20 artículos científicos en revistas indexadas (JCR, Scopus, WoS)
          </p>
          <div className="flex justify-center gap-4 mt-4 flex-wrap">
            <a 
              href="https://scholar.google.com/citations?user=YOUR_ID" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-sm text-aelityx-blue hover:text-aelityx-blue/80 dark:text-aelityx-blue/80 dark:hover:text-aelityx-blue/60 transition-colors flex items-center gap-1"
            >
              <BookOpen className="w-4 h-4" />
              Google Scholar
            </a>
            <span className="text-gray-400">|</span>
            <a 
              href="https://orcid.org/YOUR_ID" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-sm text-aelityx-blue hover:text-aelityx-blue/80 dark:text-aelityx-blue/80 dark:hover:text-aelityx-blue/60 transition-colors"
            >
              ORCID
            </a>
          </div>
        </div>

        <div className="max-w-5xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {publications.map((pub, index) => (
              <AccordionItem 
                key={index}
                value={`item-${index}`}
                className="border border-gray-200 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 shadow-sm hover:shadow-md transition-shadow px-6"
              >
                <AccordionTrigger className="hover:no-underline py-6">
                  <div className="flex items-start justify-between w-full gap-4 text-left">
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start gap-3 mb-2 flex-wrap">
                        <h3 className="text-lg font-semibold text-aelityx-dark dark:text-white flex-1 min-w-[250px]">
                          {pub.title}
                        </h3>
                        <span className={`px-3 py-1 rounded text-xs font-medium border flex-shrink-0 ${getImpactColor(pub.impact)}`}>
                          {pub.impact}
                        </span>
                      </div>
                      <p className="text-sm text-aelityx-gray dark:text-gray-300">
                        <span className="font-medium">{pub.journal}</span> • {pub.year}
                      </p>
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pt-2 pb-6">
                  <div className="space-y-4">
                    <div>
                      <p className="text-xs text-aelityx-gray dark:text-gray-400 mb-3">
                        DOI:{" "}
                        <a 
                          href={pub.link} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-aelityx-blue hover:text-aelityx-green dark:text-aelityx-blue/80 dark:hover:text-aelityx-green/80 transition-colors inline-flex items-center gap-1 font-medium"
                        >
                          {pub.doi}
                          <ExternalLink className="w-3 h-3" />
                        </a>
                      </p>
                    </div>
                    
                    <div>
                      <p className="text-xs font-semibold text-aelityx-dark dark:text-white mb-2">Autores:</p>
                      <p className="text-sm text-aelityx-gray dark:text-gray-300">
                        {pub.authors.join(", ")}
                      </p>
                    </div>
                    
                    <div>
                      <p className="text-xs font-semibold text-aelityx-dark dark:text-white mb-2">Temas:</p>
                      <div className="flex flex-wrap gap-2">
                        {pub.tags.map((tag, i) => (
                          <span 
                            key={i} 
                            className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-aelityx-gray dark:text-gray-300 text-xs rounded border border-gray-200 dark:border-gray-600"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div className="pt-2">
                      <a 
                        href={pub.link} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sm text-aelityx-blue hover:text-aelityx-green dark:text-aelityx-blue/80 dark:hover:text-aelityx-green/80 transition-colors font-medium"
                      >
                        Ver publicación completa
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <div className="text-center mt-12">
          <p className="text-aelityx-gray dark:text-gray-300 text-sm">
            Y más publicaciones en revistas científicas indexadas...
          </p>
        </div>
      </div>
    </section>
  );
};

export default PublicationsSection;

