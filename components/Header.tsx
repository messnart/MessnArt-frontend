"use client"

import React, { useState } from 'react';
import Link from 'next/link';
import { Spin as Hamburger } from 'hamburger-react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="header-content z-50 transition-all duration-300 px-16 py-9 w-full fixed top-0 left-0 right-0">
      {/* Theme-aware gradient background */}
      <div 
        className="absolute inset-0 backdrop-blur-[2px] transition-all duration-700"
        style={{ 
          background: 'var(--header-gradient)',
          maskImage: 'linear-gradient(to bottom, black 50%, transparent 100%)'
        }}
      />
      
      <nav className="flex justify-between items-center max-w-[88rem] mx-auto relative">
        <div className="flex items-center">
          <Link href="/" className="flex items-center space-x-2">
            <svg className="w-6 h-6 transition-colors duration-300" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="24" height="24" rx="4" fill="currentColor" />
            </svg>
            <span className="font-bold text-2xl transition-colors duration-300">MessNArt</span>
          </Link>
        </div>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <Link 
            href="/culture" 
            className="transition-colors duration-300 hover:text-gray-600 font-semibold relative group"
          >
            Culture
            <span className="absolute -bottom-1 left-0 w-0 h-2 bg-orange-400 transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link 
            href="/process" 
            className="transition-colors duration-300 hover:text-gray-600 font-semibold relative group"
          >
            Process
            <span className="absolute -bottom-1 left-0 w-0 h-2 bg-orange-400 transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link 
            href="/contact" 
            className="px-6 py-1 border transition-all duration-300 font-semibold relative group overflow-hidden"
            style={{
              borderColor: 'currentColor'
            }}
          >
            <span className="relative z-10 transition-colors duration-300 group-hover:text-white">
              Apply
            </span>
            <div className="absolute inset-0 transform translate-y-full transition-transform duration-300 ease-out group-hover:translate-y-0"
                 style={{
                   backgroundColor: 'currentColor'
                 }}/>
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <Hamburger toggled={isOpen} toggle={setIsOpen} size={20} />
        </div>
      </nav>

      {/* Mobile Menu */}
      <div 
        className={`${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        } fixed top-0 right-0 h-screen w-64 shadow-lg transform transition-all duration-300 ease-in-out z-[60] md:hidden`}
        style={{
          backgroundColor: 'var(--menu-bg, white)',
          color: 'var(--menu-text, black)'
        }}
      >
        <div className="flex flex-col p-6 space-y-6">
          <div className="flex justify-end">
            <Hamburger toggled={isOpen} toggle={setIsOpen} size={20} />
          </div>
          <Link 
            href="/culture" 
            className="hover:text-gray-600 text-lg transition-colors duration-300"
            onClick={() => setIsOpen(false)}
          >
            Culture
          </Link>
          <Link 
            href="/process" 
            className="hover:text-gray-600 text-lg transition-colors duration-300"
            onClick={() => setIsOpen(false)}
          >
            Process
          </Link>
          <Link 
            href="/contact" 
            className="px-4 py-2 border rounded hover:bg-gray-100 text-center text-lg transition-all duration-300"
            onClick={() => setIsOpen(false)}
            style={{
              borderColor: 'currentColor'
            }}
          >
            Apply
          </Link>
        </div>
      </div>

      {/* Overlay */}
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