'use client';
import React from "react";
import {Image} from "@nextui-org/react";
import { useState } from 'react';

const LandingPage = () => {
    return (
        <div className='overflow-x-hidden'>
            <h1 className='text-9xl text-center font-extrabold'>Welcome to Lirice</h1>

            <Image
                isBlurred
                className='w-[95%] m-10 overflow-x-hidden'
                src="https://images.unsplash.com/photo-1600354279787-0a726615ef44"
                alt="Lirice landing page image"
            />

        </div>
    );
}

export default LandingPage;