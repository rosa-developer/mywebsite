
import React, { useState, useEffect } from 'react';
import { useRevealAnimation } from '@/lib/animations';
import ProjectCard from '@/components/project/ProjectCard';
import ProjectsLoadingState from '@/components/project/ProjectsLoadingState';
import { Project } from '@/types/project';
import { staticProjects, featuredRepos } from '@/data/projects';
import { fetchFeaturedRepos, fetchAdditionalRepos } from '@/lib/github';

const Projects = () => {
  useRevealAnimation();
  const [githubProjects, setGithubProjects] = useState<Project[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const username = 'rosa-developer';

  useEffect(() => {
    const fetchGithubProjects = async () => {
      setIsLoading(true);
      setError(null);
      
      try {
        // First try to fetch the featured repos
        const featuredProjects = await fetchFeaturedRepos(username, featuredRepos);
        
        // Then fetch additional repos to fill up to 3 if needed
        if (featuredProjects.length < 3) {
          const additionalProjects = await fetchAdditionalRepos(
            username,
            3 - featuredProjects.length, 
            featuredProjects,
            featuredRepos
          );
          
          setGithubProjects([...featuredProjects, ...additionalProjects]);
        } else {
          setGithubProjects(featuredProjects);
        }
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
  const allProjects = [...staticProjects, ...githubProjects];

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
        
        <ProjectsLoadingState isLoading={isLoading} error={error} />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {allProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
