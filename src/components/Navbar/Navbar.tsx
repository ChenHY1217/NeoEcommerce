import React from 'react'
import { FaCartArrowDown } from "react-icons/fa";
import SearchBar from './SearchBar';

const Navbar: React.FC = () => {
  return (
    <header className="flex items-center justify-between px-8 py-6 border-b border-slate-600 sticky top-0 shadow-md z-50 bg-slate-900 backdrop-blur shadow-slate-600">
        <a href="#hero" className="flex items-center">
          <span className="text-2xl font-bold tracking-tight text-indigo-400 mr-auto">NeoPCs</span>
        </a>

        {/* small screens: inline flex with other items */}
        <div className="flex-1 md:hidden px-4">
          <SearchBar />
        </div>

        {/* medium+ screens: centered absolute */}
        <div className="hidden md:flex md:absolute md:left-1/2 md:transform md:-translate-x-1/2 md:w-full md:max-w-3xl items-center justify-center">
          <SearchBar />
        </div>

        <nav className="gap-6 items-center ml-auto hidden md:flex mr-10">
            <a href="#" className="hover:text-gray-300 transition hover:border-b ">Shop</a>
            <a href="#" className="hover:text-gray-300 transition hover:border-b ">About</a>
            <a href="#" className="hover:text-gray-300 transition hover:border-b ">Contact</a>
        </nav>
        <button className="relative ml-4">
            <FaCartArrowDown size={25} className="text-white cursor-pointer hover:scale-125 transform-all duration-300"/>
            {/* Cart badge */}
            <span className="absolute -top-2 -right-2 bg-indigo-500 text-white text-xs rounded-full px-1">2</span>
        </button>
    </header>
  )
}

export default Navbar;