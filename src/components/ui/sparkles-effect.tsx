'use client';
import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'motion/react';

interface Sparkle {
  id: string;
  size: number;
  x: number; // percent
  y: number; // percent
  opacity: number;
  velocityX: number; // percent per frame
  velocityY: number;
}

export const SparklesEffect = ({
  color = '#4CAF50',
  count = 20,
}: { color?: string; count?: number }) => {
  const [sparkles, setSparkles] = useState<Sparkle[]>([]);
  const animationRef = useRef<number>();

  const generateSparkle = (): Sparkle => ({
    id: Math.random().toString(36).substring(2, 9),
    size: Math.random() * 5 + 2,
    x: Math.random() * 100,
    y: Math.random() * 100,
    opacity: Math.random() * 0.6 + 0.2,
    velocityX: (Math.random() - 0.5) * 0.15,
    velocityY: (Math.random() - 0.5) * 0.15,
  });

  // Initialize sparkles
  useEffect(() => {
    setSparkles(Array.from({ length: count }, generateSparkle));
  }, [count]);

  // Animate sparkles
  useEffect(() => {
    const animate = () => {
      setSparkles((prev) =>
        prev.map((sparkle) => {
          let { x, y, velocityX, velocityY } = sparkle;
          x += velocityX;
          y += velocityY;

          // Bounce off edges
          if (x < 0 || x > 100) velocityX *= -1;
          if (y < 0 || y > 100) velocityY *= -1;
          x = Math.max(0, Math.min(100, x));
          y = Math.max(0, Math.min(100, y));

          return { ...sparkle, x, y, velocityX, velocityY };
        })
      );
      animationRef.current = requestAnimationFrame(animate);
    };
    animationRef.current = requestAnimationFrame(animate);
    return () => {
      if (animationRef.current !== undefined) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  // Occasionally replace a sparkle for variety
  useEffect(() => {
    const interval = setInterval(() => {
      setSparkles((current) => {
        const newSparkle = generateSparkle();
        const removeIndex = Math.floor(Math.random() * current.length);
        return [
          ...current.slice(0, removeIndex),
          newSparkle,
          ...current.slice(removeIndex + 1),
        ];
      });
    }, 1200);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {sparkles.map((sparkle) => (
        <motion.div
          key={sparkle.id}
          initial={{ opacity: 0, scale: 0 }}
          animate={{
            opacity: sparkle.opacity,
            scale: 1,
          }}
          transition={{ duration: 0.5 }}
          style={{
            position: 'absolute',
            top: `${sparkle.y}%`,
            left: `${sparkle.x}%`,
            width: `${sparkle.size}px`,
            height: `${sparkle.size}px`,
            borderRadius: '50%',
            backgroundColor: color,
            boxShadow: `0 0 8px 2px ${color}`,
          }}
        />
      ))}
    </div>
  );
};