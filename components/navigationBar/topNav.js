import React, { useEffect, useState } from 'react'
import {HiOutlineMenuAlt2} from 'react-icons/hi'

function TopNav() {
  const [scroll, setScroll] = useState(false)

  function handleScroll(){
    document.body.scrollTop > 30 || document.documentElement.scrollTop > 30 ? setScroll(true) : setScroll(false)
  }
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
  },[])
  return (
    <nav className={`sticky top-0 left-0 z-10 w-full flex justify-between items-center text-secondary px-8 md:px-20 transition-all duration-300 ease-in-out ${scroll ? 'glassmorph h-20': 'h-28'}`}>
      <div className='text-2xl font-bold blur-none'>
        RA.
      </div>
      <div className='text-2xl text-secondary blur-none'>
        <HiOutlineMenuAlt2/>
      </div>
    </nav>
  )
}

export default TopNav
