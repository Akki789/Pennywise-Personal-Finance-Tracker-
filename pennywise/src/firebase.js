// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore, doc, setDoc } from "firebase/firestore";
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBJrgl94NgQyHQOS_Qw7omXkes5rsCc4eE",
  authDomain: "pennywise-official.firebaseapp.com",
  projectId: "pennywise-official",
  storageBucket: "pennywise-official.firebasestorage.app",
  messagingSenderId: "585692196050",
  appId: "1:585692196050:web:183a99e4418567b6ad910b",
  measurementId: "G-0VC9SB4P38"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
export { db, auth, provider, doc, setDoc };