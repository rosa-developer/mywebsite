
import React, { useEffect, useRef } from 'react';
import { useMouseParallax, scrollToSection } from '@/lib/animations';
import { cn } from '@/lib/utils';
import { ArrowDown, ArrowRight } from 'lucide-react';

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
      {/* Enhanced background elements */}
      <div className="absolute inset-0 z-0">
        <div ref={circleOneRef} className="absolute top-1/4 right-[10%] w-80 h-80 rounded-full bg-primary/20 blur-3xl opacity-30" />
        <div ref={circleTwoRef} className="absolute bottom-1/4 left-[5%] w-96 h-96 rounded-full bg-primary/10 blur-3xl opacity-20" />
        <div className="absolute top-[40%] left-[20%] w-40 h-40 rounded-full bg-primary/15 blur-2xl opacity-20" />
        <div className="absolute bottom-[15%] right-[15%] w-60 h-60 rounded-full bg-primary/15 blur-2xl opacity-20" />
      </div>

      <div className="container max-w-7xl mx-auto px-4 sm:px-6 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12 items-center">
          <div className="lg:col-span-3 space-y-6 sm:space-y-8 text-center lg:text-left">
            <div className="space-y-4 sm:space-y-6">
              <div className="inline-block">
                <div className="bg-primary/10 text-primary rounded-full px-4 py-1.5 text-sm font-medium mb-4 animate-fade-in">
                  Welcome to My Portfolio
                </div>
              </div>
              
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight text-balance animate-fade-in">
                <span>Java  </span>
                <span className="gradient-text bg-gradient-to-r from-primary via-blue-400 to-purple-500">& React Developer</span>
              </h1>
              
              <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto lg:mx-0 text-balance animate-slide-up">
                 I'm a passionate Full Stack Developer with over 9 years of experience crafting scalable, user-focused web applications. 
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <button 
                onClick={() => scrollToSection('projects')}
                className="btn-primary flex items-center justify-center gap-2"
              >
                View My Work
                <ArrowRight className="h-4 w-4" />
              </button>
              <button 
                onClick={() => scrollToSection('about')}
                className="btn-secondary flex items-center justify-center"
              >
                About Me
              </button>
            </div>
          </div>
          
          <div ref={parallaxRef} className="lg:col-span-2 animate-fade-in float mt-8 lg:mt-0" style={{ animationDelay: '0.6s', transform }}>
            <div className={cn(
              "relative aspect-square max-w-xs sm:max-w-sm md:max-w-md mx-auto rounded-2xl overflow-hidden",
              "before:absolute before:inset-0 before:bg-black/10 before:z-10 shadow-xl"
            )}>
              <img 
                src="/lovable-uploads/a6ad1824-a751-43cd-a922-87296d631895.png" 
                alt="Rosa at sunset" 
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
              />
              
              {/* Visual embellishment - decorative shape */}
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-primary/20 rounded-full blur-xl"></div>
              <div className="absolute -top-6 -left-6 w-20 h-20 bg-primary/20 rounded-full blur-lg"></div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce hidden md:block">
        <button onClick={() => scrollToSection('projects')} className="text-primary hover:text-primary/80 transition-colors p-2 rounded-full border border-primary/20">
          <ArrowDown className="h-6 w-6" />
        </button>
      </div>
    </section>
  );
};

export default Hero;
