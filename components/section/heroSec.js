import Image from 'next/image';
import { motion } from 'framer-motion';
import { myLoader } from '../../lib/media';
import { shimmer, toBase64 } from '../../util/toBase64';

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
      className="mb-20 grid min-h-[calc(100vh-160px)] w-full grid-flow-row auto-rows-min grid-cols-6 gap-x-2 px-8  text-secondary 2xl:container sm:grid-cols-8 md:grid-cols-12 md:px-20 2xl:mx-auto"
    >
      <motion.div
        variants={variant}
        className="col-start-1 col-end-7 row-start-1 sm:col-end-9 md:col-end-13 lg:col-end-8"
      >
        <motion.h1
          variants={variant}
          className="mt-7 text-6xl font-semibold sm:text-7xl md:mt-14"
        >
          Ratama Adhi
        </motion.h1>
        <motion.h1
          variants={variant}
          className="pl-2 text-base font-light leading-9 tracking-wider sm:text-2xl sm:font-extralight"
        >
          a front-end developer
        </motion.h1>
      </motion.div>
      <motion.div
        variants={variant}
        className="col-start-1 col-end-7 row-start-2 sm:col-end-9 md:col-end-13 lg:col-end-8"
      >
        <motion.h1
          variants={variant}
          className="mt-14 text-3xl font-medium italic sm:text-5xl"
        >
          &quot; Less is better &quot;
        </motion.h1>
        <motion.p
          variants={variant}
          className="pl-2 text-sm font-normal leading-9 tracking-wider sm:text-lg sm:font-light"
        >
          - Minimalism
        </motion.p>
      </motion.div>
      <motion.div
        variants={variant}
        className="col-start-1 col-end-7 row-start-3 place-self-center sm:col-end-5 md:col-end-7"
      >
        <motion.p
          variants={variant}
          className="mt-8 text-sm font-normal sm:mt-0 sm:text-lg sm:font-medium lg:mt-8"
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
        className="relative col-start-1 col-end-7 row-start-4 my-8 h-fit w-full bg-amber-700 grayscale-[110%] transition delay-100 duration-300 hover:grayscale-0 sm:col-start-5 sm:col-end-9 sm:row-start-3 md:col-start-7 md:col-end-13 md:my-0 lg:col-start-8 lg:row-start-1 lg:row-end-5 xl:col-start-9"
      >
        <Image
          loader={myLoader}
          src="/hero-image.png"
          alt="ratama adhi"
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
