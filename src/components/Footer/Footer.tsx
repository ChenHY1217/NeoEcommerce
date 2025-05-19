import React from 'react'
import { FaGithub } from 'react-icons/fa'

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
      <footer className="text-center py-6 border-t border-gray-800 mt-8">
          <div className="flex flex-col items-center justify-center">
              <div className="flex items-center justify-center mb-2">
                <a 
                  href="https://github.com/ChenHY1217/NeoEcommerce" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-indigo-400 transition-colors"
                  aria-label="GitHub Repository"
                >
                  <FaGithub size={24} />
                </a>
              </div>
              <p className="text-gray-500">&copy; {new Date().getFullYear()} NeoPCs. All rights reserved.</p>
          </div>
      </footer>
    </div>
  )
}

export default Footer