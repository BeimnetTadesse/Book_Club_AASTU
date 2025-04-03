import React from 'react'

const Benefits = () => {
  // Custom SVG icons in your color scheme
  const icons = {
    discussion: (
      <svg className="w-10 h-10 text-[#c09569]" viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
      </svg>
    ),
    author: (
      <svg className="w-10 h-10 text-[#c09569]" viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
      </svg>
    ),
    diversity: (
      <svg className="w-10 h-10 text-[#c09569]" viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    accountability: (
      <svg className="w-10 h-10 text-[#c09569]" viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    social: (
      <svg className="w-10 h-10 text-[#c09569]" viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    events: (
      <svg className="w-10 h-10 text-[#c09569]" viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    )
  };

  return (
    <div className="min-h-screen bg-stone-50 pt-16 pb-16">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-serif font-bold text-stone-800 mb-4">
            Why Join Our Book Club?
          </h1>
          <p className="text-xl text-stone-600 max-w-3xl mx-auto">
            Discover what makes Chapters AASTU&apos;s most engaging literary community
          </p>
        </div>

        {/* Benefits Grid */}
        <div  id="benefit" className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: "Thoughtful Discussions",
              description: "Engage in meaningful conversations that deepen your understanding of each book we read.",
              icon: icons.discussion
            },
            {
              title: "Author Connections",
              description: "Get exclusive access to author Q&A sessions and special events with writers.",
              icon: icons.author
            },
            {
              title: "Diverse Selections",
              description: "Explore books from different genres, cultures, and perspectives each month.",
              icon: icons.diversity
            },
            {
              title: "Reading Accountability",
              description: "Stay motivated with monthly reading goals and friendly check-ins.",
              icon: icons.accountability
            },
            {
              title: "Social Connections",
              description: "Meet fellow book lovers who share your passion for great literature.",
              icon: icons.social
            },
            {
              title: "Creative Events",
              description: "Participate in unique book-themed activities and literary celebrations.",
              icon: icons.events
            }
          ].map((benefit, index) => (
            <div 
              key={index} 
              className="bg-white p-8 rounded-lg shadow-md border border-stone-200 hover:shadow-lg transition-all"
            >
              <div className="mb-4 flex justify-center">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-serif font-semibold text-stone-800 mb-3 text-center">
                {benefit.title}
              </h3>
              <p className="text-stone-600 text-center">
                {benefit.description}
              </p>
              <div className="mt-4 pt-4 border-t border-stone-200 text-center">
                <span className="text-sm font-medium text-[#c09569]">
                  Chapters Exclusive
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  )
}

export default Benefits
