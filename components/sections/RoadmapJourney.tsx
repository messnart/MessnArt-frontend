'use client'

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface Workshop {
  title: string;
  isCompleted?: boolean;
}

interface Phase {
  title: string;
  subtitle: string;
  description: string;
  workshops: Workshop[];
  separatorRef?: React.RefObject<HTMLDivElement>; // Add this line
}

const phases: Phase[] = [
  {
    title: "Journey to Becoming a Creator",
    subtitle: "Achieving 100K Followers",
    description: "This phase focuses on building an audience by mastering content creation, engagement, and growth strategies. The key is to understand the psychology of virality, create high-impact content, and build a loyal community.",
    workshops: [
      { title: "The Psychology of Virality" },
      { title: "Creating Magnetic Content Without Trends" },
      { title: "The Contrarian Growth Hacks" },
      { title: "Building Community, Not Just Followers" },
      { title: "Mastering Analytics and Scaling Growth" },
      { title: "Bonus Session" }
    ]
  },
  {
    title: "Journey to Launching a Business",
    subtitle: "Achieving 10-100K MRR in 6 Months",
    description: "After building an audience, the next step is monetization through a scalable service-based business. This phase covers identifying high-demand services, setting up sales funnels, acquiring clients, and systemizing operations for consistent growth.",
    workshops: [
      { title: "Identifying a High-Demand Service" },
      { title: "Building and Launching a Sales Funnel" },
      { title: "Acquiring First Clients" },
      { title: "Hiring and Training the Right Team" },
      { title: "Systemizing and Automating" }
    ]
  },
  {
    title: "Journey of an Entrepreneur Creator",
    subtitle: "Scaling to 1M MRR",
    description: "With a stable business in place, the goal shifts to full automation and scaling by launching digital or physical products. This phase focuses on product development, audience-driven launches, revenue diversification, and brand expansion.",
    workshops: [
      { title: "Fully Automating the Service Business" },
      { title: "Creating and Launching a Product" },
      { title: "Leveraging Audience for Product Launch" },
      { title: "Diversifying Revenue Streams" },
      { title: "Scaling Operations & Brand" }
    ]
  }
];

const RoadmapJourney: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);
  const phasesRef = useRef<HTMLDivElement>(null);
  
  // Create refs for separators
  const separatorRefs = useRef(phases.map(() => React.createRef<HTMLDivElement>()));

  useEffect(() => {
    const container = containerRef.current;
    const line = lineRef.current;
    const phases = phasesRef.current;
    
    if (!container || !line || !phases) return;

    // Set initial states
    gsap.set('.phase', { opacity: 0, x: 100 });
    gsap.set(separatorRefs.current.map(ref => ref.current), { height: '0%', opacity: 0 });
    gsap.set(line, { width: '0%' });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container,
        start: "top top",
        end: "+=200%",
        pin: true,
        scrub: 1,
        anticipatePin: 1,
      }
    });

    // Animate the progress line
    tl.to(line, {
      width: "100%",
      duration: 3,
      ease: "none",
    });

    // Animate phases and their separators together
    const phaseElements = container.querySelectorAll('.phase');
    phaseElements.forEach((phase, index) => {
      const separator = separatorRefs.current[index]?.current;
      if (separator) {
        tl.to([phase, separator], {
          opacity: 1,
          x: 0,
          height: '100%',
          duration: 1,
          ease: "power2.out",
        }, index);
      } else {
        tl.to(phase, {
          opacity: 1,
          x: 0,
          duration: 1,
          ease: "power2.out",
        }, index);
      }
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <section className="w-full min-h-screen bg-[#1a1a1a] text-white py-16 relative overflow-hidden top-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={containerRef}>
        <h1 className="text-5xl font-bold text-center mb-4">
          Journey of{' '}
          <span className="relative">
            You
            <span className="absolute bottom-0 left-0 w-full h-2 bg-gradient-to-r from-purple-600 via-purple-400 to-purple-600" />
          </span>
        </h1>
        <p className="text-2xl text-gray-400 text-center mb-16">
          This is the exact roadmap we will follow to execute things for you simple and easy
        </p>

        {/* Progress Line with enhanced dot and gradient */}
        <div className="relative mb-16">
          {/* Larger dot with glow effect */}
          {/* <div className="w-6 h-6 bg-purple-500 rounded-full absolute -left-3 top-1/2 transform -translate-y-1/2 shadow-[0_0_15px_rgba(147,51,234,0.5)]" /> */}
          
          {/* Enhanced progress line */}
          <div 
            ref={lineRef}
            className="h-8 w-0 relative overflow-hidden rounded-full"
            style={{
              background: 'linear-gradient(90deg, #3319CE 0%, #A035E4 33%, #54E2F0 66%, #E3EC9E 100%)',
              boxShadow: '0 0 20px rgba(160,53,228,0.3)'
            }}
          >
            {/* Moving gradient overlay */}
            <div 
              className="absolute inset-0 animate-pulse"
              style={{
                background: 'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.1) 50%, transparent 100%)',
                animation: 'shimmer 2s infinite'
              }}
            />
          </div>
        </div>

        {/* Phases Container */}
        <div 
          ref={phasesRef}
          className="grid grid-cols-3 gap-0 relative"
        >
          {phases.map((phase, index) => (
            <div key={index} className="relative">
              {/* Updated Vertical Separator Line */}
              {index < phases.length - 1 && (
                <div
                  ref={separatorRefs.current[index]}
                  className={`absolute right-0 top-0 w-px opacity-0 separator-${index} separator-line`}
                  style={{
                    background: 'linear-gradient(180deg, #A035E4 0%, rgba(160, 53, 228, 0.3) 100%)',
                    height: '0%',
                    width: '2px',
                    backdropFilter: 'blur(3px)'
                  }}
                />
              )}
              
              {/* Phase Content */}
              <div className="phase px-8 opacity-0 transform translate-x-100">
                <div className="space-y-4">
                  <h3 className="text-3xl font-bold text-white">{phase.title}</h3>
                  <p className="text-purple-400 text-xl">{phase.subtitle}</p>
                  <p className="text-gray-400 text-lg">{phase.description}</p>
                  <div className="space-y-2">
                    <h4 className="font-semibold text-white">Workshops:</h4>
                    <ul className="space-y-2">
                      {phase.workshops.map((workshop, idx) => (
                        <li 
                          key={idx} 
                          className="flex items-center gap-2 text-gray-300 hover:text-purple-400 transition-colors duration-300"
                        >
                          <span className="w-1 h-1 bg-purple-600 rounded-full" />
                          {workshop.title}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RoadmapJourney;