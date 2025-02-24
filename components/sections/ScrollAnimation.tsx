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

    // Animation sequence
    tl
      // Move text and logo from right to left
      .to([text, logo], {
        x: "-100vw",
        duration: 1.5,
        ease: "power1.inOut",
      })
      // Keep logo in center
      .to(logo, {
        x: "0",
        duration: 0.5,
        ease: "power2.out",
      }, "-=0.5")
      // Scale up logo more significantly
      .to(logo, {
        scale: 2.2, // Increased scale for more dramatic effect
        duration: 1,
        ease: "power2.inOut",
      })
      // Change theme
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
      // Fade out logo
      .to(logo, {
        opacity: 0,
        scale: 2.5, // Continue scaling while fading out
        duration: 0.5,
        ease: "power2.in",
      }, "+=0.2"); // Small delay after theme change

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div 
      ref={containerRef} 
      className="min-h-screen w-full flex items-center justify-center overflow-hidden relative bg-transparent"
    >
      <div className="flex items-center gap-8 absolute">
        <div ref={textRef} className="text-9xl font-bold whitespace-nowrap">
          This is Mess N Art
        </div>
        <div ref={logoRef} className="relative">
          <svg 
            className="w-24 h-24" 
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