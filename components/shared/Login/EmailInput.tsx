'use client';
import React from "react";

interface EmailInputProps {
    email: string;
    setEmail: React.Dispatch<React.SetStateAction<string>>;
}

const EmailInput: React.FC<EmailInputProps> = ({ email, setEmail }) => {
    return (
        <div>
            <label className="block text-md py-2 font-semibold">Email*</label>
            <input
                type="email"
                className="mb-2 h-12 w-full rounded-lg border-2 border-black px-5 text-sm placeholder-gray-400"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
        </div>
    );
};

export default EmailInput;
