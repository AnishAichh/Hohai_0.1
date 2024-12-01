// components/stepper/StepOne.tsx
import { Button, TextField } from '@mui/material';
import { Google as GoogleIcon, LinkedIn as LinkedInIcon } from '@mui/icons-material';
import Link from 'next/link';

export default function StepOne() {
    return (
        <div className="max-w-md mx-auto p-6 bg-white shadow-md rounded-lg">
            <h2 className="text-2xl font-bold text-center mb-2">Create your page</h2>


            <div className="flex justify-center gap-4 mb-4">
                <Button
                    variant="outlined"
                    startIcon={<GoogleIcon />}
                    fullWidth
                    className="normal-case text-gray-700 border-gray-300"
                >
                    Continue with Google
                </Button>
                <Button
                    variant="outlined"
                    startIcon={<LinkedInIcon />}
                    fullWidth
                    className="normal-case text-gray-700 border-gray-300"
                >
                    Continue with LinkedIn
                </Button>
            </div>

            <div className="flex items-center justify-center my-4">
                <span className="text-gray-400">or</span>
            </div>

            <form className="space-y-4">
                <div className="flex gap-4">
                    <TextField
                        label="First Name"
                        variant="outlined"
                        fullWidth
                        size="small"
                    />
                    <TextField
                        label="Last Name"
                        variant="outlined"
                        fullWidth
                        size="small"
                    />
                </div>

                <TextField
                    label="Email"
                    type="email"
                    variant="outlined"
                    fullWidth
                    size="small"
                />

                <TextField
                    label="Password"
                    type="password"
                    variant="outlined"
                    fullWidth
                    size="small"
                />

                <Button
                    variant="contained"
                    fullWidth
                    className="bg-black text-white normal-case py-2 mt-4"
                >
                    Get Started
                </Button>

                <p className="text-center text-xs text-gray-500 mt-4">
                    By signing up, you agree to our{' '}
                    <Link href="/terms" className="text-blue-500">
                        Terms of Use
                    </Link>{' '}
                    and{' '}
                    <Link href="/privacy" className="text-blue-500">
                        Privacy Policy
                    </Link>.
                </p>
            </form>
        </div>
    );
}
