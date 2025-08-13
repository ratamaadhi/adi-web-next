import Image from 'next/image';
import {
  SiJavascript,
  SiReact,
  SiRedux,
  SiTailwindcss,
  SiNextdotjs,
  SiStrapi,
} from 'react-icons/si';
import { myLoader } from '../../lib/media';
import { shimmer, toBase64 } from '../../util/toBase64';

function About({ about }) {
  function iconsTech(name) {
    if (name.includes('javascript')) return <SiJavascript />;
    if (name.includes('react')) return <SiReact />;
    if (name.includes('redux')) return <SiRedux />;
    if (name.includes('tailwind')) return <SiTailwindcss />;
    if (name.includes('next')) return <SiNextdotjs />;
    if (name.includes('strapi')) return <SiStrapi />;
    return false;
  }
  return (
    <div className="relative flex min-h-[calc(100vh-112px)] w-full flex-col items-center justify-start px-8 pb-28 pt-8 md:justify-center md:px-20 lg:mx-auto lg:w-[768px]">
      <div className="flex w-full flex-col items-center justify-center md:flex-row-reverse">
        <div className="relative h-36 w-36 overflow-hidden rounded-full border-4 border-secondary bg-gradient-to-br from-amber-300 via-amber-700 to-indigo-700 shadow-lg">
          <Image
            loader={myLoader}
            src="/hero-image.png"
            alt="ratama adhi"
            layout="fill"
            placeholder="blur"
            blurDataURL={`data:image/svg+xml;base64,${toBase64(
              shimmer(144, 144)
            )}`}
            className="object-cover"
          />
        </div>
        <div className="mt-8 flex flex-col md:mt-0 md:flex-1">
          <h1 className="self-start text-5xl font-bold text-secondary">
            HELLO
          </h1>
          <p className="text-base leading-relaxed text-secondary lg:w-3/4">
            {about.description}
          </p>
        </div>
      </div>
      <div className="mt-8 flex w-full flex-col">
        <h1 className="text-2xl font-bold tracking-wide text-secondary lg:text-center">
          Current Tech
        </h1>
        <div className="mt-4 flex w-full flex-wrap items-center lg:justify-center">
          {about.technologies.map((tech) => (
            <div
              key={tech.id}
              className="flex flex-col items-center justify-center p-4"
            >
              <span className="text-4xl text-secondary">
                {iconsTech(tech.name.toLowerCase())}
              </span>
              <h1 className="mt-2 text-secondary">{tech.name}</h1>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default About;
