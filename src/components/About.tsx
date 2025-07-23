
import React, { useEffect } from 'react';
import { useRevealAnimation } from '@/lib/animations';
import { cn } from '@/lib/utils';
import { Award, Book, Code } from 'lucide-react';

const skills = [
  { name: "Java & Spring Boot", level: 95 },
  { name: "React & TypeScript", level: 90 },
  { name: "PostgreSQL & APIs", level: 85 },
  { name: "UI/UX Design", level: 80 },
  { name: "CI/CD & Agile", level: 75 }
];

const About = () => {
  useRevealAnimation();

  // Add skill bar animation
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const bars = entry.target.querySelectorAll('.skill-progress');
          bars.forEach((bar: Element, index) => {
            if (bar instanceof HTMLElement) {
              const level = parseFloat(bar.dataset.level || '0');
              setTimeout(() => {
                bar.style.transform = `scaleX(${level / 100})`;
              }, index * 100);
            }
          });
        }
      });
    }, { threshold: 0.2 });

    const skillSection = document.querySelector('.skills-wrapper');
    if (skillSection) observer.observe(skillSection);

    return () => {
      if (skillSection) observer.unobserve(skillSection);
    };
  }, []);

  return (
    <section id="about" className="py-20 sm:py-28 bg-secondary/30">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-16 items-center">
          <div className="space-y-8 sm:space-y-10 order-2 lg:order-1">
            <div className="space-y-4">
              <div className="inline-block">
                <div className="bg-primary/10 text-primary rounded-full px-4 py-1.5 text-sm font-medium mb-4 reveal">
                  About Me
                </div>
              </div>
              
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight mb-4 reveal">
                IT Engineer & Frontend Developer
                <span className="block opacity-70 text-xl sm:text-2xl mt-2 font-normal">with a passion for user experience</span>
              </h2>
            </div>
            
            <div className="prose prose-neutral dark:prose-invert max-w-none reveal text-sm sm:text-base">
              <p className="leading-relaxed">
                Creative and results-oriented Full Stack Developer with over 9 years of experience delivering robust, scalable web applications. I specialize in designing high-performance Java-based backend systems and crafting intuitive, responsive front-end interfaces.
              </p>
              <p className="mt-4 sm:mt-5 leading-relaxed">
                My work spans enterprise-grade health insurance platforms and innovative projects like EasySleep, ensuring secure, modular, and user-centric solutions. I excel in both backend architecture and frontend development, creating seamless user experiences backed by robust system design.
              </p>
            </div>
            
            {/* Features section */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 reveal">
              <div className="bg-card shadow-sm p-5 rounded-xl border border-border/50">
                <Code className="h-8 w-8 text-primary mb-3" />
                <h3 className="font-semibold mb-2">Backend</h3>
                <p className="text-sm text-muted-foreground">Java, Spring Boot, PostgreSQL, REST/GraphQL APIs, JUnit testing.</p>
              </div>
              
              <div className="bg-card shadow-sm p-5 rounded-xl border border-border/50">
                <Book className="h-8 w-8 text-primary mb-3" />
                <h3 className="font-semibold mb-2">Frontend</h3>
                <p className="text-sm text-muted-foreground">React, TypeScript, Next.js, Tailwind CSS, responsive design.</p>
              </div>
              
              <div className="bg-card shadow-sm p-5 rounded-xl border border-border/50">
                <Award className="h-8 w-8 text-primary mb-3" />
                <h3 className="font-semibold mb-2">Experience</h3>
                <p className="text-sm text-muted-foreground">9+ years delivering enterprise-grade applications and user-centric solutions.</p>
              </div>
            </div>
            
            <div className="space-y-4 sm:space-y-5 reveal skills-wrapper">
              <h3 className="text-lg sm:text-xl font-semibold">Technical Skills</h3>
              
              <div className="space-y-4">
                {skills.map((skill, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex justify-between text-sm sm:text-base">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-primary font-semibold">{skill.level}%</span>
                    </div>
                    <div className="skill-bar">
                      <div 
                        className="skill-progress"
                        data-level={skill.level}
                        style={{
                          transform: 'scaleX(0)', 
                          transitionDelay: `${index * 0.1}s`,
                          backgroundColor: `hsl(var(--primary))` 
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          <div className="order-1 lg:order-2 reveal">
            <div className={cn(
              "relative rounded-xl overflow-hidden aspect-square max-w-xs sm:max-w-sm md:max-w-md mx-auto",
              "shadow-2xl"
            )}>
              <img 
                src="/lovable-uploads/a6ad1824-a751-43cd-a922-87296d631895.png" 
                alt="Rosa at sunset" 
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 right-4 sm:right-6 p-5 sm:p-6 glass rounded-lg z-20 reveal stagger-2 shadow-lg">
                <h3 className="text-lg sm:text-xl font-medium mb-1">Rosa</h3>
                <p className="text-xs sm:text-sm text-muted-foreground">UX Designer & Frontend Developer</p>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-primary/10 rounded-full blur-xl"></div>
              <div className="absolute -top-8 -left-8 w-24 h-24 bg-primary/10 rounded-full blur-lg"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
