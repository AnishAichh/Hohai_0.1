// components/Logout.tsx
'use client';
import React from 'react';
import { auth } from '@/utils/firebaseConfig'
import { useUser } from '@/context/UserContext';

const Logout: React.FC = () => {
    const { setUser } = useUser();

    const handleLogout = async () => {
        try {
            await auth.signOut();
            setUser(null); // Clear the context
        } catch (err) {
            console.error('Error signing out:', err);
        }
    };

    return (
        <div>
            <button onClick={handleLogout}>Logout</button>
        </div>
    );
};

export default Logout;
