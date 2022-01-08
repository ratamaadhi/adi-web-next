import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

function MenuRight({ toggleNav, setToggleNav }) {
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
          <motion.div
            variants={variant}
            className="w-full h-20 flex justify-center items-center font-semibold hover:bg-primary hover:text-2xl transition-all duration-100 ease-in-out"
          >
            Projects
          </motion.div>
          <motion.div
            variants={variant}
            className="w-full h-20 flex justify-center items-center font-semibold hover:bg-primary hover:text-2xl transition-all duration-100 ease-in-out"
          >
            Blogs
          </motion.div>
          <motion.div
            variants={variant}
            className="w-full h-20 flex justify-center items-center font-semibold hover:bg-primary hover:text-2xl transition-all duration-100 ease-in-out"
          >
            About
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default MenuRight;
