import Mansory from "react-masonry-css";
import ProjectCard from "../cards/projectCard";

const Projects = ({ projects, isLoading }) => {

  const breakPoints = {
    default: 3,
    1024: isLoading || projects.length >= 3 ? 3 : 2,
    768: 2,
    425: 1,
  };

  function SkeletonProjectCard() {
    return (
      <div className="relative w-56 md:w-60 h-auto bg-tertiary rounded-md overflow-hidden shadow-lg">
        <div className="relative w-full h-32 bg-secondary/30 animate-pulse"/>
        <div className="p-3 w-full flex flex-col justify-center items-start space-y-3">
          <div className="w-full bg-tertiary text-sm font-semibold text-secondary">
            <div className="w-2/3 h-6 bg-secondary/30 rounded animate-pulse"/>
          </div>
          <div className="w-full bg-tertiary text-xs leading-relaxed line-clamp-2 font-medium text-tertiary space-y-2">
            <div className="w-4/5 h-3 bg-secondary/30 rounded animate-pulse"/>
            <div className="w-3/5 h-3 bg-secondary/30 rounded animate-pulse"/>
          </div>
          <div className="flex justify-start items-center flex-wrap">
            <div className="text-xss text-secondary py-2 px-3 w-8 rounded bg-secondary/30 mt-2 mr-2 animate-pulse"/>
            <div className="text-xss text-secondary py-2 px-3 w-8 rounded bg-secondary/30 mt-2 mr-2 animate-pulse"/>
            <div className="text-xss text-secondary py-2 px-3 w-8 rounded bg-secondary/30 mt-2 mr-2 animate-pulse"/>
          </div>
          <div className="text-xss w-full px-2 py-1 text-center bg-primary/70 text-secondary self-end rounded animate-pulse">---- ----</div>
        </div>
      </div>
    );
  }
  return (
    <div className="relative flex flex-col justify-start items-center w-full min-h-[calc(100vh-112px)] pt-8 pb-16 px-8 md:px-20 2xl:container 2xl:mx-auto">
      <div className="w-full h-auto text-2xl text-secondary hover:text-transparent bg-clip-text bg-gradient-to-br from-amber-300 via-amber-700 to-indigo-700 mb-14 text-center transition-all duration-300 ease-in-out">
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
};

export default Projects;
