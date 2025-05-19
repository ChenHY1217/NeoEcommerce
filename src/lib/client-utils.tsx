"use client";

import { useState, useEffect } from 'react';

/**
 * A custom hook that safely handles client-side-only code
 * Returns `true` once the component has mounted on the client
 */
export function useClientSideOnly(): boolean {
  const [isClient, setIsClient] = useState(false);
  
  useEffect(() => {
    setIsClient(true);
  }, []);
  
  return isClient;
}

/**
 * A component that renders its children only on the client side
 * This prevents hydration errors when server and client output would differ
 */
export function ClientOnly({ children, fallback = null }: { 
  children: React.ReactNode; 
  fallback?: React.ReactNode;
}): React.ReactNode {
  const isClient = useClientSideOnly();
  
  if (!isClient) {
    return fallback;
  }
  
  return children;
}
