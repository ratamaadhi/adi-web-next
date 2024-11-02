import Mansory from 'react-masonry-css';
import ProjectCard from '../cards/projectCard';

function Projects({ projects, isLoading = false }) {
  const breakPoints = {
    default: 3,
    1024: isLoading || projects.length >= 3 ? 3 : 2,
    768: 2,
    425: 2,
  };

  function SkeletonProjectCard() {
    return (
      <div className="relative h-auto w-56 overflow-hidden rounded-md bg-tertiary shadow-lg md:w-60">
        <div className="relative h-32 w-full animate-pulse bg-secondary/30" />
        <div className="flex w-full flex-col items-start justify-center space-y-3 p-3">
          <div className="w-full bg-tertiary text-sm font-semibold text-secondary">
            <div className="h-6 w-2/3 animate-pulse rounded bg-secondary/30" />
          </div>
          <div className="w-full space-y-2 bg-tertiary text-xs font-medium leading-relaxed text-tertiary line-clamp-2">
            <div className="h-3 w-4/5 animate-pulse rounded bg-secondary/30" />
            <div className="h-3 w-3/5 animate-pulse rounded bg-secondary/30" />
          </div>
          <div className="flex flex-wrap items-center justify-start">
            <div className="mt-2 mr-2 w-8 animate-pulse rounded bg-secondary/30 py-2 px-3 text-xss text-secondary" />
            <div className="mt-2 mr-2 w-8 animate-pulse rounded bg-secondary/30 py-2 px-3 text-xss text-secondary" />
            <div className="mt-2 mr-2 w-8 animate-pulse rounded bg-secondary/30 py-2 px-3 text-xss text-secondary" />
          </div>
          <div className="w-full animate-pulse self-end rounded bg-primary/70 px-2 py-1 text-center text-xss text-secondary">
            ---- ----
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className="relative flex min-h-[calc(100vh-112px)] w-full flex-col items-center justify-start px-4 pt-8 pb-16 md:px-20 2xl:container 2xl:mx-auto">
      <div className="mb-14 h-auto w-full bg-gradient-to-br from-amber-300 via-amber-700 to-indigo-700 bg-clip-text text-center text-2xl text-secondary transition-all duration-300 ease-in-out hover:text-transparent">
        My Projects
      </div>
      <Mansory
        breakpointCols={breakPoints}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {isLoading && (
          <div>
            <SkeletonProjectCard />
          </div>
        )}
        {isLoading && (
          <div>
            <SkeletonProjectCard />
          </div>
        )}
        {isLoading && (
          <div>
            <SkeletonProjectCard />
          </div>
        )}
        {projects &&
          projects.map((project) => (
            <div key={project.id}>
              <ProjectCard project={project} />
            </div>
          ))}
      </Mansory>
    </div>
  );
}

export default Projects;
