"use client";

import React, { useState } from 'react';
import { useCart } from './CartContext';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { getStripe } from '@/lib/stripe';

const ShoppingCartPanel = () => {
  const { 
    cart, 
    removeFromCart, 
    updateQuantity, 
    clearCart, 
    itemCount, 
    cartTotal, 
    isCartOpen, 
    toggleCart 
  } = useCart();
  
  const [isLoading, setIsLoading] = useState(false);
  const stripePromise = getStripe();

  const handleCheckout = async () => {
    setIsLoading(true);
    try {
      const stripe = await stripePromise;
      const response = await fetch('/api/checkout', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ items: cart }),
      });
      
    //   console.log('Response from checkout API:', response);
      const { sessionId } = await response.json();
    //   console.log('Checkout session ID:', sessionId);
      
      // Redirect to Stripe Checkout
      const { error } = await stripe!.redirectToCheckout({ sessionId: sessionId });
      if (error) {
        console.error('Stripe checkout error:', error);
        alert('There was an error processing your payment. Please try again1.');
      }
    } catch (error) {
      console.error('Error during checkout:', error);
      alert('There was an error processing your payment. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };
  
  // Animation variants
  const backdropVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 0.5 }
  };

  const cartVariants = {
    hidden: { x: "100%" },
    visible: { x: 0, transition: { type: "spring", stiffness: 300, damping: 30 } }
  };

  return (
    <AnimatePresence>
      {isCartOpen && (
        <div className="fixed inset-0 z-[100] overflow-hidden">
          <motion.div 
            className="absolute inset-0 bg-black"
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={backdropVariants}
            onClick={toggleCart}
          ></motion.div>
          
          <div className="absolute inset-y-0 right-0 max-w-full flex">
            <motion.div 
              className="w-screen max-w-md transform"
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={cartVariants}
            >
              <div className="h-full flex flex-col bg-white shadow-xl overflow-y-auto">
                {/* Cart header */}
                <div className="flex-shrink-0 px-4 py-6 bg-gray-50 sm:px-6">
                  <div className="flex items-start justify-between">
                    <h2 className="text-lg font-medium text-gray-900">Shopping Cart</h2>
                    <div className="ml-3 h-7 flex items-center">
                      <button
                        type="button"
                        className="-m-2 p-2 text-gray-400 hover:text-gray-500"
                        onClick={toggleCart}
                      >
                        <span className="sr-only">Close panel</span>
                        <svg className="h-6 w-6 cursor-pointer" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </button>
                    </div>
                  </div>
                  <div className="mt-1">
                    <p className="text-sm text-gray-500">
                      {itemCount === 0 
                        ? 'Your cart is empty' 
                        : `You have ${itemCount} item${itemCount !== 1 ? 's' : ''} in your cart`}
                    </p>
                  </div>
                </div>

                {/* Cart items */}
                <div className="flex-1 py-6 px-4 sm:px-6 overflow-auto">
                  {cart.length === 0 ? (
                    <p className="text-center py-8">Your cart is empty</p>
                  ) : (
                    <ul role="list" className="divide-y divide-gray-200">
                      {cart.map((item) => (
                        <li key={item.id} className="py-6 flex">
                          <div className="relative flex-shrink-0 w-24 h-24 overflow-hidden rounded-md border border-gray-200">
                            <Image
                              src={item.image}
                              alt={item.name}
                              fill
                              className="object-cover object-center"
                            />
                          </div>

                          <div className="ml-4 flex-1 flex flex-col">
                            <div>
                              <div className="flex justify-between text-base font-medium text-gray-900">
                                <h3>{item.name}</h3>
                                <p className="ml-4">{item.price}</p>
                              </div>
                              <p className="mt-1 text-sm text-gray-500">{item.category}</p>
                            </div>
                            <div className="flex-1 flex items-end justify-between text-sm">
                              <div className="flex items-center">
                                <button 
                                  className="px-2 border rounded-l cursor-pointer"
                                  onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                >
                                  -
                                </button>
                                <span className="px-3">{item.quantity}</span>
                                <button 
                                  className="px-2 border rounded-r cursor-pointer"
                                  onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                >
                                  +
                                </button>
                              </div>

                              <button 
                                type="button" 
                                className="font-medium text-red-600 hover:text-red-500 cursor-pointer"
                                onClick={() => removeFromCart(item.id)}
                              >
                                Remove
                              </button>
                            </div>
                          </div>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>

                {/* Cart footer */}
                {cart.length > 0 && (
                  <div className="border-t border-gray-200 py-6 px-4 sm:px-6">
                    <div className="flex justify-between text-base font-medium text-gray-900">
                      <p>Subtotal</p>
                      <p>${cartTotal.toFixed(2)}</p>
                    </div>
                    <p className="mt-0.5 text-sm text-gray-500">Shipping and taxes calculated at checkout.</p>
                    <div className="mt-6">
                      <a
                        href="#"
                        className="flex justify-center items-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-black hover:bg-gray-800 cursor-pointer"
                        onClick={handleCheckout}
                      >
                        {isLoading ? 'Processing...' : 'Checkout'}
                      </a>
                    </div>
                    <div className="mt-6 flex justify-center text-sm text-center text-gray-500">
                      <p>
                        <button
                          type="button"
                          className="text-black font-medium hover:text-gray-800 cursor-pointer"
                          onClick={clearCart}
                        >
                          Clear Cart
                        </button>
                        {' or '}
                        <button
                          type="button"
                          className="text-black font-medium hover:text-gray-800 cursor-pointer"
                          onClick={toggleCart}
                        >
                          Continue Shopping<span aria-hidden="true"> &rarr;</span>
                        </button>
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default ShoppingCartPanel;
