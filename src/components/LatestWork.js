import React from 'react'
import { useRouter } from 'next/router'

function LatestWork() {
  const router=useRouter()
  return (
    <div className='p-3'>
        <h2 className='text-3xl font-medium mt-12  ' >Latest Projects</h2>
        <div className='pb-5 mt-5' style={{borderBottom:"0.2px solid white"}}>
            <h3 className='hover:text-orange-400 '  style={{fontSize:"22px",fontWeight:"500"}}>Real Estate Website </h3>
            <p  style={{color:"rgb(156, 163, 175)",fontSize:"16px",fontWeight:"400"}}>Developed a dynamic real estate portfolio application using Next.js, Node.js, SQL, and Express.js, enabling users to manage and view property listings efficiently.</p>
        </div>
        <div className=' hover:text-orange-400  pb-5 mt-5'  style={{borderBottom:"0.2px solid white"}}>
            <h3  className="hover:text-orange-400 " style={{fontSize:"22px",fontWeight:"500"}}>Bill Reminder</h3>
            <p  style={{color:"rgb(156, 163, 175)",fontSize:"16px",fontWeight:"400"}}>Created a bill reminder application with Next.js, Node.js, SQL, and Express.js, designed to help users track and get notifications for their upcoming bill payments.</p>
        </div>
        <div className='  pb-5 mt-5'  style={{borderBottom:"0.2px solid white"}}>
            <h3 className='hover:text-orange-400 '  style={{fontSize:"22px",fontWeight:"500"}}>Business.com</h3>
            <p  style={{color:"rgb(156, 163, 175)",fontSize:"16px",fontWeight:"400"}}>Built a comprehensive business directory and networking platform using Next.js, Node.js, SQL, and Express.js, facilitating seamless connections between businesses and customers.</p>
        </div>
        <h3 className='text-xl mt-5 flex items-center gap-2 cursor-pointer' onClick={()=>router.push("/projects")}>More Projects<svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg></h3>
        

    </div>
  )
}

export default LatestWork