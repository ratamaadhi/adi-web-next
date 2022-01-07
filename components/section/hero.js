import Image from "next/image";
import { myLoader } from "../../lib/media";
import { shimmer, toBase64 } from "../../util/toBase64";
import Blob from "../blob/Blob";

function Hero() {
  return (
    <div className="relative flex justify-center items-center w-full min-h-[calc(100vh-112px)] pt-8 pb-16 px-8 md:px-20 2xl:container 2xl:mx-auto">
      {/* <div className="absolute w-full h-full" style={{zIndex: 1}} /> */}
      <Blob sm={375} xl={512} />
      <div className="w-full h-fit flex justify-between flex-col lg:flex-row" style={{zIndex:2}}>
        <div className="flex flex-col justify-center w-full lg:w-2/3 text-secondary">
          <div className="w-full">
            <h1 className="text-6xl sm:text-7xl font-semibold">Ratama Adhi</h1>
            <p className="text-base sm:text-2xl font-light sm:font-extralight leading-9 tracking-wider pl-2">
              a front-end developer
            </p>
            <h1 className="text-3xl sm:text-5xl mt-10 lg:mt-14 font-medium italic">
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
        <div className="w-full lg:w-1/3 flex justify-center lg:justify-end items-center lg:mt-0 mt-8">
          <div className="relative w-[477px] h-fit grayscale-[110%] hover:grayscale-0 transition duration-300 delay-100 rounded-md bg-amber-700 ">
            {/* <div className="absolute w-full h-full bg-amber-700 blur-3xl" /> */}
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
