"use client";

import appScreen from "@/assets/images/app-screen.png";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export const ProductShowcase = () => {
  const appImage = useRef<HTMLImageElement>(null);
  const { scrollYProgress } = useScroll({
    target: appImage,
    offset: ["start end", "end end"],
  });

  const rotateX = useTransform(scrollYProgress, [0, 1], [15, 0]);
  const opacity = useTransform(scrollYProgress, [0, 1], [0.5, 1]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.5], [0.5, 1]);
  const translateY = useTransform(scrollYProgress, [0, 0.5], [-200, 0]);

  return (
    <div className="bg-gradient-to-b from-black to-[#5d2Ca8] text-white py-[72px] sm:py-24">
      <motion.div
        style={{
          opacity: textOpacity,
        }}
        className="container"
      >
        <h2 className="text-center text-5xl tracking-tighter font-bold">
          Intuitive interface
        </h2>
        <div className="max-w-xl mx-auto">
          <p className="text-xl text-center text-white/70 mt-5">
            Celebrate the joy of accomplishment with an app designed to track
            your progress, motivate your efforts and celebrate your successes,
            one task at a time.
          </p>
        </div>
        <div className="mx-auto flex items-center justify-center">
          <motion.div
            style={{
              rotateX: rotateX,
              opacity: opacity,
              translateY: translateY,
              transformPerspective: "1000px",
            }}
          >
            <Image
              ref={appImage}
              src={appScreen}
              alt="The product screenshot"
              className="mt-14"
            />
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};
