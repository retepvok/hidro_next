'use client';

import { useEffect } from 'react';

export default function HeightAdjuster() {
  const updateHeight = () => {
    const headerHeight = 75; // Your header height in pixels
    const windowHeight = window.innerHeight;
    document.documentElement.style.setProperty(
      '--content-height', 
      `${windowHeight - headerHeight}px`
    );
  };

  useEffect(() => {
    // Set initial height
    updateHeight();
    
    // Update height on window resize
    window.addEventListener('resize', updateHeight);
    
    // Clean up event listener
    return () => window.removeEventListener('resize', updateHeight);
  }, []);

  return null; // This component doesn't render anything
}
