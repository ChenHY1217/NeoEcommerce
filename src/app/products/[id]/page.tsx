"use client"

import React from 'react';
import { notFound } from 'next/navigation';
import { motion } from 'motion/react';
import Link from 'next/link';
import Image from 'next/image';
import { allProducts } from '@/data/products';
import { useParams } from 'next/navigation';
import AddToCartButton from '@/components/Cart/AddToCartButton';

const ProductPage: React.FC = () => {
  // Find the product by ID
  const params = useParams();
  const productId = parseInt(params.id as string);
  const [purchaseAmount, setPurchaseAmount] = React.useState<number>(1);
  const product = allProducts.find(p => p.id === productId);

  // If product doesn't exist, show 404
  if (!product) {
    notFound();
  }

  // Helper function to format price
  const formatPrice = (price: string) => {
    return price;
  };

  // Get related products (same category)
  const relatedProducts = allProducts
    .filter(p => p.category === product.category && p.id !== product.id)
    .slice(0, 4); // Show up to 4 related products

  return (
    <div className="bg-slate-900 min-h-screen text-white pb-16">

      {/* Product Hero Section */}
      <div className="bg-gradient-to-b from-indigo-900/70 to-slate-900 pt-16 pb-4">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-2 mb-8">
            <Link href="/products" className="text-gray-400 hover:text-indigo-400 transition">
              Products
            </Link>
            <span className="text-gray-600">/</span>
            <span className="text-indigo-400">{product.name}</span>
          </div>
          <motion.h1 
            className="text-3xl md:text-4xl font-bold mb-4 text-indigo-400"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {product.name}
          </motion.h1>
        </div>
      </div>

      <div className="container mx-auto px-4 mt-8">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Product Image */}
          <motion.div 
            className="lg:w-1/2"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >            <div className="bg-slate-800 rounded-lg overflow-hidden shadow-xl shadow-black/20">
              <Image 
                src={product.image} 
                alt={product.name} 
                width={600}
                height={400}
                className="w-full object-cover"
                priority
              />
            </div>
          </motion.div>

          {/* Product Details */}
          <motion.div 
            className="lg:w-1/2"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="space-y-6">
              {/* Price */}
              <div className="mb-6">
                <span className="text-3xl font-bold text-white">{formatPrice(product.price)}</span>
              </div>
              
              {/* Description */}
              <div>
                <h2 className="text-xl font-semibold mb-3 text-indigo-400">Description</h2>
                <p className="text-gray-300 leading-relaxed">{product.description}</p>
              </div>
              
              {/* Additional Details - These would come from an expanded product model */}
              <div className="border-t border-gray-700 pt-6">
                <h2 className="text-xl font-semibold mb-3 text-indigo-400">Specifications</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-start">
                    <span className="text-gray-400 mr-2">Category:</span>
                    <span className="text-white capitalize">{product.category}</span>
                  </div>
                  {product.category === 'desktop' && (
                    <>
                      <div className="flex items-start">
                        <span className="text-gray-400 mr-2">Processor:</span>
                        <span className="text-white">Intel Core i9 / AMD Ryzen 9</span>
                      </div>
                      <div className="flex items-start">
                        <span className="text-gray-400 mr-2">Graphics:</span>
                        <span className="text-white">NVIDIA RTX Series</span>
                      </div>
                      <div className="flex items-start">
                        <span className="text-gray-400 mr-2">Memory:</span>
                        <span className="text-white">32GB-64GB DDR5</span>
                      </div>
                      <div className="flex items-start">
                        <span className="text-gray-400 mr-2">Storage:</span>
                        <span className="text-white">1TB-2TB NVMe SSD</span>
                      </div>
                    </>
                  )}
                  {product.category === 'laptop' && (
                    <>
                      <div className="flex items-start">
                        <span className="text-gray-400 mr-2">Processor:</span>
                        <span className="text-white">Intel Core i7 / AMD Ryzen 7</span>
                      </div>
                      <div className="flex items-start">
                        <span className="text-gray-400 mr-2">Graphics:</span>
                        <span className="text-white">NVIDIA RTX Series</span>
                      </div>
                      <div className="flex items-start">
                        <span className="text-gray-400 mr-2">Display:</span>
                        <span className="text-white">15.6&quot; 165Hz QHD</span>
                      </div>
                      <div className="flex items-start">
                        <span className="text-gray-400 mr-2">Battery:</span>
                        <span className="text-white">Up to 8 hours</span>
                      </div>
                    </>
                  )}
                  {product.category === 'accessory' && (
                    <>
                      <div className="flex items-start">
                        <span className="text-gray-400 mr-2">Connectivity:</span>
                        <span className="text-white">USB-C / Wireless</span>
                      </div>
                      <div className="flex items-start">
                        <span className="text-gray-400 mr-2">RGB Lighting:</span>
                        <span className="text-white">Customizable RGB</span>
                      </div>
                      <div className="flex items-start">
                        <span className="text-gray-400 mr-2">Warranty:</span>
                        <span className="text-white">2 Years</span>
                      </div>
                    </>
                  )}
                </div>
              </div>
              
              {/* Add to Cart */}              
              <div className="pt-6 border-t border-gray-700">
                <div className="flex flex-col sm:flex-row gap-4">
                  <div className="flex items-center border border-gray-700 rounded-md">
                    <button 
                      className="cursor-pointer px-4 py-2 text-white bg-gray-800 hover:bg-gray-700 transition rounded-l"
                      onClick={() => setPurchaseAmount(prev => Math.max(1, prev - 1))}
                    >
                      -
                    </button>
                    <input 
                        type="text" 
                        value={purchaseAmount}
                        onChange={(e) => {
                          const val = parseInt(e.target.value);
                          if (!isNaN(val)) {
                            setPurchaseAmount(Math.max(1, val));
                          }
                        }}
                        className="w-16 px-2 py-2 text-center bg-transparent border-x border-gray-700 text-white [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none" 
                    />
                    <button 
                      className="cursor-pointer px-4 py-2 text-white bg-gray-800 hover:bg-gray-700 transition rounded-r"
                      onClick={() => setPurchaseAmount(prev => prev + 1)}
                    >
                      +
                    </button>
                  </div>                  
                  <AddToCartButton 
                    product={product} 
                    quantity={purchaseAmount}
                    className="flex-1 px-8 py-3 bg-indigo-500 hover:bg-indigo-600 font-semibold flex items-center justify-center gap-2"
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div className="mt-24">
            <h2 className="text-2xl font-bold text-indigo-400 mb-8">Related Products</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedProducts.map((related) => (
                <Link
                  key={related.id}
                  href={`/products/${related.id}`}
                  className="bg-white/10 rounded-lg overflow-hidden hover:shadow-xl hover:shadow-indigo-500/10 transition-all duration-300 flex flex-col hover:scale-105 "
                >                  <div className="h-40 overflow-hidden bg-slate-800">
                    <Image 
                      src={related.image} 
                      alt={related.name} 
                      width={300}
                      height={160}
                      className="w-full h-full object-cover object-center"
                    />
                  </div>
                  <div className="p-4 flex-1">
                    <h3 className="font-bold text-lg mb-1 text-cyan-300">{related.name}</h3>
                    <p className="text-white font-semibold mb-2">{related.price}</p>
                    <p className="text-gray-400 text-sm line-clamp-2">{related.description}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Back to Products */}
      <div className="container mx-auto px-4 mt-12 text-center">
        <Link href="/products" className="text-indigo-400 hover:text-indigo-300 inline-flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
          </svg>
          Back to Products
        </Link>
      </div>
    </div>
  );
};

export default ProductPage;
