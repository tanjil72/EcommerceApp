// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword,onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC5Z0A0eVs7tjv5S147zOS0A5ETrTONHJE",
  authDomain: "shopme-d81ff.firebaseapp.com",
  projectId: "shopme-d81ff",
  storageBucket: "shopme-d81ff.appspot.com",
  messagingSenderId: "1025424335805",
  appId: "1:1025424335805:web:c29a37156ecb53f3cfe8d4",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();

export function Signup(email, password) {
  return createUserWithEmailAndPassword(auth, email, password);
}
export function useAuth() {
  const[currentUser,setCurrentUser]=useState()
useEffect(()=>{
  const unsub=onAuthStateChanged(auth,user=>{setCurrentUser(user)})
  return unsub;
},[])
  return currentUser;
}
