"use client";

import React from 'react';
import { useCart } from './CartContext';
import { ClientOnly } from '@/lib/client-utils';

const CartButton = () => {
  const { itemCount, toggleCart } = useCart();
  
  return (
    <button 
      onClick={toggleCart}
      className="relative p-2 text-white hover:scale-125 duration-150 transition-all cursor-pointer"
      aria-label="Open Cart"
    >      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
        <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
      </svg>
      <ClientOnly>
        {itemCount > 0 && (
          <span className="absolute -top-2 -right-2 bg-indigo-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
            {itemCount}
          </span>
        )}
      </ClientOnly>
    </button>
  );
};

export default CartButton;
