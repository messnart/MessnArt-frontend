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
    
    // Enhanced card animations
    cards.forEach((card) => {
      gsap.fromTo(card,
        { 
          opacity: 0,
          y: 30,
          scale: 0.95
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: card,
            start: "top bottom-=100",
            end: "top center",
            toggleActions: "play none none reverse",
            markers: false
          }
        }
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <main className="bg-gradient-to-b from-neutral-950/[0.03] via-orange-50/30 to-white text-gray-900">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Enhanced background with black-orange gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-neutral-950/[0.02] via-orange-100/20 to-white/80 mix-blend-soft-light" />
        
        {/* Existing noise effect */}
        <div
          className="absolute inset-0 z-10 pointer-events-none opacity-[0.02] mix-blend-overlay"
          style={{
            backgroundImage: `url('https://res.cloudinary.com/dzl9yxixg/image/upload/noise_yvdidf.gif')`
          }}
        />

        {/* Enhanced grid background */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#0000000f_1px,transparent_1px),linear-gradient(to_bottom,#0000000f_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />

        {/* Updated Content */}
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 1,
              ease: [0.25, 0.1, 0, 1]
            }}
            className="space-y-8"
          >
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-neutral-950 via-orange-500 to-orange-400">
                Our Process
              </span>
            </h1>
            <p className="text-xl sm:text-2xl text-neutral-600 max-w-3xl mx-auto font-light">
              A systematic approach to transform creators into successful entrepreneurs
            </p>

            {/* Enhanced decorative elements with black-orange gradients */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] blur-3xl rounded-full opacity-[0.08] bg-gradient-to-r from-neutral-950 via-orange-500/40 to-orange-400/40 -z-10 mix-blend-multiply" />
            <div className="absolute top-0 right-0 w-[500px] h-[500px] blur-3xl rounded-full opacity-[0.05] bg-gradient-to-l from-neutral-950 to-orange-500/40 -z-10 mix-blend-multiply" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] blur-3xl rounded-full opacity-[0.05] bg-gradient-to-r from-neutral-950 to-orange-400/40 -z-10 mix-blend-multiply" />
          </motion.div>
        </div>

        {/* Updated Scroll Indicator */}
        <motion.div 
          className="absolute bottom-12 left-1/2 -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
        >
          <motion.div
            animate={{ 
              y: [0, 12, 0],
              opacity: [1, 0.5, 1]
            }}
            transition={{
              duration: 2,
              ease: "easeInOut",
              repeat: Infinity,
              repeatType: "loop",
            }}
            className="w-6 h-10 rounded-full border-2 border-neutral-300 flex items-start justify-center p-1"
          >
            <div className="w-1.5 h-3 bg-neutral-400 rounded-full" />
          </motion.div>
        </motion.div>
      </section>

      {/* Process Content with enhanced backgrounds */}
      <div ref={containerRef}>
        {phases.map((phase, phaseIndex) => (
          <section 
            key={phaseIndex}
            className="min-h-screen relative flex items-center py-24 overflow-hidden"
          >
            {/* Enhanced section background */}
            <div className="absolute inset-0 bg-gradient-to-b from-neutral-950/[0.02] via-orange-50/20 to-transparent" />
            
            {/* Enhanced dynamic gradient background */}
            <div 
              className={`absolute inset-0 opacity-[0.04] ${
                phase.gradientPosition === 'left' 
                  ? 'bg-gradient-to-r' 
                  : 'bg-gradient-to-l'
              } from-neutral-950 via-orange-500/40 to-orange-400/40 mix-blend-multiply`}
            />

            {/* Enhanced cards background */}
            <style jsx>{`
              .stage-card {
                background: linear-gradient(
                  135deg,
                  rgba(249, 115, 22, 0.08) 0%,
                  rgba(23, 23, 23, 0.04) 50%,
                  rgba(251, 146, 60, 0.08) 100%
                );
                border: 1px solid rgba(23, 23, 23, 0.1);
                box-shadow: 
                  0 4px 6px -1px rgba(0, 0, 0, 0.05),
                  0 2px 4px -1px rgba(0, 0, 0, 0.03),
                  inset 0 0 0 1px rgba(255, 255, 255, 0.1);
              }
              .stage-card:hover {
                background: linear-gradient(
                  135deg,
                  rgba(249, 115, 22, 0.12) 0%,
                  rgba(23, 23, 23, 0.06) 50%,
                  rgba(251, 146, 60, 0.12) 100%
                );
                border: 1px solid rgba(23, 23, 23, 0.15);
                box-shadow: 
                  0 10px 15px -3px rgba(0, 0, 0, 0.08),
                  0 4px 6px -2px rgba(0, 0, 0, 0.05),
                  inset 0 0 0 1px rgba(255, 255, 255, 0.15);
              }
            `}</style>

            <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
                {/* Updated Phase Title */}
                <div className={`lg:sticky lg:top-32 h-fit ${
                  phase.titlePosition === 'right' ? 'lg:order-2' : ''
                }`}>
                  <motion.h2 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="text-4xl sm:text-5xl lg:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-neutral-950 via-orange-500 to-orange-400"
                  >
                    {phase.title}
                  </motion.h2>
                </div>

                {/* Updated Stages */}
                <div className={`space-y-8 ${
                  phase.titlePosition === 'right' ? 'lg:order-1' : ''
                }`}>
                  {phase.stages.map((stage, stageIndex) => (
                    <div 
                      key={stageIndex}
                      className="stage-card p-8 rounded-xl backdrop-blur-sm bg-white/90 transition-all duration-500 transform hover:scale-[1.02] hover:shadow-orange-100/40 hover:border-orange-200/50"
                    >
                      <h3 className="text-xl sm:text-2xl font-semibold mb-3 text-neutral-800">
                        {stage}
                      </h3>
                      <div className="h-1 w-24 bg-gradient-to-r from-neutral-950 via-orange-500 to-orange-400 rounded-full opacity-80" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        ))}
      </div>

      {/* Add this CTA section before the closing main tag */}
      <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden py-24">
        {/* Background effects */}
        <div className="absolute inset-0 bg-gradient-to-b from-white via-orange-50/30 to-neutral-950/[0.03]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#0000000f_1px,transparent_1px),linear-gradient(to_bottom,#0000000f_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
        
        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h2 className="text-4xl sm:text-5xl font-bold tracking-tight">
              Ready to Start Your
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-neutral-950 via-orange-500 to-orange-400 ml-3">
                Journey?
              </span>
            </h2>
            <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
              Join our community of creators and entrepreneurs. Transform your passion into a thriving business.
            </p>
            
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <a
                href="/apply"
                className="inline-flex items-center px-8 py-4 rounded-full bg-gradient-to-r from-neutral-950 via-orange-500 to-orange-400 text-white font-semibold text-lg shadow-xl shadow-orange-500/20 hover:shadow-orange-500/30 transform hover:scale-[1.02] transition-all duration-300"
              >
                Apply Now
                <svg
                  className="ml-2 w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </a>
            </motion.div>

            {/* Decorative elements */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] blur-3xl rounded-full opacity-[0.08] bg-gradient-to-r from-neutral-950 via-orange-500/40 to-orange-400/40 -z-10 mix-blend-multiply" />
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default Process;