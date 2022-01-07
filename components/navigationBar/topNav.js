import React, { useEffect, useState } from 'react'
import {HiOutlineMenuAlt2, HiOutlineX} from 'react-icons/hi'
import {motion} from 'framer-motion'

function TopNav({toggleNav, setToggleNav}) {
  const variant = {
    initial: {
      opacity: 0,
      x: -60,
    },
    animate: {
      opacity: 1,
      x: 0,
      transition: {
        duration: .5,
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

  const [scroll, setScroll] = useState(false)

  function handleScroll(){
    document.body.scrollTop > 30 || document.documentElement.scrollTop > 30 ? setScroll(true) : setScroll(false)
  }
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
  },[])
  return (
    <motion.nav 
      variants={variant}
      animate="animate"
      initial="initial"
      className={`sticky top-0 left-0 z-20 w-full flex justify-between items-center  text-secondary px-8 md:px-20 transition-all duration-300 ease-in-out ${scroll ? 'glassmorph h-20 border-b border-[#ffffff20]': 'h-28'} ${toggleNav ? 'border-b border-[#ffffff20] glassmorph' : ''}`}>
      <div className='text-2xl w-auto h-8 font-bold blur-none'>
        RA.
      </div>
      <div className='text-2xl py-4 pl-4 text-secondary blur-none' onClick={ ()=> setToggleNav(!toggleNav)}>
        {toggleNav ? 
          <HiOutlineX/>
        :
          <HiOutlineMenuAlt2/>
        }
      </div>
    </motion.nav>
  )
}

export default TopNav
