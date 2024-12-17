'use client';
import React, { useState } from "react";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";

interface PasswordInputProps {
    password: string;
    setPassword: React.Dispatch<React.SetStateAction<string>>;
}

const PasswordInput: React.FC<PasswordInputProps> = ({ password, setPassword }) => {
    const [showPassword, setShowPassword] = useState(false);

    return (
        <div>
            <label className="block text-md py-2 font-semibold">Password*</label>
            <div className="relative mb-4">
                <input
                    type={showPassword ? "text" : "password"}
                    className="h-12 w-full rounded-lg border-2 border-black px-5 text-sm placeholder-gray-400"
                    placeholder="enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button
                    className="absolute right-3 top-1/2 -translate-y-1/2 transform"
                    onClick={() => setShowPassword(!showPassword)}
                >
                    {showPassword ? (
                        <FaRegEye className="text-xl" />
                    ) : (
                        <FaRegEyeSlash className="text-xl" />
                    )}
                </button>
            </div>
        </div>
    );
};

export default PasswordInput;
