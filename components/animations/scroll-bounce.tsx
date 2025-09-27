'use client'

import React, { useEffect } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';

// Definizione delle direzioni possibili
type Direction = 'top' | 'right' | 'bottom' | 'left';

// Interfaccia per le props del componente
interface ScrollBounceProps {
  children: React.ReactNode;
  direction?: Direction;
  duration?: number;
  distance?: number;
  delay?: number;
  className?: string;
}

const ScrollBounce: React.FC<ScrollBounceProps> = ({ 
  children, 
  duration = 0.6,
  delay = 0,
  className = ''
}) => {
  const controls = useAnimation();
  const ref = React.useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { 
    amount: 0
  });

  const getInitialPosition = () => ({
    x: 0,
    y: 0,
    opacity: 1,
    scale: 0.8,
    transition: {
      duration,
      delay,
      ease: "easeOut" as const
    }
  })

  const getFinalPosition = () => ({
    x: 0,
    y: 0,
    opacity: 1,
    scale: 1,
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

export default ScrollBounce