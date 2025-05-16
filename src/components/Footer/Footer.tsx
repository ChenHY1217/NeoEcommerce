import React from 'react'

const Footer: React.FC = () => {
  return (
    <footer className="text-center text-gray-500 py-6 border-t border-gray-800 mt-8">
        &copy; {new Date().getFullYear()} NeoPCs. All rights reserved.
    </footer>
  )
}

export default Footer