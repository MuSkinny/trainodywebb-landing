'use client'

import React, { ReactNode } from 'react';
import { motion } from 'framer-motion';

type TextProps = {
  children: ReactNode;
  delay?: number;
  direction?: string;
  className?: string
}

const AnimatedText = ({ 
  children, 
  delay = 0, 
  direction = 'bottom',
  className,
}: TextProps) => {
  const getInitialPosition = () => {
    switch (direction) {
      case 'top':
        return { y: -20, opacity: 0 };
      case 'bottom':
        return { y: 20, opacity: 0 };
      case 'left':
        return { x: -20, opacity: 0 };
      case 'right':
        return { x: 20, opacity: 0 };
      default:
        return { x: -20, opacity: 0 };
    }
  };

  const getFinalPosition = () => {
    return {
      x: 0,
      y: 0,
      opacity: 1
    };
  };

  return (
    <motion.div
      initial={getInitialPosition()}
      animate={getFinalPosition()}
      transition={{
        duration: 0.6,
        delay: delay,
        ease: "easeOut"
      }}
      className={`inline-block ${className}`}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedText