import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const CEOSection = () => {
    const [showInfo, setShowInfo] = useState(false);

    // Register ScrollTrigger plugin
    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
    }, []);

    const imageRef = useRef<HTMLDivElement>(null);
    const contentRef = useRef<HTMLDivElement>(null);
    const sectionRef = useRef<HTMLElement>(null);

    // Set up animations
    useEffect(() => {
        const image = imageRef.current;
        const content = contentRef.current;
        const section = sectionRef.current;
        const title = section?.querySelector(".section-title");
        const subtitle = section?.querySelector(".section-subtitle");

        if (section && title && subtitle) {
            // Create a timeline for the section title animation
            const sectionTimeline = gsap.timeline({
                scrollTrigger: {
                    trigger: section,
                    start: "top bottom-=100",
                    end: "top center",
                    toggleActions: "play none none reverse",
                }
            });

            // Animate the section title and subtitle
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

        if (image && content) {
            // Animate the image and content with improved performance
            gsap.fromTo(image, 
                { opacity: 0, x: -30, scale: 0.95 }, 
                { 
                    opacity: 1, 
                    x: 0, 
                    scale: 1,
                    duration: 0.3,
                    ease: "power2.inOut",
                    scrollTrigger: {
                        trigger: image,
                        start: "top bottom-=50",
                        end: "bottom center",
                        toggleActions: "play none none reverse",
                    }
                }
            );

            gsap.fromTo(content, 
                { opacity: 0, x: 30, scale: 0.95 }, 
                { 
                    opacity: 1, 
                    x: 0, 
                    scale: 1,
                    duration: 0.3,
                    ease: "power2.inOut",
                    scrollTrigger: {
                        trigger: content,
                        start: "top bottom-=50",
                        end: "bottom center",
                        toggleActions: "play none none reverse",
                    }
                }
            );
        }

        return () => {
            // Clean up animations when component unmounts
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        };
    }, []);

    const skills = [
        "Data Science", "IA Aplicada", "Simulación Numérica",
        "Desarrollo Fullstack", "Comunicación Científica", "Docencia"
    ];

    const hobbies = "Ajedrez, escritura, música, videojuegos, programación creativa";

    return (
        <section ref={sectionRef} id="vision" className="section-padding bg-gray-50 dark:bg-gray-900 relative overflow-hidden">
            {/* Background decorations */}
            <div className="absolute -top-32 -left-32 w-[250px] h-[250px] bg-gradient-to-br from-aelityx-blue/30 to-aelityx-green/10 rounded-full blur-3xl opacity-20"></div>
            <div className="absolute bottom-0 right-0 w-[200px] h-[200px] bg-gradient-to-tl from-aelityx-green/30 to-aelityx-blue/10 rounded-full blur-3xl opacity-20"></div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center mb-12">
                    <h2 className="section-title">Visión y Liderazgo</h2>
                    <p className="section-subtitle">
                        Conoce al fundador y la filosofía detrás de Aelityx
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

                    {/* Imagen + Overlay toggleable */}
                    <div
                        ref={imageRef}
                        className="relative group w-full h-[500px] rounded-2xl overflow-hidden shadow-xl cursor-pointer transform transition-all duration-500 hover:shadow-2xl"
                        onClick={() => setShowInfo(!showInfo)}
                    >
                        <div className="absolute inset-0 bg-gradient-to-t from-aelityx-blue/10 to-transparent opacity-70 z-10"></div>
                        <div className="absolute top-4 right-4 bg-white/90 dark:bg-gray-800/90 text-aelityx-blue dark:text-aelityx-blue/90 px-3 py-1 rounded-full text-xs font-medium z-20 shadow-md backdrop-blur-sm">
                            {showInfo ? "Ver foto" : "Ver perfil"}
                        </div>

                        <img
                            src="/yo_.jpg"
                            alt="Mauricio Rosales Rivera"
                            className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105"
                        />

                        <AnimatePresence>
                            {showInfo && (
                                <motion.div
                                    initial={{ opacity: 0, y: 30 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: 30 }}
                                    transition={{ duration: 0.4 }}
                                    className="absolute inset-0 bg-gradient-to-t from-gray-900/95 to-gray-800/85 text-white px-4 sm:px-8 py-6 sm:py-10 flex flex-col justify-center backdrop-blur-sm z-10 overflow-y-auto"
                                >
                                    <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-aelityx-blue to-aelityx-green bg-clip-text text-transparent">Expertise Profesional</h3>
                                    <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-4 sm:mb-6">
                                        {skills.map((skill, idx) => (
                                            <span
                                                key={idx}
                                                className="bg-gradient-to-r from-aelityx-blue/20 to-aelityx-green/10 border border-aelityx-blue/30 px-2 sm:px-3 py-0.5 sm:py-1 text-xs sm:text-sm rounded-full transition-all duration-300 hover:bg-aelityx-blue/30"
                                            >
                                                {skill}
                                            </span>
                                        ))}
                                    </div>
                                    <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-2 sm:mb-3 bg-gradient-to-r from-aelityx-blue to-aelityx-green bg-clip-text text-transparent">Intereses Personales</h3>
                                    <div className="flex flex-wrap gap-1.5 sm:gap-2">
                                        {hobbies.split(", ").map((hobby, idx) => (
                                            <span
                                                key={idx}
                                                className="bg-gradient-to-r from-aelityx-green/10 to-aelityx-blue/5 border border-aelityx-green/20 px-2 py-0.5 sm:py-1 text-xs rounded-full"
                                            >
                                                {hobby}
                                            </span>
                                        ))}
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>

                    {/* Mensaje del Fundador */}
                    <div ref={contentRef} className="text-left dark:text-white">
                        <div className="flex items-center mb-6">
                            <div className="w-12 h-1 bg-gradient-to-r from-aelityx-blue to-aelityx-green rounded-full mr-4"></div>
                            <p className="text-xl md:text-2xl font-medium text-aelityx-dark dark:text-white">
                                Fundador & CEO
                            </p>
                        </div>

                        <p className="text-lg md:text-xl italic text-aelityx-gray dark:text-gray-300 mb-8 border-l-4 border-aelityx-blue/30 pl-4 py-2">
                            "Fusionamos ciencia, narrativa y análisis para reimaginar la toma de decisiones con sentido humano y propósito real."
                        </p>

                        <div className="bg-gradient-to-br from-aelityx-blue/5 to-aelityx-green/5 dark:from-aelityx-blue/10 dark:to-aelityx-green/10 p-8 rounded-2xl shadow-lg border border-aelityx-blue/10">
                            <h3 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-aelityx-blue to-aelityx-green bg-clip-text text-transparent mb-6">Mensaje del Fundador</h3>
                            <p className="text-base md:text-lg text-aelityx-gray dark:text-white leading-relaxed max-w-prose tracking-wide">
                                Aelityx nace como un puente entre el pensamiento crítico y la inteligencia aplicada.
                                <br /><br />
                                No buscamos automatizar sin alma, sino <strong className="text-aelityx-blue dark:text-aelityx-blue/90">decidir con conciencia</strong>, construir con precisión y evolucionar con sentido.
                                <br /><br />
                                Nuestra tecnología es herramienta. El propósito, el verdadero motor.
                            </p>
                            <div className="flex items-center justify-end mt-6">
                                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-aelityx-blue/20 to-aelityx-green/10 flex items-center justify-center mr-4">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-aelityx-blue">
                                        <path d="M20 7h-3a2 2 0 0 1-2-2V2"></path>
                                        <path d="M16 2H8a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path>
                                        <path d="M12 13V7"></path>
                                        <path d="M9 10h6"></path>
                                    </svg>
                                </div>
                                <p className="text-right italic text-aelityx-blue font-semibold">
                                    — Dr. Mauricio Rosales Rivera
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CEOSection;
