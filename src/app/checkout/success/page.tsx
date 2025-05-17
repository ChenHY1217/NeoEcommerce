"use client";

import React, { useEffect } from 'react';
import Link from 'next/link';
import { useRouter, useSearchParams } from 'next/navigation';
import { useCart } from '@/components/Cart/CartContext';

export default function CheckoutSuccess() {
  const { clearCart } = useCart();
  const searchParams = useSearchParams();
  const sessionId = searchParams.get('session_id');
  
  useEffect(() => {
    // Clear the cart once payment is successful
    clearCart();
    
    // You could verify the session with Stripe here if needed
    // This would typically be done on the server side
  }, [clearCart]);

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 bg-white p-8 rounded-lg shadow">
        <div>
          <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100">
            <svg className="h-6 w-6 text-green-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Payment Successful!</h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            Thank you for your purchase.
          </p>
          {sessionId && (
            <p className="mt-2 text-center text-xs text-gray-500">
              Order ID: {sessionId}
            </p>
          )}
        </div>
        <div className="mt-6">
          <Link href="/" className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-black hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">
            Return to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
