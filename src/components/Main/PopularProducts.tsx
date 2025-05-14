"use client"

import React from 'react'
import { motion } from "motion/react";

interface PopularProductsProps {
    products: {
        id: number;
        name: string;
        price: string;
        image: string;
        description: string;
    }[];
}

const PopularProducts: React.FC<PopularProductsProps> = ({products}) => {
  return (
    <section id="products" className="flex-1 px-8">
        <motion.div 
            className='flex flex-col items-center mb-8'
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -100 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
        >
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-indigo-400">Popular Products</h2>
            <p className="text-center text-gray-400 mb-8">Explore our best-selling PCs and accessories.</p>
            <div className="flex justify-center">
                <div className="w-36 h-1 bg-indigo-400 rounded-full"></div>
            </div>
        </motion.div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {products.map((product) => (
            <div key={product.id} className="bg-gray-800 border border-gray-700 rounded-lg p-4 flex flex-col items-center hover:shadow-xl hover:border-indigo-400 transition">
              <img src={product.image} alt={product.name} className="w-40 h-40 object-cover mb-4 rounded bg-gray-700" />
              <h2 className="text-xl font-semibold mb-2 text-cyan-300">{product.name}</h2>
              <span className="text-gray-200 mb-2">{product.price}</span>
              <p className="text-gray-400 text-sm mb-4 text-center">{product.description}</p>
              <button className="px-4 py-2 bg-indigo-400 text-gray-900 rounded hover:bg-cyan-300 transition font-semibold">Add to Cart</button>
            </div>
          ))}
        </div>
    </section>
  )
}

export default PopularProducts