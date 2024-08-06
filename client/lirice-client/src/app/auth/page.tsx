'use client';
import { Button, Card,Divider, Input} from '@nextui-org/react';
import { useState } from 'react';

const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        console.log('Logging in...')
        // setToast({ text: 'Logging in...', type: 'info' });
    };

    const handleSignup = () => {
        // setToast({ text: 'Signing up...', type: 'info' });
    };

    return (
        <div>
            <Card>
                <h1>Login</h1>
                <Divider />
                <Input
                    label="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                />
                <Input
                    label="Password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter your password"
                />
                <Button onClick={handleLogin} color="primary" fullWidth>
                    Sign In
                </Button>
                <Button onClick={handleSignup} color="secondary" fullWidth>
                    Sign Up
                </Button>
            </Card>
        </div>
    );
};

export default LoginPage;