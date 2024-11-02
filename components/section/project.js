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

function Project({ slug, dataFallback = {} }) {
  const pageRoute = useRouter();
  const {
    data: selectedProject,
    isLoading,
    error,
  } = useFetch(`/projects/${slug}`);
  const traceRoute = pageRoute.asPath.split('/').filter((fil) => fil !== '');

  const dataProject = !error ? selectedProject : dataFallback;

  return (
    <div className="relative flex min-h-[calc(100vh-112px)] w-full flex-col items-center justify-between bg-primary px-4 pt-8 pb-16 md:px-20 2xl:container 2xl:mx-auto">
      <div className="flex w-full items-center justify-start space-x-6 md:mx-auto md:w-8/12">
        <div
          onClick={() => pageRoute.back()}
          className="cursor-pointer rounded-lg bg-secondary p-1 text-primary transition-all duration-300 ease-in-out hover:scale-110"
        >
          <RiArrowLeftSLine size={26} />
        </div>
        <div className="flex w-full items-center space-x-4 text-base text-secondary">
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
                <div className="cursor-pointer underline">{trace}</div>
              </Link>
            );
          })}
        </div>
      </div>
      <div className="flex w-full flex-col items-center bg-primary pt-6 md:mx-auto md:w-8/12">
        <div className="mx-auto mb-2 flex h-auto w-full items-center justify-between text-secondary">
          <h2
            className={`font-poppins text-4xl font-bold md:text-5xl lg:text-6xl ${
              isLoading && 'h-10 w-1/2 animate-pulse rounded-md bg-secondary/30'
            }`}
          >
            {dataProject && dataProject.name}
          </h2>
        </div>
        <div className="mx-auto mb-4 flex h-auto w-full items-center justify-between text-secondary">
          <h3
            className={`font-poppins text-sm font-light ${
              isLoading && 'h-5 w-3/4 animate-pulse rounded-md bg-secondary/30'
            }`}
          >
            {dataProject && dataProject.descriptions}
          </h3>
        </div>
        <div className="mx-auto mb-6 flex w-full items-center justify-between">
          <div
            className={`relative flex h-44 w-full justify-center overflow-hidden rounded-lg sm:h-64 md:h-96 ${
              isLoading ? 'animate-pulse bg-secondary/30' : 'bg-tertiary'
            }`}
          >
            {dataProject && (
              <Image
                loader={myLoader}
                src={getStrapiMedia(dataProject?.thumbnail)}
                alt={dataProject?.thumbnail?.hash}
                layout="fill"
                placeholder="blur"
                blurDataURL={`data:image/svg+xml;base64,${toBase64(
                  shimmer(
                    dataProject?.thumbnail?.formats?.thumbnail?.width,
                    dataProject?.thumbnail?.formats?.thumbnail?.height
                  )
                )}`}
                className="object-cover"
              />
            )}
          </div>
        </div>
        <div
          className={`mx-auto mb-6 flex h-auto w-full flex-wrap items-center justify-start border-b border-secondary/50 pb-3 md:pb-6 ${
            isLoading && 'h-3 animate-pulse rounded-md bg-secondary/30'
          }`}
        >
          {dataProject &&
            dataProject.technologies &&
            dataProject.technologies.map((tech) => (
              <div
                key={tech.id}
                className="mt-2 mr-2 flex items-center justify-center rounded-md bg-tertiary py-1 px-2 text-xss tracking-wide text-secondary sm:text-xs"
              >
                {tech.name}
              </div>
            ))}
        </div>
        <div className="markdown-container prose prose-sm mx-auto h-full w-full max-w-none text-secondary md:prose-lg">
          {dataProject && (
            <MdFormat
              markdown={dataProject.content}
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
