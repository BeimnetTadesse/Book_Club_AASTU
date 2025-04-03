import React from 'react'
import { FaFacebook, FaTwitter, FaInstagram, FaEnvelope } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className="bg-stone-800 text-stone-100 pt-12 pb-8">
      <div id="contact" className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          {/* About Section */}
          <div className="md:col-span-2">
            <h3 className="text-xl font-serif font-bold text-[#c09569] mb-4">Chapters Book Club</h3>
            <p className="text-stone-300 mb-4">
              AASTU&apos;s premier literary community fostering meaningful discussions and connections through shared reading experiences.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-stone-300 hover:text-[#c09569] transition-colors">
                <FaFacebook size={20} />
              </a>
              <a href="#" className="text-stone-300 hover:text-[#c09569] transition-colors">
                <FaTwitter size={20} />
              </a>
              <a href="#" className="text-stone-300 hover:text-[#c09569] transition-colors">
                <FaInstagram size={20} />
              </a>
              <a href="#" className="text-stone-300 hover:text-[#c09569] transition-colors">
                <FaEnvelope size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-serif font-semibold text-[#c09569] mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-stone-300 hover:text-white transition-colors">Upcoming Reads</a></li>
              <li><a href="#" className="text-stone-300 hover:text-white transition-colors">Past Discussions</a></li>
              <li><a href="#" className="text-stone-300 hover:text-white transition-colors">Join Our Club</a></li>
              <li><a href="#" className="text-stone-300 hover:text-white transition-colors">Event Calendar</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-serif font-semibold text-[#c09569] mb-4">Contact Us</h4>
            <ul className="space-y-2 text-stone-300">
              <li>AASTU Campus</li>
              <li>Addis Ababa, Ethiopia</li>
              <li>chapterswithchats@gmail.com</li>

            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-stone-700 my-8"></div>

        {/* Copyright */}
        <div className="text-center text-stone-400 text-sm">
          <p>© {new Date().getFullYear()} Chapters and Chats Book Club AASTU. All rights reserved.</p>
          <p className="mt-2 ">
            Website created by{' '}
            <a 
              href="mailto:beimnetasnin@example.com" 
              className="hover:text-[#c09569] text-[#c09569] transition-colors"
            >
             Beimnet Tadesse
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
