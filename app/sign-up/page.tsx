'use client'
import React, { useState } from 'react';
import SocialButtons from '@/components/shared/SignUp/SocialButtons'; // Import the SocialButtons component

const SignUp = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false); // New loading state
    const [success, setSuccess] = useState(false); // New success state

    const handleSignUp = async () => {
        if (password !== confirmPassword) {
            setError('Passwords do not match');
            return;
        }

        setError('');
        setLoading(true); // Start loading

        try {
            const response = await fetch('/api/signup', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ username, email, password }),
            });

            const data = await response.json();

            if (response.ok) {
                setSuccess(true); // Set success state to true
                setTimeout(() => {
                    window.location.href = '/login'; // Redirect after a short delay
                }, 2000); // Wait 2 seconds to show success message
            } else {
                setError(data.error || 'Something went wrong');
            }
        } catch (error) {
            if (error instanceof Error) {
                setError(error.message || 'An error occurred during sign up');
            } else {
                console.error('Unexpected error:', error);
                setError('An unexpected error occurred');
            }
        } finally {
            setLoading(false); // Stop loading
        }
    };

    return (
        <div className="flex items-center justify-center h-screen w-screen bg-secondary overflow-hidden bg-zinc-800">
            <div className="w-11/12 sm:w-3/4 md:w-1/2 lg:w-1/3 xl:w-1/4 rounded-lg bg-white p-5">
                <h1 className="text-center text-xl font-bold">Create Your Account</h1>
                <div className="mx-6">
                    <div>
                        <label className="block text-md py-2 font-semibold">Username*</label>
                        <input
                            type="text"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            className="mb-2 h-12 w-full rounded-lg border-2 border-black px-5 text-sm placeholder-gray-400"
                            placeholder="Enter your username"
                        />
                    </div>
                    <div>
                        <label className="block text-md py-2 font-semibold">Email*</label>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="mb-2 h-12 w-full rounded-lg border-2 border-black px-5 text-sm placeholder-gray-400"
                            placeholder="Enter your email"
                        />
                    </div>
                    <div>
                        <label className="block text-md py-2 font-semibold">Password*</label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="mb-2 h-12 w-full rounded-lg border-2 border-black px-5 text-sm placeholder-gray-400"
                            placeholder="Set your password"
                        />
                    </div>
                    <div>
                        <label className="block text-md py-2 font-semibold">Confirm Password*</label>
                        <input
                            type="password"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            className="mb-2 h-12 w-full rounded-lg border-2 border-black px-5 text-sm placeholder-gray-400"
                            placeholder="Confirm your password"
                        />
                    </div>
                    {error && <p className="text-red-500 text-sm">{error}</p>}
                    {loading && <p className="text-blue-500 text-sm">Signing in...</p>} {/* Show loading message */}
                    {success && <p className="text-green-500 text-sm">Registration Successful!</p>} {/* Show success message */}
                    <button
                        onClick={handleSignUp}
                        className="mt-5 h-12 w-full rounded-md bg-primary text-center font-bold shadow-sm bg-red-500"
                    >
                        SIGN UP
                    </button>
                    <div className="flex items-center justify-center my-4 w-full">
                        <div className="h-px w-full bg-black"></div>
                        <span className="px-3">or</span>
                        <div className="h-px w-full bg-black"></div>
                    </div>
                    <div className="mt-6">
                        <SocialButtons />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;
