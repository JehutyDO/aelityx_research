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

    const particles: Particle[] = [];
    const particleCount = 200;
    const connectionDistance = 150;
    const isDarkMode = document.documentElement.classList.contains('dark');

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
        this.color = isDarkMode ? 'rgba(255, 255, 255, 0.5)' : 'rgba(30, 123, 234, 0.3)';
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

    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }

    const animate = () => {
      if (!ctx) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (let i = 0; i < particles.length; i++) {
        particles[i].update();
        particles[i].draw();

        for (let j = i; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < connectionDistance) {
            const opacity = 1 - distance / connectionDistance;
            const strokeColor = isDarkMode
                ? `rgba(255, 255, 255, ${opacity * 0.2})`
                : `rgba(30, 136, 229, ${opacity * 0.2})`;

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
          <div className="absolute right-0 top-1/4 w-1/2 h-1/2 bg-aelityx-blue/5 dark:bg-aelityx-blue/10 rounded-full blur-3xl"></div>
          <div className="absolute left-1/4 bottom-1/4 w-1/3 h-1/3 bg-aelityx-green/5 dark:bg-aelityx-green/10 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-6 pt-24 pb-16 z-10 relative">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 text-aelityx-dark dark:text-white font-causten leading-tight">
                Conectamos con los <span className="text-aelityx-blue">datos</span>. Transformamos{" "}
                <span className="text-aelityx-green">conocimiento</span>. Impulsamos el{" "}
                <span className="text-aelityx-blue">futuro</span>.
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-aelityx-gray dark:text-gray-300 max-w-lg">
                Soluciones científicas, digitales y humanas para una evolución inteligente.
              </p>
              <div className="flex flex-wrap gap-4">
                <a href="#contacto">
                  <Button className="bg-aelityx-blue hover:bg-aelityx-blue/90 text-white px-8 py-6 rounded-md text-lg flex items-center gap-2 group">
                    Solicita propuesta
                    <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
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
              href="#propuesta"
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
