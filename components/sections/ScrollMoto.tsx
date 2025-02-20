"use client"
import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ScrollMoto = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const stripsRef = useRef<HTMLDivElement>(null);

  // Define marquee items
  const topItems = ["Empowerment", "Growth", "Opportunity", "Mentorship", "Support"];
  const bottomItems = ["Collaboration", "Innovation", "Community", "Commitment", "Transformation"];

  // Duplicate items for seamless loop
  const duplicatedTop = [...topItems, ...topItems, ...topItems];
  const duplicatedBottom = [...bottomItems, ...bottomItems, ...bottomItems];

  useEffect(() => {
    const container = containerRef.current;
    const strips = stripsRef.current;
    if (!container || !strips) return;

    // 2D rotation effect on scroll
    gsap.to(strips, {
      scrollTrigger: {
        trigger: container,
        start: "top center",
        end: "bottom center",
        scrub: 1,
        onUpdate: (self) => {
          const progress = self.progress;
          const rotation = (progress - 0.5) * 10; // -2.5 to 2.5 degrees
          gsap.to(".marquee-strip", {
            rotate: rotation,
            duration: 0.5,
            ease: "power1.out"
          });
        },
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div ref={containerRef} className="min-h-screen w-full flex items-center justify-center">
      <div 
        ref={stripsRef}
        className="w-full py-20 flex flex-col items-center justify-center"
style={{ perspective: "1000px" }}
      >
        {/* Top Strip */}
        <motion.div 
          className="marquee-strip relative w-full h-20 mb-8 bg-black/70 flex items-center overflow-hidden"
          initial={{ rotate: 0 }}
        >
          <motion.div
            className="absolute flex whitespace-nowrap"
            animate={{
              x: ["0%", "-33.33%"]
            }}
            transition={{
              duration: 20,
              ease: "linear",
              repeat: Infinity,
            }}
          >
            {duplicatedTop.map((item, index) => (
              <span
                key={index}
                className="text-white/80 text-3xl md:text-5xl font-bold px-8"
              >
                {item}
              </span>
            ))}
          </motion.div>
        </motion.div>

        {/* Bottom Strip */}
        <motion.div 
          className="marquee-strip relative w-full h-20 bg-black/70 flex items-center overflow-hidden"
          initial={{ rotate: 0 }}
        >
          <motion.div
            className="absolute flex whitespace-nowrap"
            animate={{
              x: ["-33.33%", "0%"]
            }}
            transition={{
              duration: 20,
              ease: "linear",
              repeat: Infinity,
            }}
          >
            {duplicatedBottom.map((item, index) => (
              <span
                key={index}
                className="text-white/80 text-3xl md:text-5xl font-bold px-8"
              >
                {item}
              </span>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default ScrollMoto;