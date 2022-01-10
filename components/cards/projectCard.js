import Image from "next/image";
import React from "react";
import { getStrapiMedia, myLoader } from "../../lib/media";
import { shimmer, toBase64 } from "../../util/toBase64";
import Link from "next/link";

const ProjectCard = ({ project }) => {
  return (
    <div className="relative w-56 md:w-60 h-auto bg-tertiary rounded-md overflow-hidden shadow-lg">
      <div className="relative w-full bg-secondary">
        <Image
          loader={myLoader}
          src={getStrapiMedia(project.thumbnail.formats.thumbnail)}
          alt={project.thumbnail.hash}
          layout="responsive"
          width={project.thumbnail.formats.thumbnail.width}
          height={project.thumbnail.formats.thumbnail.height}
          placeholder="blur"
          blurDataURL={`data:image/svg+xml;base64,${toBase64(
            shimmer(
              project.thumbnail.formats.thumbnail.width,
              project.thumbnail.formats.thumbnail.height
            )
          )}`}
        />
      </div>
      <div className="p-3 w-full flex flex-col justify-center items-start">
        <div className="w-full bg-tertiary text-lg font-semibold text-secondary">
          {project.name}
        </div>
        <div className="w-full bg-tertiary text-xs leading-relaxed line-clamp-2 font-base text-secondary/70 mt-1">
          {project.descriptions}
        </div>
        <div className="flex justify-start items-center flex-wrap mt-2">
          {project.technologies && project.technologies.map(tech => (
            <div key={tech.id} className="text-xss text-secondary/80 py-1 px-2 rounded bg-primary/50 tracking-wide mt-2 mr-2">
              {tech.name}
            </div>
          ))}
        </div>
        <Link href={"/projects/"+project.slug}>
          <div 
            className="text-xss w-full px-2 py-1 text-center bg-primary hover:bg-primary/70 text-secondary font-semibold tracking-wide self-end rounded cursor-pointer mt-6 shadow-sm transition-all duration-300 ease-in-out">
            Read more
          </div>
        </Link>
      </div>
    </div>
  );
};

export default ProjectCard;
