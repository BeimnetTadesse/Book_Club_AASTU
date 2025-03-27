"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { navLinks } from "@/constant/constant";
import { FiMenu } from "react-icons/fi";
import { CgClose } from "react-icons/cg";

const Nav = () => {
  const [scrolled, setScrolled] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-200 h-[12vh] ${
        scrolled ? "bg-[#c09569]" : "bg-transparent"
      }`}
    >
      <div className="flex items-center justify-between h-full w-[90%] sm:w-[80%] mx-auto">
        <div className="text-2xl font-bold text-white sm:text-3xl">
          Chapters and Chats
        </div>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center space-x-10">
          {navLinks.map((link) => (
            <Link key={link.id} href={link.url}>
              <p className="text-white hover:text-[#a3672b] font-semibold transition-colors duration-200">
                {link.name}
              </p>
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden">
          <button onClick={() => setShowMobileMenu(true)} className="text-white p-2">
            <FiMenu size={24} />
          </button>
        </div>
      </div>

      {/* Mobile Slide-out Menu */}
      {showMobileMenu && (
        <>
          {/* Overlay */}
          <div
            className="fixed inset-0 bg-black opacity-70 z-[1001]"
            onClick={() => setShowMobileMenu(false)}
          />

          {/* Side Menu */}
          <div className="fixed top-0 left-0 w-[80%] sm:w-[60%] h-full bg-[#A67B5B] z-[1050] flex flex-col px-6 py-10 transition-all duration-500">
            <CgClose
              onClick={() => setShowMobileMenu(false)}
              className="text-white cursor-pointer absolute top-6 right-6 w-8 h-8 hover:text-[#f0e6dc]"
            />
            <div className="mt-12 space-y-6">
              {navLinks.map((link) => (
                <Link
                  key={link.id}
                  href={link.url}
                  onClick={() => setShowMobileMenu(false)}
                  className="border-b-[1.5px] pb-1 border-white hover:text-[#f0e6dc] transition-colors"
                >
                  <p className="text-xl sm:text-[30px] text-white">{link.name}</p>
                </Link>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Nav;
