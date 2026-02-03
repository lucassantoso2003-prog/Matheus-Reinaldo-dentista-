import React, { useState, useEffect } from 'react';
import Button from './Button';

const StickyBottomCTA: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show button after scrolling past the first 500px (Hero section)
      if (window.scrollY > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 p-4 bg-white/80 backdrop-blur-md border-t border-gray-200 z-40 md:hidden animate-in slide-in-from-bottom duration-300">
      <Button 
        text="Agendar Consulta" 
        fullWidth 
        className="py-3 shadow-lg"
      />
    </div>
  );
};

export default StickyBottomCTA;