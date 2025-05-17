import React from 'react'

const Footer: React.FC = () => {
  return (
    <div>
      <div className='flex flex-col items-center justify-center my-16'>
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-indigo-400">Why Choose Us?</h2>
        <p className="text-center text-gray-400 mb-8">We offer the best PCs and accessories tailored to your needs.</p>
        <div className="flex justify-center">
          <div className="w-36 h-1 bg-indigo-400 rounded-full"></div>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 mt-8">
          <div className="bg-white/10 p-6 rounded-lg shadow-lg max-w-xs text-center">
            <h3 className="text-xl font-semibold mb-4 text-cyan-300">Quality Assurance</h3>
            <p className="text-gray-300">All our products undergo rigorous testing to ensure top-notch quality.</p>
          </div>
          <div className="bg-white/10 p-6 rounded-lg shadow-lg max-w-xs text-center">
            <h3 className="text-xl font-semibold mb-4 text-cyan-300">Customer Support</h3>
            <p className="text-gray-300">Our dedicated support team is here to assist you 24/7.</p>
          </div>
          <div className="bg-white/10 p-6 rounded-lg shadow-lg max-w-xs text-center">
            <h3 className="text-xl font-semibold mb-4 text-cyan-300">Fast Shipping</h3>
            <p className="text-gray-300">Get your products delivered quickly and safely to your doorstep.</p>
          </div>
        </div>
      </div>
      <footer className="text-center text-gray-500 py-6 border-t border-gray-800 mt-8">
          &copy; {new Date().getFullYear()} NeoPCs. All rights reserved.
      </footer>
    </div>
  )
}

export default Footer