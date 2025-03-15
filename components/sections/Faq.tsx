'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface FAQItem {
  question: string;
  answer: string | string[];
  category?: string;
}

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const faqRefs = useRef<(HTMLDivElement | null)[]>([]);

  const faqItems: FAQItem[] = [
    {
      category: 'general',
      question: 'Who is eligible to apply for the Future Creators Program?',
      answer: 'The program is designed for aspiring content creators who want to build an audience, monetize content, and grow into business owners. Applicants must demonstrate creativity, consistency, and a willingness to commit to the program\'s milestones.'
    },
    {
      category: 'general',
      question: 'What is the selection process for the program?',
      answer: 'The program is highly selective, admitting only five creators per season. Selection is based on application reviews, interviews, and the applicant\'s potential to create impactful content.'
    },
    {
      category: 'general',
      question: 'Is there any cost to join the program?',
      answer: 'No, the program is completely free. However, participants must share 30% of their content revenue and 50% equity in business ventures created during the program.'
    },
    {
      category: 'general',
      question: 'How does the revenue-sharing and equity model work?',
      answer: [
        'Content Revenue: Mess N Art takes 30% of earnings from ads, sponsorships, and other monetization streams.',
        'Business Ventures: Any business co-built with Mess N Art will have a 50/50 equity split, with Mess N Art handling product and operations while the creator focuses on marketing and content.'
      ]
    },
    {
      category: 'general',
      question: 'Can I buy back my content revenue in the future?',
      answer: 'Yes, once you reach a consistent yearly revenue of 1 Crore Rupees, 10 Crore you have the option to buy back 100% control of your content revenue depending upon mess n art for how much they want to sell it for? However, this does not apply to business ventures and depends upon Mess N Art!!'
    },
    {
      category: 'program',
      question: 'What is the difference between the Physical and Virtual programs?',
      answer: [
        'Physical Program (Kota, Rajasthan): Includes studio access (30 hours/month), in-person workshops, and mentorship.',
        'Virtual Program: Provides access to digital tools, remote mentorship, and an online community. Both programs offer the same revenue-sharing model and business-building opportunities.'
      ]
    },
    {
      category: 'program',
      question: 'What happens if I don\'t meet the program milestones?',
      answer: 'Participants are expected to achieve: 100K followers within the first year, $10K/month in revenue starting the second year, growth to $50K, $100K, and eventually $1M in revenue. If these milestones are not met within three years, Mess N Art has the right to discontinue support.'
    },
    {
      category: 'program',
      question: 'What kind of businesses can I co-build with Mess N Art?',
      answer: 'You can co-build up to three types of businesses: Tech-Based Business, Consumer-Facing Brand, or Agency Model. Mess N Art will handle product and operations while you focus on marketing and growth.'
    },
    {
      category: 'program',
      question: 'What happens after the 10-year contract period or an acquisition?',
      answer: [
        'Content revenue streams will be fully settled.',
        'Business venture equity will remain intact.',
        'Participants will become part of the Mess N Art Alumni Network, gaining continued access to collaborations, workshops, and events.'
      ]
    },
    {
      category: 'program',
      question: 'What if I decide to leave the program early?',
      answer: 'If you choose to leave before meeting milestones or the agreed-upon period, the terms of the agreement will determine whether revenue/equity arrangements continue or are settled. Mess N Art aims for flexibility and long-term support, even if creators decide to pursue other paths.'
    }
  ];

  // Initialize refs array
  useEffect(() => {
    faqRefs.current = faqRefs.current.slice(0, faqItems.length);
  }, [faqItems.length]);

  // Filter FAQs by category
  const filteredFAQs = activeCategory === 'all' 
    ? faqItems 
    : faqItems.filter(item => item.category === activeCategory);

  // Handle toggle
  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <main className="min-h-screen bg-[#1a1a1a] text-white pt-32 relative overflow-hidden">
      {/* Hero Section */}
      <section className="relative py-24">
        {/* Added background glow effect */}
        <div 
          className="absolute inset-0 opacity-30"
          style={{
            background: 'radial-gradient(circle at top center, #3319CE 0%, transparent 50%)',
            filter: 'blur(60px)'
          }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#3319CE] via-[#A035E4] to-[#54E2F0]">
                Frequently Asked Questions
              </span>
            </h1>
            <p className="text-lg sm:text-xl max-w-3xl mx-auto text-gray-300 font-medium">
              Find answers to common questions about our Future Creators Program, selection process, and business model.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="py-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center mb-12 overflow-x-auto pb-4">
            <motion.div 
              className="inline-flex bg-gray-800/50 backdrop-blur-sm rounded-full p-1.5"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              {['all', 'general', 'program'].map((category) => (
                <button
                  key={category}
                  className={`px-5 py-2.5 text-sm font-medium rounded-full transition-all duration-300 ${
                    activeCategory === category
                      ? 'bg-gradient-to-r from-[#3319CE] to-[#A035E4] text-white shadow-lg'
                      : 'text-gray-300 hover:text-white hover:bg-gray-700/50'
                  }`}
                  onClick={() => setActiveCategory(category)}
                >
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </button>
              ))}
            </motion.div>
          </div>

          {/* FAQ Items */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="space-y-6"
          >
            {filteredFAQs.map((faq, index) => {
              const isActive = activeIndex === index;
              
              return (
                <motion.div
                  key={index}
                  ref={el => { faqRefs.current[index] = el; }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className={`bg-gray-800/40 backdrop-blur-sm rounded-xl overflow-hidden transition-all duration-300 ${
                    isActive ? 'shadow-lg shadow-[#A035E4]/20' : ''
                  }`}
                >
                  <button
                    onClick={() => toggleAccordion(index)}
                    className="flex justify-between items-center w-full p-6 text-left"
                  >
                    <span className="text-xl font-semibold pr-8">{faq.question}</span>
                    <motion.div
                      animate={{ rotate: isActive ? 45 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="flex-shrink-0 w-6 h-6 text-[#A035E4]"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                      </svg>
                    </motion.div>
                  </button>

                  <AnimatePresence>
                    {isActive && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ 
                          height: 'auto', 
                          opacity: 1,
                          transition: { 
                            height: { duration: 0.3 },
                            opacity: { duration: 0.5 }
                          }
                        }}
                        exit={{ 
                          height: 0, 
                          opacity: 0,
                          transition: { 
                            height: { duration: 0.3 },
                            opacity: { duration: 0.2 }
                          }
                        }}
                        className="overflow-hidden"
                      >
                        <div className="p-6 pt-0 text-gray-300">
                          {Array.isArray(faq.answer) ? (
                            <ul className="space-y-3 list-disc pl-5">
                              {faq.answer.map((item, i) => (
                                <li key={i}>{item}</li>
                              ))}
                            </ul>
                          ) : (
                            <p>{faq.answer}</p>
                          )}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default Faq;