'use client'

import React, { useState, MouseEvent, useEffect } from 'react';
import { JSX } from 'react';
import { Card } from '@/components/ui/card';

interface Niche {
  title: string;
  icon: string;
}

interface TiltState {
  x: number;
  y: number;
}

const niches: Niche[] = [
  { title: 'AI & Tech', icon: '🤖' },
  { title: 'Personal Finance & Business', icon: '💰' },
  { title: 'Self-Improvement & Productivity', icon: '📈' },
  { title: 'Health, Fitness & Biohacking', icon: '💪' },
  { title: 'Creator Economy & Social Media Growth', icon: '🎥' },
  { title: 'Music & Audio Production', icon: '🎵' },
  { title: 'Video Editing, Filmmaking & Cinematography', icon: '🎬' },
  { title: 'Luxury, Fashion & Lifestyle', icon: '👔' },
  { title: 'Events, Networking & Community Building', icon: '🤝' },
  { title: 'Gaming, Esports & Virtual Worlds', icon: '🎮' }
];

const Niches = (): JSX.Element => {
  const [tilt, setTilt] = useState<TiltState>({ x: 0, y: 0 });
  const [isMobile, setIsMobile] = useState(true); // Default to mobile view

  useEffect(() => {
    // Check window width on mount and resize
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // Initial check
    checkMobile();

    // Add resize listener
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>): void => {
    if (!isMobile) {
      const container = e.currentTarget;
      const { left, top, width, height } = container.getBoundingClientRect();
      const x = (e.clientX - left - width / 2) / 25;
      const y = (e.clientY - top - height / 2) / 25;
      setTilt({ x, y });
    }
  };

  const handleMouseLeave = (): void => {
    setTilt({ x: 0, y: 0 });
  };

  // Split niches into columns
  const firstColumn = niches.slice(0, 3);
  const secondColumn = niches.slice(3, 7);
  const thirdColumn = niches.slice(7, 10);

  return (
    <section className="w-full min-h-screen bg-[#1a1a1a] text-white py-16 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-12">
          {/* Text content */}
          <div className="lg:w-1/3 lg:sticky lg:top-24">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Top 10 Niches
              <span className="text-purple-400 mt-2 block">we are interested</span>
            </h1>
            <p className="text-gray-400 text-lg leading-relaxed">
              Mess N Art is focused on these niches for now.
              If you want to opt something in this, kindly apply!
            </p>
          </div>

          {/* Cards section with gradient background */}
          <div className="lg:w-2/3 relative">
            {/* Background gradient overlay - now only behind cards */}
            <div 
              className="absolute inset-0 opacity-90 pointer-events-none"
              style={{
                backgroundImage: `url('https://cdn.prod.website-files.com/61f851e659d331fc33952ad4/6204f2d3a928076b9688c4cb_gradient-circle-bg.svg')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}
            />

            {/* Cards grid */}
            <div 
              className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10"
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              style={{
                transform: !isMobile 
                  ? `perspective(1000px) rotateX(${tilt.y}deg) rotateY(${tilt.x}deg)`
                  : 'none',
                transition: 'transform 0.1s ease-out',
                willChange: !isMobile ? 'transform' : 'auto'
              }}
            >
              {/* First Column */}
              <div className="space-y-6 md:translate-y-24">
                {firstColumn.map((niche) => (
                  <NicheCard key={niche.title} niche={niche} />
                ))}
              </div>

              {/* Second Column */}
              <div className="space-y-6">
                {secondColumn.map((niche) => (
                  <NicheCard key={niche.title} niche={niche} />
                ))}
              </div>

              {/* Third Column */}
              <div className="space-y-6 md:translate-y-24">
                {thirdColumn.map((niche) => (
                  <NicheCard key={niche.title} niche={niche} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Separate component for niche cards
const NicheCard = ({ niche }: { niche: Niche }) => (
  <Card 
    className="
      group p-6 bg-white backdrop-blur-lg rounded-xl
      border border-white hover:border-purple-500
      shadow-lg hover:shadow-purple-500
      transition-all duration-300
      relative overflow-hidden

    "
  >
    <div 
      className="
        absolute inset-0 bg-gradient-to-br from-purple-500/10 to-transparent
        opacity-0 group-hover:opacity-100 transition-opacity duration-300
      "
    />
    <div className="relative z-10">
      <div className="text-3xl mb-4" aria-hidden="true">{niche.icon}</div>
      <h3 className="text-lg font-semibold group-hover:text-purple-400 transition-colors duration-300">
        {niche.title}
      </h3>
    </div>
  </Card>
);

export default Niches;