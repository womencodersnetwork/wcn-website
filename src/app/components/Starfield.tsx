'use client';

import React, { useEffect } from 'react';

interface Props {
  speedFactor?: number;
  backgroundColor?: string;
  circleCount?: number;
}

const Starfield: React.FC<Props> = ({ speedFactor = 0.05, backgroundColor = 'black', circleCount = 5000 }) => {
  useEffect(() => {
    const canvas = document.getElementById('starfield') as HTMLCanvasElement;
    const ctx = canvas.getContext('2d');

    if (!ctx) {
      console.error('Canvas context not available');
      return;
    }

    const makeCircles = (count: number) => {
        const out = [];
        for (let i = 0; i < count; i++) {
          const c = {
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            radius: Math.random() * 2.5 + 0.5, // Random radius between 0.5 and 3
            color: `rgba(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255}, 1)`, // Random color
          };
          out.push(c);
        }
        return out;
      };
      
    let circles = makeCircles(circleCount);

    const clear = () => {
      ctx.fillStyle = backgroundColor;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
    };

    const moveCircles = (distance: number) => {
      const count = circles.length;
      for (let i = 0; i < count; i++) {
        const c = circles[i];
        c.x += Math.random() * 2 - 1; // Move horizontally randomly
        c.y += Math.random() * 2 - 1; // Move vertically randomly
        // Wrap around if circles go out of bounds
        if (c.x < 0) c.x = canvas.width;
        if (c.x > canvas.width) c.x = 0;
        if (c.y < 0) c.y = canvas.height;
        if (c.y > canvas.height) c.y = 0;
      }
    };

    let prevTime: number;
    const init = (time: number) => {
      prevTime = time;
      requestAnimationFrame(tick);
    };

    const tick = (time: number) => {
      const elapsed = time - prevTime;
      prevTime = time;

      moveCircles(elapsed * speedFactor);

      clear();

      const count = circles.length;
      for (let i = 0; i < count; i++) {
        const c = circles[i];
        ctx.beginPath();
        ctx.arc(c.x, c.y, c.radius, 0, Math.PI * 2);
        ctx.fillStyle = c.color;
        ctx.fill();
      }

      requestAnimationFrame(tick);
    };

    requestAnimationFrame(init);

    // add window resize listener:
    window.addEventListener('resize', function () {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    });

    return () => {
      window.removeEventListener('resize', () => {});
    };
  }, [backgroundColor, speedFactor, circleCount]);

  return (
    <canvas
      id="starfield"
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: 'auto',
        zIndex: -1,
      }}
    ></canvas>
  );
};

export default Starfield;

