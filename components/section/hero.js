import Image from "next/image";
import { myLoader } from "../../lib/media";
import { shimmer, toBase64 } from "../../util/toBase64";
import { motion } from "framer-motion";
import Blob from "../blob/Blob";

function Hero() {
  const variant = {
    initial: {
      opacity: 0,
      x: -30,
    },
    animate: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 1,
        delayChildren: 0.2,
        staggerChildren: 0.05,
      },
    },
    exit: {
      opacity: 0,
      x: 30,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.05,
      },
    },
  };

  return (
    <div className="relative flex justify-center items-center w-full min-h-[calc(100vh-112px)] pt-8 pb-16 px-8 md:px-20 2xl:container 2xl:mx-auto">
      <div className="w-full h-fit flex justify-between flex-col lg:flex-row">
        <div className="relative flex flex-col justify-center items-center w-full lg:w-2/3 text-secondary">
          <Blob />
          <motion.div
            variants={variant}
            initial="initial"
            animate="animate"
            className="w-full"
            style={{ zIndex: 2 }}
          >
            <motion.h1
              variants={variant}
              className="text-6xl sm:text-7xl font-semibold"
            >
              Ratama Adhi
            </motion.h1>
            <motion.p
              variants={variant}
              className="text-base sm:text-2xl font-light sm:font-extralight leading-9 tracking-wider pl-2"
            >
              a front-end developer
            </motion.p>
            <motion.h1
              variants={variant}
              className="text-3xl sm:text-5xl mt-10 lg:mt-14 font-medium italic"
            >
              " Less is better "
            </motion.h1>
            <motion.p
              variants={variant}
              className="text-sm sm:text-lg font-normal sm:font-light leading-9 tracking-wider pl-2"
            >
              - Minimalism
            </motion.p>
            <motion.p
              variants={variant}
              className="text-sm sm:text-lg font-normal sm:font-medium mt-8 lg:w-3/4"
            >
              Minimalism is a tool that can assist you in finding freedom.
              Freedom from fear. Freedom from worry. Freedom from overwhelm.
              Freedom from guilt. Freedom from depression. Freedom from the
              trappings of the consumer culture we’ve built our lives around.
              Real freedom.
            </motion.p>
          </motion.div>
        </div>
        <div className="w-full lg:w-1/3 flex justify-center lg:justify-end items-center lg:mt-0 mt-8">
          <motion.div
            initial="exit"
            animate="animate"
            variants={variant}
            className="relative w-[500px] h-fit rounded-md bg-gradient-to-br from-amber-700 to-indigo-900"
          >
            <div className="absolute w-full h-full rounded-md bg-gradient-to-br from-amber-700 to-indigo-900 blur-md" />
            <Image
              loader={myLoader}
              src={"/image-removebg-preview.png"}
              alt={"ratama adhi"}
              layout="responsive"
              width={500}
              height={500}
              placeholder="blur"
              blurDataURL={`data:image/svg+xml;base64,${toBase64(
                shimmer(311, 414)
              )}`}
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
