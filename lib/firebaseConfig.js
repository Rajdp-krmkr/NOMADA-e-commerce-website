// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDTNllfHtMscxH7xDn9gCh_zm-wrfnQEr4",
  authDomain: "nomada-8460c.firebaseapp.com",
  projectId: "nomada-8460c",
  storageBucket: "nomada-8460c.firebasestorage.app",
  messagingSenderId: "37304124042",
  appId: "1:37304124042:web:4f42de14f60fb7b79ce373",
  measurementId: "G-CWSX4ZH30B",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const db = getFirestore(app);
