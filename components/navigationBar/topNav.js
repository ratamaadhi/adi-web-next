import React, { useState } from "react";
import { HiOutlineMenuAlt2, HiOutlineX } from "react-icons/hi";
import { motion } from "framer-motion";
import useInnerWidth from "../../lib/hooks/useInnerWidth";
import Link from "next/link";
import { useRouter } from "next/router";
import useScroll from "../../lib/hooks/useScroll";
import Modal from "../modal/Modal";
import FormContactMe from "../form/FormContactMe";

function TopNav({ toggleNav, setToggleNav }) {
  const [showModal, setShowModal] = useState(false);

  const { scroll } = useScroll({ limit: 30 });
  const router = useRouter();
  const path = router.route;

  const { windowWidth } = useInnerWidth();

  const variant = {
    initial: {
      opacity: 0,
      x: -30,
    },
    animate: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        delayChildren: 0.3,
        staggerChildren: 0.1,
      },
    },
    exit: {
      opacity: 0,
      x: 30,
    },
  };

  return (
    <nav
      className={`sticky top-0 left-0 z-20 w-full 2xl:container 2xl:mx-auto flex justify-between items-center  text-secondary px-8 md:px-20 transition-all duration-300 ease-in-out ${
        scroll ? "glassmorph h-20 border-b border-[#ffffff20]" : "h-28"
      } ${
        toggleNav &&
        windowWidth < 1024 &&
        "border-b border-[#ffffff20] glassmorph"
      }`}
    >
      <Link href={"/"}>
        <motion.div
          variants={variant}
          animate="animate"
          initial="initial"
          className="text-2xl w-auto h-8 font-bold blur-none cursor-pointer"
        >
          RA.
        </motion.div>
      </Link>
      <motion.div
        variants={variant}
        initial="exit"
        animate="animate"
        className={`px-2 py-2 lg:flex hidden justify-end items-center w-[300px]`}
      >
        <Link href={"/projects"}>
          <motion.a
            variants={variant}
            className="flex justify-center items-center w-20"
          >
            <div
              className={`${
                path == "/projects"
                  ? "text-amber-600 font-medium"
                  : "text-secondary"
              } hover:text-amber-600 font-medium text-base cursor-pointer transition-all duration-300 ease-in-out`}
            >
              Projects
            </div>
          </motion.a>
        </Link>
        {/* <Link href={"/"}>
          <motion.a
            variants={variant}
            className="flex justify-center items-center w-20"
          >
            <div className={`${
                path == "/blogs"
                  ? "text-amber-600 font-medium"
                  : "text-secondary"
              } hover:text-amber-600 font-medium text-base cursor-pointer transition-all duration-300 ease-in-out`}>
              Blogs
            </div>
          </motion.a>
        </Link> */}
        <Link href={"/about"}>
          <motion.a
            variants={variant}
            className="flex justify-center items-center w-20"
          >
            <div
              className={`${
                path == "/about"
                  ? "text-amber-600 font-medium"
                  : "text-secondary"
              } hover:text-amber-600 font-medium text-base cursor-pointer transition-all duration-300 ease-in-out`}
            >
              About
            </div>
          </motion.a>
        </Link>
        <motion.div
          variants={variant}
          className="flex justify-center items-center"
        >
          <div
            onClick={() => setShowModal(!showModal)}
            className={`px-3 py-2 bg-gradient-to-br from-amber-600 via-amber-800 to-indigo-900 rounded-md font-medium text-base cursor-pointer transition-all duration-300 ease-in-out`}
          >
            Contact Me
          </div>
          <Modal
            isOpen={showModal}
            closeModal={setShowModal}
            title="Contact me"
          >
            <FormContactMe />
          </Modal>
        </motion.div>
      </motion.div>
      <div
        className="block lg:hidden text-2xl py-4 pl-4 text-secondary blur-none"
        onClick={() => setToggleNav(!toggleNav)}
      >
        {toggleNav ? <HiOutlineX /> : <HiOutlineMenuAlt2 />}
      </div>
    </nav>
  );
}

export default TopNav;
