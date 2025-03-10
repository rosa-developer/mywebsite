
import React from 'react';
import { useRevealAnimation } from '@/lib/animations';
import { cn } from '@/lib/utils';

const skills = [
  { name: "UI/UX Design", level: 95 },
  { name: "Frontend Development", level: 90 },
  { name: "React & TypeScript", level: 85 },
  { name: "Backend Development", level: 70 },
  { name: "Motion Design", level: 80 }
];

const About = () => {
  useRevealAnimation();

  return (
    <section id="about" className="py-24 bg-secondary/50">
      <div className="container max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8 order-2 lg:order-1">
            <div className="inline-block">
              <div className="bg-accent/20 text-primary rounded-full px-4 py-1.5 text-sm font-medium mb-4 reveal">
                About Me
              </div>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-4 reveal">
              Designer & Developer 
              <span className="block opacity-70">with a passion for minimalism</span>
            </h2>
            
            <div className="prose prose-neutral dark:prose-invert max-w-none reveal">
              <p>
                I'm Rosa, a designer and developer with over 5 years of experience creating digital products. I specialize in designing clean, functional interfaces and building performant applications with modern web technologies.
              </p>
              <p>
                My approach combines aesthetic sensibility with technical expertise to create solutions that are both beautiful and practical. I believe in the power of simplicity and that the best designs often come from reducing rather than adding.
              </p>
            </div>
            
            <div className="space-y-4 reveal">
              <h3 className="text-xl font-medium">My Skills</h3>
              
              <div className="space-y-3">
                {skills.map((skill, index) => (
                  <div key={index} className="space-y-1">
                    <div className="flex justify-between text-sm">
                      <span>{skill.name}</span>
                      <span className="text-muted-foreground">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-secondary rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-accent rounded-full transition-transform duration-1000 origin-left"
                        style={{ 
                          transform: `scaleX(${skill.level / 100})`, 
                          transitionDelay: `${index * 0.1 + 0.3}s` 
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
              "relative rounded-xl overflow-hidden aspect-square max-w-md mx-auto",
              "before:absolute before:inset-0 before:bg-black/10 before:z-10"
            )}>
              <img 
                src="/lovable-uploads/a6ad1824-a751-43cd-a922-87296d631895.png" 
                alt="Rosa at sunset" 
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-6 left-6 right-6 p-6 glass rounded-lg z-20 reveal stagger-2">
                <h3 className="text-xl font-medium mb-1">Rosa</h3>
                <p className="text-sm text-muted-foreground">UX Designer & Frontend Developer</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
