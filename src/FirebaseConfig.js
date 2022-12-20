// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to usee
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC8pirBX0PxzNFEbN-nRCOVuQZIUy2WJbs",
  authDomain: "test-8a174.firebaseapp.com",
  projectId: "test-8a174",
  storageBucket: "test-8a174.appspot.com",
  messagingSenderId: "984587357269",
  appId: "1:984587357269:web:293a056b44035b126e58dc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);