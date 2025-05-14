import React from 'react';
import Navbar from '@/components/Navbar/Navbar';
import Hero from '@/components/Main/Hero';
import PopularProducts from '@/components/Main/PopularProducts';

const products = [
  {
    id: 1,
    name: "Gaming Desktop Pro X",
    price: "$1,499",
    image: "/gaming-desktop.jpg",
    description: "High-performance desktop with RTX 4070, 32GB RAM, 1TB SSD."
  },
  {
    id: 2,
    name: "UltraBook 15" ,
    price: "$999",
    image: "/ultrabook.jpg",
    description: "Sleek 15'' laptop, Intel i7, 16GB RAM, 512GB SSD."
  },
  {
    id: 3,
    name: "Mechanical Keyboard RGB",
    price: "$129",
    image: "/keyboard.jpg",
    description: "Customizable RGB, blue switches, USB-C."
  },
  {
    id: 4,
    name: "4K Gaming Monitor",
    price: "$399",
    image: "/monitor.jpg",
    description: "27'' 4K UHD, 144Hz, HDR, ultra-thin bezels."
  },
  // Add more PC products as needed
];

const Home: React.FC = () => {
  return (
    <div className=" bg-slate-900 text-white flex flex-col">
      {/* Navbar */}
      <Navbar />

      <Hero />

      <PopularProducts products={products} />
      

      {/* Footer */}
      <footer className="text-center text-gray-500 py-6 border-t border-gray-800 mt-8">
        &copy; {new Date().getFullYear()} NeoPCs. All rights reserved.
      </footer>
    </div>
  );
};

export default Home;