"use client";
import React from 'react';
import Image from 'next/image';

const RecentReads = () => {
  const handleExploreBooks = () => {
    // Redirect to your TikTok page
    window.open('https://www.tiktok.com/@chapterschats?_t=8qhon1yT0nm&_r=1', '_blank');
  };
  return (
    <div className="min-h-screen bg-stone-50 py-16">
      <div className="max-w-5xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-serif font-bold text-stone-800 mb-4">
            Our Featured Reads
          </h1>
          <p className="text-xl text-stone-600 max-w-3xl mx-auto">
            Discover the books sparking conversations in our AASTU Chapters
          </p>
        </div>

        {/* Books Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {[
            {
              title: "The Silent Patient",
              author: "Alex Michaelides",
              description: "A psychological thriller about a woman who shoots her husband and then stops speaking",
              image: "/images/read1.jpg",
              rating: "4.5"
            },
            {
              title: "Tell Me Your Dreams",
              author: "Sidney Sheldon",
              description: "A chilling tale of multiple personalities and a mysterious murder",
              image: "/images/read2.jpg",
              rating: "4.3"
            },
            {
              title: "The Alchemist",
              author: "Paulo Coelho",
              description: "A philosophical novel about following one's dreams and destiny",
              image: "/images/read3.jpg",
              rating: "4.7"
            }
          ].map((book, index) => (
            <div 
              key={index} 
              className="bg-white rounded-lg shadow-md hover:shadow-xl transition-all border border-stone-200 flex flex-col"
            >
              {/* Book Cover - Using Next.js Image component */}
              <div className="h-96 p-4 flex items-center justify-center bg-stone-100 relative">
                <Image 
                  src={book.image} 
                  alt={book.title}
                  fill
                  className="object-cover rounded-lg shadow-lg"
                />
              </div>
              
              {/* Book Info */}
              <div className="p-6 flex-grow">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-serif font-semibold text-stone-800">
                    {book.title}
                  </h3>
                  <span className="flex items-center text-[#c09569] font-medium">
                    ★ {book.rating}
                  </span>
                </div>
                <p className="text-stone-600 italic mb-3">{book.author}</p>
                <p className="text-stone-600 mb-4">{book.description}</p>
                
                {/* Discussion Button */}
                <button className="mt-auto w-full py-2 bg-stone-100 hover:bg-[#c09569] hover:text-white text-stone-700 rounded transition-colors">
                  View Discussion Notes
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <button onClick={handleExploreBooks} className="px-8 py-3 bg-[#c09569] hover:bg-[#a3672b] rounded-lg text-lg text-white transition-colors shadow-md">
            Explore More Books →
          </button>
        </div>
      </div>
    </div>
  );
};

export default RecentReads;
