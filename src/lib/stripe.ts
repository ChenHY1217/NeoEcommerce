import { loadStripe, Stripe } from '@stripe/stripe-js';

// Load the Stripe.js script and initialize with your publishable key
// Using a lazy-initialized pattern to ensure client-side only execution
let stripePromise: Promise<Stripe | null> | null = null;

export const getStripe = () => {
  // Only initialize on client side to avoid hydration mismatches
  if (typeof window === 'undefined') {
    return null;
  }
  
  if (!stripePromise) {
    stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!);
  }
  return stripePromise;
};
