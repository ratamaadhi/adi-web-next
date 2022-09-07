import React, { useState } from 'react';
import { HiOutlineMenuAlt2, HiOutlineX } from 'react-icons/hi';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { useRouter } from 'next/router';
import useInnerWidth from '../../lib/hooks/useInnerWidth';
import useScroll from '../../lib/hooks/useScroll';
import Modal from '../modal/Modal';
import FormContactMe from '../form/FormContactMe';

function TopNav({ toggleNav, setToggleNav = () => {} }) {
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
      className={`sticky top-0 left-0 z-20 flex w-full items-center justify-between px-8 text-secondary  transition-all duration-300 ease-in-out md:px-20 2xl:container 2xl:mx-auto ${
        scroll ? 'glassmorph h-20 border-b border-[#ffffff20]' : 'h-28'
      } ${
        toggleNav &&
        windowWidth < 1024 &&
        'glassmorph border-b border-[#ffffff20]'
      }`}
    >
      <Link href="/">
        <motion.div
          variants={variant}
          animate="animate"
          initial="initial"
          className="h-8 w-auto cursor-pointer text-2xl font-bold blur-none"
        >
          RA.
        </motion.div>
      </Link>
      <motion.div
        variants={variant}
        initial="exit"
        animate="animate"
        className="hidden w-[300px] items-center justify-end px-2 py-2 lg:flex"
      >
        <Link href="/projects">
          <motion.a
            variants={variant}
            className="flex w-20 items-center justify-center"
          >
            <div
              className={`${
                path === '/projects'
                  ? 'font-medium text-amber-600'
                  : 'text-secondary'
              } cursor-pointer text-base font-medium transition-all duration-300 ease-in-out hover:text-amber-600`}
            >
              Projects
            </div>
          </motion.a>
        </Link>
        <Link href="/about">
          <motion.a
            variants={variant}
            className="flex w-20 items-center justify-center"
          >
            <div
              className={`${
                path === '/about'
                  ? 'font-medium text-amber-600'
                  : 'text-secondary'
              } cursor-pointer text-base font-medium transition-all duration-300 ease-in-out hover:text-amber-600`}
            >
              About
            </div>
          </motion.a>
        </Link>
        <motion.div
          variants={variant}
          className="flex items-center justify-center"
        >
          <div
            onClick={() => setShowModal(!showModal)}
            className="cursor-pointer rounded-md bg-gradient-to-br from-amber-600 via-amber-800 to-indigo-900 px-3 py-2 text-base font-medium transition-all duration-300 ease-in-out"
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
        className="block py-4 pl-4 text-2xl text-secondary blur-none lg:hidden"
        onClick={() => setToggleNav(!toggleNav)}
      >
        {toggleNav ? <HiOutlineX /> : <HiOutlineMenuAlt2 />}
      </div>
    </nav>
  );
}

export default TopNav;
