'use client';

import React, { useRef, useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

interface MarqueeProps {
  items: {
    name: string;
    description?: string;
    logo: React.ReactNode;
  }[];
  direction?: 'left' | 'right';
  speed?: number;
  className?: string;
  itemClassName?: string;
}

// CSS for the animation - using style element to ensure it's applied
const MarqueeStyles = () => (
  <style jsx global>{`
    @keyframes marquee-scroll {
      from { transform: translateX(0); }
      to { transform: translateX(-50%); }
    }
    
    .marquee-container {
      overflow: hidden;
      width: 100%;
    }
    
    .marquee-content {
      display: flex;
      animation: marquee-scroll 30s linear infinite;
      width: max-content;
    }
    
    .marquee-reverse {
      animation-direction: reverse;
    }
    
    .marquee-fast {
      animation-duration: 20s;
    }
    
    .marquee-faster {
      animation-duration: 15s;
    }
  `}</style>
);

export const Marquee: React.FC<MarqueeProps> = ({
  items,
  direction = 'left',
  speed = 6,
  className,
  itemClassName,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isClient, setIsClient] = useState(false);
  
  useEffect(() => {
    setIsClient(true);
  }, []);

  // Create a duplicated array of items to ensure seamless loop
  const duplicatedItems = [...items, ...items];
  
  // Determine speed class
  const speedClass = speed >= 10 ? 'marquee-faster' : speed >= 8 ? 'marquee-fast' : '';
  
  return (
    <>
      <MarqueeStyles />
      <div ref={containerRef} className={cn('marquee-container', className)}>
        <ul
          className={cn(
            'marquee-content flex items-center gap-6 px-2', 
            speedClass,
            direction === 'right' ? 'marquee-reverse' : ''
          )}
          style={{ willChange: 'transform' }}
        >
          {duplicatedItems.map((item, idx) => (
            <li
              key={`${item.name}-${idx}`}
              className={cn(
                'flex shrink-0 items-center gap-4 rounded-xl border border-zinc-800 bg-zinc-900/80 px-6 py-4 backdrop-blur-sm',
                itemClassName
              )}
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#4CAF50]/10">
                {item.logo}
              </div>
              <div>
                <h3 className="font-medium text-white">{item.name}</h3>
                {item.description && <p className="text-sm text-zinc-400">{item.description}</p>}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};
