import { useRouter } from 'next/router';
import { RiArrowLeftSLine } from 'react-icons/ri';
import React from 'react';
import rehypeRaw from 'rehype-raw';
import remarkGfm from 'remark-gfm';
import Image from 'next/image';
import Link from 'next/link';
import useFetch from '../../lib/hooks/useFetch';
import MdFormat from '../../util/md';
import { getStrapiMedia, myLoader } from '../../lib/media';
import { shimmer, toBase64 } from '../../util/toBase64';

function Project({ slug }) {
  const pageRoute = useRouter();
  const { data: selectedProject, isLoading } = useFetch(`/projects/${slug}`);
  const traceRoute = pageRoute.asPath.split('/').filter((fil) => fil !== '');

  return (
    <div className="relative w-full min-h-[calc(100vh-112px)] flex flex-col justify-between items-center pt-8 pb-16 px-8 md:px-20 2xl:container 2xl:mx-auto bg-primary">
      <div className="w-full md:w-8/12 md:mx-auto flex justify-start items-center space-x-6">
        <div
          onClick={() => pageRoute.back()}
          className="p-1 bg-secondary text-primary rounded-lg cursor-pointer hover:scale-110 transition-all ease-in-out duration-300"
        >
          <RiArrowLeftSLine size={26} />
        </div>
        <div className="w-full flex items-center text-base space-x-4 text-secondary">
          {traceRoute.map((trace, i) => {
            if (i == traceRoute.length - 1) {
              return (
                <div key={i} className="no-underline">
                  {trace}
                </div>
              );
            }
            return (
              <Link key={i} href={`/${trace}`}>
                <div className="underline cursor-pointer">{trace}</div>
              </Link>
            );
          })}
        </div>
      </div>
      <div className="w-full md:w-8/12 md:mx-auto flex flex-col items-center bg-primary pt-6">
        <div className="w-full h-auto mx-auto flex justify-between items-center mb-2 text-secondary">
          <h2
            className={`font-bold text-4xl md:text-5xl lg:text-6xl font-poppins ${
              isLoading && 'w-1/2 h-10 rounded-md bg-secondary/30 animate-pulse'
            }`}
          >
            {selectedProject && selectedProject.name}
          </h2>
        </div>
        <div className="w-full h-auto mx-auto flex justify-between items-center mb-4 text-secondary">
          <h3
            className={`font-light text-sm font-poppins ${
              isLoading && 'w-3/4 h-5 rounded-md bg-secondary/30 animate-pulse'
            }`}
          >
            {selectedProject && selectedProject.descriptions}
          </h3>
        </div>
        <div className="w-full mx-auto flex justify-between items-center mb-6">
          <div
            className={`relative h-44 sm:h-64 md:h-96 w-full flex justify-center rounded-lg overflow-hidden ${
              isLoading ? 'bg-secondary/30 animate-pulse' : 'bg-tertiary'
            }`}
          >
            {selectedProject && (
              <Image
                loader={myLoader}
                src={getStrapiMedia(selectedProject?.thumbnail)}
                alt={selectedProject?.thumbnail?.hash}
                layout="fill"
                placeholder="blur"
                blurDataURL={`data:image/svg+xml;base64,${toBase64(
                  shimmer(
                    selectedProject?.thumbnail?.formats?.thumbnail?.width,
                    selectedProject?.thumbnail?.formats?.thumbnail?.height
                  )
                )}`}
                className="object-cover filter blur-sm"
              />
            )}
          </div>
        </div>
        <div
          className={`w-full h-auto mx-auto flex flex-wrap justify-start items-center mb-6 border-b border-secondary/50 pb-3 md:pb-6 ${
            isLoading && 'h-3 rounded-md bg-secondary/30 animate-pulse'
          }`}
        >
          {selectedProject &&
            selectedProject.technologies &&
            selectedProject.technologies.map((tech) => (
              <div
                key={tech.id}
                className="text-xss sm:text-xs tracking-wide flex justify-center items-center py-1 px-2 rounded-md bg-tertiary text-secondary mt-2 mr-2"
              >
                {tech.name}
              </div>
            ))}
        </div>
        <div className="markdown-container h-full w-full mx-auto prose max-w-none prose-sm md:prose-lg text-secondary">
          {selectedProject && (
            <MdFormat
              markdown={selectedProject.content}
              remarkPlugins={[remarkGfm]}
              rehypePlugins={[rehypeRaw]}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default Project;
