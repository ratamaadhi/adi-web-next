import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/router";

function MenuRight({ toggleNav, setToggleNav }) {
  const router = useRouter();
  const path = router.route;

  const variant = {
    initial: {
      opacity: 0,
      x: 300,
    },
    animate: {
      opacity: 1,
      x: 0,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.05,
      },
    },
    exit: {
      opacity: 0,
      x: 300,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.05,
      },
    },
  };

  const item = {
    initial: { opacity: 0, x: 300 },
    animate: {
      opacity: 1,
      x: 0,
      transition: {
        delayChildren: 0.3,
      },
    },
  };

  const [scroll, setScroll] = useState(false);

  function handleScroll() {
    document.body.scrollTop > 30 || document.documentElement.scrollTop > 30
      ? setScroll(true)
      : setScroll(false);
  }
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, []);
  return (
    <AnimatePresence>
      {toggleNav && (
        <motion.div
          variants={variant}
          initial="initial"
          animate="animate"
          exit="exit"
          className={`fixed ${
            !scroll
              ? "top-28 border-t border-[#ffffff20] h-[calc(100vh-112px)]"
              : "top-20 border-t-0 h-[calc(100vh-80px)]"
          } right-0 z-10 flex flex-col justify-start w-full md:w-1/2 lg:hidden glassmorph transition-all duration-300 ease-in-out text-secondary`}
        >
          <Link href={"/projects"}>
            <motion.div
              variants={variant}
              className={`${
                path == "/projects"
                  && "text-transparent bg-gradient-to-br from-amber-300 via-amber-700 to-indigo-700 font-medium text-2xl"
              } text-secondary w-full h-20 flex justify-center items-center font-semibold hover:text-transparent bg-clip-text bg-secondary hover:bg-gradient-to-br from-amber-300 via-amber-700 to-indigo-700 hover:text-2xl transition-all duration-100 ease-in-out cursor-pointer`}
            >
              Projects
            </motion.div>
          </Link>
          {/* <motion.div
            variants={variant}
            className={`${
              path == "/blogs"
                ? "text-transparent bg-clip-text bg-gradient-to-br from-amber-300 via-amber-700 to-indigo-700 font-medium text-2xl"
                : "text-secondary"
            } w-full h-20 flex justify-center items-center font-semibold hover:text-transparent bg-clip-text bg-secondary hover:bg-gradient-to-br from-amber-300 via-amber-700 to-indigo-700 hover:text-2xl transition-all duration-100 ease-in-out cursor-pointer`}
          >
            Blogs
          </motion.div> */}
          <Link href={"/about"}>
            <motion.div
              variants={variant}
              className={`${
                path == "/about"
                  ? "text-transparent bg-gradient-to-br from-amber-300 via-amber-700 to-indigo-700 font-medium text-2xl"
                  : "text-secondary"
              } w-full h-20 flex justify-center items-center font-semibold hover:text-transparent bg-clip-text bg-secondary hover:bg-gradient-to-br from-amber-300 via-amber-700 to-indigo-700 hover:text-2xl transition-all duration-100 ease-in-out cursor-pointer`}
            >
              About
            </motion.div>
          </Link>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default MenuRight;
