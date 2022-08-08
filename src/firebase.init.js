// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAaMjokmhr9w_0vjI5ssEHmMwQDG-P5xEc",
  authDomain: "task-7b02c.firebaseapp.com",
  projectId: "task-7b02c",
  storageBucket: "task-7b02c.appspot.com",
  messagingSenderId: "1090625228523",
  appId: "1:1090625228523:web:2c529c8bc1fbb5dd76f8ae"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

export default auth