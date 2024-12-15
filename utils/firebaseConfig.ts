import { getApp, getApps, initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBbO9z5KoNh0MVLyRtaX-xS8X9envw2JJk",
    authDomain: "hohai-2.firebaseapp.com",
    projectId: "hohai-2",
    storageBucket: "hohai-2.firebasestorage.app",
    messagingSenderId: "972556580788",
    appId: "1:972556580788:web:80d5df31d6aba755ae24e1",
    measurementId: "G-CB83ZZEYER"
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);

