import React from 'react'
import { FaInstagram, FaEnvelope } from 'react-icons/fa'
import { FaTelegram } from 'react-icons/fa'
import { SiTiktok } from 'react-icons/si'

const Footer = () => {
  return (
    <footer className="bg-stone-800 text-stone-100 pt-12 pb-8">
      <div id="contact" className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* About Section */}
          <div className="md:col-span-1">
            <h3 className="text-xl font-serif font-bold text-[#c09569] mb-4">Chapters Book Club</h3>
            <p className="text-stone-300 mb-4">
              AASTU&apos;s premier literary community fostering meaningful discussions and connections through shared reading experiences.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://www.instagram.com/chaptersandchats/profilecard/?igsh=YTJ1Zzl2cnk5aDVm" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-stone-300 hover:text-[#c09569] transition-colors"
                aria-label="Instagram"
              >
                <FaInstagram size={20} />
              </a>
              <a 
                href="https://www.tiktok.com/@chapterschats?_t=8qhon1yT0nm&_r=1" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-stone-300 hover:text-[#c09569] transition-colors"
                aria-label="TikTok"
              >
                <SiTiktok size={20} />
              </a>
              <a 
                href="https://t.me/ccbo23" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-stone-300 hover:text-[#c09569] transition-colors"
                aria-label="Telegram"
              >
                <FaTelegram size={20} />
              </a>
              <a 
                href="mailto:chapterswithchats@gmail.com" 
                className="text-stone-300 hover:text-[#c09569] transition-colors"
                aria-label="Email"
              >
                <FaEnvelope size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links  */}
          <div className="md:col-span-1 flex justify-center">
            <div>
              <h4 className="text-lg font-serif font-semibold text-[#c09569] mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-stone-300 hover:text-white transition-colors">Upcoming Reads</a></li>
                <li><a href="#" className="text-stone-300 hover:text-white transition-colors">Past Discussions</a></li>
                <li><a href="#" className="text-stone-300 hover:text-white transition-colors">Join Our Club</a></li>
                <li><a href="#" className="text-stone-300 hover:text-white transition-colors">Event Calendar</a></li>
              </ul>
            </div>
          </div>

          {/* Contact */}
          <div className="md:col-span-1 ml-8">
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
