
'use client';
import { cn } from "@/utils/cn";
import { useState } from "react";
import { useMotionValue, motion, useMotionTemplate } from "framer-motion";
import { Button, Card, Chip, NextUIProvider } from "@nextui-org/react";
import Image from "next/image";
import Navbar from "@/components/navbar/navbar";
import CardList from "@/components/Card/CardList";
import { BentoGrid } from "@/components/ui/bento-grid";
import axios from "axios";
import React, { useEffect } from "react";

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

  const [data, setData] = useState<any>([]);

  useEffect(() => {
    fetch("http://localhost:8080/posts")
      .then(response => response.json())
      .then(data => {
        console.log(data);
        const formattedData = data.map((item: any) => ({
          title: item.title,
          description: item.content,
          image: item.imageName,
        }));
        setData(formattedData);
      })
      .catch(error => console.error("Error fetching data:", error));
  }, []);

    return (
      <NextUIProvider>
        <div
          className="absolute h-[500vh] flex flex-col items-center bg-white dark:bg-black justify-start w-full group"
          onMouseMove={handleMouseMove}
        >
          <div className="absolute inset-0 bg-dot-thick-neutral-300 dark:bg-dot-thick-neutral-800 pointer-events-none" />
  
          <motion.div
            className="pointer-events-none bg-dot-thick-indigo-500 dark:bg-dot-thick-indigo-500 absolute inset-0 opacity-0 transition duration-300 group-hover:opacity-100"
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
  
          <Navbar />
  
          <div className="flex flex-col items-center justify-center w-full">
          <div className="flex gap-4 mt-40">
            <Chip color="warning" variant="solid">Solid</Chip>
            <Chip color="warning" variant="bordered">Bordered</Chip>
            <Chip color="warning" variant="light">Light</Chip>
            <Chip color="warning" variant="flat">Flat</Chip>
            <Chip color="warning" variant="faded">Faded</Chip>
            <Chip color="warning" variant="shadow">Shadow</Chip>
            <Chip color="warning" variant="dot">Dot</Chip>
            <Chip color="warning" variant="dot">Dot</Chip>
            <Chip color="warning" variant="shadow">Shadow</Chip>
            <Chip color="warning" variant="bordered">Bordered</Chip>

          </div>
          <div className="flex gap-4 mt-10">
            <Chip color="warning" variant="solid">Solid</Chip>
            <Chip color="warning" variant="bordered">Bordered</Chip>
            <Chip color="warning" variant="light">Light</Chip>
            <Chip color="warning" variant="flat">Flat</Chip>
            <Chip color="warning" variant="faded">Faded</Chip>
            <Chip color="warning" variant="shadow">Shadow</Chip>
            <Chip color="warning" variant="dot">Dot</Chip>
          </div>
            </div>
          <CardList data={data} /> 
        </div>
      </NextUIProvider>
    );
  }

