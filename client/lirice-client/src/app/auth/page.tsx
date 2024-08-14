'use client';
import React from "react";
import { useState } from 'react';
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, useDisclosure, RadioGroup, Radio, Button, Card, Divider, Input, Spacer} from "@nextui-org/react";

const LoginPage = () => {

    const {isOpen, onOpen, onOpenChange} = useDisclosure();
    const [modalPlacement, setModalPlacement] = React.useState("auto");

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        console.log('Logging in...')
    };

    const handleSignup = () => {
        console.log('Signing up...')
    };

    return (
        <div className='mx-20 my-10 max-sm:mx-8'>
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
                <Button onClick={onOpen} color="primary" fullWidth className='p-8 font-bold text-2xl'>
                    Sign In
                </Button>
                <Spacer y={5} />
                <h1 className='text-2xl text-center font-extrabold my-5'>OR</h1>
                <Spacer y={5} />

                <Button
                    onClick={onOpen} color="success" fullWidth
                    className='p-8 font-bold text-2xl'
                >
                    Sign Up
                </Button>

            </Card>

            <Modal
                isOpen={isOpen}
                backdrop="blur"
                placement="bottom"
                onOpenChange={onOpenChange}
            >
                <ModalContent>
                    {(onClose) => (
                        <>
                            <ModalHeader className="flex flex-col gap-1">IMPORTANT INFORMATION!!</ModalHeader>
                            <ModalBody>
                                <p>
                                    Sign up or Login to access the full features of this app.
                                </p>
                                <p>
                                    These features are yet to be implemented.
                                </p>
                            </ModalBody>
                            <ModalFooter>
                                <Button color="danger" variant="light" onPress={onClose}>
                                    Close
                                </Button>
                                <Button color="primary" onPress={onClose}>
                                    Proceed 👨‍🚀
                                </Button>
                            </ModalFooter>
                        </>
                    )}
                </ModalContent>
            </Modal>

        </div>
    );
};

export default LoginPage;