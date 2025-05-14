'use client';
import React, { useEffect, useRef } from 'react';

export const BackgroundBeams = () => {
  const beamsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!beamsRef.current) return;

    const handleMouseMove = (event: MouseEvent) => {
      if (!beamsRef.current) return;

      const rect = beamsRef.current.getBoundingClientRect();
      const mouseX = event.clientX - rect.left;
      const mouseY = event.clientY - rect.top;

      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const moveX = (mouseX - centerX) / 18;
      const moveY = (mouseY - centerY) / 18;

      beamsRef.current.style.setProperty('--beams-x', `${moveX}px`);
      beamsRef.current.style.setProperty('--beams-y', `${moveY}px`);
    };

    document.addEventListener('mousemove', handleMouseMove);
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div
      ref={beamsRef}
      className="pointer-events-none absolute inset-0 overflow-hidden"
      style={
        {
          '--beams-x': '0px',
          '--beams-y': '0px',
        } as React.CSSProperties
      }
    >
      <div
        className="absolute left-1/2 top-1/2 h-[50%] w-[200%] -translate-x-1/2 -translate-y-1/2 bg-[radial-gradient(circle_at_center,rgba(76,175,80,0.15)_0%,transparent_60%)] opacity-70"
        style={{
          transform: `translate(-50%, -50%) translate(var(--beams-x), var(--beams-y))`,
        }}
      />
    </div>
  );
};
