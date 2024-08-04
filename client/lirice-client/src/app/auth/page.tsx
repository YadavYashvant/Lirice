import { Button, Card, Container, Divider, Input, Text, useToasts } from '@nextui-org/react';
import { useState } from 'react';

const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [, setToast] = useToasts();

    const handleLogin = () => {
        setToast({ text: 'Logging in...', type: 'info' });
    };

    const handleSignup = () => {
        setToast({ text: 'Signing up...', type: 'info' });
    };

    return (
        <Container center>
            <Card shadow>
                <Text h1>Login</Text>
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
        </Container>
    );
};

export default LoginPage;