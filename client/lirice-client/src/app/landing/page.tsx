'use client';
import React from "react";
import {Image} from "@nextui-org/react";
import { useState } from 'react';

const LandingPage = () => {
    return (
        <div className='relative overflow-x-hidden'>
            <div className='absolute inset-0 bg-black opacity-50 z-0'></div>
            <div className='absolute top-0 left-0 right-0 flex items-end justify-center z-10'>
                <h1 className='text-9xl text-center font-extrabold text-white mt-14'>Welcome to Lirice</h1>
            </div>
            <Image
                isBlurred
                className='w-[95%] m-10 overflow-x-hidden z-0'
                src="https://images.unsplash.com/photo-1600354279787-0a726615ef44"
                alt="Lirice landing page image"
            />
        </div>
    );
}

export default LandingPage;