import Image from "next/image";
import React from "react";
import { getStrapiMedia, myLoader } from "../../lib/media";
import { shimmer, toBase64 } from "../../util/toBase64";

const ProjectCard = ({ project }) => {
  return (
    <div className="relative w-56 md:w-60 h-auto bg-secondary rounded-md overflow-hidden shadow-lg">
      <div className="relative w-full">
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
      <div className="p-3 w-full flex flex-col justify-center items-start space-y-3">
        <div className="w-full bg-secondary text-sm font-semibold text-tertiary">
          {project.name}
        </div>
        <div className="w-full bg-secondary text-xs leading-relaxed line-clamp-2 font-medium text-tertiary">
          {project.descriptions}
        </div>
        <div className="flex justify-start items-center flex-wrap">
          {project.technologies && project.technologies.map(tech => (
            <div key={tech.id} className="text-xss text-secondary py-1 px-2 rounded bg-primary/50 mt-2 mr-2">
              {tech.name}
            </div>
          ))}
        </div>
        <div className="text-xss min-w-1/3 px-2 py-1 text-center text-indigo-700 self-end rounded">
          Read more
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
