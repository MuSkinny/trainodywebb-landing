'use client'

import { useTransform, useScroll, motion } from "framer-motion";
import { useRef } from "react";
import { BorderBeam } from "./ui/border-beam";

export const ScrollImage = () => {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const extendedRef = useRef<HTMLDivElement | null>(null);
  
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end end"],
  });

  const { scrollYProgress: scrollYProgressIncludingOverlap } = useScroll({
    target: extendedRef,
    offset: ["start end", "end end"],
  });

  const scale = useTransform(
    scrollYProgressIncludingOverlap,
    [0.1, 0.8],
    [1, 1.1]
  );

  const rotateX = useTransform(
    scrollYProgressIncludingOverlap,
    [0.1, 1],
    [25, 0]
  )

  const z = useTransform(
    scrollYProgressIncludingOverlap,
    [0, 1], 
    [0, -100]
  );


  const y = useTransform(
    scrollYProgressIncludingOverlap,
    [0.1, 1],
    [10, 50]
  );
  
  const opacity = useTransform(scrollYProgress, [0.9, 1], [1, 0]);

  const avatarGroupOpacity = useTransform(
    scrollYProgress,
    [0, 0.23, 0.25],
    [0, 0, 1]
  );

  const avatarGroupX = useTransform(
    scrollYProgress,
    [0, 0.23, 0.25, 0.4, 0.45, 0.6, 0.65],
    ["60px", "60px", "40px", "40px", "20px", "20px", "0px"]
  );

  const avatarOneScale = useTransform(
    scrollYProgress,
    [0, 0.23, 0.25, 0.85, 0.9],
    [0, 0, 1, 1, 0]
  );

  const avatarTwoScale = useTransform(
    scrollYProgress,
    [0, 0.4, 0.45],
    [0, 0, 1]
  );

  const avatarTwoOpacity = useTransform(
    scrollYProgressIncludingOverlap,
    [0.9999, 1],
    [1, 0]
  );

  const avatarThreeScale = useTransform(
    scrollYProgress,
    [0, 0.6, 0.65, 0.85, 0.9],
    [0, 0, 1, 1, 0]
  );

  return (
    <div ref={targetRef} className="relative z-10 h-[70vh] mt-8 mx-20 w-full">
      
      <div ref={extendedRef} className="h-screen w-full">
        <div className="">
          <div style={{ perspective: 1200 }} className="flex justify-center">
            <motion.div 
              style={{ rotateX, scale, y, transformStyle: 'preserve-3d' }}
              className="origin-top rounded-xl p-2 ">
              <motion.img
                src="./assets//dashboard.png"
                className="h-auto max-h-none w-[70vw]"
              />
              <BorderBeam size={250} duration={10} delay={11} colorFrom="#FA7A20" colorTo="#FC8F39" />
            </motion.div>
            
          </div>
        </div>
      </div>
      
    </div>
  );
};