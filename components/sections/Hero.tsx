"use client"
import Link from 'next/link';
import React, { useEffect, useState } from 'react';

const Hero = () => {
  // Add state to control client-side rendering
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Only render content after component mounts on client
  if (!isMounted) {
    return null; // or a loading state
  }

  return (
    <section className="min-h-screen relative flex items-center px-4 md:px-16">
      {/* Background Gradient */}
      <div 
        className="absolute inset-0 bg-gradient-to-b from-orange-50/90 via-orange-50/50 to-transparent"
        style={{ maskImage: 'linear-gradient(to bottom, black 70%, transparent 100%)' }}
      />

      {/* Content Container */}
      <div className="max-w-[88rem] mx-auto w-full relative">
        <div className="max-w-2xl space-y-6">
          <h1 className="text-5xl md:text-6xl font-bold leading-tight">
            Building the next{' '}
            <span className="text-orange-500">creators</span> and creator led businesses
          </h1>

          <p className="text-xl md:text-2xl text-gray-700 leading-relaxed">
            If you always wanted to be a content creator or creator entrepreneur
            but couldn't due to the lack of resources, funds, mentorship and guidance,
          </p>

          <p className="text-2xl md:text-3xl font-semibold">
            Don't worry, we are here for you!
          </p>

          <div className="pt-8">
            <Link 
              href="/apply" 
              className="inline-block px-8 py-3 border-2 border-gray-900 font-semibold text-lg relative group overflow-hidden rounded-md"
            >
              <span className="relative z-10 group-hover:text-white transition-colors duration-300">
                Apply Now
              </span>
              <div className="absolute inset-0 bg-gray-900 transform translate-y-full transition-transform duration-300 ease-out group-hover:translate-y-0"/>
            </Link>
          </div>
        </div>

        {/* MORE text with arrow */}
        <div className="absolute top-96 right-8 flex flex-col items-center space-y-4 h-48">
          <div className="writing-mode-vertical text-black font-semibold tracking-widest">
            MORE
          </div>
          <div className="h-full w-[2px] bg-black relative animate-pulse">
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-5 h-5 border-b-2 border-r-2 border-black rotate-45" />
          </div>
        </div>
      </div>

      {/* Add required CSS */}
      <style jsx>{`
        .writing-mode-vertical {
          writing-mode: vertical-rl;
          text-orientation: mixed;
          transform: rotate(180deg);
        }
      `}</style>
    </section>
  );
};

export default Hero;