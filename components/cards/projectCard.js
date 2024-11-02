import Image from 'next/image';
import React from 'react';
import { getStrapiMedia, myLoader } from '../../lib/media';
import { shimmer, toBase64 } from '../../util/toBase64';

function ProjectCard({ project }) {
  return (
    <div className="relative h-auto w-full overflow-hidden rounded-md bg-tertiary shadow-lg md:w-60">
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
      <div className="flex w-full flex-col items-start justify-center p-3">
        <div className="w-full bg-tertiary text-lg font-semibold text-secondary">
          {project.name}
        </div>
        <div className="font-base mt-1 w-full bg-tertiary text-xs leading-relaxed text-secondary/70 line-clamp-2">
          {project.descriptions}
        </div>
        <div className="mt-2 flex flex-wrap items-center justify-start">
          {project.technologies &&
            project.technologies.map((tech) => (
              <div
                key={tech.id}
                className="mt-2 mr-2 rounded bg-primary/50 py-1 px-2 text-xss tracking-wide text-secondary/80"
              >
                {tech.name}
              </div>
            ))}
        </div>
        <a
          target={'_blank'}
          href={`/projects/${project.slug}`}
          rel="noreferrer"
          className="w-full"
        >
          <div className="mt-6 w-full cursor-pointer self-end rounded bg-primary px-2 py-1 text-center text-xss font-semibold tracking-wide text-secondary shadow-sm transition-all duration-300 ease-in-out hover:bg-primary/70">
            Read more
          </div>
        </a>
      </div>
    </div>
  );
}

export default ProjectCard;
