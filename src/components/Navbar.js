import Link from 'next/link'
import React from 'react'

function Navbar() {
  return (
    <nav className='max-w-full rounded-b-2xl md:rounded-3xl z-[1000] sticky mx-auto top-0 backdrop-blur-sm bg-white/[10%] backdrop-saturate-200 backdrop-brightness-150 border-b border-white/[10%] py-2 px-3  md:mt-5 md:px-4 flex justify-around space-x-1 md:space-x-4 font-medium text-sm md:text-base bg-[#FFFFFF1A]'>
        <div className="flex gap-2 sm:gap-10 w-full " style={{fontSize:"16px",fontWeight:500,lineHeight:"28px"}}>
    <div className="w-2/5 flex justify-start px-2 items-center">
        <Link href="/"><img src='/images/logo-j.png' alt="logo" width="50px"/></Link>
    </div>
    <div className="w-1/2 flex justify-around gap-2 items-center">
    <Link href="/" class="px-2 sm:px-3 py-2 rounded-2xl  text-white hover:bg-black shadow-md transition-all duration-500 hover:text-orange-400">
            Home
        </Link>
    <Link href="/about" class="px-2 sm:px-3 py-2 rounded-2xl  text-white hover:bg-black shadow-md transition-all duration-500 hover:text-orange-400">
            About
        </Link>
    <Link href="/projects" class="px-2 sm:px-3 py-2 rounded-2xl  text-white hover:bg-black shadow-md transition-all duration-500 hover:text-orange-400">
    Projects
        </Link>
    <Link href="/contact" class="px-2 sm:px-3 py-2 rounded-2xl  text-white hover:bg-black shadow-md transition-all duration-500 hover:text-orange-400">
    Contact
        </Link>
    <Link href="#" class="px-2 sm:px-3 py-2 rounded-2xl  text-white hover:bg-black shadow-md transition-all duration-500 hover:text-orange-400">
    Resume
        </Link>
   
        
    </div>
</div>

        
    </nav>
  )
}

export default Navbar