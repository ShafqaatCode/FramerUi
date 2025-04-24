import  { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';

interface Point {
  x: number;
  y: number;
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

const WavySVG = styled(motion.svg)`
  position: absolute;
  overflow: visible;
`;

const WavyCursorTrail = () => {
  const [trail, setTrail] = useState<Point[]>([]);
  const numPoints = 20;
  const stiffness = 200;
  const damping = 25;
  const waveHeight = 15;
  const segmentLength = 40;

  useEffect(() => {
    const move = (e: MouseEvent) => {
      setTrail((prevTrail) => [...prevTrail, { x: e.clientX, y: e.clientY }].slice(-numPoints));
    };

    window.addEventListener('mousemove', move);
    return () => window.removeEventListener('mousemove', move);
  }, [numPoints]);

  const points = trail.reduce((acc: Point[], point: Point, index: number, array: Point[]) => {
    const prevPoint = array[index - 1] || point;
    const segmentStartX = prevPoint.x;
    const segmentStartY = prevPoint.y;
    const segmentEndX = point.x;
    const segmentEndY = point.y;

    const distance = Math.sqrt(
      (segmentEndX - segmentStartX) ** 2 + (segmentEndY - segmentStartY) ** 2
    );
    const numSegments = Math.ceil(distance / segmentLength);

    for (let i = 0; i < numSegments; i++) {
      const t = i / numSegments;
      const x = segmentStartX + (segmentEndX - segmentStartX) * t;
      const y = segmentStartY + (segmentEndY - segmentStartY) * t;
      acc.push({ x, y });
    }
    return acc;
  }, []);

  const generateWavePath = (points: Point[]): string => {
    if (points.length < 2) {
      return '';
    }

    let path = `M ${points[0].x} ${points[0].y}`;

    for (let i = 0; i < points.length - 1; i++) {
      const midX = (points[i].x + points[i + 1].x) / 2;
    //   const midY = (points[i].y + points[i + 1].y) / 2;
      const controlPointX1 = (points[i].x + midX) / 2;
      const controlPointY1 = points[i].y - waveHeight;
      const controlPointX2 = (points[i + 1].x + midX) / 2;
      const controlPointY2 = points[i + 1].y + waveHeight;

      path += ` C ${controlPointX1} ${controlPointY1}, ${controlPointX2} ${controlPointY2}, ${points[i + 1].x} ${points[i + 1].y}`;
    }

    return path;
  };

  const longerWavePath = generateWavePath(points);

  return (
    <TrailWrapper>
      <WavySVG
        width={window.innerWidth}
        height={window.innerHeight}
        style={{ top: 0, left: 0 }}
      >
        <motion.path
          d={longerWavePath}
          fill="transparent"
          stroke="red"
          strokeWidth="4"
          initial={{ opacity: 0, pathLength: 0 }}
          animate={{ opacity: 1, pathLength: 1 }}
          transition={{
            type: 'spring',
            stiffness: stiffness,
            damping: damping,
            duration: 0.3,
          }}
        />
      </WavySVG>
    </TrailWrapper>
  );
};

export default WavyCursorTrail;
