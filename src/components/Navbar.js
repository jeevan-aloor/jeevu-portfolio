import React from 'react'

function Navbar() {
  return (
    <nav className='max-w-full rounded-b-2xl md:rounded-3xl z-[1000] sticky mx-auto top-0 backdrop-blur-sm bg-white/[10%] backdrop-saturate-200 backdrop-brightness-150 border-b border-white/[10%] py-2 px-3  md:mt-5 md:px-4 flex justify-around space-x-1 md:space-x-4 font-medium text-sm md:text-base bg-[#FFFFFF1A]'>
        <div className="flex gap-2 sm:gap-10 w-full " style={{fontSize:"16px",fontWeight:500,lineHeight:"28px"}}>
    <div className="w-2/5 flex justify-start px-2 items-center">
        <img src='/images/logo-j.png' alt="logo" width="50px"/>
    </div>
    <div className="w-1/2 flex justify-around items-center">
    <a href="#" class="px-2 sm:px-3 py-2 rounded-2xl  text-white hover:bg-black shadow-md transition-all duration-500 hover:text-orange-400">
            About
        </a>
    <a href="#" class="px-2 sm:px-3 py-2 rounded-2xl  text-white hover:bg-black shadow-md transition-all duration-500 hover:text-orange-400">
            About
        </a>
    <a href="#" class="px-2 sm:px-3 py-2 rounded-2xl  text-white hover:bg-black shadow-md transition-all duration-500 hover:text-orange-400">
            About
        </a>
    <a href="#" class="px-2 sm:px-3 py-2 rounded-2xl  text-white hover:bg-black shadow-md transition-all duration-500 hover:text-orange-400">
            About
        </a>
   
        
    </div>
</div>

        
    </nav>
  )
}

export default Navbar