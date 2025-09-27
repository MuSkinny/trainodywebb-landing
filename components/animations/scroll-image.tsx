'use client'

import { useTransform, useScroll, motion } from "framer-motion";
import { useRef } from "react";
import { BorderBeam } from "../ui/border-beam";
import dashboard from '../../public/assets/dashboard_trainody.png'

export const ScrollImage = () => {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const extendedRef = useRef<HTMLDivElement | null>(null);
  
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

  const y = useTransform(
    scrollYProgressIncludingOverlap,
    [0.1, 1],
    [10, 50]
  );
  
  return (
    <div ref={targetRef} className="relative z-10 h-[40vh] md:h-[50vh] xl:h-[60vh] mt-8 mx-auto w-full">
      
      <div ref={extendedRef} className="h-screen w-full">
        <div className="">
          <div style={{ perspective: 1200 }} className="flex justify-center">
            <motion.div 
              style={{ rotateX, scale, y, transformStyle: 'preserve-3d' }}
              className="origin-top rounded-xl p-2 ring ring-foreground/20 ring-inset">
              <motion.img
                src={dashboard.src}
                alt="dashboard_preview"
                className="h-auto max-h-none w-[70vw] rounded-lg"
              />
              <BorderBeam size={730} duration={10} delay={11} colorFrom="#a2e533" colorTo="#85bf20" />
            </motion.div>
            
          </div>
        </div>
      </div>
      
    </div>
  );
};