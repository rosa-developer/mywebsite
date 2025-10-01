
import { Project } from '@/types/project';

export interface GitHubRepo {
  id: number;
  name: string;
  description: string;
  html_url: string;
  topics: string[];
  language: string;
  homepage?: string;
}

export const fetchFeaturedRepos = async (
  username: string, 
  repoNames: string[]
): Promise<Project[]> => {
  const featuredProjects: Project[] = [];
  
  for (const repoName of repoNames) {
    try {
      const response = await fetch(`https://api.github.com/repos/${username}/${repoName}`);
      
      if (response.ok) {
        const repo: GitHubRepo = await response.json();
        featuredProjects.push(formatGitHubRepo(username, repo));
      }
    } catch (err) {
      console.error(`Error fetching specific repo ${repoName}:`, err);
    }
  }
  
  return featuredProjects;
};

export const fetchAdditionalRepos = async (
  username: string, 
  count: number, 
  featuredProjects: Project[],
  featuredRepoNames: string[]
): Promise<Project[]> => {
  const response = await fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=${count}`);
  
  if (!response.ok) {
    throw new Error(`GitHub API error: ${response.status}`);
  }
  
  const repos: GitHubRepo[] = await response.json();
  
  // Filter out repos that are already in featuredProjects
  const additionalRepos = repos.filter(repo => 
    !featuredProjects.some(fp => fp.id === repo.id) && 
    !featuredRepoNames.includes(repo.name)
  );
  
  // Transform GitHub repos into project format
  return additionalRepos.map(repo => formatGitHubRepo(username, repo));
};

export const formatGitHubRepo = (username: string, repo: GitHubRepo): Project => ({
  id: repo.id,
  title: repo.name.replace(/-/g, ' ').replace(/_/g, ' '),
  description: repo.description || 'No description available',
  tags: [...(repo.topics || []), repo.language].filter(Boolean),
  image: `https://opengraph.githubassets.com/1/${username}/${repo.name}`,
  link: repo.homepage || repo.html_url
});
