// import Image from 'next/image';
// import { myLoader } from '../../lib/media';
// import { shimmer, toBase64 } from '../../util/toBase64';
import dynamic from 'next/dynamic';
import { motion } from 'framer-motion';
import Blob from '../blob/Blob';
import { Canvas } from '@react-three/fiber';
const ModelAnimated = dynamic(() => import('../ThreeD/RatamaAnimated'), {
  ssr: false,
});

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
    <div className="relative flex min-h-[calc(100vh-112px)] w-full items-center justify-center px-8 pt-8 pb-16 md:px-20 2xl:container 2xl:mx-auto">
      <div className="flex h-fit w-full flex-col justify-between lg:flex-row">
        <div className="relative flex w-full flex-col items-center justify-center text-secondary lg:w-2/3">
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
              className="text-6xl font-semibold sm:text-7xl"
            >
              Ratama Adhi
            </motion.h1>
            <motion.p
              variants={variant}
              className="pl-2 text-base font-light leading-9 tracking-wider sm:text-2xl sm:font-extralight"
            >
              a front-end developer
            </motion.p>
            <motion.h1
              variants={variant}
              className="mt-10 text-3xl font-medium italic sm:text-5xl lg:mt-14"
            >
              &quot; Less is better &quot;
            </motion.h1>
            <motion.p
              variants={variant}
              className="pl-2 text-sm font-normal leading-9 tracking-wider sm:text-lg sm:font-light"
            >
              - Minimalism
            </motion.p>
            <motion.p
              variants={variant}
              className="md:text-md mt-8 text-xs font-normal leading-relaxed sm:font-medium md:w-3/4 lg:w-[512px]"
            >
              Minimalism is a tool that can assist you in finding freedom.
              Freedom from fear. Freedom from worry. Freedom from overwhelm.
              Freedom from guilt. Freedom from depression. Freedom from the
              trappings of the consumer culture we’ve built our lives around.
              Real freedom.
            </motion.p>
          </motion.div>
        </div>
        <div className="mt-8 flex w-full items-center justify-center lg:mt-0 lg:w-1/3 lg:justify-end">
          <motion.div
            initial="exit"
            animate="animate"
            variants={variant}
            className="relative flex h-full w-[500px] items-center justify-center overflow-hidden rounded-md bg-gradient-to-br from-amber-700 to-indigo-900"
          >
            <div className="absolute h-full w-full rounded-md bg-gradient-to-br from-amber-700 to-indigo-900 blur-md" />
            {/* <Image
              loader={myLoader}
              src="/image-removebg-preview.png"
              alt="ratama adhi"
              layout="responsive"
              width={500}
              height={500}
              placeholder="blur"
              blurDataURL={`data:image/svg+xml;base64,${toBase64(
                shimmer(311, 414)
              )}`}
            /> */}

            <Canvas
              camera={{ position: [2, 0, 12.25], fov: 15 }}
              className="h-full w-full"
            >
              <ambientLight intensity={1.25} />
              <ambientLight intensity={0.1} />
              <directionalLight intensity={0.4} />
              <ModelAnimated position={[1.225, -1.3, 7.5]} />
            </Canvas>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
