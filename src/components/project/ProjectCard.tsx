
import React from 'react';
import { ExternalLink, Github, Code, Figma, Layout } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Project } from '@/types/project';

interface ProjectCardProps {
  project: Project;
  index: number;
}

const ProjectCard = ({ project, index }: ProjectCardProps) => {
  // Function to get the appropriate icon based on tag name
  const getIconForTag = (tag: string) => {
    const iconSize = "h-4 w-4";
    
    switch (tag.toLowerCase()) {
      case 'react':
        return <div className="relative" title="React"><Code className={cn(iconSize, "text-blue-500")} /></div>;
      case 'typescript':
        return <div className="relative" title="TypeScript"><Code className={cn(iconSize, "text-blue-700")} /></div>;
      case 'tailwind css':
        return <div className="relative" title="Tailwind CSS"><Layout className={cn(iconSize, "text-sky-500")} /></div>;
      case 'figma':
        return <div className="relative" title="Figma"><Figma className={cn(iconSize, "text-purple-500")} /></div>;
      case 'three.js':
        return <div className="relative" title="Three.js"><Code className={cn(iconSize, "text-green-500")} /></div>;
      case 'mobile-first':
      case 'mobile':
        return <div className="relative" title="Mobile"><svg className={cn(iconSize, "text-gray-600")} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="14" height="20" x="5" y="2" rx="2" ry="2"/><path d="M12 18h.01"/></svg></div>;
      default:
        return <div className="relative" title={tag}><Code className={cn(iconSize, "text-gray-500")} /></div>;
    }
  };

  return (
    <div 
      className={cn(
        "group bg-card rounded-xl overflow-hidden border border-border/50 shadow-sm hover:shadow-md transition-all duration-300 reveal",
        `stagger-${index % 4 + 1}`
      )}
    >
      <div className="relative h-48 sm:h-60 overflow-hidden">
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {project.link && project.link.includes('github.com') && (
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
        
        {/* Technology Icons Overlay */}
        <div className="absolute bottom-0 left-0 right-0 py-2 px-3 bg-black/50 backdrop-blur-sm flex gap-2 items-center justify-start overflow-x-auto">
          {project.tags.map((tag, i) => (
            <div key={i} className="flex-shrink-0">
              {getIconForTag(tag)}
            </div>
          ))}
        </div>
      </div>
      <div className="p-4 sm:p-6 space-y-3 sm:space-y-4">
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag, i) => (
            <span key={i} className="bg-accent/20 text-xs text-accent-foreground px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-full">
              {tag}
            </span>
          ))}
        </div>
        <h3 className="text-lg sm:text-xl font-semibold">{project.title}</h3>
        <p className="text-muted-foreground text-xs sm:text-sm">{project.description}</p>
        <div className="pt-1 sm:pt-2">
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
