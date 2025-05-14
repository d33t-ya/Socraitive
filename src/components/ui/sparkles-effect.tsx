'use client';
import React, { useEffect, useState } from 'react';
import { motion } from 'motion/react';

interface Sparkle {
  id: string;
  size: number;
  style: {
    top: string;
    left: string;
    opacity: number;
  };
}

export const SparklesEffect = ({ color = '#4CAF50', count = 20 }: { color?: string; count?: number }) => {
  const [sparkles, setSparkles] = useState<Sparkle[]>([]);

  const generateSparkle = (): Sparkle => ({
    id: Math.random().toString(36).substring(2, 9),
    size: Math.random() * 5 + 2,
    style: {
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      opacity: Math.random() * 0.6 + 0.2,
    },
  });

  useEffect(() => {
    const initialSparkles = Array.from({ length: count }, () => generateSparkle());
    setSparkles(initialSparkles);

    const interval = setInterval(() => {
      setSparkles((currentSparkles) => {
        const newSparkle = generateSparkle();
        const removeIndex = Math.floor(Math.random() * currentSparkles.length);
        return [...currentSparkles.slice(0, removeIndex), newSparkle, ...currentSparkles.slice(removeIndex + 1)];
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [count]);

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {sparkles.map((sparkle) => (
        <motion.div
          key={sparkle.id}
          initial={{ opacity: 0, scale: 0 }}
          animate={{
            opacity: sparkle.style.opacity,
            scale: 1,
          }}
          transition={{ duration: 0.5 }}
          style={{
            position: 'absolute',
            top: sparkle.style.top,
            left: sparkle.style.left,
            width: `${sparkle.size}px`,
            height: `${sparkle.size}px`,
            borderRadius: '50%',
            backgroundColor: color,
          }}
        />
      ))}
    </div>
  );
};
