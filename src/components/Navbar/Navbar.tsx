"use client";

import React from 'react'
import SearchBar from './SearchBar';
import Link from 'next/link';
import { useCart } from '../Cart/CartContext';
import CartButton from '../Cart/CartButton';

const Navbar: React.FC = () => {
  const { itemCount, toggleCart } = useCart();
  
  return (
    <header className="flex items-center justify-between px-8 py-6 border-b border-slate-600 sticky top-0 shadow-md z-50 bg-slate-900 backdrop-blur shadow-slate-600 text-white">
        <Link href="/" className="flex items-center">
        <span className="text-2xl font-bold tracking-tight text-indigo-400 mr-auto">NeoPCs</span>
        </Link>

        {/* small screens: inline flex with other items */}
        <div className="flex-1 md:hidden px-4">
          <SearchBar />
        </div>

        {/* medium+ screens: centered absolute */}
        <div className="hidden md:flex md:absolute md:left-1/2 md:transform md:-translate-x-1/2 md:w-full md:max-w-3xl items-center justify-center">
          <SearchBar />
        </div>        
        
        <nav className="gap-6 items-center ml-auto hidden md:flex mr-10">
            <Link href="/products" className="hover:text-gray-300 transition hover:border-b ">Shop</Link>
            <a href="#" className="hover:text-gray-300 transition hover:border-b ">About</a>
            <a href="#" className="hover:text-gray-300 transition hover:border-b ">Contact</a>
        </nav>          
        
        <div className="relative">
          <CartButton />
        </div>
        
    </header>
  )
}

export default Navbar;