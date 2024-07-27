import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import LatestWork from '@/components/LatestWork'
import Profile from '@/components/Profile'
import React from 'react'

function Home() {
  return (
    <div >
      <Profile/>
      <LatestWork/>
      <Contact/>
      
    </div>
  )
}

export default Home