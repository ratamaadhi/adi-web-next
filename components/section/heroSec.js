import Image from "next/image";
import { myLoader } from "../../lib/media";
import { shimmer, toBase64 } from "../../util/toBase64";
import { motion } from "framer-motion";

function HeroSec() {
  const variant = {
    initial: {
      opacity: 0,
      x: -60,
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
      x: 60,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.05,
      },
    },
  };
  return (
    <motion.div
      variants={variant}
      initial="initial"
      animate="animate"
      className="2xl:container 2xl:mx-auto grid gap-x-2 grid-cols-6 grid-flow-row auto-rows-min sm:grid-cols-8 md:grid-cols-12  w-full min-h-[calc(100vh-160px)] mb-20 px-8 md:px-20 text-secondary"
    >
      <motion.div
        variants={variant}
        className="row-start-1 col-start-1 col-end-7 sm:col-end-9 md:col-end-13 lg:col-end-8"
      >
        <motion.h1
          variants={variant}
          className="text-6xl sm:text-7xl font-semibold"
        >
          Ratama Adhi
        </motion.h1>
        <motion.h1
          variants={variant}
          className="text-base sm:text-2xl font-light sm:font-extralight leading-9 tracking-wider pl-2"
        >
          a front-end developer
        </motion.h1>
      </motion.div>
      <motion.div
        variants={variant}
        className="row-start-2 col-start-1 col-end-7 sm:col-end-9 md:col-end-13 lg:col-end-8"
      >
        <motion.h1
          variants={variant}
          className="text-3xl sm:text-5xl mt-14 font-medium italic"
        >
          " Less is better "
        </motion.h1>
        <motion.p
          variants={variant}
          className="text-sm sm:text-lg font-normal sm:font-light leading-9 tracking-wider pl-2"
        >
          - Minimalism
        </motion.p>
      </motion.div>
      <motion.div
        variants={variant}
        className="row-start-3 col-start-1 col-end-7 sm:col-end-5 md:col-end-7 place-self-center"
      >
        <motion.p
          variants={variant}
          className="text-sm sm:text-lg font-normal sm:font-medium mt-8 sm:mt-0 lg:mt-8"
        >
          Minimalism is a tool that can assist you in finding freedom. Freedom
          from fear. Freedom from worry. Freedom from overwhelm. Freedom from
          guilt. Freedom from depression. Freedom from the trappings of the
          consumer culture we’ve built our lives around. Real freedom.
        </motion.p>
      </motion.div>

      <motion.div
        variants={variant}
        initial="exit"
        animate="animate"
        // transition={{duration: 3}}
        exit="initial"
        className="relative w-full h-fit md:my-0 my-8 grayscale-[110%] hover:grayscale-0 transition duration-300 delay-100 bg-amber-700 row-start-4 sm:row-start-3 lg:row-start-1 col-start-1 md:col-start-7 sm:col-start-5 lg:col-start-8 xl:col-start-9 col-end-7 sm:col-end-9 md:col-end-13 lg:row-end-5"
      >
        <Image
          loader={myLoader}
          src={"/hero-image.png"}
          alt={"ratama adhi"}
          layout="responsive"
          width={311}
          height={414}
          placeholder="blur"
          blurDataURL={`data:image/svg+xml;base64,${toBase64(
            shimmer(311, 414)
          )}`}
        />
      </motion.div>
    </motion.div>
  );
}

export default HeroSec;
