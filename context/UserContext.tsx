'use client';
import React, { createContext, useContext, useState, useEffect } from 'react';
import { auth } from '@/utils/firebaseConfig'
import { onAuthStateChanged } from 'firebase/auth'; // Firebase Auth state change listener

interface User {
    id: string;
    name: string;
    email: string;
    photo: string | null;
}

interface UserContextType {
    user: User | null;
    setUser: React.Dispatch<React.SetStateAction<User | null>>;
}

// Define the UserProvider's props to accept 'children' of type React.ReactNode
interface UserProviderProps {
    children: React.ReactNode;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider: React.FC<UserProviderProps> = ({ children }) => {
    const [user, setUser] = useState<User | null>(null);

    useEffect(() => {
        // Listen for Firebase authentication state changes
        const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
            if (firebaseUser) {
                // If user is logged in, set the user object
                setUser({
                    id: firebaseUser.uid,
                    name: firebaseUser.displayName || '',
                    email: firebaseUser.email || '',
                    photo: firebaseUser.photoURL || null,
                });
            } else {
                // If no user is logged in, clear the user context
                setUser(null);
            }
        });

        // Cleanup the listener on component unmount
        return () => unsubscribe();
    }, []);

    useEffect(() => {
        if (user) {
            // Persist user data to localStorage when it changes
            localStorage.setItem('user', JSON.stringify(user));
        } else {
            // Remove user data from localStorage when logged out
            localStorage.removeItem('user');
        }
    }, [user]);

    return (
        <UserContext.Provider value={{ user, setUser }}>
            {children}
        </UserContext.Provider>
    );
};

export const useUser = (): UserContextType => {
    const context = useContext(UserContext);
    if (!context) {
        throw new Error('useUser must be used within a UserProvider');
    }
    return context;
};
