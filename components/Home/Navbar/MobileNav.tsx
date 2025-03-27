"use client";
import React from "react";
import Link from "next/link";
import { navLinks } from "@/constant/constant";
import { CgClose } from "react-icons/cg";

interface MobileNavProps {
  showNav: boolean;
  closeNav: () => void;
}

const MobileNav = ({ showNav, closeNav }: MobileNavProps) => {
  const navOpen = showNav ? "translate-x-0" : "translate-x-[-100%]";

  return (
    <div>
      {/* Overlay */}
      <div 
        className={`fixed ${navOpen} inset-0 z-[1002] bg-black opacity-70 transition-all duration-300 w-full h-screen`}
        onClick={closeNav}
      />
      
      {/* Mobile Menu */}
      <div 
        className={`text-white ${navOpen} fixed flex flex-col h-full transition-all duration-500 w-[80%] sm:w-[60%] bg-[#A67B5B] space-y-6 z-[1050]`}
      >
        <div className="flex-1 flex flex-col justify-center">
          {navLinks.map((link) => (
            <Link 
              key={link.id} 
              href={link.url} 
              onClick={closeNav}
              className="ml-12 border-b-[1.5px] pb-1 border-white hover:text-[#f0e6dc] transition-colors"
            >
              <p className="text-xl sm:text-[30px] w-fit">
                {link.name}
              </p>
            </Link>
          ))}
        </div>
        
        <CgClose 
          onClick={closeNav} 
          className="text-white cursor-pointer absolute top-6 right-6 w-8 h-8 hover:text-[#f0e6dc] transition-colors" 
        />
      </div>
    </div>
  );
};

export default MobileNav;