import Mansory from 'react-masonry-css'
import ProjectCard from '../cards/projectCard'

const Projects = ({projects}) => {

  const breakPoints = {
    default: projects.length > 3 ? 3 : 2,
    1024: projects.length > 3 ? 3 : 2,
    768: 2,
    425: 1
  }
  return (
    <div className="relative flex flex-col justify-start items-center w-full min-h-[calc(100vh-112px)] pt-8 pb-16 px-8 md:px-20 2xl:container 2xl:mx-auto">
      <div className='w-full h-auto text-2xl text-secondary hover:text-transparent bg-clip-text bg-gradient-to-br from-amber-300 via-amber-700 to-indigo-700 mb-14 text-center transition-all duration-300 ease-in-out'>
        My Projects
      </div>
      <Mansory
        breakpointCols={breakPoints}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {projects && projects.map(project => (
          <div key={project.id} >
            <ProjectCard project={project} />
          </div>
        ))}
      </Mansory>
    </div>
  )
}

export default Projects
