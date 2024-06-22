import React from 'react'

function Profile() {
  return (
    <div className=' mt-10 profile'>
        <div className='flex flex-col justify-center items-center gap-2'>
       <img src="/images/hero.jpeg" alt="hero" className="h-32 w-32 object-cover rounded-full" />
    <h2 className='text-4xl m-auto mt-8   leading-tight font-medium tracking-wide bg-clip-text text-transparent bg-gradient-to-br from-blue-400 to-orange-500'>Namaste, I&apos;m Jeevan</h2>
    <h2 class="text-xl mt-8"><span className='block'>I am a software engineer and writer.</span></h2>
    <h2 class="text-xl mt-2"><span className='block'>I help create tools that enable human progress.</span></h2>
    <div className='flex gap-10 mt-10 justify-around '>
        <a href="#"><img src='/images/x.png' alt="twitter" width="30px"/></a>
        <a href="#"><img src='/images/github.png' alt="twitter" width="30px"/></a>
        <a href="#"><img src='/images/instagram.png' alt="twitter" width="30px"/></a>
        <a href="#"><img src='/images/instagram.png' alt="twitter" width="30px"/></a>
        <a href="#"><img src='/images/linkedin.png' alt="twitter" width="30px"/></a>

    </div>
    </div>
    <div class="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-4 mb-4 mt-12 "><a class="col-auto" target="_self" href="/digital-security"><div class=" bg-white/[10%] backdrop-blur-md border-b border-white/[10%] rounded-2xl duration-300 hover:text-orange-hover px-3 py-2" ><div class="font-medium  text-center" style={{fontSize:"16px"}}>Digital Security Guide</div></div></a><a class="col-auto" target="_self" href="/code"><div class="bg-white/[10%] backdrop-blur-md backdrop-saturate-150 backdrop-brightness-100 border-b border-white/[10%] rounded-2xl duration-300 hover:text-orange-hover px-3 py-2"><div class="font-medium  text-center" style={{fontSize:"16px"}}>Code Tutorials</div></div></a><a class="col-auto" target="_self" href="/projects"><div class="bg-white/[10%] backdrop-blur-md backdrop-saturate-150 backdrop-brightness-100 border-b border-white/[10%] rounded-2xl duration-300 hover:text-orange-hover px-3 py-2"><div class="font-medium  text-center" style={{fontSize:"16px"}}>Apps &amp; Tools</div></div></a></div>

    </div>
  )
}

export default Profile