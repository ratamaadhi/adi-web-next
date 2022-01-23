import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/router";
import useScroll from "../../lib/hooks/useScroll";
import Modal from "../modal/Modal";
import FormContactMe from "../form/FormContactMe";

function MenuRight({ toggleNav, setToggleNav }) {
  const [showModal, setShowModal] = useState(false);
  const { scroll } = useScroll({ limit: 30 });
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

  function openModal() {
    setShowModal(true);
    setToggleNav(false);
  }

  function closeModal() {
    setShowModal(false);
  }

  return (
    <>
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
            } right-0 z-10 flex flex-col justify-start items-center w-full md:w-1/2 lg:hidden glassmorph transition-all duration-300 ease-in-out text-secondary`}
          >
            <Link href={"/projects"}>
              <motion.div
                variants={variant}
                className={`${
                  path == "/projects"
                    ? "text-amber-600 font-medium text-2xl"
                    : "text-secondary"
                } w-full h-20 flex justify-center items-center font-semibold hover:text-amber-600 hover:text-2xl transition-all duration-100 ease-in-out cursor-pointer`}
              >
                Projects
              </motion.div>
            </Link>
            {/* <motion.div
            variants={variant}
            className={`${
              path == "/blogs"
                ? "text-amber-600 font-medium text-2xl"
                : "text-secondary"
            } w-full h-20 flex justify-center items-center font-semibold hover:text-amber-600 hover:text-2xl transition-all duration-100 ease-in-out cursor-pointer`}
          >
            Blogs
          </motion.div> */}
            <Link href={"/about"}>
              <motion.div
                variants={variant}
                className={`${
                  path == "/about"
                    ? "text-amber-600 font-medium text-2xl"
                    : "text-secondary"
                } w-full h-20 flex justify-center items-center font-semibold hover:text-amber-600 hover:text-2xl transition-all duration-100 ease-in-out cursor-pointer`}
              >
                About
              </motion.div>
            </Link>
            <motion.div
              onClick={() => openModal()}
              variants={variant}
              className={`px-3 py-2 rounded-md flex justify-center items-center font-semibold bg-gradient-to-br from-amber-600 via-amber-800 to-indigo-900 hover:text-2xl transition-all duration-100 ease-in-out cursor-pointer`}
            >
              Contact Me
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      <Modal
        isOpen={showModal}
        closeModal={closeModal}
        title="Contact me"

      >
        <FormContactMe />
      </Modal>
    </>
  );
}

export default MenuRight;
