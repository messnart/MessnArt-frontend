'use client';

import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const Culture = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  
  // Pre-create all section refs outside of the render callback
  const sectionRefs = useRef<Array<HTMLElement | null>>([]);
  
  // Define sections outside of the render function
  const sections = [
    {
      heading: "Our Ethos",
      content: `At Mess n Art, we challenge norms, take risks, and redefine what it means to be a creator in the digital age. We are a movement built on
      ambition, curiosity, and collaboration—helping creators transform their content into sustainable businesses.
      
      We don't believe in rigid hierarchies; instead, we operate on trust, autonomy, and accountability. We move fast, think long-term, and
      embrace the unconventional.`,
      isDark: true
    },
    {
      heading: "We're Trailblazers",
      subheading: "Ambition & Drive",
      content: [
        "Bold Vision – We set high standards, pushing beyond perceived limits.",
        "Fearless Action – We move forward despite uncertainty, always doing what's right.",
        "Relentless Effort – We give our all, consistently progressing toward our goals.",
        "Future-First Thinking – We optimize for long-term success, not just quick wins.",
        "Unshakable Belief – We trust that hard work and smart decisions will shape a better future.",
        "Extreme Ownership – We take full responsibility for our work and outcomes.",
        "Purpose-Driven Passion – We find deep meaning in our work and the journey.",
        "Resilience – We treat failure as a lesson and keep moving forward."
      ],
      isDark: false
    },
    {
      heading: "We're Thinkers & Builders",
      subheading: "Logic & Innovation",
      content: [
        "Truth-Seeking – We separate facts from assumptions and always seek clarity.",
        "Unquenchable Curiosity – We question everything, always looking for deeper understanding.",
        "Radical Imagination – We challenge the status quo and envision new possibilities.",
        "First-Principles Thinking – We break problems down to fundamentals and rebuild from there.",
        "Merit Over Titles – We value skill and execution over credentials or hierarchy.",
        "High-Impact Focus – We prioritize efficiency, balancing speed and precision.",
        "Attention to Detail – We notice and perfect the small things that matter.",
        "Data-Driven Decisions – We avoid biases and test rigorously."
      ],
      isDark: true
    },
    {
      heading: "We're Autonomous & Open",
      subheading: "Freedom & Transparency",
      content: [
        "Diverse Perspectives – We embrace different ideas and challenge our own biases.",
        "Self-Governance – We operate with trust, giving people full autonomy over their work.",
        "Decentralized Hierarchy – Leadership is fluid; the best ideas win, not job titles.",
        "Radical Honesty – We believe in open communication, even when it's uncomfortable.",
        "Respect & Inclusion – We treat everyone with fairness and kindness.",
        "Constructive Criticism – We welcome feedback with humility and gratitude.",
        "Intellectual Freedom – We encourage independent thinking and decision-making.",
        "Total Accountability – We take responsibility for both wins and losses."
      ],
      isDark: false
    },
    {
      heading: "We're a Collective",
      subheading: "Collaboration & Community",
      content: [
        "Give Without Expecting – We contribute generously, knowing that value comes full circle.",
        "Be Real, Be You – We show up authentically, without pretense.",
        "Strong Bonds – We invest in real relationships, not just transactions.",
        "Seamless Collaboration – We move as one, making teamwork effortless.",
        "Deep Empathy – We put ourselves in others' shoes to truly understand.",
        "Ego-Free Mindset – We remain humble, regardless of success.",
        "Energy & Optimism – We uplift others and find joy in the process.",
        "Built on Trust – We assume positive intent and act with integrity."
      ],
      isDark: true
    },
    {
      heading: "Why We Exist",
      content: ["Marketing has been democratized – anyone with the right strategy can become a creator. The barriers to entry are gone, but the real challenge is sustaining success. Most creators have a short shelf life—typically 4-5 years.",
      "We saw an opportunity – what if we could help creators build real businesses that outlive trends?",
      "That's what Mess n Art is all about – guiding, providing resources, and proving that you can be both a creator and an entrepreneur.",],
      isDark: false
    },
    {
      heading: "We don't wait for permission. We take the leap.",
      content: `Join us if you're ready to defy convention, embrace uncertainty, and build something people call crazy—because the boldest ideas are the ones that change the world.
  In creator-led brands, consistency is everything—and we're here to make sure you never stop.`,
      isDark: true
    }
  ];
  
  // Initialize section refs array to match the number of sections
  useEffect(() => {
    sectionRefs.current = Array(sections.length).fill(null);
  }, [sections.length]);
  
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play();
    }
  }, []);

  return (
    <main className="relative">
      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col items-center justify-center gap-12 px-4 py-16 bg-gradient-to-tr from-white via-white to-[#CDDAF3]">
        {/* Video Container */}
        <div className="relative w-full max-w-4xl aspect-video overflow-hidden">
          <video
            ref={videoRef}
            className="w-full h-full object-contain mix-blend-multiply"
            src="/loop.mp4"
            muted
            loop
            playsInline
          />
          <div className="absolute inset-0" />
        </div>

        {/* Hero Section Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold text-center max-w-5xl text-transparent bg-clip-text"
          style={{ backgroundImage: 'radial-gradient(31.56% 93.57% at 51.38% 0%, #42ddaf 17.15%, #81b1f9 37.06%, #8482cc 74.77%, #222239 95.27%)' }}
        >
          Mess n Art: Building the Next Creator-Led Businesses
        </motion.h1>
      </section>

      {/* Content Sections */}
      {sections.map((section, index) => {
        return (
          <section 
            key={index} 
            className="relative min-h-[200vh]"
            ref={(el) => {
              sectionRefs.current[index] = el;
            }}
          >
            {/* Section with gradient backgrounds instead of images */}
            <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">
              <div className={`relative h-full w-full`}>
                <div 
                  className={`absolute inset-0 bg-gradient-to-b ${
                    section.isDark 
                      ? 'from-transparent via-black/40 to-black' 
                      : 'from-black via-black/40 to-transparent'
                  }`}
                />
                
                {/* Animated Section Headings */}
                <motion.div
                  className="absolute inset-0 flex flex-col items-center justify-center"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: false }}
                >
                  <motion.div
                    className="flex flex-col items-center justify-center"
                    initial={{ y: 100, opacity: 0.3 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ 
                      duration: 0.8,
                      ease: "easeOut"
                    }}
                    viewport={{ once: false, margin: "-100px" }}
                  >
                    <h2 
                      className={`text-5xl md:text-6xl lg:text-7xl font-bold text-center ${
                        section.isDark ? 'text-white' : 'text-black'
                      }`}
                    >
                      {section.heading}
                    </h2>
                    {section.subheading && (
                      <span className={`block text-2xl md:text-3xl lg:text-4xl mt-3 font-normal opacity-80 text-center ${
                        section.isDark ? 'text-white' : 'text-black'
                      }`}>
                        {section.subheading}
                      </span>
                    )}
                  </motion.div>
                </motion.div>
              </div>
            </div>

            {/* Content Section */}
            <div 
              className={`relative min-h-screen ${
                section.isDark ? 'bg-black text-white' : 'bg-white text-black'
              }`}
            >
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-40">
                {Array.isArray(section.content) ? (
                  <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
                    {section.content.map((item, i) => {
                      const [title, description] = item.split('–').map(s => s.trim());
                      return (
                        <div 
                          key={i}
                          className="text-xl lg:text-2xl leading-relaxed mb-8"
                        >
                          <h3 className="font-bold text-2xl lg:text-3xl mb-4">{title}</h3>
                          <p className="opacity-90">{description}</p>
                        </div>
                      );
                    })}
                  </div>
                ) : (
                  <div className="max-w-4xl mx-auto text-xl lg:text-2xl leading-relaxed whitespace-pre-line opacity-90">
                    {section.content}
                  </div>
                )}
              </div>
            </div>
          </section>
        );
      })}

      {/* CTA Section */}
      <section className="relative bg-black text-white py-32">
        <div className="absolute inset-0 bg-gradient-to-b from-black/0 via-black to-black" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8"
            >
              Ready to Build Something Great?
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl md:text-2xl text-gray-300 mb-12"
            >
              Join us in redefining the creator economy. Let&apos;s build something extraordinary together.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <a
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium text-black bg-white rounded-full hover:bg-gray-100 transition-colors duration-200"
              >
                Apply Now
                <svg
                  className="w-5 h-5 ml-2 -mr-1"
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
          </div>
        </div>
      </section>
    </main>
  );
};

export default Culture;