"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from 'next/image'

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
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const container = containerRef.current;
    const slider = sliderRef.current;
    
    if (!container || !slider) return;

    const setupAnimation = () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());

      const isMobile = window.innerWidth < 768;
      const slidesVisible = isMobile ? 1 : 2;
      const slideWidth = window.innerWidth / slidesVisible;
      const totalWidth = slides.length * slideWidth;
      
      slider.style.width = `${totalWidth}px`;

      const scrollDistance = totalWidth - window.innerWidth;

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: container,
          pin: true,
          scrub: 1,
          snap: {
            snapTo: 1 / (slides.length - slidesVisible),
            duration: { min: 0.2, max: 0.3 },
            delay: 0,
            ease: "power1.inOut"
          },
          end: `+=${scrollDistance}`,
        },
      });

      // Set container height excluding the heading height
      gsap.set(container, {
        height: `${window.innerHeight * 0.8}px` // Reduced to 80% to account for heading
      });

      tl.to(slider, {
        x: -scrollDistance,
        ease: "none",
      });

      // Image scale animation
      const images = gsap.utils.toArray<HTMLImageElement>(".slide-image");
      images.forEach((image) => {
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
    };

    setupAnimation();
    window.addEventListener("resize", setupAnimation);
    return () => {
      window.removeEventListener("resize", setupAnimation);
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const scrollTrigger = ScrollTrigger.create({
      trigger: container,
      start: "top center",
      end: "bottom+=100% center", // Increased end point
      toggleActions: "play none none reverse", // Changed toggle actions
      onEnter: () => setIsVisible(true),
      onLeaveBack: () => setIsVisible(false),
      onLeave: () => setIsVisible(false),
      onEnterBack: () => setIsVisible(true),
      pin: false, // Make sure it doesn't interfere with the slider's pin
    });

    return () => {
      scrollTrigger.kill();
    };
  }, []);

  return (
    <div className="relative bg-transparent min-h-screen pt-24 overflow-x-hidden" ref={containerRef}> {/* Added pt-24 for header space */}
      <div className="top-20 z-10 bg-transparent backdrop-blur-sm py-6"> {/* Made heading sticky */}
        <h1 className="text-4xl md:text-5xl font-bold text-center text-gray-900">
          Team & People we have collaborated with
        </h1>
      </div>
      <div
        ref={sliderRef}
        className="flex h-[50vh] items-center mt-4" // Added mt-4 for spacing
      >
        {slides.map((slide, index) => (
          <div
            key={index}
            className="w-screen md:w-[50vw] h-full flex items-center justify-between px-8 md:px-12"
          >
            {/* Content on the left */}
            <div className="w-[45%] p-4">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                {slide.title}
              </h2>
              <p className="text-base md:text-lg text-gray-600 mb-4">
                {slide.description}
              </p>
            </div>

            {/* Image on the right */}
            <div className="w-[50%] h-[40vh] rounded-2xl overflow-hidden">
              <div className="relative w-full h-full">
                <div className="absolute inset-0 bg-gradient-to-l from-transparent via-white/10 to-white/20 z-[5]" />
                <Image
                  src={slide.image}
                  alt={slide.title}
                  fill
                  className="slide-image object-cover rounded-2xl"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority={index === 0}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
      {isVisible && (
        <div className="fixed bottom-8 left-1/2 -translate-x-1/2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg text-gray-900 text-sm font-medium z-20">
          Scroll to explore
        </div>
      )}
    </div>
  );
}