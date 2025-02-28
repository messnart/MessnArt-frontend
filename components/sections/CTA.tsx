'use client';

import { ArrowRight } from 'lucide-react';
import { Button } from '../ui/button';
import { motion } from 'framer-motion';

export function CTASection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#1a1a1a] text-white">
      {/* Background gradient image - left aligned */}
      <div 
        className="absolute sm:-left-60 md:-left-80 top-0 w-full sm:w-2/3 h-full opacity-70 pointer-events-none transform sm:-translate-x-1/4"
        style={{
          backgroundImage: `url('https://cdn.prod.website-files.com/61f851e659d331fc33952ad4/6204f2d3a928076b9688c4cb_gradient-circle-bg.svg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'left',
          backgroundRepeat: 'no-repeat',
          mixBlendMode: 'screen',
        }}
      />

      {/* Content container */}
      <div className="relative z-10 w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 md:py-16 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-16 sm:space-y-20 md:space-y-24"
        >
          <div className="space-y-6 sm:space-y-8">
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold px-2">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#3319CE] to-[#A035E4]">
                Call To Action
              </span>
            </h1>
            <div className="space-y-4 sm:space-y-6 mt-8 sm:mt-10 md:mt-12">
              <h2 className="text-xl sm:text-2xl md:text-4xl font-semibold text-white/90">
                Creator-Led Brands
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-gray-400 max-w-2xl mx-auto">
                Apply if you want to be a next gen creator!
              </p>
            </div>
          </div>

          <div>
            <Button
              size="lg"
              className="group relative px-6 sm:px-8 py-4 sm:py-6 text-base sm:text-lg transition-all duration-300 hover:scale-105 bg-gradient-to-r from-[#3319CE] to-[#A035E4] text-white border-none hover:shadow-lg hover:shadow-purple-500/25"
            >
              Apply Now
              <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}