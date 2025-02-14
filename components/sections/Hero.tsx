"use client";
import Image from "next/image";
import { useEffect, useState, useCallback } from "react";

const images = [
  {
    id: 1,
    src: "/musician.jpg",
    alt: "Musician",
    title: "Musician",
    text: "I create music and run an indie label.",
    gradient: "from-indigo-600/80 via-blue-600/80 to-purple-600/90",
  },
  {
    id: 2,
    src: "/gamer.png",
    alt: "Gamer",
    title: "Gamer",
    text: "I play, review, and stream games.",
    gradient: "from-purple-600/80 via-fuchsia-600/80 to-pink-600/90",
  },
  {
    id: 3,
    src: "/vlogger.jpg",
    alt: "Vlogger",
    title: "Vlogger",
    text: "I vlog my life and turn it into a business.",
    gradient: "from-rose-600/80 via-red-600/80 to-orange-600/90",
  },
  {
    id: 4,
    src: "/tech.jpg",
    alt: "Tech",
    title: "Tech",
    text: "I review new tech and build a tech brand.",
    gradient: "from-cyan-600/80 via-teal-600/80 to-emerald-600/90",
  },
  {
    id: 5,
    src: "/fitness.jpg",
    alt: "Fitness",
    title: "Fitness",
    text: "I help people stay fit and grow a business.",
    gradient: "from-green-600/80 via-emerald-600/80 to-teal-600/90",
  },
  {
    id: 6,
    src: "/fashion.jpg",
    alt: "Fashion",
    title: "Fashion",
    text: "I design trends and build a brand.",
    gradient: "from-pink-600/80 via-rose-600/80 to-red-600/90",
  },
  {
    id: 7,
    src: "/food.jpg",
    alt: "Food",
    title: "Food",
    text: "I cook, taste, and review food.",
    gradient: "from-orange-600/80 via-amber-600/80 to-yellow-600/90",
  },
  {
    id: 8,
    src: "/travel.jpg",
    alt: "Travel",
    title: "Travel",
    text: "I explore the world and turn into a business.",
    gradient: "from-blue-600/80 via-sky-600/80 to-cyan-600/90",
  },
  {
    id: 9,
    src: "/finance.jpg",
    alt: "Finance",
    title: "Finance",
    text: "I teach finance and build money tools.",
    gradient: "from-emerald-600/80 via-green-600/80 to-lime-600/90",
  },
  {
    id: 10,
    src: "/mystery.jpg",
    alt: "Mystery",
    title: "Mystery",
    text: "I explore mysteries and build a business.",
    gradient: "from-violet-600/80 via-purple-600/80 to-fuchsia-600/90",
  },
  {
    id: 11,
    src: "/ai.jpg",
    alt: "AI",
    title: "AI",
    text: "I explore AI and launch AI solutions.",
    gradient: "from-blue-600/80 via-indigo-600/80 to-violet-600/90",
  },
  {
    id: 12,
    src: "/education.jpg",
    alt: "Education",
    title: "Education",
    text: "I simplify learning with educational platforms.",
    gradient: "from-amber-600/80 via-orange-600/80 to-red-600/90",
  },
];

const Hero = () => {
  const [mounted, setMounted] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Track mouse position
  const handleMouseMove = useCallback((e: MouseEvent) => {
    const { clientX, clientY } = e;
    const x = (clientX / window.innerWidth - 0.5) * 20; // Calculate X offset (-10 to 10)
    const y = (clientY / window.innerHeight - 0.5) * 20; // Calculate Y offset (-10 to 10)
    setMousePosition({ x, y });
  }, []);

  useEffect(() => {
    setMounted(true);
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [handleMouseMove]);
  if(!mounted) return null;
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-gradient-to-br from-indigo-950 via-purple-900 to-fuchsia-950">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(76,29,149,0.1),rgba(0,0,0,0))] animate-pulse" />

      {/* Main content container */}
      <div className="relative h-screen flex items-center justify-center px-4">
        {/* Center text container */}
        <div className="text-center z-20 space-y-8">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
            <span className="block bg-gradient-to-r from-white via-purple-200 to-white bg-clip-text text-transparent animate-gradient">
              Empowering the Next-Gen
            </span>
            <span className="block bg-gradient-to-r from-white via-purple-200 to-white bg-clip-text text-transparent animate-gradient delay-75">
              Creator-Led Businesses
            </span>
          </h1>
          <p className="text-purple-200 text-lg md:text-xl max-w-2xl mx-auto">
            Turn your passion into a thriving business with our creator-first
            platform
          </p>
          <button
            className="px-8 py-4 bg-gradient-to-r from-purple-600 to-fuchsia-600 rounded-full text-white font-semibold 
            transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-purple-500/50"
          >
            Start Creating Today
          </button>
        </div>

        {/* Updated Scattered images */}
        {mounted && (
          <div className="absolute inset-0 pointer-events-none">
            {images.map((image, index) => {
              const position = getImagePosition(index, images.length);
              return (
                <div
                  key={image.id}
                  className={`absolute ${position} pointer-events-auto`}
                  style={{
                    transform: `translate(${mousePosition.x * 0.3}px, ${
                      mousePosition.y * 0.3
                    }px)`,
                    transition: "transform 0.3s ease-out",
                  }}
                >
                  <div
                    className="relative w-20 h-20 lg:w-28 lg:h-28 
                    rounded-2xl overflow-hidden transform hover:scale-105 transition-all duration-500 
                    hover:z-30 group cursor-pointer
                    shadow-[0_8px_16px_rgba(255,255,255,0.2)] hover:shadow-[0_12px_24px_rgba(255,255,255,0.5)]"
                  >
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      className="w-full h-full object-cover rounded-2xl group-hover:scale-110 transition-transform duration-500"
                      loading="lazy"
                    ></Image>
                    {/* Gradient overlay on hover */}
                    <div className={`absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent
                      opacity-0 group-hover:opacity-100 transition-all duration-300 backdrop-blur-[2px]`}>
                      <div className="absolute inset-0 flex flex-col items-center justify-center p-3 text-center 
                        transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                        <h3 className="text-white font-bold text-sm md:text-base mb-1 drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]
                          bg-gradient-to-r from-white to-purple-200 bg-clip-text">
                          {image.title}
                        </h3>
                        <p className="text-white/90 text-xs md:text-sm font-medium
                          drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)] leading-snug">
                          {image.text}
                        </p>
                      </div>
                    </div>

                    {/* Custom gradient glow effect */}
                    <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 
                      transition-opacity duration-300 bg-gradient-to-r ${image.gradient} 
                      blur-xl rounded-full scale-150 mix-blend-overlay`} />
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
};

// Helper function to generate balanced image positions
const getImagePosition = (index: number, total: number) => {
  const positions = [
    "top-[10%] left-[10%]",
    "bottom-[10%] left-[10%]",
    "top-[33%] left-[5%]",
    "bottom-[12%] left-[35%]",
    "top-[12%] left-[34%]",
    "top-[55%] left-[5%]",

    "top-[10%] right-[10%]",      // Mirrors first left position
    "bottom-[10%] right-[10%]",   // Mirrors second left position
    "top-[33%] right-[5%]",       // Mirrors third left position
    "bottom-[12%] right-[35%]",   // Mirrors fourth left position
    "top-[12%] right-[34%]",      // Mirrors fifth left position
    "top-[55%] right-[5%]",
  ];

  return positions[index % positions.length];
};

export default Hero;
