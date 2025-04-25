import  { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';

interface Point {
  x: number;
  y: number;
  time: number;
}

const TrailWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 9999;
`;

const StraightLineSVG = styled(motion.svg)`
  position: absolute;
  overflow: visible;
`;

const WavyCursorTrail = () => {
  const [trail, setTrail] = useState<Point[]>([]);
  const numPoints = 20;
  const fadeOutDuration = 300;

  useEffect(() => {
    const move = (e: MouseEvent) => {
      const newPoint: Point = {
        x: e.clientX,
        y: e.clientY,
        time: Date.now(),
      };
      setTrail((prevTrail) => [...prevTrail, newPoint].slice(-numPoints));
    };

    window.addEventListener('mousemove', move);

    const cleanupInterval = setInterval(() => {
      setTrail((prevTrail) =>
        prevTrail.filter((p) => Date.now() - p.time < 1000)
      );
    }, 50);

    return () => {
      window.removeEventListener('mousemove', move);
      clearInterval(cleanupInterval);
    };
  }, [numPoints]);

  const points = trail;

  return (
    <TrailWrapper>
      <StraightLineSVG
        width={window.innerWidth}
        height={window.innerHeight}
        style={{ top: 0, left: 0 }}
      >
        {points.map((p, index) => {
          const opacity = Math.max(0, 1 - (Date.now() - p.time) / fadeOutDuration);
          const d =
            index > 0 ? `M ${points[index - 1].x} ${points[index - 1].y} L ${p.x} ${p.y}` : '';
          return (
            <motion.path
              key={`${p.x}-${p.y}-${p.time}`}
              d={d}
              fill="transparent"
              stroke="red"
              strokeWidth="2"
              initial={{ opacity: 0 }}
              animate={{ opacity: opacity }}
              transition={{
                duration: fadeOutDuration / 1000,
                ease: 'easeOut',
              }}
              exit={{ opacity: 0 }}
            />
          );
        })}
      </StraightLineSVG>
    </TrailWrapper>
  );
};

export default WavyCursorTrail;
