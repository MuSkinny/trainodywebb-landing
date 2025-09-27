'use client'

import React, { useEffect } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';

// Definizione delle direzioni possibili
type Direction = 'top' | 'right' | 'bottom' | 'left';

// Interfaccia per le props del componente
interface ScrollRevealProps {
  children: React.ReactNode;
  direction?: Direction;
  duration?: number;
  distance?: number;
  delay?: number;
  once?: boolean;
  className?: string;
}

// Tipo per le posizioni iniziali
interface Position {
  x?: number;
  y?: number;
  opacity: number;
}

const ScrollReveal: React.FC<ScrollRevealProps> = ({ 
  children, 
  direction = 'bottom',
  duration = 0.6,
  distance = 50,
  delay = 0,
  once = true,
  className = ''
}) => {
  const controls = useAnimation();
  const ref = React.useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { 
    once, 
    amount: 0.3 
  });

  const getInitialPosition = (): any => {
    switch (direction) {
      case 'top':
        return { y: -distance, opacity: 0 };
      case 'bottom':
        return { y: distance, opacity: 0 };
      case 'left':
        return { x: -distance, opacity: 0 };
      case 'right':
        return { x: distance, opacity: 0 };
      default:
        return { x: -distance, opacity: 0 };
    }
  };

  const getFinalPosition = () => ({
    x: 0,
    y: 0,
    opacity: 1,
    transition: {
      duration,
      delay,
      ease: "easeOut" as const
    }
  });

  useEffect(() => {
    if (isInView) {
      controls.start(getFinalPosition());
    }
  }, [isInView, controls]);

  return (
    <motion.div
      ref={ref}
      initial={getInitialPosition()}
      animate={controls}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default ScrollReveal