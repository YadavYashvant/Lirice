
'use client';
import { useState, useEffect } from "react";
import { useMotionValue, motion, useMotionTemplate } from "framer-motion";
import {Button, Chip, NextUIProvider} from "@nextui-org/react";
import Navbar from "@/components/navbar/navbar";
import CardList from "@/components/Card/CardList";
import { BASE_URL } from "@/utils/baseurl";
import Loader from "@/components/Loader";

export default function Home() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const [data, setData] = useState<any>([]);
  const [loading, setLoading] = useState(true);

  

  useEffect(() => {

    fetch(`${BASE_URL}/posts`)
      .then(response => response.json())
      .then(data => {
        const formattedData = data.map((item: any) => ({
          title: item.title,
          description: item.content,
          image: item.imageName,
        }));
        setData(formattedData);
      })
      .catch(error => console.error("Error fetching data:", error))
      .finally(() => setLoading(false));

      console.log("data that we are getting after /posts get request: ",data);
  }, []);

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

  console.log(data);

  if(loading) {
    return(
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

        <div className="flex flex-col items-center justify-center w-full max-sm:mx-10">

          <div className="flex flex-wrap gap-4 mt-40 overflow-hidden">
            <Button variant="shadow" color="success" radius="full" className='p-6'>
              <a href='/auth' className="text-lg font-bold">SignIn or SignUp</a>
            </Button>
          </div>

          <div className="flex flex-wrap gap-4 mt-10 overflow-hidden">
            <Chip color="warning" variant="solid" onClick={data}>All</Chip>
            <Chip color="warning" variant="bordered">Category 1</Chip>
            <Chip color="warning" variant="bordered">Category 2</Chip>
            <Chip color="warning" variant="bordered">Category 3</Chip>
            <Chip color="warning" variant="bordered">Category 4</Chip>
            <Chip color="warning" variant="bordered">Category 5</Chip>
            <Chip color="warning" variant="bordered">Category 6</Chip>
            <Chip color="warning" variant="bordered">Category 7</Chip>
          </div>
          <div className="flex flex-wrap gap-4 mt-10">
            <Chip color="warning" variant="bordered">Category 8</Chip>
            <Chip color="warning" variant="bordered">Category 9</Chip>
            <Chip color="warning" variant="bordered">Category 10</Chip>
            <Chip color="warning" variant="bordered">Category 11</Chip>
            <Chip color="warning" variant="bordered">Category 12</Chip>
            <Chip color="warning" variant="bordered">Category 13</Chip>
            <Chip color="warning" variant="dot">FOURTEEN</Chip>
          </div>
        </div>
        <Loader />
      </div>
    </NextUIProvider>
    )
  }

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

        <div className="flex flex-col items-center justify-center w-full max-sm:mx-10 max-sm:px-5">
          <div className="flex flex-wrap gap-4 mt-40 overflow-hidden">
            <Chip color="warning" variant="solid" onClick={data}>All</Chip>
            <Chip color="warning" variant="bordered">Category 1</Chip>
            <Chip color="warning" variant="bordered">Category 2</Chip>
            <Chip color="warning" variant="bordered">Category 3</Chip>
            <Chip color="warning" variant="bordered">Category 4</Chip>
            <Chip color="warning" variant="bordered">Category 5</Chip>
            <Chip color="warning" variant="bordered">Category 6</Chip>
            <Chip color="warning" variant="bordered">Category 7</Chip>
          </div>
          <div className="flex flex-wrap gap-4 mt-10">
            <Chip color="warning" variant="bordered">Category 8</Chip>
            <Chip color="warning" variant="bordered">Category 9</Chip>
            <Chip color="warning" variant="bordered">Category 10</Chip>
            <Chip color="warning" variant="bordered">Category 11</Chip>
            <Chip color="warning" variant="bordered">Category 12</Chip>
            <Chip color="warning" variant="bordered">Category 13</Chip>
            <Chip color="warning" variant="dot">FOURTEEN</Chip>
          </div>
        </div>
        <CardList data={data} />
      </div>
    </NextUIProvider>
  );
}