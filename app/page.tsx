import React from 'react';
import { experts, faqs } from '@/constants/data';
import Footer from '@/components/shared/Footer';
import Image from 'next/image';

const Home: React.FC = () => {
    return (
        <div className="font-sans w-5/6 mx-auto">
            {/* Header */}
            <header className="bg-white border-b shadow-lg p-4 flex justify-between items-center">
                <h1 className="text-red-600 font-bold text-2xl">HOHAI</h1>
                <div className="flex space-x-4">
                    <button className="bg-gray-200 text-black py-2 px-4 rounded-md">FIND HELP</button>
                    <a href="#" className="text-gray-700">ABOUT US</a>
                    <a href="#" className="text-gray-700">BECOME EXPERT</a>
                    <a href="#" className="text-gray-700">LOGIN</a>
                </div>
            </header>

            {/* Hero Section */}
            <section className="bg-red-600 text-white text-center py-16">
                <h2 className="text-3xl font-bold">STUCK ANYWHERE, USE HOHAI</h2>
                <p className="mt-2">with 24/7 access to professionalists, experts and tools</p>
                <div className="mt-8 mx-auto bg-gray-300 w-3/4 h-32 rounded-lg"></div>
            </section>

            {/* Popular Q&A Section */}
            <section className="py-12 px-8">
                <h3 className="text-xl font-bold">MOST POPULAR Q&A</h3>
                <p className="text-sm text-gray-500">RECENTLY ANSWERED HOMEWORK QUESTIONS BY OUR EXPERTS</p>
                <div className="grid grid-cols-3 gap-4 mt-6">
                    {[...Array(3)].map((_, idx) => (
                        <div key={idx} className="border p-4 rounded-lg bg-white shadow">
                            <h4 className="font-semibold">Q. Lorem ipsum is simply dummy text of the printing and typesetting industry.</h4>
                            <p className="text-gray-600 mt-2">
                                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of.
                            </p>
                        </div>
                    ))}
                </div>
                <div className="mt-4 text-right">
                    <a href="#" className="text-blue-500 font-semibold">SHOW MORE Q&A</a>
                </div>
            </section>

            {/* Top Experts Section */}
            <section className="py-12 px-8">
                <h3 className="text-xl font-bold">TOP EXPERT</h3>
                <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 mt-6">
                    {[...Array(6)].map((_, idx) => (
                        <div key={idx} className="flex flex-col items-center">
                            <div className="w-24 h-24 rounded-full bg-gray-300"></div>
                            <p className="mt-2 text-center text-gray-700">DUMMY USER<br />DUMMY EXPERT</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Need Help in Specific Domain */}
            <section className="py-12 px-8">
                <h3 className="text-xl font-bold text-center mb-6">Need Help in Specific Domain?</h3>
                <div className="flex justify-center gap-6">
                    {experts?.map((expert) => (
                        <div key={expert.id} className="w-20 h-20 bg-gray-200 rounded-full overflow-hidden shadow">
                            <img src={expert.image} alt={expert.name} className="w-full h-full object-cover" />
                        </div>
                    ))}
                </div>
                <div className="text-center mt-4">
                    <a href="#" className="text-blue-500 font-semibold">SHOW MORE DOMAINS</a>
                </div>
            </section>

            {/* Solution Section */}
            <section className="py-12 px-8 text-center">
                <h3 className="text-lg font-semibold mb-2">WHAT EVER THE PROBLEM, WE HAVE A SOLUTION</h3>
                <div className="flex items-center bg-gray-100 p-6 rounded-lg shadow-md text-left">
                    {/* Image Section */}
                    <div className="w-1/3">
                        <Image
                            src="/Homepage/Female.png"
                            alt="Female Illustration"
                            width={150} // Adjust the width as needed
                            height={150} // Adjust the height as needed
                            className="rounded-md"
                        />
                    </div>

                    {/* Text Section */}
                    <div className="ml-6">
                        <h4 className="text-red-600 font-bold text-2xl">HOHAI</h4>
                        <p className="text-blue-600 font-medium">Search, Solve, Succeed</p>
                        <p className="mt-2 text-gray-700">
                            Hohai is a platform connecting consumers with skilled professionals for instant help through video calls or chat, anytime, anywhere.
                        </p>
                    </div>
                </div>
            </section>
            {/* FAQ Section */}
            <section className="py-12 px-8">
                <h3 className="text-xl font-bold text-center mb-6">Frequently Asked Questions</h3>
                <div className="space-y-4">
                    {faqs?.map((faq, index) => (
                        <div key={index} className="bg-white border border-gray-200 rounded-lg shadow-md">
                            <details className="p-4">
                                <summary className="cursor-pointer text-lg font-semibold text-gray-700 flex justify-between items-center">
                                    {faq.question}
                                    <span className="ml-2 text-blue-500">+</span>
                                </summary>
                                <p className="mt-2 text-gray-600">{faq.answer}</p>
                            </details>
                        </div>
                    ))}
                </div>
            </section>
            <Footer />
        </div>
    );
};

export default Home;
