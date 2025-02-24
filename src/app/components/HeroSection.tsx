"use client";
import Image from "next/image";
import React, { useRef } from "react";

// gsap importing starts
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

// gsap importing ends

const HeroSection = () => {
  const textRef = useRef(null);
  const containerRef = useRef(null);
  const leafRef = useRef(null);
  const girlImageRef = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "55% 50%",
        // markers: true,
        scrub: true,
      },
    });

    tl.to(
      textRef.current,
      {
        y: -100,
      },
      "a"
    )
      .to(
        leafRef.current,
        {
          scale: 1.2,
        },
        "a"
      )
      .to(
        girlImageRef.current,
        {
          scale: 1.2,
        },
        "a"
      )
      .to(
        containerRef.current,
        {
          y: 200,
        },
        "a"
      );
  });
  return (
    <div
      ref={containerRef}
      className="h-screen bg-[#282828] flex flex-col items-center justify-center overflow-hidden relative"
    >
      <h1
        ref={textRef}
        className="text-[8.5rem] font-extralight tracking-tight text-white z-20"
      >
        JAMAN ANIMATION
      </h1>
      <Image
        ref={leafRef}
        src="/leaf.png"
        alt="green_leaf"
        width={500}
        height={100}
        className=" absolute bottom-0"
      />
      <div className="w-[400px] h-[450px] bg-[#858480] rounded-t-full absolute bottom-0 z-10" />
      <Image
        ref={girlImageRef}
        src="/girl.png"
        alt="girl_image"
        width={500}
        height={200}
        className="absolute bottom-0 z-30"
      />
    </div>
  );
};

export default HeroSection;
