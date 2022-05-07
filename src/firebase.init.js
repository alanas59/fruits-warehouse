// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA6Sg-SXdIt2tC6bX8c_x55Z_I0CzSL1V4",
  authDomain: "fruits-inventory-f76b8.firebaseapp.com",
  projectId: "fruits-inventory-f76b8",
  storageBucket: "fruits-inventory-f76b8.appspot.com",
  messagingSenderId: "547081953616",
  appId: "1:547081953616:web:0caedd32dbe9db23820c55"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;