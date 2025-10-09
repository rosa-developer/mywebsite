import React from 'react';
import { useMouseParallax, scrollToSection } from '@/lib/animations';
import { cn } from '@/lib/utils';
import { ArrowDown, ArrowRight } from 'lucide-react';
import { MultiParallax } from '@/components/parallax/MultiParallax';

const Hero = () => {
  const { ref: parallaxRef, transform } = useMouseParallax(0.02);

  return (
    <section id="hero" className="relative min-h-screen w-full overflow-hidden flex items-center pt-28 pb-32">
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-primary/50 to-transparent" />
      <div className="absolute inset-x-0 top-0 z-0 h-[40vh] sm:h-[45vh] md:h-[50vh] lg:h-[55vh] overflow-hidden">
        <picture>
          <img
            src={`${import.meta.env.BASE_URL}assets/banner.png`}
            alt="Portfolio banner"
            className="w-full h-full object-cover object-center"
            decoding="async"
            loading="eager"
            fetchPriority="high"
          />
        </picture>
      </div>
      <MultiParallax
        className="z-0"
        layers={[
          {
            id: 'tint-1',
            speed: 0.2,
            className: 'inset-0 bg-blue-500/10 mix-blend-multiply',
          },
          {
            id: 'tint-2',
            speed: -0.1,
            className: 'inset-0 bg-yellow-500/10 mix-blend-multiply',
          },
          {
            id: 'tint-3',
            speed: 0.06,
            className: 'inset-0 bg-gray-500/10 mix-blend-multiply',
          },
          {
            id: 'bg-1',
            speed: 0.15,
            className: 'top-1/4 right-[10%] w-80 h-80 rounded-full bg-primary/20 blur-3xl opacity-30',
          },
          {
            id: 'bg-2',
            speed: 0.1,
            className: 'bottom-1/4 left-[5%] w-96 h-96 rounded-full bg-primary/10 blur-3xl opacity-20',
          },
          {
            id: 'bg-3',
            speed: 0.06,
            className: 'top-[40%] left-[20%] w-40 h-40 rounded-full bg-primary/15 blur-2xl opacity-20',
          },
          {
            id: 'bg-4',
            speed: -0.05,
            className: 'bottom-[15%] right-[15%] w-60 h-60 rounded-full bg-primary/15 blur-2xl opacity-20',
          },
        ]}
      />

      <div className="container max-w-7xl mx-auto px-4 sm:px-6 z-10 mt-[min(40vh,12rem)] sm:mt-[min(50vh,16rem)] md:mt-[min(60vh,20rem)] lg:mt-[min(70vh,24rem)]">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-20 items-center">
          <div className="lg:col-span-3 space-y-6 sm:space-y-8 text-left">
            <div className="space-y-4 sm:space-y-6">
              <div className="inline-block">
                
              </div>
              
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight text-balance animate-fade-in">
                <span>Software Engineer  </span>
                <span className="gradient-text bg-gradient-to-r from-primary via-blue-400 to-purple-500">& Full-stack Developer</span>
              </h1>
              
              <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl text-balance animate-slide-up mt-[10px]">
                Hello and welcome! I'm a passionate Full Stack Developer with over 9 years of experience crafting scalable, user-focused web applications. Specializing in Java, Spring Boot, React, and TypeScript, I build robust backend systems and intuitive front-end interfaces that solve real-world problems. From enterprise-grade health insurance platforms to innovative projects like EasySleep, my work blends technical expertise with a commitment to quality and innovation.
                <br /><br />
                Explore my projects, skills, and achievements to see how I bring ideas to life through clean code and thoughtful design. Let's connect to discuss how I can contribute to your next big project!
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row justify-start gap-14 animate-fade-in" style={{ animationDelay: '0.4s' }}>
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
          
          <div className="lg:col-span-2 animate-fade-in float mt-12 lg:mt-24" style={{ animationDelay: '0.6s' }}>
            <div
              ref={parallaxRef}
              className={cn(
                "relative aspect-square max-w-xs sm:max-w-sm md:max-w-md mx-auto rounded-2xl overflow-hidden shadow-xl"
              )}
            >
              <div
                className={cn(
                  "relative w-full h-full",
                  "before:absolute before:inset-0 before:bg-black/10 before:z-10"
                )}
                style={{ transform, willChange: 'transform' }}
              >
                <img 
                  src={`${import.meta.env.BASE_URL}assets/a6ad1824-a751-43cd-a922-87296d631895.png`} 
                  alt="Rosa at sunset" 
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                  decoding="async"
                  loading="eager"
                  fetchPriority="high"
                />
                
                {/* Visual embellishment - decorative shape */}
                <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-primary/20 rounded-full blur-xl"></div>
                <div className="absolute -top-6 -left-6 w-20 h-20 bg-primary/20 rounded-full blur-lg"></div>
              </div>
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
