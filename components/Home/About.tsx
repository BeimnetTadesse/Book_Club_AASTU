import React from 'react'

const AboutUs = () => {
  return (
    <div id="about" className="min-h-screen bg-stone-50">


      {/* Content Section */}
      <div className="max-w-5xl mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-serif font-bold text-stone-800 mb-4">
            About Chapters Book Club
          </h2>
          <p className="text-stone-600 text-lg max-w-3xl mx-auto">
            We're a community of passionate readers who gather weekly to explore
            thought-provoking books and engage in lively discussions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Left Column */}
          <div>
            <h3 className="text-2xl font-serif font-semibold text-stone-700 mb-6">
              Why Join Our Club?
            </h3>
            
            <ul className="space-y-4">
              {[
                "Monthly curated book selections by our literary panel",
                "Exclusive author Q&A sessions and events",
                "Vibrant online and in-person discussion groups",
                "Member perks including early book releases"
              ].map((item, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-[#c09569] mr-3 mt-1">✓</span>
                  <span className="text-stone-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Column */}
          <div className="bg-stone-100 p-8 rounded-lg">
            <h3 className="text-2xl font-serif font-semibold text-stone-700 mb-6">
              Our Reading Philosophy
            </h3>
            <p className="text-stone-600 mb-6">
              We believe books are meant to be shared. Our club creates space for
              meaningful conversations that deepen our understanding of literature
              and each other.
            </p>
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 rounded-full bg-[#c09569] flex items-center justify-center text-white text-xl">
                50+
              </div>
              <div>
                <p className="font-medium text-stone-800">Weekly Meetings</p>
                <p className="text-sm text-stone-500">Across Universities</p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <button className="px-8 py-3 bg-[#c09569] hover:bg-[#a3672b] rounded-lg text-lg text-white transition-colors shadow-md">
            Join Our Next Discussion →
          </button>
        </div>
      </div>
    </div>
  )
}

export default AboutUs