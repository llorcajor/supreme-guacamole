// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC0q5-oQqijEuiANEaCoEO6H_uiVD-2S6E",
  authDomain: "mbip-4925b.firebaseapp.com",
  projectId: "mbip-4925b",
  storageBucket: "mbip-4925b.appspot.com",
  messagingSenderId: "285376139036",
  appId: "1:285376139036:web:f98dac95da0f282ee0f4d9",
  measurementId: "G-7Q9HNX5K2J",
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const auth = getAuth();

export default app;
export { auth, db };
