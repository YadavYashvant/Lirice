'use client';
import React, { useState } from 'react';
import axios from 'axios';
import { NextUIProvider, Input, Button, Textarea} from '@nextui-org/react';
import {Card, CardHeader, CardBody, CardFooter, Divider, Link, Image} from "@nextui-org/react";


// import { useMotionValue } from 'framer-motion';
import { useMotionValue, motion, useMotionTemplate } from "framer-motion";

const NewPost: React.FC = () => {

  const fileInputRef = React.createRef<HTMLInputElement>();

  const defaultImageUrl = '/images/default-image.png'; 
  const [imagePreviewUrl, setImagePreviewUrl] = useState(defaultImageUrl);

  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [image, setImage] = useState<File | null>(null);

  let mouseX = useMotionValue(0);
  let mouseY = useMotionValue(0);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files ? e.target.files[0] : null;
    setImage(file);
  
    const reader = new FileReader();
    reader.onloadend = () => {
      setImagePreviewUrl(reader.result as string);
    };
    if (file) {
      reader.readAsDataURL(file);
    } else {
      setImagePreviewUrl(defaultImageUrl);
    }
  };

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

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
      const postResponse = await axios.post('https://liricebackend.onrender.com/post', {
        title,
        content,
      });

      console.log('Post response:', postResponse);

      const postId = postResponse.data.id;
      if (!postId) {
        throw new Error('Post ID is undefined');
      }

      console.log('Post created with ID:', postId);

      if (image) {
        const formData = new FormData();
        formData.append('image', image);

        await axios.post(`https://liricebackend.onrender.com/post/image/upload/${postId}`, formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        });
        console.log('Image uploaded');
      }

      setTitle('');
      setContent('');
      setImage(null);
    } catch (error) {
      console.error('Error creating post:', error);
    }
  };

  return (
    <NextUIProvider>
      <div
          className="absolute h-[400vh] flex flex-col items-center bg-white dark:bg-black justify-start w-full group"
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
      {/* <div className="flex items-center justify-center h-screen bg-gray-100"> */}
        <form onSubmit={handleSubmit} className="bg-inherit p-6 rounded shadow-md min-w-full h-full max-w-md mx-24 flex items-center justify-start flex-col">
        <Card className="min-w-full mb-12 p-10">
      <CardBody>
        <h1 className='text-7xl text-center'>CREATE A NEW POST 🚀</h1>
      </CardBody>
      <Divider/>
      <CardFooter
      className="flex items-center justify-center"
      >
        
        <Link
          isExternal
          showAnchorIcon
          href="https://github.com/YadavYashvant/Lirice"
        >
          See some examples to get an idea
        </Link>
      </CardFooter>
    </Card>
          <div className="mb-4 w-[95%]">
            <Input
              fullWidth
              label="Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </div>
          <div className="mb-4 w-[95%]">
            <Textarea
              fullWidth
              minRows={20}
              // height={500}
              label="Content"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              required
            />
          </div>

          <div className="mb-4 w-[95%]">
          <Card onClick={() => fileInputRef.current?.click()} className="cursor-pointer">
            <CardHeader>
            <input
            type="file"
            // style={{ display: 'none' }} // Hide the file input
            ref={fileInputRef} // Use a ref to trigger click on this input
            onChange={handleImageChange}
          />
            </CardHeader>
            
            <CardBody>
              <Image src={imagePreviewUrl} alt="Selected or default image" />
            </CardBody>
          </Card>
        </div>

          {/* <div className="mb-4">
            <input
              type="file"
              onChange={(e) => setImage(e.target.files ? e.target.files[0] : null)}
            />
          </div> */}
          <Button className='w-[80%] p-7 my-7' type="submit" color="primary" fullWidth>
            <h2 className='text-2xl'>POST</h2>
          </Button>
        </form>
      {/* </div> */}
    </div>
    </NextUIProvider>
  );
};

export default NewPost;