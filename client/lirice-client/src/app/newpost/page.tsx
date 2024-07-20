'use client';
import React, { useState } from 'react';
import axios from 'axios';
import { NextUIProvider, Input, Button } from '@nextui-org/react';

const NewPost: React.FC = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [image, setImage] = useState<File | null>(null);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
      // Create the post first
      const postResponse = await axios.post('http://localhost:8080/post', {
        title,
        content,
      });

      // Log the entire response to inspect it
      console.log('Post response:', postResponse);

      // Ensure the response contains the id
      const postId = postResponse.data.id;
      if (!postId) {
        throw new Error('Post ID is undefined');
      }

      console.log('Post created with ID:', postId);

      // If an image is selected, upload it
      if (image) {
        const formData = new FormData();
        formData.append('image', image);

        await axios.post(`http://localhost:8080/post/image/upload/${postId}`, formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        });
        console.log('Image uploaded');
      }

      // Clear the form fields after successful submission
      setTitle('');
      setContent('');
      setImage(null);
    } catch (error) {
      console.error('Error creating post:', error);
    }
  };

  return (
    <NextUIProvider>
      <div className="flex items-center justify-center h-screen bg-gray-100">
        <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md w-full max-w-md">
          <h2 className="text-2xl mb-4">Create a New Post</h2>
          <div className="mb-4">
            <Input
              fullWidth
              label="Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <Input
              fullWidth
              label="Content"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <input
              type="file"
              onChange={(e) => setImage(e.target.files ? e.target.files[0] : null)}
            />
          </div>
          <Button type="submit" color="primary" fullWidth>
            Submit
          </Button>
        </form>
      </div>
    </NextUIProvider>
  );
};

export default NewPost;