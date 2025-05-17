import { loadStripe, Stripe } from '@stripe/stripe-js';

// Load the Stripe.js script and initialize with your publishable key
// Replace with your actual publishable key from the Stripe dashboard
let stripePromise: Promise<Stripe | null>;

export const getStripe = () => {
  if (!stripePromise) {
    stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!);
  }
  return stripePromise;
};
