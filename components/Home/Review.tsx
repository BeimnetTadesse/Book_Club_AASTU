"use client";
import React, { useState } from 'react';
import { FaQuoteLeft, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import Image from 'next/image';

const Review = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const stories = [
    {
      name: "Jason Doe",
      role: "Student",
      quote: "Joining Chapters transformed my reading habits. The thoughtful discussions helped me appreciate literature in ways I never imagined possible.",
      avatar: "/images/c1.jpg"
    },
    {
      name: "Jacky Doe",
      role: "Student",
      quote: "As someone with a busy schedule, the book club's flexible meetings and engaging selections keep me reading regularly. It's my favorite monthly activity!",
      avatar: "/images/c2.jpg"
    },
    {
      name: "John Doe",
      role: "Student",
      quote: "The diverse book selections have expanded my worldview and given me fresh perspectives to share with my students. A truly enriching experience.",
      avatar: "/images/c3.jpeg"
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === stories.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? stories.length - 1 : prev - 1));
  };

  return (
    <div id="review" className="bg-stone-50 py-16 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-serif font-bold text-stone-800 mb-4">
            Our Success Stories
          </h1>
          <p className="text-xl text-stone-600">
            Hear what our members say about their Chapters experience
          </p>
        </div>

        {/* Slider */}
        <div className="relative">
          {/* Testimonial Card */}
          <div className="bg-white p-8 md:p-10 rounded-xl shadow-lg border border-stone-200">
            <div className="flex flex-col md:flex-row items-center gap-8">
              {/* Avatar - Using Next.js Image component */}
              <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-[#c09569] relative">
                <Image 
                  src={stories[currentSlide].avatar} 
                  alt={stories[currentSlide].name}
                  fill
                  className="object-cover"
                />
              </div>
              
              {/* Content */}
              <div className="flex-1">
                <FaQuoteLeft className="text-[#c09569] text-2xl mb-4" />
                <p className="text-stone-700 text-lg italic mb-6">
                  &ldquo;{stories[currentSlide].quote}&rdquo;
                </p>
                <div>
                  <h3 className="text-xl font-serif font-semibold text-stone-800">
                    {stories[currentSlide].name}
                  </h3>
                  <p className="text-stone-600">{stories[currentSlide].role}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Arrows */}
          <button 
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-[#c09569] hover:bg-[#a3672b] text-white p-2 rounded-full shadow-md transition-colors"
          >
            <FaChevronLeft size={20} />
          </button>
          <button 
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-[#c09569] hover:bg-[#a3672b] text-white p-2 rounded-full shadow-md transition-colors"
          >
            <FaChevronRight size={20} />
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {stories.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentSlide ? 'bg-[#c09569]' : 'bg-stone-300'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;