
import React, { useEffect, useRef } from 'react';
import { useMouseParallax, scrollToSection } from '@/lib/animations';
import { cn } from '@/lib/utils';

const Hero = () => {
  const { ref: parallaxRef, transform } = useMouseParallax(0.02);
  const circleOneRef = useRef<HTMLDivElement>(null);
  const circleTwoRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const handleScroll = () => {
      if (circleOneRef.current && circleTwoRef.current) {
        const scrollY = window.scrollY;
        circleOneRef.current.style.transform = `translateY(${scrollY * 0.15}px)`;
        circleTwoRef.current.style.transform = `translateY(${scrollY * 0.1}px)`;
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="hero" className="relative min-h-screen w-full overflow-hidden flex items-center pt-20">
      {/* Background circles */}
      <div ref={circleOneRef} className="absolute top-1/4 right-[10%] w-64 h-64 rounded-full bg-accent/40 blur-3xl opacity-40" />
      <div ref={circleTwoRef} className="absolute bottom-1/4 left-[5%] w-80 h-80 rounded-full bg-accent/20 blur-3xl opacity-30" />

      <div className="container max-w-7xl mx-auto px-4 sm:px-6 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12 items-center">
          <div className="lg:col-span-3 space-y-6 sm:space-y-8 text-center lg:text-left">
            <div className="space-y-4 sm:space-y-6">
              <div className="inline-block">
                <div className="bg-accent/20 text-primary rounded-full px-4 py-1.5 text-sm font-medium mb-4 animate-fade-in">
                  Welcome to My Portfolio
                </div>
              </div>
              
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-semibold tracking-tight text-balance animate-fade-in">
                <span>Bridging Design </span>
                <span className="gradient-text bg-gradient-to-r from-accent to-blue-300">& Technology</span>
              </h1>
              
              <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto lg:mx-0 text-balance animate-slide-up">
                Designer & Frontend Developer with 10 years of experience, specializing in creating intuitive and scalable web applications with a focus on user experience.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <button 
                onClick={() => scrollToSection('projects')}
                className="bg-primary text-primary-foreground rounded-md px-6 py-3 font-medium hover:opacity-90 transition-opacity"
              >
                View My Work
              </button>
              <button 
                onClick={() => scrollToSection('about')}
                className="bg-transparent border border-border rounded-md px-6 py-3 font-medium hover:bg-secondary transition-colors"
              >
                About Me
              </button>
            </div>
          </div>
          
          <div ref={parallaxRef} className="lg:col-span-2 animate-fade-in mt-8 lg:mt-0" style={{ animationDelay: '0.6s', transform }}>
            <div className={cn(
              "relative aspect-square max-w-xs sm:max-w-sm md:max-w-md mx-auto rounded-2xl overflow-hidden",
              "before:absolute before:inset-0 before:bg-black/10 before:z-10"
            )}>
              <img 
                src="/lovable-uploads/a6ad1824-a751-43cd-a922-87296d631895.png" 
                alt="Rosa at sunset" 
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce hidden md:block">
        <button onClick={() => scrollToSection('projects')} className="text-muted-foreground hover:text-foreground transition-colors">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="12" y1="5" x2="12" y2="19"></line>
            <polyline points="19 12 12 19 5 12"></polyline>
          </svg>
        </button>
      </div>
    </section>
  );
};

export default Hero;
