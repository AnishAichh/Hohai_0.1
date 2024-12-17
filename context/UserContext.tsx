'use client';
import React, { createContext, useContext, useState, useEffect } from 'react';
import { auth } from '@/utils/firebaseConfig';
import { onAuthStateChanged } from 'firebase/auth'; // Firebase Auth state change listener
import { getDoc, doc } from 'firebase/firestore';
import { db } from '@/utils/firebaseConfig'; // Import Firestore instance

interface User {
    id: string;
    isExpert: boolean; // Add isExpert property
    name: string;
    email: string;
    photo: string | null;
}

interface UserContextType {
    user: User | null;
    setUser: React.Dispatch<React.SetStateAction<User | null>>;
}

interface UserProviderProps {
    children: React.ReactNode;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider: React.FC<UserProviderProps> = ({ children }) => {
    const [user, setUser] = useState<User | null>(null);

    useEffect(() => {
        // Listen for Firebase authentication state changes
        const unsubscribe = onAuthStateChanged(auth, async (firebaseUser) => {
            if (firebaseUser) {
                try {
                    // Fetch additional user data (e.g., isExpert) from Firestore
                    const userDocRef = doc(db, 'users', firebaseUser.uid); // Firestore path: 'users/{uid}'
                    const userDocSnap = await getDoc(userDocRef);

                    const userData = userDocSnap.exists()
                        ? userDocSnap.data()
                        : { isExpert: false }; // Default to 'false' if not in Firestore

                    setUser({
                        id: firebaseUser.uid,
                        name: firebaseUser.displayName || '',
                        email: firebaseUser.email || '',
                        photo: firebaseUser.photoURL || null,
                        isExpert: userData.isExpert || false,
                    });
                } catch (error) {
                    console.error('Error fetching user data:', error);
                }
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
