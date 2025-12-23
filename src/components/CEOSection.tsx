import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { GraduationCap, Award, Briefcase, Globe, BookOpen, ExternalLink } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const ResearcherProfileSection = () => {

    // Register ScrollTrigger plugin
    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
    }, []);

    const imageRef = useRef<HTMLDivElement>(null);
    const contentRef = useRef<HTMLDivElement>(null);
    const sectionRef = useRef<HTMLElement>(null);

    // Set up animations
    useEffect(() => {
        if (!sectionRef.current) return;

        const section = sectionRef.current;
        const title = section.querySelector(".section-title");
        const subtitle = section.querySelector(".section-subtitle");
        const image = imageRef.current;
        const content = contentRef.current;

        // Animate title and subtitle
        if (title && subtitle) {
            const sectionTimeline = gsap.timeline({
                scrollTrigger: {
                    trigger: section,
                    start: "top 80%",
                    end: "top 50%",
                    toggleActions: "play none none none",
                }
            });

            sectionTimeline
                .fromTo(title, 
                    { opacity: 0, y: 20 }, 
                    { opacity: 1, y: 0, duration: 0.5, ease: "power2.out" }
                )
                .fromTo(subtitle, 
                    { opacity: 0, y: 20 }, 
                    { opacity: 1, y: 0, duration: 0.5, ease: "power2.out" },
                    "-=0.3"
                );
        }

        // Animate image
        if (image) {
            gsap.fromTo(image, 
                { opacity: 0, x: -30, scale: 0.95 }, 
                { 
                    opacity: 1, 
                    x: 0, 
                    scale: 1,
                    duration: 0.6,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: image,
                        start: "top 85%",
                        end: "top 50%",
                        toggleActions: "play none none none",
                    }
                }
            );
        }

        // Animate content
        if (content) {
            gsap.fromTo(content, 
                { opacity: 0, x: 30, scale: 0.95 }, 
                { 
                    opacity: 1, 
                    x: 0, 
                    scale: 1,
                    duration: 0.6,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: content,
                        start: "top 85%",
                        end: "top 50%",
                        toggleActions: "play none none none",
                    }
                }
            );
        }

        return () => {
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        };
    }, []);

    const academicProfile = {
        name: "Dr. Mauricio Rosales Rivera",
        title: "Investigador, Docente y Científico de Datos",
        education: [
            {
                degree: "PhD en Ciencias de la Computación",
                institution: "UAEM",
                period: "2014-2018",
                honors: "Mención Honorífica"
            },
            {
                degree: "M.Sc. en Ciencias de la Computación",
                institution: "UAEM",
                period: "2012-2014",
                honors: "Mención Honorífica"
            },
            {
                degree: "B.Sc. en Ciencias (Computación)",
                institution: "UAEM",
                period: "2007-2011"
            }
        ],
        sni: {
            level: "Nivel I",
            period: "2023-2027",
            previous: "Candidato (2019-2022)"
        },
        positions: [
            {
                role: "Investigador Posdoctoral",
                institution: "UNAM",
                period: "2022-2023",
                description: "Filodinámica viral, análisis genómico y colaboraciones internacionales"
            },
            {
                role: "Profesor de Cátedra",
                institution: "ITESM (Campus CVA y CDMX)",
                period: "2020-2022",
                description: "Compiladores, Agentes Inteligentes, Aprendizaje Automático"
            },
            {
                role: "Profesor de Posgrado",
                institution: "UAEM",
                period: "2019-2024",
                description: "Codirección de tesis y publicaciones científicas"
            },
            {
                role: "Investigador SARS-CoV-2",
                institution: "UNAM/CONACYT",
                period: "2021-2023",
                description: "Vigilancia genómica y análisis de variantes"
            },
            {
                role: "Consultor en Ciencia de Datos",
                institution: "Aelityx",
                period: "2024-presente",
                description: "Business Intelligence con ciencia aplicada, arquitectura de datos y automatización"
            }
        ],
        certifications: [
            "Google UX Design Professional Certificate (2025)",
            "AWS Cloud Practitioner",
            "Curso de Criptografía con Python (2021)",
            "COVID-19 Data Analysis (Coursera, 2020)"
        ],
        internationalCollaborations: [
            {
                institution: "Université de Montpellier",
                country: "Francia",
                period: "2022-2023",
                description: "ANRS 0138 COVID LMIC - Filodinámica y evolución viral"
            },
            {
                institution: "UNAM - Proyecto ANRS 0138",
                country: "México/Francia",
                period: "2022-2023",
                description: "Análisis genómico y vigilancia epidemiológica"
            },
            {
                institution: "Universitat de Girona",
                country: "España",
                period: "2014",
                description: "Datos composicionales y análisis estadístico"
            }
        ],
        skills: [
            "Data Science", "IA Aplicada", "Simulación Numérica",
            "Machine Learning", "Business Intelligence", "Comunicación Científica", "Docencia"
        ],
        hobbies: "Ajedrez, escritura, música, videojuegos, programación creativa",
        aelityx: {
            role: "Fundador",
            since: "2019",
            description: "Mi idea de Business Intelligence con ciencia aplicada. Transformo metodologías de investigación en dashboards empresariales, modelos predictivos y sistemas de toma de decisiones.",
            achievements: [
                "Dashboards empresariales y modelos de BI para logística, energía y salud",
                "Sistemas de toma de decisiones basados en análisis científico",
                "25% mejora promedio en eficiencia operativa",
                "Arquitectura de datos y automatización de procesos"
            ]
        }
    };

    return (
        <section ref={sectionRef} id="investigador" className="section-padding bg-gray-50 dark:bg-gray-900 relative overflow-hidden">
            {/* Background decorations */}
            <div className="absolute -top-32 -left-32 w-[250px] h-[250px] bg-gradient-to-br from-aelityx-blue/30 to-aelityx-green/10 rounded-full blur-3xl opacity-20"></div>
            <div className="absolute bottom-0 right-0 w-[200px] h-[200px] bg-gradient-to-tl from-aelityx-green/30 to-aelityx-blue/10 rounded-full blur-3xl opacity-20"></div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center mb-12">
                    <h2 className="section-title">Perfil del Investigador</h2>
                    <p className="section-subtitle">
                        Dr. Mauricio Rosales Rivera - Investigador, docente y científico de datos. SNI Nivel I.
                    </p>
                </div>

                {/* Grid principal con mejor distribución */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Columna izquierda - Foto y Skills */}
                    <div className="lg:col-span-1 space-y-6">
                        <div
                            ref={imageRef}
                            className="relative group w-full max-w-xs mx-auto lg:max-w-none rounded-2xl overflow-hidden shadow-xl transform transition-all duration-500 hover:shadow-2xl"
                        >
                            <img
                                src="/yo_.jpg"
                                alt="Dr. Mauricio Rosales Rivera"
                                className="w-full h-auto object-cover transform transition-transform duration-700 group-hover:scale-105"
                            />
                        </div>
                        
                            {/* Skills y SNI */}
                        <div className="bg-white dark:bg-gray-800 p-5 rounded-xl shadow-md border border-gray-200 dark:border-gray-700">
                            <h3 className="text-base font-bold mb-3 text-aelityx-dark dark:text-white">Áreas de Expertise</h3>
                            <div className="flex flex-wrap gap-2 mb-3">
                                {academicProfile.skills.map((skill, idx) => (
                                    <span
                                        key={idx}
                                        className="bg-aelityx-blue/10 border border-aelityx-blue/20 px-2 py-1 text-xs rounded text-aelityx-dark dark:text-white"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                            <div className="pt-3 border-t border-gray-200 dark:border-gray-700">
                                <p className="text-xs font-semibold text-aelityx-dark dark:text-white">SNI Nivel I</p>
                                <p className="text-xs text-aelityx-gray dark:text-gray-300">{academicProfile.sni.period}</p>
                            </div>
                        </div>

                        {/* Intereses */}
                        <div className="bg-white dark:bg-gray-800 p-5 rounded-xl shadow-md border border-gray-200 dark:border-gray-700">
                            <h3 className="text-base font-bold mb-2 text-aelityx-dark dark:text-white">Intereses</h3>
                            <div className="flex flex-wrap gap-1.5">
                                {academicProfile.hobbies.split(", ").map((hobby, idx) => (
                                    <span
                                        key={idx}
                                        className="bg-aelityx-green/10 border border-aelityx-green/20 px-2 py-0.5 text-xs rounded text-aelityx-gray dark:text-gray-300"
                                    >
                                        {hobby}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Columnas derechas - Contenido principal */}
                    <div ref={contentRef} className="lg:col-span-2 space-y-6">
                        {/* Grid de 2 columnas para mejor distribución */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {/* Formación Académica */}
                            <div className="bg-white dark:bg-gray-800 p-5 rounded-xl shadow-md border border-gray-200 dark:border-gray-700">
                                <div className="flex items-center mb-3">
                                    <GraduationCap className="w-4 h-4 text-aelityx-blue mr-2" />
                                    <h3 className="text-base font-bold text-aelityx-dark dark:text-white">Formación</h3>
                                </div>
                                <div className="space-y-2.5">
                                    {academicProfile.education.map((edu, idx) => (
                                        <div key={idx} className="border-l-2 border-aelityx-blue/30 pl-2.5">
                                            <h4 className="font-semibold text-xs text-aelityx-dark dark:text-white">{edu.degree}</h4>
                                            <p className="text-xs text-aelityx-gray dark:text-gray-300">{edu.institution} • {edu.period}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Posiciones */}
                            <div className="bg-white dark:bg-gray-800 p-5 rounded-xl shadow-md border border-gray-200 dark:border-gray-700">
                                <div className="flex items-center mb-3">
                                    <Award className="w-4 h-4 text-aelityx-green mr-2" />
                                    <h3 className="text-base font-bold text-aelityx-dark dark:text-white">Posiciones</h3>
                                </div>
                                <div className="space-y-2.5">
                                    {academicProfile.positions.map((pos, idx) => (
                                        <div key={idx} className="border-l-2 border-aelityx-green/30 pl-2.5">
                                            <p className="font-semibold text-xs text-aelityx-dark dark:text-white">{pos.role}</p>
                                            <p className="text-xs text-aelityx-gray dark:text-gray-300">{pos.institution} • {pos.period}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Aelityx */}
                        <div className="bg-gradient-to-br from-aelityx-blue/5 to-aelityx-green/5 dark:from-aelityx-blue/10 dark:to-aelityx-green/10 p-5 rounded-xl shadow-md border border-aelityx-blue/10">
                            <div className="flex items-center mb-3">
                                <Briefcase className="w-4 h-4 text-aelityx-blue mr-2" />
                                <h3 className="text-base font-bold bg-gradient-to-r from-aelityx-blue to-aelityx-green bg-clip-text text-transparent">Aelityx</h3>
                            </div>
                            <p className="text-xs text-aelityx-gray dark:text-white mb-3">{academicProfile.aelityx.description}</p>
                            <ul className="space-y-1.5">
                                {academicProfile.aelityx.achievements.map((achievement, idx) => (
                                    <li key={idx} className="flex items-start text-xs text-aelityx-gray dark:text-white">
                                        <span className="text-aelityx-green mr-1.5">•</span>
                                        {achievement}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Grid de 2 columnas para Colaboraciones y Certificaciones */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                            {/* Colaboraciones Internacionales */}
                            <div className="bg-white dark:bg-gray-800 p-5 rounded-xl shadow-md border border-gray-200 dark:border-gray-700">
                                <div className="flex items-center mb-3">
                                    <Globe className="w-4 h-4 text-aelityx-orange mr-2" />
                                    <h3 className="text-base font-bold text-aelityx-dark dark:text-white">Colaboraciones</h3>
                                </div>
                                <div className="space-y-2.5">
                                    {academicProfile.internationalCollaborations.map((collab, idx) => (
                                        <div key={idx} className="border-l-2 border-aelityx-orange/30 pl-2.5">
                                            <p className="font-semibold text-xs text-aelityx-dark dark:text-white">{collab.institution}</p>
                                            <p className="text-xs text-aelityx-gray dark:text-gray-300">{collab.country} • {collab.period}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Certificaciones */}
                            <div className="bg-white dark:bg-gray-800 p-5 rounded-xl shadow-md border border-gray-200 dark:border-gray-700">
                                <div className="flex items-center mb-3">
                                    <BookOpen className="w-4 h-4 text-aelityx-blue mr-2" />
                                    <h3 className="text-base font-bold text-aelityx-dark dark:text-white">Certificaciones</h3>
                                </div>
                                <div className="space-y-1.5">
                                    {academicProfile.certifications.map((cert, idx) => (
                                        <div key={idx} className="flex items-start text-xs text-aelityx-gray dark:text-gray-300">
                                            <span className="text-aelityx-blue mr-1.5">•</span>
                                            {cert}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Mensaje */}
                        <div className="bg-gradient-to-br from-aelityx-blue/5 to-aelityx-green/5 dark:from-aelityx-blue/10 dark:to-aelityx-green/10 p-5 rounded-xl shadow-md border border-aelityx-blue/10">
                            <p className="text-sm md:text-base text-aelityx-gray dark:text-white mb-2 border-l-3 border-aelityx-blue/30 pl-3">
                                Transformo investigación académica en soluciones empresariales aplicadas.
                            </p>
                            <p className="text-right text-aelityx-blue dark:text-aelityx-blue/90 font-medium text-xs">
                                — Dr. Mauricio Rosales Rivera
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ResearcherProfileSection;
