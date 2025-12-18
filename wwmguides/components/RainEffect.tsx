"use client";

import { useEffect } from 'react';

export default function RainEffect() {
  useEffect(() => {
    const canvas = document.getElementById('rainCanvas') as HTMLCanvasElement;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Draw static rain
    const drawRain = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw 400 static raindrops
      for (let i = 0; i < 400; i++) {
        const x = Math.random() * canvas.width;
        const y = Math.random() * canvas.height;
        const length = Math.random() * 60 + 40; // 40-100px length
        const opacity = Math.random() * 0.3 + 0.15; // 0.15-0.45 opacity

        // Draw raindrop as a slanted line (15 degree angle to simulate wind)
        ctx.beginPath();
        ctx.strokeStyle = `rgba(219, 195, 145, ${opacity})`; // Gold color #DBC391
        ctx.lineWidth = 1.5;
        ctx.moveTo(x, y);
        // Slant: x increases by length/4 while y increases by length (creating ~15 degree angle)
        ctx.lineTo(x + length / 4, y + length);
        ctx.stroke();
      }
    };

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      drawRain(); // Redraw when resizing
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <canvas
      id="rainCanvas"
      className="fixed top-0 left-0 w-full h-full pointer-events-none"
      style={{ zIndex: 5 }}
    />
  );
}
