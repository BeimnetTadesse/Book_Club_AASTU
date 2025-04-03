"use client";
import React from 'react'

const Hero = () => {
   const handleJoinClick = () => {
    // Redirect to your Telegram channel
    window.open('https://t.me/ccbo23', '_blank');
  };
  return (
    <div id="home" className="relative w-full h-screen">
      {/* Background Image with overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url('/images/books.jpg')` }}
      />
      <div className="absolute inset-0 bg-black/30"></div>
      
      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 text-amber-50 font-serif">
          Discover Your Next Read
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-2xl text-amber-100 text-center font-medium">
          Where stories come alive through shared reading
        </p>
        <button onClick={handleJoinClick} className="px-8 py-3 bg-[#c09569] hover:bg-[#a3672b] rounded-lg text-lg text-white transition-colors shadow-lg">
          Join Us
        </button>
      </div>
    </div>
  )
}

export default Hero
