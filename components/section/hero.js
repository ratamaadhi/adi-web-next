import Image from "next/image";
import { myLoader } from "../../lib/media";
import { shimmer, toBase64 } from "../../util/toBase64";

function Hero() {
  return (
    <div className="flex justify-center w-full min-h-[calc(100vh-112px)] pb-16 px-8 md:px-20 2xl:container 2xl:mx-auto">
      <div className="w-full h-fit flex justify-between flex-col md:flex-row">
        <div className="flex flex-col justify-center w-full md:w-2/3 text-secondary">
          <div className="w-full">
            <h1 className="text-6xl sm:text-7xl font-semibold">Ratama Adhi</h1>
            <p className="text-base sm:text-2xl font-light sm:font-extralight leading-9 tracking-wider pl-2">
              a front-end developer
            </p>
            <h1 className="text-3xl sm:text-5xl mt-14 font-medium italic">
              " Less is better "
            </h1>
            <p className="text-sm sm:text-lg font-normal sm:font-light leading-9 tracking-wider pl-2">
              - Minimalism
            </p>
            <p className="text-sm sm:text-lg font-normal sm:font-medium mt-8 lg:w-3/4">
              Minimalism is a tool that can assist you in finding freedom.
              Freedom from fear. Freedom from worry. Freedom from overwhelm.
              Freedom from guilt. Freedom from depression. Freedom from the
              trappings of the consumer culture we’ve built our lives around.
              Real freedom.
            </p>
          </div>
        </div>
        <div className="w-full md:w-1/3 flex justify-center md:justify-end ">
          <div className="relative w-[477px] h-fit md:mt-0 mt-4 grayscale-[110%] hover:grayscale-0 transition duration-300 delay-100 bg-amber-700">
            <Image
              loader={myLoader}
              src={"/hero-image.png"}
              alt={"ratama adhi"}
              layout="responsive"
              width={311}
              height={414}
              placeholder="blur"
              blurDataURL={`data:image/svg+xml;base64,${toBase64(
                shimmer(
                  311,
                  414
                )
              )}`}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
