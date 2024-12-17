'use client';
import { useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';
import { auth } from '@/utils/firebaseConfig'
import { onAuthStateChanged, User as FirebaseUser } from 'firebase/auth'; // Firebase Authentication

interface ProtectedRouteProps {
    children: React.ReactNode; // Type children to accept any React content
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
    const [user, setUser] = useState<FirebaseUser | null>(null); // FirebaseUser type for user
    const [loading, setLoading] = useState(true); // State to handle loading
    const router = useRouter();

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
            if (firebaseUser) {
                // If the user is logged in, set the user to the state
                setUser(firebaseUser);
            } else {
                // If no user is logged in, redirect to the login page
                setUser(null);
                router.push('/login'); // Redirect to login if not logged in
            }
            setLoading(false); // Once we know the auth state, stop the loading state
        });

        // Cleanup the listener when the component is unmounted
        return () => unsubscribe();
    }, [router]);

    if (loading) {
        return <div>Loading...</div>; // Show a loading message while checking authentication state
    }

    // If user is logged in, render the children (protected content)
    if (user) {
        return <>{children}</>;
    }

    // Otherwise, redirect to login or show an access denied message
    return <div>Access Denied</div>;
};

export default ProtectedRoute;
