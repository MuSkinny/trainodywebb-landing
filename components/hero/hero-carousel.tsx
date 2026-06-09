"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import h1 from "@/public/assets/hero-1.png";
import h2 from "@/public/assets/hero-2.png";
import h3 from "@/public/assets/hero-3.png";
import h4 from "@/public/assets/hero-4.png";
import h5 from "@/public/assets/hero-5.png";

const images = [h1, h2, h3, h4, h5];

export default function HeroCarousel() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const id = setInterval(
      () => setActive((prev) => (prev + 1) % images.length),
      6500,
    );
    return () => clearInterval(id);
  }, []);

  return (
    <div className="absolute inset-0">
      {images.map((src, idx) => (
        <Image
          key={idx}
          src={src}
          alt=""
          fill
          priority={idx === 0}
          sizes="100vw"
          quality={80}
          className={`object-cover object-right transition-all [transition-duration:2500ms] [transition-timing-function:cubic-bezier(0.4,0,0.2,1)] ${
            idx === active
              ? "scale-105 opacity-100"
              : "scale-100 opacity-0"
          }`}
        />
      ))}
    </div>
  );
}
