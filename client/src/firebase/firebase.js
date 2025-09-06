import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAedA1c5NxXhnVcFw7cZeQnp-DDt_YydTc",
  authDomain: "pakludo-d427b.firebaseapp.com",
  projectId: "pakludo-d427b",
  storageBucket: "pakludo-d427b.firebasestorage.app",
  messagingSenderId: "48715714007",
  appId: "1:48715714007:web:e209b5c9f05fe8241e4f92",
  measurementId: "G-FN65BYLTC7"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
