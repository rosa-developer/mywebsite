
import React from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Project } from '@/types/project';

interface ProjectCardProps {
  project: Project;
  index: number;
}

const ProjectCard = ({ project, index }: ProjectCardProps) => {
  return (
    <div 
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
        {project.link && (
          <div className="absolute top-3 right-3">
            <a 
              href={project.link} 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-background/80 backdrop-blur-sm p-2 rounded-full hover:bg-background transition-colors"
              aria-label="View on GitHub"
            >
              <Github className="h-5 w-5" />
            </a>
          </div>
        )}
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
          {project.link ? (
            <a 
              href={project.link}
              target="_blank" 
              rel="noopener noreferrer"
              className="text-sm font-medium text-accent-foreground flex items-center group-hover:underline"
            >
              View Project
              <ExternalLink className="ml-1 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          ) : (
            <button className="text-sm font-medium text-accent-foreground flex items-center group-hover:underline">
              View Project
              <svg className="ml-1 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14"></path>
                <path d="m12 5 7 7-7 7"></path>
              </svg>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
