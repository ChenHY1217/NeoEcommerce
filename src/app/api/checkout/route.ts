import { NextRequest, NextResponse } from 'next/server';
import Stripe from 'stripe';

// Initialize Stripe with the API version
if (!process.env.STRIPE_SECRET_KEY) {
  throw new Error('STRIPE_SECRET_KEY environment variable is not set');
}
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string);

// console.log(process.env.STRIPE_SECRET_KEY);

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { items } = body;

    if (!items || items.length === 0) {
      return NextResponse.json(
        { error: 'Please provide items to checkout' },
        { status: 400 }
      );
    }

    // Create line items for Stripe
    const lineItems = items.map((item: any) => {
    // Process image URL
    let imageUrl = item.image;
    
    // If image exists and is a relative URL, convert to absolute URL
    if (imageUrl && !imageUrl.startsWith('http')) {
        // Convert relative URLs to absolute URLs
        imageUrl = `${process.env.NEXT_PUBLIC_BASE_URL}${imageUrl.startsWith('/') ? '' : '/'}${imageUrl}`;
    }
    
    // Only include images if we have a valid URL
    const productData: {
        name: string;
        description: string;
        images?: string[];
    } = {
        name: item.name,
        description: item.category || '',
    };
    
    if (imageUrl && (imageUrl.startsWith('http://') || imageUrl.startsWith('https://'))) {
        productData.images = [imageUrl];
    }    // Convert price to cents for Stripe, avoiding floating point errors
    const priceString = item.price.replace('$', '').replace(',', '').trim();

    // Handle the price as a string and convert to cents without floating point errors
    const priceParts = priceString.split('.');
    let priceInCents;
    
    if (priceParts.length === 1) {
        // No decimal part
        priceInCents = parseInt(priceParts[0]) * 100;
    } else {
        // Has decimal part
        const dollars = parseInt(priceParts[0]);
        // Ensure cents has two digits (pad with 0 if needed)
        const cents = priceParts[1].padEnd(2, '0').substring(0, 2);
        priceInCents = dollars * 100 + parseInt(cents);
    }``
    
    return {
        price_data: {
        currency: 'usd',
        product_data: productData,
        unit_amount: priceInCents,
        },
        quantity: item.quantity,
    };
    });    // Ensure we have a base URL
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';
    
    // Create a checkout session
    const session = await stripe.checkout.sessions.create({
      line_items: lineItems,
      mode: 'payment',
      success_url: `${process.env.NEXT_PUBLIC_BASE_URL}/checkout/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.NEXT_PUBLIC_BASE_URL}/checkout/cancel`,
    });

    // Return just the sessionId to match what the client expects
    return NextResponse.json({ sessionId: session.id });
} catch (error: any) {
    console.error('Stripe checkout error:', error);
    const errorMessage = error.message || 'Error creating checkout session';
    
    // Return more detailed error for troubleshooting
    return NextResponse.json(
      { 
        error: errorMessage,
        details: error.type || error.code || 'Unknown error type',
        stack: process.env.NODE_ENV === 'development' ? error.stack : undefined 
      },
      { status: 500 }
    );
  }
}
