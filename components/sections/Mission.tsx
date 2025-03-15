"use client"
import React from 'react';

const Mission = () => {
  const sections = [
    {
      title: "Our Mission",
      content: "Our mission is to create creators who are more than just creators. Creation is the most powerful form of distribution today. It eliminates one of the hardest things in business—sales. The power now lies in the hands of creators. Instead of chasing customers, now customers and brands come to you. This is changing so fast that most people don't even realize it yet. The next big wave is creators turning into entrepreneurs. And we want to be the ones to lead this revolution."
    },
    {
      title: "Our Vision",
      content: "A creator's lifespan is unpredictable—some last years, some disappear in months. To survive, creators today rely on multiple revenue streams—courses, products, businesses. We want to add more creators into this space—people who dream of making it big but lack connections, resources, or the ability to sustain and survive. Our ultimate vision is to become a global venture capitalist firm that invests in creators' futures—helping them become entrepreneurs, not just creators."
    },
    {
      title: "Our Purpose",
      content: `Mess n Art exists to show creators that being a creator alone won't help you survive in the future.

      To do that, you need to master three things:
      
      ✔ Consistency - Keep showing up, no matter what.
      ✔ Focus - Stay locked in, don't get distracted.
      ✔ Attitude - Never give up, keep pushing forward.
      
      The purpose is simple—this is the story of many. And we will tell it, show it, and impact the world globally.`
    },
    {
      title: "Why?",
      subtitle: "From the Founder's Perspective",
      content: `Content has become decentralized—everyone has the power to become a creator if they understand one fundamental fact about content creation. It's not just the algorithm—that's a part of it.

      The real reason most people fail? Lack of consistency.
      
      I always wanted to be a content creator but couldn't because of one single thing—I wasn't consistent. That's the major thing every creator needs to master. Be obsessed with consistency, and everything else will follow—creativity, scripting, perfection.
      
      I want to show future content creators that what you see in reality is way different from what happens behind the screen. While content creation offers a lot of benefits, it's also difficult—it's about showing up every day, over and over again.
      
      Content is like profit in a business—if you don't keep creating, you're out of the game.`
    }
  ];

  return (
    <div className="min-h-max w-full ">
      {sections.map((section, index) => (
        <div 
          key={index}
          className="flex flex-col md:flex-row items-start justify-center max-w-7xl mx-auto px-6 py-20"
        >
          {/* Left side - Title */}
          <div className="w-full md:w-[30%] mb-6 md:mb-0 pr-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 sticky top-20">
              {section.title}
              {section.subtitle && (
                <span className="block text-lg md:text-xl font-medium text-gray-900 mt-2">
                  {section.subtitle}
                </span>
              )}
            </h2>
          </div>

          {/* Right side - Content */}
          <div className="w-full md:w-[70%] z-10">
            <div className="text-gray-700 text-lg md:text-xl leading-relaxed whitespace-pre-line">
              {section.content}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Mission;