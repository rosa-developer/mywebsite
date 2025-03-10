
import React from 'react';
import { useRevealAnimation } from '@/lib/animations';
import { cn } from '@/lib/utils';

interface Project {
  id: number;
  title: string;
  description: string;
  tags: string[];
  image: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Minimalist E-commerce",
    description: "A clean, modern e-commerce platform focused on user experience and conversion optimization.",
    tags: ["UX Design", "React", "Tailwind CSS"],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    id: 2,
    title: "Portfolio Website",
    description: "Personal portfolio site with custom animations and interactive elements.",
    tags: ["Web Design", "Animation", "Three.js"],
    image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=2938&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    id: 3,
    title: "Mobile App Design",
    description: "Health and wellness tracking app with intuitive interface and data visualization.",
    tags: ["UI Design", "Mobile", "Figma"],
    image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?q=80&w=2938&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  }
];

const Projects = () => {
  useRevealAnimation();

  return (
    <section id="projects" className="py-24 relative">
      <div className="container max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <div className="inline-block">
            <div className="bg-accent/20 text-primary rounded-full px-4 py-1.5 text-sm font-medium mb-4 reveal">
              Selected Work
            </div>
          </div>
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-4 reveal">Featured Projects</h2>
          <p className="text-muted-foreground text-balance reveal">
            A showcase of my recent design and development work. Each project represents a unique challenge and solution.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={project.id}
              className={cn(
                "group bg-card rounded-xl overflow-hidden border border-border/50 shadow-sm hover:shadow-md transition-all duration-300 reveal",
                `stagger-${index + 1}`
              )}
            >
              <div className="relative h-60 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6 space-y-4">
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="bg-accent/20 text-xs text-accent-foreground px-2.5 py-1 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="text-xl font-semibold">{project.title}</h3>
                <p className="text-muted-foreground text-sm">{project.description}</p>
                <div className="pt-2">
                  <button className="text-sm font-medium text-accent-foreground flex items-center group-hover:underline">
                    View Project
                    <svg className="ml-1 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12h14"></path>
                      <path d="m12 5 7 7-7 7"></path>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
