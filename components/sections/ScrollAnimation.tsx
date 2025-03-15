"use client"
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ScrollAnimation = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    const text = textRef.current;
    const logo = logoRef.current;

    if (!container || !text || !logo) return;

    // Function to handle animation setup
    const setupAnimation = () => {
      // Clear existing ScrollTriggers
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());

      // Main timeline
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: container,
          start: "top top",
          end: "+=200%",
          scrub: 1,
          pin: true,
          anticipatePin: 1,
          markers: false,
          onEnter: () => {
            gsap.set([text, logo], { visibility: 'visible' });
          }
        }
      });

      // Initial state
      gsap.set([text, logo], { 
        x: "100vw",
        visibility: 'hidden'
      });

      // Responsive scale values
      const logoScale = window.innerWidth < 768 ? 1.5 : 2.2;
      const finalLogoScale = window.innerWidth < 768 ? 1.8 : 2.5;

      // Animation sequence
      tl
        .to([text, logo], {
          x: "-100vw",
          duration: 1.5,
          ease: "power1.inOut",
        })
        .to(logo, {
          x: "0",
          duration: 0.5,
          ease: "power2.out",
        }, "-=0.5")
        .to(logo, {
          scale: logoScale,
          duration: 1,
          ease: "power2.inOut",
        })
        .to("body", { 
          backgroundColor: "#1a1a1a",
          color: "#ffffff",
          duration: 0.5,
          ease: "none",
        })
        .to(".header-content", {
          color: "#ffffff",
          duration: 0.5,
          ease: "none",
        }, "<")
        .to(".header-content > div:first-child", {
          opacity: 0,
          duration: 0.5,
          ease: "none",
        }, "<")
        .to(".header-content a", {
          color: "#ffffff",
          duration: 0.5,
          ease: "none",
        }, "<")
        .to(logo, {
          opacity: 0,
          scale: finalLogoScale,
          duration: 0.5,
          ease: "power2.in",
        }, "+=0.2");
    };

    // Initial setup
    setupAnimation();

    // Handle resize
    let resizeTimeout: NodeJS.Timeout;
    const handleResize = () => {
      // Debounce the resize handler
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(setupAnimation, 250);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div 
      ref={containerRef} 
      className="min-h-screen w-full flex items-center justify-center overflow-hidden relative bg-transparent"
    >
      <div className="flex items-center gap-4 md:gap-8 absolute">
        <div 
          ref={textRef} 
          className="text-4xl sm:text-6xl md:text-7xl lg:text-9xl font-bold whitespace-nowrap"
        >
          This is Mess N Art
        </div>
        <div ref={logoRef} className="relative">
          <svg 
            className="w-12 h-12 md:w-16 md:h-16 lg:w-24 lg:h-24" 
            viewBox="0 0 24 24" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="24" height="24" rx="4" fill="currentColor" />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default ScrollAnimation;