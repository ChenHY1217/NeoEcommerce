"use client";

import React, { ReactNode } from 'react';
import { CartProvider } from '@/components/Cart/CartContext';
import Navbar from '@/components/Navbar/Navbar';
import ShoppingCartPanel from './ShoppingCartPanel';

interface CartWrapperProps {
  children: ReactNode;
}

export default function CartWrapper({ children }: CartWrapperProps) {
  return (
    <>
      <CartProvider>
        <Navbar />
        <ShoppingCartPanel />
        {children}
      </CartProvider>
    </>
  );
}
