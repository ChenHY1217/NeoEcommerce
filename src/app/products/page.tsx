"use client"

import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { Product, allProducts } from '@/data/products';

const ProductsPage: React.FC = () => {
  const searchParams = useSearchParams();
  
  // State for filters
  const [category, setCategory] = useState<string>('all');
  const [sortBy, setSortBy] = useState<string>('default');
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 6000]);
  const [searchQuery, setSearchQuery] = useState<string>(searchParams.get('search') || '');
  const [filteredProducts, setFilteredProducts] = useState<Product[]>(allProducts);

  // Apply filters
  useEffect(() => {
    let result = [...allProducts];

    // Apply category filter
    if (category !== 'all') {
      result = result.filter(product => product.category === category);
    }

    // Apply price range filter
    result = result.filter(
      product => product.numericPrice >= priceRange[0] && product.numericPrice <= priceRange[1]
    );

    // Apply search query
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      result = result.filter(
        product => 
          product.name.toLowerCase().includes(query) || 
          product.description.toLowerCase().includes(query)
      );
    }

    // Apply sorting
    switch (sortBy) {
      case 'price-low-high':
        result.sort((a, b) => a.numericPrice - b.numericPrice);
        break;
      case 'price-high-low':
        result.sort((a, b) => b.numericPrice - a.numericPrice);
        break;
      case 'name-a-z':
        result.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case 'name-z-a':
        result.sort((a, b) => b.name.localeCompare(a.name));
        break;
      default:
        // Default sorting (by id)
        result.sort((a, b) => a.id - b.id);
    }

    setFilteredProducts(result);
  }, [category, sortBy, priceRange, searchQuery]);
  // Format price for display in the slider
  const formatPrice = (value: number) => {
    return `$${value.toLocaleString()}`;
  };
  // Effect to update searchQuery when URL parameter changes
  useEffect(() => {
    const search = searchParams.get('search');
    if (search) {
      setSearchQuery(search);
    } else {
      // Clear search query if there's no search parameter
      setSearchQuery('');
    }
  }, [searchParams]);

  return (
    <div className="bg-slate-900 min-h-screen text-white pb-16">
      {/* Hero Section */}
      <div className="bg-gradient-to-b from-indigo-900/70 to-slate-900 py-16">
        <div className="container mx-auto px-4">
          <motion.h1 
            className="text-4xl md:text-5xl font-bold text-center mb-4 text-indigo-400"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Our Products
          </motion.h1>
          <motion.p 
            className="text-center text-gray-300 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Browse our extensive collection of high-quality gaming PCs, laptops, and accessories.
          </motion.p>
        </div>
      </div>

      <div className="container mx-auto px-4 mt-8">
        {/* Filter and Search Section */}
        <div className="bg-white/10 rounded-lg p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {/* Search */}
            <div>
              <label className="block text-gray-300 mb-2 ml-2">Search</label>
              <input
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-4 py-2 bg-slate-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            {/* Category Filter */}
            <div>
              <label className="block text-gray-300 mb-2 ml-2">Category</label>
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="w-full px-4 py-2 bg-slate-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              >
                <option value="all">All Categories</option>
                <option value="desktop">Gaming Desktops</option>
                <option value="laptop">Gaming Laptops</option>
                <option value="accessory">Accessories</option>
              </select>
            </div>

            {/* Sort By */}
            <div>
              <label className="block text-gray-300 mb-2 ml-2">Sort By</label>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="w-full px-4 py-2 bg-slate-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              >
                <option value="default">Default</option>
                <option value="price-low-high">Price: Low to High</option>
                <option value="price-high-low">Price: High to Low</option>
                <option value="name-a-z">Name: A to Z</option>
                <option value="name-z-a">Name: Z to A</option>
              </select>
            </div>            {/* Price Range */}
            <div>
              <div className="flex justify-between mb-2">
                <label className="text-gray-300 ml-2">Price Range</label>
                <span className="text-gray-300">{formatPrice(priceRange[0])} - {formatPrice(priceRange[1])}</span>
              </div>
              <div className="px-2 space-y-4">
                <div>
                  <div className="flex justify-between mb-1">
                    <label className="text-xs text-gray-400">Min: {formatPrice(priceRange[0])}</label>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="6000"
                    step="100"
                    value={priceRange[0]}
                    onChange={(e) => {
                      const min = parseInt(e.target.value);
                      // Prevent min from exceeding max
                      if (min <= priceRange[1]) {
                        setPriceRange([min, priceRange[1]]);
                      }
                    }}
                    className="w-full accent-indigo-500"
                  />
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <label className="text-xs text-gray-400">Max: {formatPrice(priceRange[1])}</label>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="6000"
                    step="100"
                    value={priceRange[1]}
                    onChange={(e) => {
                      const max = parseInt(e.target.value);
                      // Prevent max from going below min
                      if (max >= priceRange[0]) {
                        setPriceRange([priceRange[0], max]);
                      }
                    }}
                    className="w-full accent-indigo-500"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Product Results */}
        <div className="mb-8">
          <p className="text-gray-300 mb-4">{filteredProducts.length} products found</p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filteredProducts.map((product) => (
            <motion.div
              key={product.id}
              className="bg-white/10 rounded-lg overflow-hidden hover:shadow-xl hover:shadow-indigo-500/10 transition-all duration-150 flex flex-col"
              whileHover={{ y: -5 }}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
            >              <div className="h-48 overflow-hidden bg-slate-800">
                <Link href={`/products/${product.id}`}>
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="w-full h-full object-cover object-center transform hover:scale-105 transition-all duration-500"
                  />
                </Link>
              </div><div className="p-6 flex-1 flex flex-col">
                <div className="flex-1">
                  <Link href={`/products/${product.id}`}>
                    <h3 className="font-bold text-xl mb-2 text-cyan-300 hover:text-indigo-300 transition-colors duration-300">{product.name}</h3>
                  </Link>
                  <p className="text-gray-300 text-sm mb-4 line-clamp-3">{product.description}</p>
                </div>
                <div className="flex items-center justify-between mt-auto">
                  <span className="text-white font-semibold">{product.price}</span>
                  <button className="px-4 py-2 bg-indigo-500 text-white rounded hover:bg-indigo-600 transition-colors duration-300">
                    Add to Cart
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* No Results Message */}
        {filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <h3 className="text-2xl font-semibold text-gray-300 mb-4">No Products Found</h3>
            <p className="text-gray-400 mb-6">Try adjusting your search or filter criteria</p>
            <button 
              onClick={() => {
                setCategory('all');
                setSortBy('default');
                setPriceRange([0, 6000]);
                setSearchQuery('');
              }}
              className="px-6 py-2 bg-indigo-500 text-white rounded-md hover:bg-indigo-600 transition-colors duration-300"
            >
              Reset Filters
            </button>
          </div>
        )}
      </div>

      {/* Back to Home */}
      <div className="container mx-auto px-4 mt-12 text-center">
        <Link href="/" className="text-indigo-400 hover:text-indigo-300 inline-flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
          </svg>
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default ProductsPage;
