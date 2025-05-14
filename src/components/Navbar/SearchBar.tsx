import React from 'react'

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
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 104.5 4.5a7.5 7.5 0 0012.15 12.15z" />
          </svg>
        </button>
      </form>
    </div>
  )
}

export default SearchBar