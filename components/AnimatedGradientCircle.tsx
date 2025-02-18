"use client"
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Hero from './sections/Hero';
import Creater from './sections/Creater';
import Courses from './sections/Courses';

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

// Animation for second section (shift to right)
    gsap.to(circle, {
      scrollTrigger: {
        trigger: '#courses',
        start: 'top center',
        end: 'bottom center',
        toggleActions: 'play none none reverse',
        onEnter: () => {
          gsap.to(circle, {
            xPercent: -20,
            yPercent: -50,
            duration: 1.5,
            ease: 'power2.out'
          });
        },
        onLeaveBack: () => {
          gsap.to(circle, {
            xPercent: -30,
            yPercent: -50,
            duration: 1.5,
            ease: 'power2.out'
          });
        }
      }
    }
  );

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div className="relative w-full">
      {/* The gradient circle element is now sized responsively:
          - Default (mobile): 2000px by 1000px
          - From small breakpoint (sm): 3200px by 1600px */}
      <div 
        ref={circleRef}
        className="pointer-events-none absolute w-[2000px] h-[1000px] sm:w-[3200px] sm:h-[1600px]"
        style={{
          backgroundImage: 'url(https://cdn.prod.website-files.com/61f851e659d331fc33952ad4/6204f2d3a928076b9688c4cb_gradient-circle-bg.svg)',
          backgroundSize: 'contain',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          willChange: 'transform',
          zIndex: 0,
        }}
      />

      {/* Sections */}
      <section className="z-10">
        <Hero />
      </section>

      <section id="images" className="z-10">
        <Creater />
      </section>

      <section id='courses' className="z-10">
        <Courses/>  
      </section>      
    </div>
  );
};

export default AnimatedGradientCircle;