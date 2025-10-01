
import { Project } from '@/types/project';

export const featuredRepos = ["easysleep"];

export const staticProjects: Project[] = [
  {
    id: 1,
    title: "EasySleep",
    description: "A sleep tracker and ambient noise generator to help users improve their sleep quality.",
    tags: ["React", "TypeScript", "Mobile-First"],
    image: "https://www.helpguide.org/wp-content/uploads/2023/02/Sleep-in-Older-Adults.jpeg",
    link: "https://easysleep.vercel.app/"
  },
  {
    id: 2,
    title: "Auto Stock",
    description: "A premium platform designed for dealerships and private sellers to showcase vehicles with powerful tools and reach millions of potential buyers.",
    tags: ["UX Design", "React", "Tailwind CSS"],
    image: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=2066&auto=format&fit=crop",
    link: "https://autostockcanada-rosa-developers-projects.vercel.app/"
  },
  {
    id: 3,
    title: "Food Analyser",
    description: "An intelligent food analysis tool that helps users understand nutritional content and make healthier food choices.",
    tags: ["React", "AI", "TypeScript"],
    image: "https://images.unsplash.com/photo-1498837167922-ddd27525d352?q=80&w=2070&auto=format&fit=crop",
    link: "https://foodanalyser.vercel.app/"
  }
];
