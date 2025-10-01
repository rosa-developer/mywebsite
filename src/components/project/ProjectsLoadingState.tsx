
import React from 'react';

interface ProjectsLoadingStateProps {
  isLoading: boolean;
  error: string | null;
}

const ProjectsLoadingState = ({ isLoading, error }: ProjectsLoadingStateProps) => {
  if (error) {
    return (
      <div className="text-center mb-8 text-red-500 reveal">
        {error}
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className="text-center mb-8 reveal">
        <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]" role="status">
          <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">Loading...</span>
        </div>
        <p className="mt-2 text-muted-foreground">Loading projects from GitHub...</p>
      </div>
    );
  }

  return null;
};

export default ProjectsLoadingState;
