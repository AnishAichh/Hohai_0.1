import { NextApiRequest, NextApiResponse } from 'next';
import { auth, db } from '@/utils/firebaseConfig';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { doc, setDoc, Timestamp } from 'firebase/firestore';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    const { username, email, password } = req.body;

    try {
        // Create user with email and password
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;

        // Save user data to Firestore
        const userDoc = {
            username: username,
            email: email,
            isExpert: false, // Initially a consumer
            createdAt: Timestamp.now(),
        };

        await setDoc(doc(db, 'users', user.uid), userDoc);

        res.status(201).json({ message: 'User created successfully', uid: user.uid });
    } catch (error) {
        if (error instanceof Error) {
            console.error('Error creating user:', error);
            res.status(400).json({ error: error.message });
        } else {
            console.error('Unexpected error:', error);
            res.status(500).json({ error: 'An unexpected error occurred' });
        }
    }
}