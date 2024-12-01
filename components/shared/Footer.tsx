// components/Footer.tsx

import React from 'react';
import { FaFacebookF, FaGoogle, FaApple } from 'react-icons/fa';

const Footer: React.FC = () => {
    return (
        <footer className="bg-red-600 text-white py-12 px-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
                {/* Left Section */}
                <div className="text-center md:text-left">
                    <h1 className="text-6xl font-bold">HOHAI</h1>
                    <p className="mt-4 text-lg">Dhemaji Engineering College, Dhemaji</p>
                    <p className="mt-1 text-lg">2024@hohai.com</p>
                </div>

                {/* Center Section */}
                <div className="flex flex-col text-center md:text-left mt-8 md:mt-0">
                    <a href="#" className="mb-2 text-lg">About</a>
                    <a href="#" className="mb-2 text-lg">Terms & Condition</a>
                    <a href="#" className="mb-2 text-lg">FAQ</a>
                    <a href="#" className="mb-2 text-lg">Sitemap</a>
                </div>

                {/* Right Section */}
                <div className="flex mt-8 md:mt-0 space-x-6">
                    <a href="#" className="text-white hover:text-gray-300">
                        <FaFacebookF size={24} />
                    </a>
                    <a href="#" className="text-white hover:text-gray-300">
                        <FaGoogle size={24} />
                    </a>
                    <a href="#" className="text-white hover:text-gray-300">
                        <FaApple size={24} />
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
