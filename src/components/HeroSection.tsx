import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect, useRef, useState } from "react";
import RippleImage from "@/components/RippleImage.tsx";


const HeroSection = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      const parent = canvas.parentElement;
      if (parent) {
        canvas.width = parent.offsetWidth;
        canvas.height = parent.offsetHeight;
      }
    };

    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();

    const isDarkMode = document.documentElement.classList.contains('dark');
    const hexagons: Hexagon[] = [];
    const particles: Particle[] = [];
    const hexCount = 25;
    const particleCount = 120;
    const connectionDistance = 150;

    class Hexagon {
      x: number;
      y: number;
      size: number;
      rotation: number;
      rotationSpeed: number;
      opacity: number;
      color: string;

      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = 30 + Math.random() * 70;
        this.rotation = Math.random() * Math.PI * 2;
        this.rotationSpeed = (Math.random() - 0.5) * 0.008;
        this.opacity = 0.08 + Math.random() * 0.15;
        this.color = isDarkMode 
          ? `rgba(30, 136, 229, ${this.opacity})`
          : `rgba(30, 136, 229, ${this.opacity * 0.5})`;
      }

      update() {
        this.rotation += this.rotationSpeed;
      }

      draw() {
        if (!ctx) return;
        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.rotate(this.rotation);
        
        ctx.strokeStyle = this.color;
        ctx.lineWidth = 1.5;
        ctx.beginPath();
        
        // Dibujar hexágono
        for (let i = 0; i < 6; i++) {
          const angle = (Math.PI / 3) * i;
          const x = Math.cos(angle) * this.size;
          const y = Math.sin(angle) * this.size;
          if (i === 0) {
            ctx.moveTo(x, y);
          } else {
            ctx.lineTo(x, y);
          }
        }
        ctx.closePath();
        ctx.stroke();
        
        ctx.restore();
      }
    }

    class Particle {
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      color: string;

      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 2 + 1;
        this.speedX = (Math.random() - 0.5) * 0.5;
        this.speedY = (Math.random() - 0.5) * 0.5;
        this.color = isDarkMode ? 'rgba(255, 255, 255, 0.4)' : 'rgba(30, 136, 229, 0.3)';
      }

      update() {
        if (this.x > canvas.width || this.x < 0) this.speedX = -this.speedX;
        if (this.y > canvas.height || this.y < 0) this.speedY = -this.speedY;
        this.x += this.speedX;
        this.y += this.speedY;
      }

      draw() {
        if (!ctx) return;
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    for (let i = 0; i < hexCount; i++) {
      hexagons.push(new Hexagon());
    }

    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }

    const animate = () => {
      if (!ctx) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Dibujar hexágonos
      for (const hex of hexagons) {
        hex.update();
        hex.draw();
      }

      // Dibujar partículas y conexiones
      for (let i = 0; i < particles.length; i++) {
        particles[i].update();
        particles[i].draw();

        // Dibujar conexiones entre partículas cercanas
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < connectionDistance) {
            const opacity = 1 - distance / connectionDistance;
            const strokeColor = isDarkMode
                ? `rgba(255, 255, 255, ${opacity * 0.15})`
                : `rgba(30, 136, 229, ${opacity * 0.15})`;

            ctx.strokeStyle = strokeColor;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
      <section
          id="inicio"
          className="relative min-h-screen flex items-center bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 overflow-hidden"
      >
        <canvas ref={canvasRef} className="absolute inset-0 z-0" />
        <div className="absolute inset-0 z-0 overflow-hidden">
          <div className="absolute right-0 top-0 w-96 h-96 bg-aelityx-blue/5 dark:bg-aelityx-blue/10 rotate-45 blur-3xl"></div>
          <div className="absolute left-0 bottom-0 w-80 h-80 bg-aelityx-green/5 dark:bg-aelityx-green/10 -rotate-12 blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-aelityx-blue/3 dark:bg-aelityx-blue/5 rotate-12 blur-3xl"></div>
        </div>

        <div className="container mx-auto px-6 pt-24 pb-16 z-10 relative">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-aelityx-dark dark:text-white font-causten leading-tight">
                Investigación en Ciencia de Datos
              </h1>
              <p className="text-xl md:text-2xl mb-4 text-aelityx-dark dark:text-white font-semibold">
                Dr. Mauricio Rosales Rivera
              </p>
              <p className="text-lg mb-2 text-aelityx-gray dark:text-gray-300">
                PhD en Ciencias de la Computación | SNI Nivel I
              </p>
              <p className="text-base mb-4 text-aelityx-gray dark:text-gray-300 max-w-lg">
                Investigador y docente con más de 20 publicaciones científicas. A través de <strong className="text-aelityx-blue">Aelityx</strong>, transformo metodologías de investigación en <strong className="text-aelityx-green">dashboards empresariales</strong>, <strong className="text-aelityx-green">modelos predictivos de BI</strong> y <strong className="text-aelityx-green">soluciones de toma de decisiones</strong> aplicadas a medio ambiente, logística, energía y salud.
              </p>
              
              {/* Badges de credibilidad */}
              <div className="flex flex-wrap gap-3 mb-8">
                <span className="px-4 py-2 bg-aelityx-blue/10 text-aelityx-blue dark:bg-aelityx-blue/20 dark:text-aelityx-blue/90 rounded-full text-sm font-medium border border-aelityx-blue/20">
                  SNI Nivel I (2023-2027)
                </span>
                <span className="px-4 py-2 bg-aelityx-green/10 text-aelityx-green dark:bg-aelityx-green/20 dark:text-aelityx-green/90 rounded-full text-sm font-medium border border-aelityx-green/20">
                  +20 Publicaciones Científicas
                </span>
                <span className="px-4 py-2 bg-aelityx-orange/10 text-aelityx-orange dark:bg-aelityx-orange/20 dark:text-aelityx-orange/90 rounded-full text-sm font-medium border border-aelityx-orange/20">
                  Soluciones de BI Empresarial
                </span>
              </div>

              <div className="flex flex-wrap gap-4">
                <a href="#publicaciones">
                  <Button className="bg-aelityx-blue hover:bg-aelityx-blue/90 text-white px-8 py-6 rounded-md text-lg flex items-center gap-2 group">
                    Ver Investigaciones
                    <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                  </Button>
                </a>
                <a href="#contacto">
                  <Button variant="outline" className="border-2 border-aelityx-green text-aelityx-green hover:bg-aelityx-green hover:text-white dark:border-aelityx-green/80 dark:text-aelityx-green/80 px-8 py-6 rounded-md text-lg">
                    Colaborar
                  </Button>
                </a>
              </div>
            </div>

            <div className="relative h-[400px] md:h-[500px] animate-fade-in" style={{ animationDelay: "0.3s" }}>
              <div className="absolute w-full h-full bg-gradient-to-br from-aelityx-blue/80 to-aelityx-green/80 rounded-2xl transform rotate-3" />
              <div className="absolute w-full h-full bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden">
                <RippleImage />
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <a
              href="#investigacion"
              className="bg-white dark:bg-gray-800 p-3 rounded-full shadow-md flex items-center justify-center"
          >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-aelityx-blue dark:text-aelityx-blue/80"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </a>
        </div>
      </section>
  );
};

export default HeroSection;
