import { NextApiRequest, NextApiResponse } from 'next';
import { doc, updateDoc, serverTimestamp } from 'firebase/firestore';
import { db } from '@/utils/firebaseConfig'; // Your Firebase config

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'POST') {
        try {
            const { userId, expertProfile } = req.body;

            // Log the request data for debugging
            console.log('Received data:', req.body);

            if (!userId || !expertProfile) {
                return res.status(400).json({ error: 'Missing required fields.' });
            }

            const userRef = doc(db, 'users', userId);

            // Update the Firestore document
            await updateDoc(userRef, {
                isExpert: true,
                expertProfile,
                updatedAt: serverTimestamp(),
            });

            return res.status(200).json({ message: 'Expert profile updated successfully.' });
        } catch (error) {
            console.error('Error updating expert profile:', error);
            return res.status(500).json({ error: 'Failed to update expert profile.' });
        }
    } else {
        return res.status(405).json({ error: 'Method not allowed. Use POST.' });
    }
}
