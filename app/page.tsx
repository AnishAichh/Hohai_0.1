'use client';
import Footer from '@/components/shared/Footer';
import { experts, faqs } from '@/constants/data';
import { useUser } from '@/context/UserContext';  // Ensure path is correct
import { Avatar, Menu, MenuItem } from '@mui/material';
import Link from 'next/link';
import { useState } from 'react';
import Logout from '@/components/shared/buttons/Logout';

const Home: React.FC = () => {
    const { user } = useUser();  // This will work if UserProvider is correctly set up

    // State for controlling the user menu
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const openMenu = Boolean(anchorEl);

    // Log user ID
    console.log('User ID:', user?.id);

    // Function to handle opening the user menu
    const handleMenuClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    // Function to handle closing the user menu
    const handleMenuClose = () => {
        setAnchorEl(null);
    };

    return (
        <div className="font-sans w-5/6 mx-auto">
            <header className="bg-white border-b shadow-lg p-4 flex justify-between items-center">
                <h1 className="text-red-600 font-bold text-2xl">HOHAI</h1>
                <div className="flex space-x-4">
                    <Link href="/find-help" className="bg-gray-200 text-black py-2 px-4 rounded-md">
                        FIND HELP
                    </Link>
                    <Link href="/about" className="text-gray-700">
                        ABOUT US
                    </Link>
                    {/* Hide "BECOME EXPERT" button if user is an expert */}
                    {!user?.isExpert && (
                        <Link
                            href={user ? '/expert-login' : '/login'}
                            className="text-gray-700"
                        >
                            BECOME EXPERT
                        </Link>
                    )}
                    {user ? (
                        <div>
                            <Avatar
                                alt={user.name || user.email}
                                src={user.photo || ''}
                                sx={{
                                    width: 40,
                                    height: 40,
                                    bgcolor: user.photo ? 'transparent' : 'red',
                                }}
                                className="cursor-pointer"
                                onClick={handleMenuClick} // Open the user menu on avatar click
                            >
                                {!user.photo && (user.name ? user.name[0] : user.email)}
                            </Avatar>

                            {/* User Menu (Profile, Expert Dashboard, Logout) */}
                            <Menu
                                anchorEl={anchorEl}
                                open={openMenu}
                                onClose={handleMenuClose}
                                PaperProps={{
                                    style: {
                                        maxHeight: 300,
                                        width: '20ch',
                                    },
                                }}
                            >
                                <MenuItem onClick={handleMenuClose}>
                                    <Link href="/profile" className="text-gray-700">Profile</Link>
                                </MenuItem>

                                {/* Expert Dashboard only for experts */}
                                {user.isExpert && (
                                    <MenuItem onClick={handleMenuClose}>
                                        <Link href="/expert/home" className="text-gray-700">
                                            Expert Dashboard
                                        </Link>
                                    </MenuItem>
                                )}

                                <MenuItem onClick={handleMenuClose}>
                                    <Logout /> {/* Logout button will be rendered */}
                                </MenuItem>
                            </Menu>
                        </div>
                    ) : (
                        <Link href="/login" className="text-gray-700">
                            LOGIN
                        </Link>
                    )}
                </div>
            </header>

            <main className="mt-8">
                {/* Hero Section */}
                <section className="bg-red-600 text-white text-center py-16">
                    <h2 className="text-3xl font-bold">STUCK ANYWHERE, USE HOHAI</h2>
                    <p className="mt-2">With 24/7 access to professionals, experts, and tools</p>
                    <div className="mt-8 mx-auto bg-gray-300 w-3/4 h-32 rounded-lg"></div>
                </section>

                {/* Popular Q&A Section */}
                <section className="py-12 px-8">
                    <h3 className="text-xl font-bold">MOST POPULAR Q&A</h3>
                    <p className="text-sm text-gray-500">RECENTLY ANSWERED HOMEWORK QUESTIONS BY OUR EXPERTS</p>
                    <div className="grid grid-cols-3 gap-4 mt-6">
                        {[...Array(3)].map((_, idx) => (
                            <div key={idx} className="border p-4 rounded-lg bg-white shadow">
                                <h4 className="font-semibold">
                                    Q. Lorem ipsum is simply dummy text of the printing and typesetting industry.
                                </h4>
                                <p className="text-gray-600 mt-2">
                                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
                                </p>
                            </div>
                        ))}
                    </div>
                    <div className="mt-4 text-right">
                        <Link legacyBehavior href="/qna">
                            <a className="text-blue-500 font-semibold">SHOW MORE Q&A</a>
                        </Link>
                    </div>
                </section>

                {/* Other Sections Remain Same */}
                <Footer />
            </main>
        </div>
    );
};

export default Home;
