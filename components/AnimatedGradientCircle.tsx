"use client"
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Hero from './sections/Hero';
import Creater from './sections/Creater';

gsap.registerPlugin(ScrollTrigger);

const AnimatedGradientCircle = () => {
  const circleRef = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    const circle = circleRef.current;
    

    // Initial position at center
    gsap.set(circle, {
      xPercent: -50,
      yPercent: -15,
      position: 'fixed',
      top: '50%',
      left: '50%',
    });

    // Animation for first section (shift to right)
    gsap.to(circle, {
      scrollTrigger: {
        trigger: '#images',
        start: 'top center',
        end: 'bottom center',
        toggleActions: 'play none none reverse',
        onEnter: () => {
          gsap.to(circle, {
            xPercent: -30,
            yPercent: -50,
            duration: 1.5,
            ease: 'power2.out'
          });
        },
        onLeaveBack: () => {
          gsap.to(circle, {
            xPercent: -50,
            yPercent: -15,
            duration: 1.5,
            ease: 'power2.out'
          });
        }
      }
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div className="relative w-full">
      <div 
      ref={circleRef}
      className="w-[3200px] h-[1600px] pointer-events-none" 
      style={{
        backgroundImage: 'url(https://cdn.prod.website-files.com/61f851e659d331fc33952ad4/6204f2d3a928076b9688c4cb_gradient-circle-bg.svg)',
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        willChange: 'transform',
        zIndex: 0,
        filter: 'blur(50px)', 
      }}
    />
      
      {/* Example sections */}
      <section className="z-10">
        <Hero/>
      </section>

      <section id="images" className="z-10">
        <Creater/>
      </section>
      
    </div>
  );
};

export default AnimatedGradientCircle;