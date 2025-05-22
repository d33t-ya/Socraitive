'use client';
import React from 'react';

export const BackgroundBeams = ({
  position = 'center',
  opacity = 0.95,
  size = '100%',
  blur = '5px',
}: {
  position?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right' | 'center';
  opacity?: number;
  size?: string;
  blur?: string;
}) => {
  let positionStyles = {};

  switch (position) {
    case 'top-left':
      positionStyles = { top: '5%', left: '5%', transform: 'translate(0, 0)' };
      break;
    case 'top-right':
      positionStyles = { top: '5%', right: '5%', transform: 'translate(0, 0)' };
      break;
    case 'bottom-left':
      positionStyles = { bottom: '5%', left: '5%', transform: 'translate(0, 0)' };
      break;
    case 'bottom-right':
      positionStyles = { bottom: '5%', right: '5%', transform: 'translate(0, 0)' };
      break;
    case 'center':
    default:
      positionStyles = { top: '50%', left: '50%', transform: 'translate(-50%, -50%)' };
      break;
  }

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <div
        className="absolute bg-[radial-gradient(circle_at_center,rgba(76,175,80,1)_0%,transparent_60%)]"
        style={{
          width: size,
          height: size,
          filter: `blur(${blur})`,
          opacity,
          ...positionStyles,
        }}
      />
    </div>
  );
};
