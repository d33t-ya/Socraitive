'use client';

import React, { useState } from 'react';
import { motion } from 'motion/react';
import { cn } from '@/lib/utils';

interface GlowingEffectProps {
  children: React.ReactNode;
  className?: string;
  glowColor?: string;
  containerClassName?: string;
}

export const GlowingEffect: React.FC<GlowingEffectProps> = ({
  children,
  className,
  glowColor = 'rgba(76, 175, 80, 0.4)', // Default green glow color
  containerClassName,
}) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setPosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <motion.div
      className={cn('relative overflow-hidden rounded-xl', containerClassName)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onMouseMove={handleMouseMove}
    >
      {/* Glow effect */}
      <motion.div
        className="pointer-events-none absolute -inset-px opacity-0 transition-opacity duration-300"
        style={{
          background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, ${glowColor}, transparent 40%)`,
        }}
        animate={{
          opacity: isHovered ? 0.6 : 0,
        }}
      />

      {/* Content */}
      <div className={cn('relative z-10', className)}>{children}</div>
    </motion.div>
  );
};
