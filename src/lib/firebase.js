import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";




const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "reactchat-a7a2e.firebaseapp.com",
  projectId: "reactchat-a7a2e",
  storageBucket: "reactchat-a7a2e.appspot.com",
  messagingSenderId: "757561450249",
  appId: "1:757561450249:web:ac871e97c5061105c23dd8"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth();
export const db = getFirestore();
export const storage = getStorage();