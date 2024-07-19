'use client';
import React, { useState } from 'react';
import axios from 'axios';
import { NextUIProvider, Input, Button } from '@nextui-org/react';

const NewPost: React.FC = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
      const response = await axios.post('http://localhost:8080/post', {
        title,
        content,
      });
      console.log('Post created:', response.data);
      // Clear the form fields after successful submission
      setTitle('');
      setContent('');
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
          <Button type="submit" color="primary" fullWidth>
            Submit
          </Button>
        </form>
      </div>
    </NextUIProvider>
  );
};

export default NewPost;