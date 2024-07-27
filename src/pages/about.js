import React from 'react'

function About() {
  return (
    <div className='p-5'>
        <h2 className='mt-5 text-4xl font-semibold'>About Me</h2>
        <div className='flex gap-10  border-b border-b-50 justify-center mt-6 pb-10'>
          <div>
          <h4  style={{fontSize:"24px"}}>Namaste! 🙏</h4>
          <h3 style={{fontSize:"28px",fontWeight:"500"}}>I&apos;m Jeevan Aloor.</h3>
          <p className='mt-6' style={{fontSize:"18px",lineHeight:"30px",fontWeight:"500"}}>You have found my personal corner of the Internet,

at the crossroads of technology, innovation, and user experience.</p>

<p className='mt-5' style={{fontSize:"18px",fontWeight:"500"}}>I help develop software solutions that enhance our digital world.</p>
          </div>
          <div>
            <img src="/images/hero.jpeg" alt="hero" className='rounded-2xl' width="400px"/>

          </div>
        </div>
        <div className='mt-6 border-b border-b-50 pb-10'>
          <h3 style={{fontSize:"22px",fontWeight:"500"}}>Work 👨🏽‍💻</h3>
          <p className='mt-6' style={{fontSize:"18px",fontWeight:"500",lineHeight:"30px"}}>I am a Software Developer at <a href='https://prabisha.com/' target='_blank' className='text-orange-400'>Prabisha Consulting</a>, where I am dedicated to creating innovative solutions and transforming the digital landscape.</p>
          <p  className='mt-4' style={{fontSize:"18px",fontWeight:"500",lineHeight:"30px"}}>Previously, I worked at <a href='https://anthive.tech/index.html' target='_blank' className='text-orange-400'>Anthive Technology</a> as a Junior Developer, where I contributed to creating cutting-edge solutions for our clients.</p>
          <p className='mt-4' style={{fontSize:"18px",fontWeight:"500",lineHeight:"30px"}}>Earlier, I worked as a freelancer, finding clients and creating custom software solutions for them. During this time, I honed my skills and delivered various successful projects to meet diverse client needs</p>
        </div>
        <div className='mt-6'>
          <h3 style={{fontSize:"22px",fontWeight:"500"}}>Play 🏝</h3>
          <p className='mt-6' style={{fontSize:"18px",fontWeight:"500",lineHeight:"30px"}}>I love traveling and exploring new places. There&apos;s always something special about experiencing a new culture. After all, isn&apos;t life all about experiencing new things?</p>
          <p  className='mt-4' style={{fontSize:"18px",fontWeight:"500",lineHeight:"30px"}}>There&apos;s nothing like a long drive to a new destination and seeing the world along the way.</p>
          <p className='mt-4' style={{fontSize:"18px",fontWeight:"500",lineHeight:"30px"}}>Sometimes I try to cook, but most of the time I help write the recipes. (I also help finish the food!)</p>
          <p className='mt-4' style={{fontSize:"18px",fontWeight:"500",lineHeight:"30px"}}>Occasionally, I write down some thoughts about science and technology.</p>
          <p className='mt-4' style={{fontSize:"18px",fontWeight:"500",lineHeight:"30px"}}>I also love playing games, reading blogs, learning new things, and exploring the world.</p>
        </div>
        <div class="border bg-white/[10%] backdrop-blur-md backdrop-saturate-20 backdrop-brightness-100 border-b border-white/[10%] rounded-2xl duration-300 sm:flex flex-col justify-center  gap-2 px-6 p-2 mt-10 " >
          <h4 style={{fontSize:"20px",fontWeight:"500"}}>About this site</h4>
          <p  style={{fontSize:"16px",fontWeight:"400"}}>This site is built using <a className='text-orange-400'>Next.js,</a> <a className='text-orange-400'>React,</a> and <a className='text-orange-400'>Tailwind CSS,</a> typeset in <a className='text-orange-400'>Poppins,</a> and hosted on <a className='text-orange-400'>Vercel.</a></p>
       
       </div>
    </div>
  )
}

export default About