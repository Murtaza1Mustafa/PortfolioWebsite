'use client';
import { useEffect, useState } from 'react';

const Bubbles = () => {
  const [mounted, setMounted] = useState(false);
  const [style] = useState(() => ({
    size: Math.random() * 20 + 10,
    left: Math.random() * 100,
    delay: Math.random() * 10,
  }));

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div
      className='absolute bottom rounded-full bg-gradient-to-br from-[#48cae4] to-[#90e0ef] opacity-75 blur-[1px] animate-bubble'
      style={{
        width: style.size,
        height: style.size,
        left: `${style.left}%`,
        bottom: 0,
        animationDelay: `${style.delay}s`,
      }}
    />
  );
};

export default Bubbles;
