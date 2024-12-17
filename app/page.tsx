'use client';
import Footer from '@/components/shared/Footer';
import { experts, faqs } from '@/constants/data';
import { useUser } from '@/context/UserContext'; // Ensure path is correct
import { Avatar, Menu, MenuItem } from '@mui/material';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { collection, query, where, getDocs } from 'firebase/firestore';
import { db } from '@/utils/firebaseConfig'; // Firestore config
import Logout from '@/components/shared/buttons/Logout';

const Home: React.FC = () => {
    const { user } = useUser(); // This will work if UserProvider is correctly set up

    // State for controlling the user menu
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const openMenu = Boolean(anchorEl);

    // State for fetching top experts
    const [expertsList, setExpertsList] = useState<any[]>([]);

    // Fetch Top Experts from Firestore
    useEffect(() => {
        const fetchExperts = async () => {
            try {
                const expertsQuery = query(collection(db, 'users'), where('isExpert', '==', true));
                const querySnapshot = await getDocs(expertsQuery);

                const expertsData = querySnapshot.docs.map(doc => {
                    const data = doc.data();
                    return {
                        id: doc.id,
                        firstName: data.firstName || 'Expert',  // Default to 'Expert' if missing
                        lastName: data.lastName || '',  // Default to empty string if missing
                        photoURL: data.photoURL || '/default-avatar.png',  // Default image if missing
                    };
                });

                setExpertsList(expertsData);
            } catch (error) {
                console.error('Error fetching experts:', error);
            }
        };

        fetchExperts();
    }, []);

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

                {/* Top Experts Section */}
                <section className="py-12 px-8">
                    <h3 className="text-xl font-bold">TOP EXPERT</h3>
                    <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 mt-6">
                        {expertsList.map((expert) => (
                            <div key={expert.id} className="flex flex-col items-center">
                                <div className="w-24 h-24 rounded-full bg-gray-300 overflow-hidden">
                                    <img
                                        src={expert.photoURL} // No fallback needed as the default is handled during fetch
                                        alt={`${expert.firstName} ${expert.lastName}`}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <p className="mt-2 text-center text-gray-700">
                                    {expert.firstName} {expert.lastName}
                                </p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Other Sections */}
                <section className="py-12 px-8 text-center">
                    <h3 className="text-lg font-semibold mb-2">
                        WHAT EVER THE PROBLEM, WE HAVE A SOLUTION
                    </h3>
                    <div className="flex items-center bg-gray-100 p-6 rounded-lg shadow-md text-left">
                        <div className="ml-6">
                            <h4 className="text-red-600 font-bold text-2xl">HOHAI</h4>
                            <p className="text-blue-600 font-medium">Search, Solve, Succeed</p>
                            <p className="mt-2 text-gray-700">
                                Hohai is a platform connecting consumers with skilled professionals
                                for instant help through video calls or chat, available anytime,
                                anywhere.
                            </p>
                        </div>
                    </div>
                </section>

                <Footer />
            </main>
        </div>
    );
};

export default Home;
