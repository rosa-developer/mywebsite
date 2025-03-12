
import React from 'react';
import { useRevealAnimation } from '@/lib/animations';
import { cn } from '@/lib/utils';

const skills = [
  { name: "Frontend Development", level: 95 },
  { name: "UI/UX Design", level: 90 },
  { name: "React & Node.js", level: 85 },
  { name: "Database & SQL", level: 80 },
  { name: "System Integration", level: 75 }
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
              IT Engineer & Frontend Developer
              <span className="block opacity-70">with a passion for user experience</span>
            </h2>
            
            <div className="prose prose-neutral dark:prose-invert max-w-none reveal">
              <p>
                I'm Rosa, an IT Engineer with a Master's degree in Network Security and 10 years of experience in software development. I specialize in creating intuitive user interfaces and developing scalable web applications using modern technologies like React, Node.js, and C#.
              </p>
              <p>
                My background spans healthcare IT and system integrations, where I've developed a deep understanding of both frontend and backend development. After a professional break, I'm now actively pursuing opportunities in Montreal's tech scene, focusing on frontend development and UX design.
              </p>
            </div>
            
            <div className="space-y-4 reveal">
              <h3 className="text-xl font-medium">Technical Skills</h3>
              
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
