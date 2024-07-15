'use client';
import { cn } from "@/utils/cn";
import { useState } from "react";
import { useMotionValue, motion, useMotionTemplate } from "framer-motion";
import { Button, Card, NextUIProvider } from "@nextui-org/react";
import Image from "next/image";
import Navbar from "@/components/navbar/navbar";
import CardList from "@/components/Card/CardList";
import { BentoGrid } from "@/components/ui/bento-grid";
import axios from "axios";

export default function Home() {

  let mouseX = useMotionValue(0);
  let mouseY = useMotionValue(0);

  function handleMouseMove({
    currentTarget,
    clientX,
    clientY,
  }: React.MouseEvent<HTMLDivElement>) {
    if (!currentTarget) return;
    let { left, top } = currentTarget.getBoundingClientRect();

    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  const data = [
    { title: 'Card 1', description: 'Description for Card 1' },
    { title: 'Card 2', description: 'Description for Card 2' },
    { title: 'Card 2', description: 'Description for Card 2' },
    { title: 'Card 2', description: 'Description for Card 2' },
    // Add more data as needed
  ];

  return (
    <NextUIProvider>
      <div
      className="absolute h-[500vh] flex items-center bg-white dark:bg-black justify-center w-full group"
      onMouseMove={handleMouseMove} >

        <div className="absolute inset-0 bg-dot-thick-neutral-300 dark:bg-dot-thick-neutral-800  pointer-events-none" />

        <motion.div
        className="pointer-events-none bg-dot-thick-indigo-500 dark:bg-dot-thick-indigo-500   absolute inset-0 opacity-0 transition duration-300 group-hover:opacity-100"
        style={{
          WebkitMaskImage: useMotionTemplate`
            radial-gradient(
              200px circle at ${mouseX}px ${mouseY}px,
              black 0%,
              transparent 100%
            )
          `,
          maskImage: useMotionTemplate`
            radial-gradient(
              200px circle at ${mouseX}px ${mouseY}px,
              black 0%,
              transparent 100%
            )
          `,
        }}
        />

        <BentoGrid/>

        <CardList data={data} /> 

      </div>
    </NextUIProvider>
  );
}
