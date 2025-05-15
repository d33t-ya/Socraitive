// components/Marquee.tsx
'use client';

import React, { useRef, useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { cn } from '@/lib/utils';

export interface MarqueeItem {
  name: string;
  description?: string;
  logo: React.ReactNode;
}

export interface MarqueeProps {
  items: MarqueeItem[];
  direction?: 'left' | 'right';
  speed?: number; // pixels per second
  className?: string;
  itemClassName?: string;
}

export const Marquee: React.FC<MarqueeProps> = ({
  items,
  direction = 'left',
  speed = 50,
  className = '',
  itemClassName = '',
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const controls = useAnimation();
  const [scrollWidth, setScrollWidth] = useState(0);

  // measure one cycle width
  useEffect(() => {
    const updateWidth = () => {
      if (!containerRef.current) return;
      setScrollWidth(containerRef.current.scrollWidth / 2);
    };
    updateWidth();
    window.addEventListener('resize', updateWidth);
    return () => window.removeEventListener('resize', updateWidth);
  }, [items]);

  // kick off looped animation
  useEffect(() => {
    if (!scrollWidth) return;
    const distance = scrollWidth;
    const duration = distance / speed;
    const fromX = direction === 'left' ? 0 : -distance;
    const toX = direction === 'left' ? -distance : 0;

    controls.start({
      x: [fromX, toX],
      transition: {
        repeat: Infinity,
        ease: 'linear',
        duration,
      },
    });
  }, [scrollWidth, speed, direction, controls]);

  // duplicate for seamless scroll
  const loopItems = [...items, ...items];

  return (
    <div
      ref={containerRef}
      className={cn(
        'w-full overflow-hidden', // from .marquee-container
        className
      )}
    >
      <motion.div
        animate={controls}
        className={cn(
          'inline-flex items-center gap-6 px-2' // from .marquee-content setup
        )}
      >
        {loopItems.map((item, idx) => (
          <div
            key={`item-${idx}`}
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
          </div>
        ))}
      </motion.div>
    </div>
  );
};
