'use client';
import React, { useEffect, useRef } from 'react';

interface GalaxySpot {
  top: number;
  left: number;
  size: number;
  baseOpacity: number;
  opacity: number;
  velocityX: number;
  velocityY: number;
  glow: number;
}

function randomVelocity() {
  // Random direction, moderate speed
  const angle = Math.random() * 2 * Math.PI;
  const speed = Math.random() * 0.25 + 0.15;
  return {
    velocityX: Math.cos(angle) * speed,
    velocityY: Math.sin(angle) * speed,
  };
}

export const GalaxySpots = ({ count = 120 }) => {
  const spotsRef = useRef<GalaxySpot[]>([]);

  // Initialize spots at random positions with random velocity
  if (spotsRef.current.length === 0) {
    for (let i = 0; i < count; i++) {
      const size = Math.random() * 10 + 2;
      const baseOpacity = Math.random() * 0.6 + 0.1;
      const { velocityX, velocityY } = randomVelocity();
      spotsRef.current.push({
        top: Math.random() * 100,   // random position
        left: Math.random() * 100,  // random position
        size,
        baseOpacity,
        opacity: baseOpacity,
        velocityX,
        velocityY,
        glow: 0,
      });
    }
  }

  // Force re-render
  const [, setTick] = React.useState(0);

  useEffect(() => {
    let animationId: number;

    const animate = () => {
      spotsRef.current.forEach(spot => {
        // Move
        spot.left += spot.velocityX;
        spot.top += spot.velocityY;

        // Add a little randomness to the path
        spot.velocityX += (Math.random() - 0.5) * 0.001;
        spot.velocityY += (Math.random() - 0.5) * 0.001;

        // Clamp velocity for moderate speed
        spot.velocityX = Math.max(-0.5, Math.min(0.3, spot.velocityX));
        spot.velocityY = Math.max(-0.5, Math.min(0.3, spot.velocityY));

        // Fade glow
        spot.glow *= 0.92;
        spot.opacity = spot.baseOpacity + spot.glow * 0.8;

        // If out of bounds, reset to a new random position and velocity
        if (
          spot.left < 0 || spot.left > 100 ||
          spot.top < 0 || spot.top > 100
        ) {
          spot.left = Math.random() * 100;
          spot.top = Math.random() * 100;
          const { velocityX, velocityY } = randomVelocity();
          spot.velocityX = velocityX;
          spot.velocityY = velocityY;
          spot.glow = 0;
        }
      });

      // Detect collisions and brighten
      for (let i = 0; i < spotsRef.current.length; i++) {
        for (let j = i + 1; j < spotsRef.current.length; j++) {
          const a = spotsRef.current[i];
          const b = spotsRef.current[j];
          const dx = (a.left - b.left) * window.innerWidth / 100;
          const dy = (a.top - b.top) * window.innerHeight / 100;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < (a.size + b.size) * 0.7) {
            a.glow = 1;
            b.glow = 1;
          }
        }
      }

      setTick(tick => tick + 1);
      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationId);
  }, []);

  if (spotsRef.current.length === 0) {
  for (let i = 0; i < count; i++) {
    const size = Math.random() * 4 + 1; // smaller dots
    const baseOpacity = Math.random() * 0.5 + 0.5;
    const { velocityX, velocityY } = randomVelocity();
    spotsRef.current.push({
      top: Math.random() * 100,
      left: Math.random() * 100,
      size,
      baseOpacity,
      opacity: baseOpacity,
      velocityX,
      velocityY,
      glow: 0,
    });
  }
}

  return (
  <div className="pointer-events-none absolute inset-0 overflow-hidden" style={{ zIndex: 0 }}>
    {spotsRef.current.map((spot, index) => (
      <div
        key={index}
        style={{
          position: 'absolute',
          top: `${spot.top}%`,
          left: `${spot.left}%`,
          width: `${spot.size}px`,
          height: `${spot.size}px`,
          borderRadius: '65%',
          background: `radial-gradient(circle at center, rgba(76,175,80,0.9) 0%, rgba(76,175,80,0.3) 60%, transparent 70%)`,
          opacity: spot.opacity,
          filter: `blur(1.5px) drop-shadow(0 0 ${6 + 12 * spot.glow}px #4caf50)`,
          transition: 'none',
          pointerEvents: 'none',
        }}
      />
    ))}
  </div>
);
};