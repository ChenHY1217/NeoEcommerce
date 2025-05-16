import React from 'react'
import { FaCartArrowDown } from "react-icons/fa";
import SearchBar from './SearchBar';
import Link from 'next/link';

const Navbar: React.FC = () => {
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
        </div>        <nav className="gap-6 items-center ml-auto hidden md:flex mr-10">
            <Link href="/products" className="hover:text-gray-300 transition hover:border-b ">Shop</Link>
            <a href="#" className="hover:text-gray-300 transition hover:border-b ">About</a>
            <a href="#" className="hover:text-gray-300 transition hover:border-b ">Contact</a>
        </nav>
        <button className="relative ml-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 cursor-pointer hover:scale-125 transform-all duration-300" viewBox="0 0 20 20" fill="currentColor">
              <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
            </svg>
            {/* Cart badge */}
            <span className="absolute -top-2 -right-2 bg-indigo-500 text-white text-xs rounded-full px-1">2</span>
        </button>
    </header>
  )
}

export default Navbar;