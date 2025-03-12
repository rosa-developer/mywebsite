
import React, { useState, useEffect } from 'react';
import { useRevealAnimation } from '@/lib/animations';
import { cn } from '@/lib/utils';
import { ExternalLink, Github } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  description: string;
  tags: string[];
  image: string;
  link?: string;
}

interface GitHubRepo {
  id: number;
  name: string;
  description: string;
  html_url: string;
  topics: string[];
  language: string;
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
  const [githubProjects, setGithubProjects] = useState<Project[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const username = 'rosa-developer'; // Updated GitHub username

  useEffect(() => {
    const fetchGithubProjects = async () => {
      setIsLoading(true);
      setError(null);
      
      try {
        const response = await fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=3`);
        
        if (!response.ok) {
          throw new Error(`GitHub API error: ${response.status}`);
        }
        
        const repos: GitHubRepo[] = await response.json();
        
        // Transform GitHub repos into project format
        const formattedProjects = repos.map(repo => ({
          id: repo.id,
          title: repo.name.replace(/-/g, ' ').replace(/_/g, ' '),
          description: repo.description || 'No description available',
          tags: [...(repo.topics || []), repo.language].filter(Boolean),
          image: `https://opengraph.githubassets.com/1/${username}/${repo.name}`,
          link: repo.html_url
        }));
        
        setGithubProjects(formattedProjects);
      } catch (err) {
        console.error('Error fetching GitHub repositories:', err);
        setError('Failed to load GitHub projects. Please try again later.');
      } finally {
        setIsLoading(false);
      }
    };
    
    fetchGithubProjects();
  }, [username]);

  // Combine local projects with GitHub projects
  const allProjects = [...projects, ...githubProjects];

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
        
        {error && (
          <div className="text-center mb-8 text-red-500 reveal">
            {error}
          </div>
        )}
        
        {isLoading && (
          <div className="text-center mb-8 reveal">
            <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]" role="status">
              <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">Loading...</span>
            </div>
            <p className="mt-2 text-muted-foreground">Loading projects from GitHub...</p>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {allProjects.map((project, index) => (
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
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
