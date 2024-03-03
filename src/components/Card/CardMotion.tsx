"use client";
import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { HammerIcon, HomeIcon } from "lucide-react";
import Link from "next/link";

const HoverCard = () => {
  return (
    <div className="grid w-full place-content-center  px-4 py-12 text-slate-900">
      <TiltCard />
    </div>
  );
};

const ROTATION_RANGE = 32.5;
const HALF_ROTATION_RANGE = 32.5 / 2;

const TiltCard = () => {
  const ref = useRef(null);

  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);

  const handleMouseMove = (e: { clientX: number; clientY: number }) => {
    if (!ref.current) return;

    //@ts-ignore
    const rect = ref.current.getBoundingClientRect();

    const width = rect.width;
    const height = rect.height;

    const mouseX = (e.clientX - rect.left) * ROTATION_RANGE;
    const mouseY = (e.clientY - rect.top) * ROTATION_RANGE;

    const rY = mouseX / width - HALF_ROTATION_RANGE;
    const rX = (mouseY / height - HALF_ROTATION_RANGE) * -1;

    setRotateX(rX);
    setRotateY(rY);
  };

  const handleMouseLeave = () => {
    if (!ref.current) return;
    setRotateX(0);
    setRotateY(0);
  };

  return (
    <motion.div
      
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transformStyle: "preserve-3d",
      }}
      animate={{
        rotateX,
        rotateY,
      }}
      className="relative h-96 w-72 rounded-xl
       bg-slate-900 shadow-xl "
    >
      <div
        style={{
          transform: "translateZ(75px)",
          transformStyle: "preserve-3d",
        }}
        className="absolute inset-4 grid Listing place-content-center rounded-xl bg-white shadow-lg"
      >
        <Link href={"/Listings"}>
        <HomeIcon
          style={{
            transform: "translateZ(75px)",
          }}
          className="mx-auto text-4xl text-white"
        />
        
          <p
            style={{
              transform: "translateZ(50px)",
            }}
            className="text-center text-2xl font-bold text-white"
          >
           Click here
          </p>
        </Link>
      </div>
    </motion.div>
  );
};

export default HoverCard;
