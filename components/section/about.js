import Image from "next/image";
import {
  SiJavascript,
  SiReact,
  SiRedux,
  SiTailwindcss,
  SiNextdotjs,
  SiStrapi,
} from "react-icons/si";
import { myLoader } from "../../lib/media";
import { shimmer, toBase64 } from "../../util/toBase64";

const About = ({ about }) => {
  function iconsTech(name) {
    if (name.includes("javascript")) return <SiJavascript />;
    if (name.includes("react")) return <SiReact />;
    if (name.includes("redux")) return <SiRedux />;
    if (name.includes("tailwind")) return <SiTailwindcss />;
    if (name.includes("next")) return <SiNextdotjs />;
    if (name.includes("strapi")) return <SiStrapi />;
  }
  return (
    <div className="relative flex flex-col justify-start md:justify-center items-center w-full lg:w-[768px] lg:mx-auto min-h-[calc(100vh-112px)] pt-8 pb-28 px-8 md:px-20">
      <div className="w-full flex flex-col md:flex-row-reverse justify-center items-center">
        <div className="relative w-36 h-36 bg-gradient-to-br from-amber-300 via-amber-700 to-indigo-700 rounded-full border-4 border-secondary overflow-hidden shadow-lg">
          <Image
            loader={myLoader}
            src={"/hero-image.png"}
            alt={"ratama adhi"}
            layout="fill"
            placeholder="blur"
            blurDataURL={`data:image/svg+xml;base64,${toBase64(
              shimmer(144, 144)
            )}`}
            className="object-cover"
          />
        </div>
        <div className="flex flex-col mt-8 md:mt-0 md:flex-1">
          <h1 className="text-secondary text-5xl font-bold self-start">
            HELLO
          </h1>
          <p className="text-secondary text-base leading-relaxed lg:w-3/4">
            {about.description}
          </p>
        </div>
      </div>
      <div className="w-full flex flex-col mt-8">
        <h1 className="text-secondary text-2xl font-bold tracking-wide lg:text-center">
          Current Tech
        </h1>
        <div className="mt-4 w-full flex flex-wrap items-center lg:justify-center">
          {about.technologies.map((tech, i) => (
            <div key={tech.id} className="flex flex-col justify-center items-center p-4">
              <span className="text-4xl text-secondary">
                {iconsTech(tech.name.toLowerCase())}
              </span>
              <h1 className="text-secondary mt-2">{tech.name}</h1>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
