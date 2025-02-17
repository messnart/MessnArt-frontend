"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

const slides = [
  {
    title: "Rohan Azad",
    description: "Rohan is the Co-Founder of MnA Studios & a Creator as well He also acts as an advisor at Mess N Art.",
    image: "/musician.jpg"
  },
  {
    title: "Sanatan Roy",
    description: "Manthan is the Co-founder of 23 Ventures MnA Studios & a Creator as well He also acts as an advisor at Mess N Art.",
    image: "/fashion.jpg"
  },
  {
    title: "Ritik Jain",
    description: "Manthan is the Co-founder of 23 Ventures MnA Studios & a Creator as well He also acts as an advisor at Mess N Art.",
    image: "/tech.jpg"
  },
  {
    title: "Manthan Gupta",
    description: "Manthan is the Co-founder of 23 Ventures MnA Studios & a Creator as well  He is a General Partner at Mess n Art.",
    image: "/mystery.jpg"
  },
  {
    title: "Food Creator",
    description: "I cook, taste, and review great food while creating a food business that brings people together through cuisine.",
    image: "/food.jpg"
  },
  {
    title: "Travel Creator",
    description: "I explore the world and turn travel into a business, helping others discover new places and cultures.",
    image: "/travel.jpg"
  },
  {
    title: "Finance Creator",
    description: "I teach how to grow and manage money while building financial tools that empower people's financial journey.",
    image: "/finance.jpg"
  },
  {
    title: "AI Explorer",
    description: "I explore AI and its impact while launching AI-driven solutions that shape the future of technology.",
    image: "/ai.jpg"
  },
  {
    title: "Vlogger",
    description: "I capture life, one vlog at a time, and turn it into a business.” 4. Tech.",
    image: "/vlogger.jpg"
  },
  {
    title: "Education Creator",
    description: "I simplify learning and build educational platforms that make knowledge accessible to everyone.",
    image: "/education.jpg"
  }
];

export default function Creater() {
  const containerRef = useRef<HTMLDivElement>(null);
  const sliderRef = useRef<HTMLDivElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Set loaded state after component mount
    setIsLoaded(true);
    let ctx = gsap.context(() => {});

    const setupAnimation = () => {
      // Clear any existing ScrollTriggers
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
      
      const container = containerRef.current;
      const slider = sliderRef.current;
      
      if (!container || !slider) return;

      // Create a new GSAP context
      ctx.kill(); // Kill previous context
      ctx = gsap.context(() => {
        const slideWidth = window.innerWidth;
        const totalWidth = slides.length * slideWidth;
        
        slider.style.width = `${totalWidth}px`;
        const scrollDistance = totalWidth - window.innerWidth;

        // Set initial states
        gsap.set(container, {
          height: `${scrollDistance + window.innerHeight}px`,
          clearProps: 'all' // Clear any previous GSAP properties
        });

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: container,
            pin: true,
            pinSpacing: true,
            scrub: 1,
            invalidateOnRefresh: true, // Recalculate on refresh
            snap: {
              snapTo: 1 / (slides.length - 1),
              duration: { min: 0.2, max: 0.3 },
              delay: 0,
              ease: "power1.inOut"
            },
            end: `+=${scrollDistance}`,
          },
        });

        tl.to(slider, {
          x: -scrollDistance,
          ease: "none",
        });

        // Image scale animation
        gsap.utils.toArray<HTMLImageElement>(".slide-image").forEach((image) => {
          gsap.to(image, {
            scale: 1.1,
            scrollTrigger: {
              trigger: image.parentElement,
              containerAnimation: tl,
              start: "left center",
              end: "right center",
              scrub: true,
            },
          });
        });
      }, containerRef); // Scope to container
    };

    // Setup animation after a short delay to ensure DOM is ready
    const initTimeout = setTimeout(() => {
      setupAnimation();
    }, 100);

    // Handle resize
    const debouncedResize = debounce(setupAnimation, 250);
    window.addEventListener("resize", debouncedResize);

    // Cleanup
    return () => {
      clearTimeout(initTimeout);
      window.removeEventListener("resize", debouncedResize);
      ctx.kill(); // Kill GSAP context
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, [isLoaded]);

  // Don't render until component is loaded
  if (!isLoaded) return null;

  return (
    <div className="overflow-hidden bg-transparent" ref={containerRef}>
      <div className="text-center pt-4 pb-0.5">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
          Team & People we have collaborated with
        </h1>
      </div>
      <div
        ref={sliderRef}
        className="flex min-h-screen items-center"
      >
        {slides.map((slide, index) => (
          <div
            key={index}
            className="w-screen h-screen flex items-center justify-between px-16"
          >
            {/* Content on the left */}
            <div className="w-[45%] p-8">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                {slide.title}
              </h2>
              <p className="text-lg md:text-xl text-gray-600 mb-8">
                {slide.description}
              </p>
            </div>

            {/* Image on the right */}
            <div className="w-[50%] h-[80vh] rounded-2xl overflow-hidden">
              <div className="relative w-full h-full">
                <div className="absolute inset-0 bg-gradient-to-l from-transparent via-white/10 to-white/20 z-[5]" />
                <Image
                  src={slide.image}
                  alt={slide.title}
                  height={500}
                  width={500}
                  className="slide-image h-full w-full object-cover rounded-2xl"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="fixed bottom-8 left-1/2 -translate-x-1/2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg text-gray-900 text-sm font-medium z-20">
        Scroll to explore
      </div>
    </div>
  );
}

// Debounce helper function
function debounce(func: Function, wait: number) {
  let timeout: NodeJS.Timeout;
  return function executedFunction(...args: any[]) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}