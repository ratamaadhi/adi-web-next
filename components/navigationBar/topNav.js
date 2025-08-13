import React, { useEffect, useState } from 'react';
import { HiOutlineMenuAlt2, HiOutlineX } from 'react-icons/hi';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { useRouter } from 'next/router';
import useInnerWidth from '../../lib/hooks/useInnerWidth';
import useScroll from '../../lib/hooks/useScroll';
import Modal from '../modal/Modal';
import FormContactMe from '../form/FormContactMe';
import { linkCV } from '../../util/const';
import { fetchAPI } from '../../lib/api';

function TopNav({ toggleNav, setToggleNav = () => {} }) {
  const [showModal, setShowModal] = useState(false);
  const [cv, setCv] = useState(linkCV);
  const [navClasses, setNavClasses] = useState('');

  const { scroll } = useScroll({ limit: 30 });
  const router = useRouter();
  const path = router.route;

  const { windowWidth } = useInnerWidth();

  // async function getCv() {
  //   let { data, error } = await supabase
  //     .from('const')
  //     .select('url')
  //     .eq('name', 'cv');
  //   return { data, error };
  // }

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

  useEffect(() => {
    const initData = async () => {
      const data = await fetchAPI('/bio-links?name_eq=cv');
      setCv(data[0]?.url ?? linkCV);
    };
    initData();
  }, []);

  useEffect(() => {
    const baseClasses =
      'sticky left-0 top-0 z-20 flex w-full items-center justify-between px-4 text-secondary transition-all duration-300 ease-in-out 2xl:container md:px-20 2xl:mx-auto';
    const dynamicClasses = `${scroll ? 'glassmorph h-20' : 'h-28'} ${
      toggleNav && windowWidth < 1024 && 'glassmorph'
    }`;
    setNavClasses(`${baseClasses} ${dynamicClasses}`);
  }, [scroll, toggleNav, windowWidth]);

  return (
    <nav className={navClasses}>
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
        className="hidden w-fit items-center justify-end gap-4 px-2 py-2 lg:flex"
      >
        <Link href="/projects">
          <motion.div
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
          </motion.div>
        </Link>
        <Link href="/about">
          <motion.div
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
          </motion.div>
        </Link>

        <motion.a
          variants={variant}
          className="flex items-center justify-center"
          href={cv}
          target="_blank"
        >
          <div className="cursor-pointer rounded-md border border-secondary px-3 py-2 text-base font-medium transition-all duration-300 ease-in-out">
            Download CV
          </div>
        </motion.a>

        {/* <motion.div
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
        </motion.div> */}
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
