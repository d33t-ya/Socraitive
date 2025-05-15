'use client';
import React from 'react';

interface GalaxySpot {
  top: string;
  left: string;
  size: string;
  opacity: number;
}

export const GalaxySpots = ({ count = 20 }) => {
  // Generate spots on render - for a static landing page, this only happens once
  const spots: GalaxySpot[] = [];

  for (let i = 0; i < count; i++) {
    spots.push({
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      size: `${Math.random() * 10 + 2}px`, // Random size between 2-12px
      opacity: Math.random() * 0.6 + 0.1, // Random opacity between 0.1-0.7
    });
  }

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {spots.map((spot, index) => (
        <div
          key={index}
          style={{
            position: 'absolute',
            top: spot.top,
            left: spot.left,
            width: spot.size,
            height: spot.size,
            borderRadius: '50%',
            background: 'radial-gradient(circle at center, rgba(76,175,80,1) 0%, rgba(76,175,80,0) 70%)',
            opacity: spot.opacity,
            filter: 'blur(1px)',
          }}
        />
      ))}
    </div>
  );
};
