import React, { useState } from 'react'

function Projects() {
    const [projectsData,setProjectsData]=useState([
        {
            "image":"https://ikartik.com/_next/image?url=%2Fblogcontent%2Fsignificance-makar-sankranti%2Fsunrise.jpg&w=1920&q=75",
            "Name":"The Astronomical Significance of Makar Sankranti",
            "description":"Makar Sankranti is celebrated on January 14th, and is one of the few festivals on the Hindu lunar calendar that are based on the Sun's position."
        }
        
    ])
  return (
    <div className='p-5'>
        <h2 className='mt-5 text-4xl'>Projects</h2>
        <div className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-4  mt-10'>

        {projectsData.length>0 && projectsData.map((ele,index)=>(
            
            <div className=' flex p-2  gap-6 cursor-pointer  items-center' key={index}>
                <div className='w-60  '>
                    <img src={ele.image} alt="project_image" style={{height:"160px",margin:"auto",borderRadius:"15px"}}/>
                </div>
                <div className='w-3/5  '>
                    <h4 className='hover:text-orange-400' style={{fontSize:"24px",lineHeight:"35px"}}>{ele.Name}</h4>
                    <p className='mt-3' style={{fontSize:"16px",lineHeight:"25px"}}>{ele.description}</p>
                </div>

            </div>

        ))}
        </div>
    </div>
  )
}

export default Projects