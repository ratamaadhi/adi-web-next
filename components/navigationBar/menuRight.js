import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Link from 'next/link';
import { useRouter } from 'next/router';
import useScroll from '../../lib/hooks/useScroll';
import Modal from '../modal/Modal';
import FormContactMe from '../form/FormContactMe';
import { linkCV } from '../../util/const';
import supabase from '../../lib/supabase';

function MenuRight({ toggleNav, setToggleNav }) {
  const [showModal, setShowModal] = useState(false);
  const [cv, setCv] = useState(linkCV);

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

  function openModal() {
    setShowModal(true);
    setToggleNav(false);
  }

  function closeModal() {
    setShowModal(false);
  }

  async function getCv() {
    let { data, error } = await supabase
      .from('const')
      .select('url')
      .eq('name', 'cv');
    return { data, error };
  }

  useEffect(() => {
    const initData = async () => {
      const data = await getCv();
      setCv(data?.data[0]?.url ?? linkCV);
    };
    initData();
  }, []);

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
                ? 'top-28 h-[calc(100vh-112px)] border-t border-[#ffffff20]'
                : 'top-20 h-[calc(100vh-80px)] border-t-0'
            } glassmorph right-0 z-10 flex w-full flex-col items-center justify-start text-secondary transition-all duration-300 ease-in-out md:w-1/2 lg:hidden`}
          >
            <Link href="/projects">
              <motion.div
                variants={variant}
                className={`${
                  path === '/projects'
                    ? 'text-2xl font-medium text-amber-600'
                    : 'text-secondary'
                } flex h-20 w-full cursor-pointer items-center justify-center font-semibold transition-all duration-100 ease-in-out hover:text-2xl hover:text-amber-600`}
              >
                Projects
              </motion.div>
            </Link>
            <Link href="/about">
              <motion.div
                variants={variant}
                className={`${
                  path === '/about'
                    ? 'text-2xl font-medium text-amber-600'
                    : 'text-secondary'
                } flex h-20 w-full cursor-pointer items-center justify-center font-semibold transition-all duration-100 ease-in-out hover:text-2xl hover:text-amber-600`}
              >
                About
              </motion.div>
            </Link>
            <motion.div
              variants={variant}
              className="flex h-20 items-center justify-center"
            >
              <a
                className="cursor-pointer rounded-md border border-secondary bg-gradient-to-br px-3 py-2 font-semibold transition-all duration-100 ease-in-out hover:text-2xl"
                href={cv}
                rel="noreferrer"
                target="_blank"
              >
                Download CV
              </a>
            </motion.div>
            <motion.div
              variants={variant}
              className="flex h-20 items-center justify-center"
            >
              <div
                className="cursor-pointer rounded-md bg-gradient-to-br from-amber-600 via-amber-800 to-indigo-900 px-3 py-2 font-semibold transition-all duration-100 ease-in-out hover:text-2xl"
                onClick={() => openModal()}
              >
                Contact Me
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      <Modal
        isOpen={showModal}
        closeModal={() => closeModal()}
        title="Contact me"
      >
        <FormContactMe />
      </Modal>
    </>
  );
}

export default MenuRight;
