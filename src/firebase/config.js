// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAw0P-YVfZWpqG1PvpwdE9BzE7ClayJYHE",
  authDomain: "telecomfa-adbe8.firebaseapp.com",
  projectId: "telecomfa-adbe8",
  storageBucket: "telecomfa-adbe8.appspot.com",
  messagingSenderId: "466100560949",
  appId: "1:466100560949:web:617dfd1f539f453947bd7c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };