import { NextApiRequest, NextApiResponse } from 'next';
import { auth } from '@/utils/firebaseConfig';
import { signInWithEmailAndPassword } from 'firebase/auth';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method Not Allowed' });
    }

    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json({ error: 'Email and password are required' });
    }

    try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;

        res.status(200).json({ message: 'Login successful', uid: user.uid });
    } catch (error: any) {
        console.error('Login error:', error);

        if (error.code === 'auth/wrong-password') {
            res.status(401).json({ error: 'Incorrect password' });
        } else if (error.code === 'auth/user-not-found') {
            res.status(404).json({ error: 'User not found' });
        } else {
            res.status(500).json({ error: 'Internal server error' });
        }
    }
}
