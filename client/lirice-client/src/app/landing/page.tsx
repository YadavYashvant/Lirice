'use client';
import React from "react";
import {Image} from "@nextui-org/react";
import { useState } from 'react';

const LandingPage = () => {
    return (
        <div>
            <h1 className='text-7xl text-center'>Welcome to Lirice</h1>

            <Image
                isBlurred
                className='w-full'
                src="https://nextui-docs-v2.vercel.app/images/album-cover.png"
                alt="NextUI Album Cover"
                // className="m-5"
            />

        </div>
    );
}

export default LandingPage;