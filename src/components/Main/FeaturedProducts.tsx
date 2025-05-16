"use client"

import React from 'react'
import { motion } from "motion/react";
import Link from 'next/link';

const FeaturedProducts: React.FC = () => {
  return (    
  
    <section id="products" className="flex-1 px-4 md:px-8 py-8 flex-col flex items-center justify-center max-w-7xl mx-auto ">
      {/* Section Title */}
      <motion.div 
          className='flex flex-col items-center mb-16'
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
      >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-indigo-400">Featured Products</h2>
          <p className="text-center text-gray-400 mb-8">Explore our best-selling PCs and accessories.</p>
          <div className="flex justify-center">
              <div className="w-36 h-1 bg-indigo-400 rounded-full"></div>
          </div>
      </motion.div>
      
      {/* View All Products Button */}
      <motion.div
        className="w-full flex justify-center mb-12"
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 50 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <a 
          href="/products" 
          className="px-8 py-3 bg-indigo-400 text-gray-900 rounded-md hover:bg-cyan-300 transition duration-300 font-semibold shadow-md hover:shadow-indigo-500/30 flex items-center gap-2"
        >
          View All Products
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </a>
      </motion.div>
      
      {/* Featured Gaming Desktop */}
      <motion.div 
          className='bg-white/10 w-full rounded-lg shadow-xl shadow-indigo-400/20 flex flex-col md:flex-row items-center justify-between mb-16 p-8 gap-10 max-w-6xl hover:bg-white/15 transition duration-300'
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.8}}
          viewport={{ once: true }}
      >          
        <div className="flex flex-col items-center justify-center md:w-1/2">
          <Link href="/products/1">
            <img src="/Product_Images/PC1_img.webp" alt="Gaming Desktop" className="w-80 h-full object-cover rounded-lg bg-gray-700 shadow-md hover:opacity-90 transition-opacity" />
          </Link>
        </div>
        <div className="md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left">
            <Link href="/products/1">
              <h2 className="text-2xl md:text-3xl font-semibold mb-3 text-cyan-300 hover:text-indigo-300 transition-colors duration-300">Corsair Vengeance i7600</h2>
            </Link>
            <span className="text-gray-200 text-xl mb-3 font-medium">$2,799.99</span>
            <p className="text-gray-300 mb-8 leading-relaxed">Corsair's Vengeance i7600 gaming PC stands out with its superior build quality, excellent gaming performance, quiet operation, and an extensive two-year warranty. It's an excellent choice for those looking to invest in a premium gaming rig.</p>
            <button className="px-8 py-3 bg-indigo-400 text-gray-900 rounded-md hover:bg-cyan-300 transition font-semibold shadow-md hover:shadow-lg hover:shadow-indigo-400/30">Add to Cart</button>
        </div>
      </motion.div>        
      
      {/* Featured Gaming Laptop */}
      <motion.div 
          className='bg-white/10 w-full rounded-lg shadow-xl shadow-indigo-400/20 flex flex-col md:flex-row-reverse items-center justify-between mb-16 p-8 gap-10 max-w-6xl hover:bg-white/15 transition duration-300'
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 0.8}}
          viewport={{ once: true }}
      >
        <div className="flex flex-col items-center justify-center md:w-1/2">
            <Link href="/products/6">
              <img src="/Product_Images/Laptop1_img.webp" alt="Gaming Laptop" className="w-80 h-full object-cover rounded-lg bg-gray-700 shadow-md hover:opacity-90 transition-opacity" />
            </Link>
        </div>
        <div className="md:w-1/2 flex flex-col items-center md:items-end text-center md:text-right">
            <Link href="/products/6">
              <h2 className="text-2xl md:text-3xl font-semibold mb-3 text-cyan-300 hover:text-indigo-300 transition-colors duration-300">MSI Titan 18 HX AI</h2>
            </Link>
            <span className="text-gray-200 text-xl mb-3 font-medium">$5,999.99</span>
            <p className="text-gray-300 mb-8 leading-relaxed">MSI’s latest Titan delivers chart-topping performance, an extremely vibrant screen, and 6TB of SSD storage. Its loud fans and brief battery life are to be expected — this is a gaming dream machine for those who with a larger budget.</p>
            <button className="px-8 py-3 bg-indigo-400 text-gray-900 rounded-md hover:bg-cyan-300 transition font-semibold shadow-md hover:shadow-lg hover:shadow-indigo-400/30">Add to Cart</button>
        </div>
      </motion.div>        
      
      {/* Featured Gaming Keyboard */}
      <motion.div 
          className='bg-white/10 w-full rounded-lg shadow-xl shadow-indigo-400/20 flex flex-col md:flex-row items-center justify-between mb-16 p-8 gap-10 max-w-6xl hover:bg-white/15 transition duration-300'
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.8}}
          viewport={{ once: true }}
      >          
        <div className="flex flex-col items-center justify-center md:w-1/2">
          <Link href="/products/11">
            <img src="/Product_Images/Keyboard1_img.jpg" alt="Gaming Keyboard" className="w-full h-full object-cover rounded-lg bg-gray-700 shadow-md hover:scale-105 transition duration-300" />
          </Link>
        </div>
        <div className="md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left">            
          <Link href="/products/11">
            <h2 className="text-2xl md:text-3xl font-semibold mb-3 text-cyan-300 hover:text-indigo-300 transition-colors duration-300">NuPhy Field75 HE</h2>
          </Link>
          <span className="text-gray-200 text-xl mb-3 font-medium">$169.99</span>
          <p className="text-gray-300 mb-8 leading-relaxed">The NuPhy Field75 HE stands out with its customizable Hall effect switches that let you adjust key sensitivity, perfect for competitive gaming with features like rapid trigger and an 8000Hz polling rate for measurably lower latency. Built with premium materials including PBT keycaps and multiple layers of acoustic foam, this keyboard delivers both performance and quality that serious gamers demand.</p>
          <button className="px-8 py-3 bg-indigo-400 text-gray-900 rounded-md hover:bg-cyan-300 transition font-semibold shadow-md hover:shadow-lg hover:shadow-indigo-400/30">Add to Cart</button>
        </div>
      </motion.div>

    </section>
  )
}

export default FeaturedProducts