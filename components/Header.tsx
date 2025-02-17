"use client"

import React, { useState } from 'react';
import Link from 'next/link';
import { Spin as Hamburger } from 'hamburger-react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="px-16 py-9 w-full fixed top-0 left-0 right-0 z-50">
      {/* Add gradient background div */}
      <div 
        className="absolute inset-0 bg-gradient-to-b from-orange-50/90 via-orange-50/50 to-transparent backdrop-blur-[2px]"
        style={{ maskImage: 'linear-gradient(to bottom, black 50%, transparent 100%)' }}
      />
      
      {/* Add relative positioning to nav to appear above gradient */}
      <nav className="flex justify-between items-center max-w-[88rem] mx-auto relative">
        <div className="flex items-center">
          <Link href="/" className="flex items-center space-x-2">
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="24" height="24" rx="4" fill="currentColor" />
            </svg>
            <span className="font-bold text-2xl">MessNArt</span>
          </Link>
        </div>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <Link 
            href="/labs" 
            className="text-gray-900 hover:text-gray-600 font-semibold relative group"
          >
            Culture
            <span className="absolute -bottom-1 left-0 w-0 h-2 bg-orange-400 transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link 
            href="/updates" 
            className="text-gray-900 hover:text-gray-600 font-semibold relative group"
          >
            Process
            <span className="absolute -bottom-1 left-0 w-0 h-2 bg-orange-400 transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link 
              href="/contact" 
              className="px-6 py-1 border border-gray-900 font-semibold relative group overflow-hidden"
            >
              <span className="relative z-10 group-hover:text-white transition-colors duration-300">
                Apply
              </span>
              <div className="absolute inset-0 bg-gray-900 transform translate-y-full transition-transform duration-300 ease-out group-hover:translate-y-0"/>
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <Hamburger toggled={isOpen} toggle={setIsOpen} size={20} />
        </div>
      </nav>

      {/* Mobile Menu - update z-index to be above header gradient */}
      <div 
        className={`${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        } fixed top-0 right-0 h-screen w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out z-[60] md:hidden`}
      >
        <div className="flex flex-col p-6 space-y-6">
          <div className="flex justify-end">
            <Hamburger toggled={isOpen} toggle={setIsOpen} size={20} />
          </div>
          <Link 
            href="/labs" 
            className="text-gray-900 hover:text-gray-600 text-lg"
            onClick={() => setIsOpen(false)}
          >
            Labs
          </Link>
          <Link 
            href="/updates" 
            className="text-gray-900 hover:text-gray-600 text-lg"
            onClick={() => setIsOpen(false)}
          >
            Updates
          </Link>
          <Link 
            href="/contact" 
            className="px-4 py-2 border border-gray-900 rounded hover:bg-gray-100 text-center text-lg"
            onClick={() => setIsOpen(false)}
          >
            Get in touch
          </Link>
        </div>
      </div>

      {/* Overlay - update z-index to be above header gradient */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-[55] md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}
    </header>
  );
};

export default Header;