'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { motion } from 'framer-motion';

gsap.registerPlugin(ScrollTrigger);

interface Phase {
  title: string;
  titlePosition: 'left' | 'right';
  stages: string[];
  gradientPosition: 'left' | 'right';
} 

const phases: Phase[] = [
  {
    title: "Phase 1: Journey to Becoming a Creator",
    titlePosition: 'left',
    stages: [
      "The Psychology of Virality",
      "Creating Magnetic Content Without Trends",
      "The Contrarian Growth Hacks",
      "Building Community, Not Just Followers",
      "Mastering Analytics and Scaling Growth"
    ],
    gradientPosition: 'right'
  },
  {
    title: "Phase 2: Journey to Launching a Business",
    titlePosition: 'right',
    stages: [
      "Identifying a High-Demand Service",
      "Building and Launching a Sales Funnel",
      "Acquiring First Clients",
      "Hiring and Training the Right Team",
      "Systemizing and Automating"
    ],
    gradientPosition: 'left'
  },
  {
    title: "Phase 3: Journey of an Entrepreneur Creator",
    titlePosition: 'left',
    stages: [
      "Fully Automating the Service Business",
      "Creating and Launching a Product",
      "Leveraging Audience for Product Launch",
      "Diversifying Revenue Streams",
      "Scaling Operations & Brand"
    ],
    gradientPosition: 'right'
  }
];

const Process = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cards = document.querySelectorAll('.stage-card');
    
    cards.forEach((card, index) => {
      gsap.fromTo(card,
        { 
          opacity: 0,
          x: index % 2 === 0 ? -50 : 50 
        },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          scrollTrigger: {
            trigger: card,
            start: "top center+=100",
            end: "bottom center",
            toggleActions: "play none none reverse"
          }
        }
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <main className="bg-white text-gray-900">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Noise Effect */}
        <div
          className="absolute inset-0 z-10 pointer-events-none opacity-[0.03]"
          style={{
            backgroundImage: `url('https://res.cloudinary.com/dzl9yxixg/image/upload/noise_yvdidf.gif')`
          }}
        />

        {/* Grid Background */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#0000000f_1px,transparent_1px),linear-gradient(to_bottom,#0000000f_1px,transparent_1px)] bg-[size:35px_34px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />

        {/* Content */}
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-500 via-orange-400 to-orange-300">
                Our Process
              </span>
            </h1>
            <p className="text-xl sm:text-2xl text-gray-600 max-w-3xl mx-auto">
              A systematic approach to transform creators into successful entrepreneurs
            </p>

            {/* Decorative Elements - updated with orange theme */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] blur-3xl rounded-full opacity-10 bg-gradient-to-r from-orange-500 via-orange-400 to-orange-300 -z-10" />
            <div className="absolute top-0 right-0 w-96 h-96 blur-3xl rounded-full opacity-5 bg-orange-500 -z-10" />
            <div className="absolute bottom-0 left-0 w-96 h-96 blur-3xl rounded-full opacity-5 bg-orange-300 -z-10" />
          </motion.div>
        </div>

        {/* Scroll Indicator - adjusted for light theme */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              repeatType: "reverse",
            }}
            className="w-6 h-10 rounded-full border-2 border-gray-300 flex items-start justify-center p-1"
          >
            <div className="w-1.5 h-3 bg-gray-400 rounded-full" />
          </motion.div>
        </div>
      </section>

      {/* Process Content */}
      <div ref={containerRef}>
        {phases.map((phase, phaseIndex) => (
          <section 
            key={phaseIndex}
            className="min-h-screen relative flex items-center py-20"
          >
            {/* Gradient Background - updated with orange theme */}
            <div 
              className={`absolute inset-0 opacity-5 ${
                phase.gradientPosition === 'left' 
                  ? 'bg-gradient-to-r' 
                  : 'bg-gradient-to-l'
              } from-orange-500 via-orange-400 to-orange-300`}
            />

            <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
                {/* Phase Title */}
                <div className={`lg:sticky lg:top-24 h-fit ${
                  phase.titlePosition === 'right' ? 'lg:order-2' : ''
                }`}>
                  <motion.h2 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-4xl sm:text-5xl lg:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-orange-500 via-orange-400 to-orange-300"
                  >
                    {phase.title}
                  </motion.h2>
                </div>

                {/* Stages */}
                <div className={`space-y-6 ${
                  phase.titlePosition === 'right' ? 'lg:order-1' : ''
                }`}>
                  {phase.stages.map((stage, stageIndex) => (
                    <div 
                      key={stageIndex}
                      className="stage-card p-6 rounded-lg shadow-sm backdrop-blur-sm bg-white/50"
                      style={{
                        background: `linear-gradient(${
                          stageIndex % 2 === 0 ? '45deg' : '-45deg'
                        }, rgba(249, 115, 22, 0.03), rgba(251, 146, 60, 0.03))`
                      }}
                    >
                      <h3 className="text-xl sm:text-2xl font-semibold mb-2 text-gray-800">
                        {stage}
                      </h3>
                      <div className="h-1 w-20 bg-gradient-to-r from-orange-500 via-orange-400 to-orange-300 rounded-full opacity-80" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        ))}
      </div>
    </main>
  );
};

export default Process;