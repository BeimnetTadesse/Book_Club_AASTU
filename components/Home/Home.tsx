import React from 'react'
import Hero from './Hero'
import About from './About'
import Benefits from './Benefits'
import RecentReads from './RecentReads'
import Review from './Review'

const Home = () => {

  return (
    <div className='overflow-hidden'>
     <Hero/> 
     <About/>
     <Benefits/>
     <RecentReads/>
     <Review/>
    </div>
  )
}

export default Home