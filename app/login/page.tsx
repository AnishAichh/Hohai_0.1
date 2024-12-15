'use client'; // Marks the file as a Client Component

import { useState } from 'react';
import { useRouter } from 'next/navigation'; // Use 'next/navigation' instead of 'next/router' in App Router
import EmailInput from '@/components/shared/Login/EmailInput';
import PasswordInput from '@/components/shared/Login/PasswordInput';
import SocialLogin from '@/components/shared/Login/SocialLogin';
import Link from 'next/link';

const Login: React.FC = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const router = useRouter();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError('');

        try {
            const res = await fetch('/api/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password }),
            });

            const data = await res.json();

            if (res.ok) {
                router.push('/'); // Redirect to home page on success
            } else {
                setError(data.error || 'Invalid credentials.');
            }
        } catch (err) {
            setError('Something went wrong. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="flex items-center justify-center h-screen bg-zinc-800">
            <div className="w-full max-w-sm p-6 bg-white rounded-lg shadow-md">
                <h2 className="text-2xl font-bold text-center mb-6">Login</h2>
                {error && <p className="text-red-500 text-center">{error}</p>}

                <form onSubmit={handleSubmit}>
                    <EmailInput email={email} setEmail={setEmail} />
                    <PasswordInput password={password} setPassword={setPassword} />

                    <button
                        type="submit"
                        className="w-full mt-4 bg-red-600 text-white py-2 rounded hover:bg-blue-600 transition duration-300"
                        disabled={loading}
                    >
                        {loading ? 'Logging in...' : 'Login'}
                    </button>
                </form>

                <div className="text-center mt-4">
                    <p>
                        Don't have an account?{' '}
                        <Link href="/sign-up" className="text-blue-500 underline">
                            Register here
                        </Link>
                    </p>
                </div>

                <div className="my-4 flex items-center">
                    <div className="flex-grow border-t border-gray-300"></div>
                    <span className="mx-2 text-gray-400">OR</span>
                    <div className="flex-grow border-t border-gray-300"></div>
                </div>

                <SocialLogin />
            </div>
        </div>
    );
};

export default Login;
