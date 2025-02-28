'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Instagram, Twitter, Linkedin, Mail } from 'lucide-react';

export function Footer() {
  return (
    <footer className="relative bg-[#1a1a1a] text-white overflow-hidden">
      {/* Gradient Overlay */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-1/4 w-72 h-72 bg-[#3319CE]/20 rounded-full mix-blend-screen filter blur-xl" />
        <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-[#A035E4]/20 rounded-full mix-blend-screen filter blur-xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12">
          {/* Brand Section */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center space-x-2">
              <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="24" height="24" rx="4" fill="currentColor" />
              </svg>
              <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#6419ce] to-[#A035E4]">
                MessNArt
              </span>
            </Link>
            <p className="text-gray-400 text-sm">
              Building the next generation of creator-led brands
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
                {[
                { name: 'Culture', href: '/culture' },
                { name: 'Process', href: '/process' }
                ].map((item) => (
                <li key={item.name}>
                  <Link 
                  href={item.href} 
                  className="text-gray-400 hover:text-white transition-colors duration-200 flex items-center"
                  >
                  <span className="mr-2">→</span>
                  {item.name}
                  </Link>
                </li>
                ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Connect</h3>
            <div className="flex space-x-4">
              {[
                { Icon: Instagram, href: '#' },
                { Icon: Twitter, href: '#' },
                { Icon: Linkedin, href: '#' },
                { Icon: Mail, href: '#' }
              ].map(({ Icon, href }, index) => (
                <motion.a
                  key={index}
                  href={href}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-2 rounded-full bg-white/5 hover:bg-white/10 transition-colors duration-200"
                >
                  <Icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Stay Updated</h3>
            <div className="space-y-4">
              <p className="text-sm text-gray-400">
                Subscribe to our newsletter for the latest updates
              </p>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="bg-white/5 text-white px-4 py-2 rounded-l-md flex-1 focus:outline-none focus:ring-2 focus:ring-[#A035E4]"
                />
                <button className="px-4 py-2 bg-gradient-to-r from-[#6419ce] to-[#A035E4] rounded-r-md hover:opacity-90 transition-opacity duration-200">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-white/10">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <p className="text-sm text-gray-400">
              © {new Date().getFullYear()} MessNArt. All rights reserved.
            </p>
            <div className="flex space-x-6">
              {['Privacy Policy', 'Terms of Service'].map((item) => (
                <Link
                  key={item}
                  href="#"
                  className="text-sm text-gray-400 hover:text-white transition-colors duration-200"
                >
                  {item}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;