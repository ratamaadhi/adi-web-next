import React from 'react'
import {HiOutlineMenuAlt2} from 'react-icons/hi'

function TopNav() {
  return (
    <nav className='sticky w-full h-40 flex justify-between items-center text-secondary px-20'>
      <div className='text-2xl font-bold'>
        RA.
      </div>
      <div className='text-2xl text-secondary'>
        <HiOutlineMenuAlt2/>
      </div>
    </nav>
  )
}

export default TopNav
