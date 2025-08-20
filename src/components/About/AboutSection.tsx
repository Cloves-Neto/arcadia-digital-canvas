// src/components/About/index.tsx
import { useState, useEffect, useRef } from 'react';
import { AboutParticles, AboutHeader, AboutContent, AboutHighlights, AboutCTA } from '@/components/About';
import '@/components/About/about.animation.css';

export const AboutSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="relative py-32 bg-transparent overflow-hidden">
      <AboutParticles />

      <div className="relative z-10 container mx-auto px-6 max-w-7xl">
        {/* Cada sub-componente recebe o estado que precisa via props */}
        <AboutHeader isVisible={isVisible} />
        <AboutContent isVisible={isVisible} />
        <AboutHighlights isVisible={isVisible} />
        <AboutCTA isVisible={isVisible} />
      </div>
    </section>
  );
};

export default AboutSection;