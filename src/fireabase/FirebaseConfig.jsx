// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyBPRvM-WYDSTg_F1ZX9OKtkLsxOoTXDNmY",
  authDomain: "ecommerce-76cfa.firebaseapp.com",
  projectId: "ecommerce-76cfa",
  storageBucket: "ecommerce-76cfa.appspot.com",
  messagingSenderId: "218510365842",
  appId: "1:218510365842:web:0e49d21b7af1ce364f424b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const fireDB = getFirestore(app);
const auth = getAuth(app)
export {fireDB,auth } ;