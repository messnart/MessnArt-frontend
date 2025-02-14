"use client"
import Link from "next/link"
import { Fade as Hamburger } from 'hamburger-react'
import { useState } from 'react'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="fixed w-full top-0 left-0 z-50">
      <div className="flex items-center justify-between bg-black/50 backdrop-blur-sm px-6 md:px-12 py-4 text-white">
        <div>
          <h1 className="text-xl font-bold">Mess n Art</h1>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-8">
          <button className="hover:text-gray-300 transition-colors">About Us</button>
          <button className="hover:text-gray-300 transition-colors">Pro</button>
          <button className="bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 
            px-4 py-2 rounded-full transition-all duration-300 shadow-lg hover:shadow-blue-500/50">
            Start Gifting
            </button>
          <Link href="/" className="hover:text-gray-300 transition-colors">
            Wildfire Assistance
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <Hamburger toggled={isOpen} toggle={setIsOpen} color="#ffffff" />
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="fixed inset-0 top-[72px] bg-black/95 md:hidden text-white">
          <nav className="flex flex-col items-center gap-6 pt-8">
            <button className="text-lg hover:text-gray-300 transition-colors">
              About Us
            </button>
            <button className="text-lg hover:text-gray-300 transition-colors">
              Pro
            </button>
            <button className="text-lg bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 
                px-6 py-2 rounded-full transition-all duration-300 shadow-lg hover:shadow-blue-500/50">
                Start Gifting
            </button>
            <Link href="/" className="text-lg hover:text-gray-300 transition-colors">
              Wildfire Assistance
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}

export default Header