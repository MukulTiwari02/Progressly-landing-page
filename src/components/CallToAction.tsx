"use client";

import HelixImage from "@/assets/images/helix2.png";
import EmojiStar from "@/assets/images/emojistar.png";
import Image from "next/image";
import { useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export const CallToAction = () => {
  const [email, setEmail] = useState("");
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end end"],
  });

  const translateY = useTransform(scrollYProgress, [0, 1], [-40, 40]);

  return (
    <div className="bg-black text-white py-[72px] sm:py-24 text-center overflow-x-clip">
      <div ref={container} className="container max-w-xl relative">
        <motion.div style={{ translateY }}>
          <Image
            src={HelixImage}
            alt=""
            className="absolute hidden sm:block top-6 left-[calc(100%+36px)]"
          />
        </motion.div>
        <motion.div style={{ translateY }}>
          <Image
            src={EmojiStar}
            alt=""
            className="absolute hidden sm:block -top-[120px] right-[calc(100%+24px)]"
          />
        </motion.div>
        <h2 className="font-bold text-5xl sm:text-6xl tracking-tighter">
          Get instant access
        </h2>
        <p className="text-xl text-white/70 mt-5">
          Celebrate the joy of accomplishment with an app designed to track your
          progress and motivate your efforts.
        </p>
        <form
          action=""
          className="mt-10 flex flex-col gap-2.5 max-w-sm mx-auto sm:flex-row"
        >
          <input
            className="h-12 bg-white/20 rounded-lg font-medium px-5 placeholder:text-[#9ca3af] sm:flex-1"
            type="email"
            placeholder="your@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button className="bg-white text-black h-12 rounded-lg px-5">
            Get access
          </button>
        </form>
      </div>
    </div>
  );
};
