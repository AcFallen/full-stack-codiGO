// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBuzex6WZ6ZoUok7Ao3D4LJrDkVkAEuj_Y",
  authDomain: "react-hero-app-e6dab.firebaseapp.com",
  projectId: "react-hero-app-e6dab",
  storageBucket: "react-hero-app-e6dab.appspot.com",
  messagingSenderId: "107285039665",
  appId: "1:107285039665:web:3e67bab738ac25032fa310"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)