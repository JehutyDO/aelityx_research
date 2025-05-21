
import { useEffect, useState, useRef } from "react";

interface AnimateOnScrollProps {
  children: React.ReactNode;
  animation?: string;
  threshold?: number;
  delay?: number;
}

const AnimateOnScroll = ({
  children,
  animation = "animate-fade-in",
  threshold = 0.1,
  delay = 0,
}: AnimateOnScrollProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsVisible(true);
          }, delay);
          observer.unobserve(entry.target);
        }
      },
      { threshold }
    );

    const currentElement = elementRef.current;
    if (currentElement) {
      observer.observe(currentElement);
    }

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
    };
  }, [threshold, delay]);

  return (
    <div
      ref={elementRef}
      className={`${isVisible ? animation : "opacity-0"}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

export default AnimateOnScroll;
