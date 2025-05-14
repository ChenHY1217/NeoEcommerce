import React from 'react'
import { CiSearch } from "react-icons/ci";

const SearchBar: React.FC = () => {
  return (
    <div className="w-full max-w-md">
      <form className="relative">
        <input
          type="text"
          placeholder="Search products..."
          className="w-full rounded-full bg-slate-800 text-white placeholder-gray-400 px-5 py-2 pr-12 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition shadow-sm border border-slate-700"
        />
        <button
          type="submit"
          className="absolute right-2 top-1/2 -translate-y-1/2 text-indigo-400 hover:text-indigo-300 focus:outline-none"
          aria-label="Search"
        >
          <CiSearch size={25}/>
        </button>
      </form>
    </div>
  )
}

export default SearchBar