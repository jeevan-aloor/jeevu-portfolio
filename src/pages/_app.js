import React from 'react'
import Home from '.'
import '../../styles/global.css'
import Navbar from '@/components/Navbar'
import Head from 'next/head';


function Application() {
  return (
    <>
    <Head>
    <link
      href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap"
      rel="stylesheet"
    />
    <link
      href="https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500;600;700&display=swap"
      rel="stylesheet"
    />
    <link
      href="https://fonts.googleapis.com/css2?family=Nunito:wght@300;400;500;600;700&display=swap"
      rel="stylesheet"
    />
  </Head>
    <div className='antialiased text-gray-200 transition ease-in-out  font-body selection:bg-amber-500 selection:text-gray-200 ' >
      <div className='  mid_content   relative'  >
        <div className=' sticky top-0 w-full  sm:m-2'>
        <Navbar/>
        </div>
        <Home/>

      </div>
    
    </div>
    </>
  )
}

export default Application