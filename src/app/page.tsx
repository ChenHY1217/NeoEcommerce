import React from 'react';
import Navbar from '@/components/Navbar/Navbar';

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
    <div className="min-h-screen bg-gray-900 text-white flex flex-col">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center py-16 px-4 text-center">
        <h1 className="text-5xl font-bold mb-4 text-cyan-400">Build Your Dream PC</h1>
        <p className="text-lg text-gray-300 mb-8">Premium desktops, laptops, and accessories for gamers and creators.</p>
        <a
          href="#products"
          className="px-6 py-3 bg-cyan-400 text-gray-900 rounded-full font-medium hover:bg-cyan-300 transition"
        >
          Shop Now
        </a>
      </section>

      {/* Product Grid */}
      <section id="products" className="flex-1 px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {products.map((product) => (
            <div key={product.id} className="bg-gray-800 border border-gray-700 rounded-lg p-4 flex flex-col items-center hover:shadow-xl hover:border-cyan-400 transition">
              <img src={product.image} alt={product.name} className="w-40 h-40 object-cover mb-4 rounded bg-gray-700" />
              <h2 className="text-xl font-semibold mb-2 text-cyan-300">{product.name}</h2>
              <span className="text-gray-200 mb-2">{product.price}</span>
              <p className="text-gray-400 text-sm mb-4 text-center">{product.description}</p>
              <button className="px-4 py-2 bg-cyan-400 text-gray-900 rounded hover:bg-cyan-300 transition font-semibold">Add to Cart</button>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center text-gray-500 py-6 border-t border-gray-800 mt-8">
        &copy; {new Date().getFullYear()} NeoPCs. All rights reserved.
      </footer>
    </div>
  );
};

export default Home;