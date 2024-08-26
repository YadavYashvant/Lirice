'use client';
import React from "react";
import {Image, Card, Input, Button} from "@nextui-org/react";
import { useState } from 'react';

const LandingPage = () => {
    return (
        <div className='relative overflow-x-hidden'>
            <div className='relative w-full'>
                <Image
                    isBlurred
                    className='w-full h-full object-cover'
                    src="https://images.unsplash.com/photo-1600354279787-0a726615ef44"
                    alt="Lirice landing page image"
                />
                <div className='absolute inset-0 bg-black opacity-50'></div>
                <div className='absolute inset-0 flex flex-col items-center justify-center z-10'>
                    <h1 className='text-9xl text-center font-extrabold text-white mt-14'>Welcome to Lirice</h1>
                    <div className='text-2xl text-center font-semibold text-white mt-4'>
                        Share linux desktop configs in one place 🖥️
                    </div>
                </div>
                <div className='flex items-center justify-center w-full h-full'>
                <Card className='w-full p-10 z-50'>
                    <h1 className='text-5xl text-center font-extrabold my-5'>Get an early access</h1>
                    <Input
                        label="Email"
                        placeholder="Enter your email"
                    />
                    <Button variant='bordered' color="success" className="mt-10">
                        Request Accesss
                    </Button>
                </Card>
            </div>
            </div>
        </div>
    );
}

export default LandingPage;