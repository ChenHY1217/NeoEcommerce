import React from 'react';
import Hero from '@/components/Main/Hero';
import FeaturedProducts from '@/components/Main/FeaturedProducts';
import Footer from '@/components/Footer/Footer';

const Home: React.FC = () => {
  return (
    <div className=" bg-slate-900 text-white flex flex-col">

      <Hero />

      <FeaturedProducts />    
      
      <Footer />
      
    </div>
  );
};

export default Home;