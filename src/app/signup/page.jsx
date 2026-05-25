'use client';
import { authClient } from '@/lib/auth-client';
import { Button, Card, Description, FieldError, Form, Input, Label, TextField } from '@heroui/react';
import Link from 'next/link';
import { redirect } from 'next/navigation';
import React from 'react';
import { FcGoogle } from 'react-icons/fc';

const SignUpPage = () => {

    const onSubmit = async (e) => {
        e.preventDefault();

        const formdata = new FormData(e.currentTarget);
        const user = Object.fromEntries(formdata.entries());
        // console.log(user);

        const { data, error } = await authClient.signUp.email({
            name: user.name,
            email: user.email,
            password: user.password,
            image: user.image
        })

        // console.log(data, error);

        if (data) {
            redirect("/");
        }
    }

    const handleGoogleSignIn = async () => {
        await authClient.signIn.social({
            provider: "google",
        });
    };

    return (
        <div className="max-w-3xl mx-auto my-10">
            <div className="text-center mb-6">
                <h1 className="text-2xl font-bold">Create Account</h1>
                <p className="text-center">
                    Join our community and start your journey today.
                </p>
            </div>
            <Card className="border rounded-none">
                <Form className="flex flex-col gap-4 p-6" onSubmit={onSubmit}>
                    <TextField
                        isRequired
                        name="name"
                        type="text"
                        validate={(value) => {
                            if (value.length < 2) {
                                return "Name must be at least 2 characters";
                            }
                            return null;
                        }}
                    >
                        <Label>Name</Label>
                        <Input placeholder="Enter Your Name" />
                        <FieldError />
                    </TextField>
                    <TextField
                        name="image"
                        type="url"
                    >
                        <Label>Image URL</Label>
                        <Input placeholder="Image URL" />
                        <FieldError />
                    </TextField>
                    <TextField
                        isRequired
                        name="email"
                        type="email"
                        validate={(value) => {
                            if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
                                return "Please enter a valid email address";
                            }
                            return null;
                        }}
                    >
                        <Label>Email</Label>
                        <Input placeholder="john@example.com" />
                        <FieldError />
                    </TextField>
                    <TextField
                        isRequired
                        minLength={8}
                        name="password"
                        type="password"
                        validate={(value) => {
                            if (value.length < 8) {
                                return "Password must be at least 8 characters";
                            }
                            if (!/[A-Z]/.test(value)) {
                                return "Password must contain at least one uppercase letter";
                            }
                            if (!/[0-9]/.test(value)) {
                                return "Password must contain at least one number";
                            }
                            return null;
                        }}
                    >
                        <Label>Password</Label>
                        <Input placeholder="Enter your password" />
                        <Description>Must be at least 8 characters with 1 uppercase and 1 number</Description>
                        <FieldError />
                    </TextField>
                    <div className="flex gap-2 flex-col mt-4">
                        <Button type="submit" className="w-full">
                            Create Account
                        </Button>
                        <div className="text-center text-sm text-gray-500 my-2">
                            Or continue with
                        </div>
                        <Button variant="outline" className="flex items-center justify-center gap-2 w-full" onClick={handleGoogleSignIn}>
                            <FcGoogle />
                            Login with Google
                        </Button>
                        <div className="text-center text-sm text-gray-500 mt-4">
                            Already have an account? <Link href="/login" className="text-blue-500">Login</Link>
                        </div>
                    </div>
                </Form>
            </Card>
        </div>
    );
};

export default SignUpPage;