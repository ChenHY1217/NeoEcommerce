'use client'

import React from 'react'
import { motion } from "motion/react"

const Hero: React.FC = () => {
  return (
    <section id="hero" className="h-screen relative top-[-10vh] overflow-hidden border-b border-slate-600 shadow-md shadow-slate-600">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: "url('/Hero_Images/ImgHeroPC2.webp')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "brightness(0.9)" 
        }}
      ></div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-black/20"></div>
      <motion.div 
        className="relative z-10 flex flex-col items-center justify-center h-full px-4 text-center"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="font-bold text-5xl md:text-6xl mb-4 text-indigo-400 drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)] text-shadow-lg">Discover Your Dream PC</h1>
        <p className="text-lg md:text-xl text-gray-100 mb-8 drop-shadow-[0_2px_3px_rgba(0,0,0,0.9)] max-w-2xl">Premium desktops, laptops, and accessories for gamers and creators.</p>
        <a href="#products">
          <button className="relative inline-flex h-12 w-36 overflow-hidden rounded-full p-[1px] shadow-lg hover:scale-105 transition-all duration-300">
            <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
            <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
              Shop Now
            </span>
          </button>
        </a>
        
      </motion.div>
    </section>
  )
}

export default Hero;