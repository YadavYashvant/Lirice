'use client';
import {Button, Card, Divider, Input, Spacer} from '@nextui-org/react';
import { useState } from 'react';

const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        console.log('Logging in...')
    };

    const handleSignup = () => {
        console.log('Signing up...')
    };

    return (
        <div className='mx-20 my-10'>
            <Card className='p-12'>
                <h1 className='text-5xl text-center font-extrabold my-5'>Login or SignUp</h1>
                <Divider />
                <Spacer y={5} />
                <Input
                    label="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                />
                <Spacer y={5} />
                <Input
                    label="Password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter your password"
                />
                <Spacer y={8} />
                <Button onClick={handleLogin} color="primary" fullWidth className='p-8 font-bold text-2xl'>
                    Sign In
                </Button>
                <Spacer y={5} />
                <h1 className='text-2xl text-center font-extrabold my-5'>OR</h1>
                <Spacer y={5} />

                <Button
                    onClick={handleSignup} color="success" fullWidth
                    className='p-8 font-bold text-2xl'
                >
                    Sign Up
                </Button>

            </Card>
        </div>
    );
};

export default LoginPage;