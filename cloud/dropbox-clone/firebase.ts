import { getApp, getApps, initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getFunctions } from "firebase/functions";
import { getStorage } from "firebase/storage";
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCNsEyUdhb8fdDR2Mtu88KKWs4QKE9u_eM",
  authDomain: "dropbox-e6255.firebaseapp.com",
  projectId: "dropbox-e6255",
  storageBucket: "dropbox-e6255.appspot.com",
  messagingSenderId: "159414652515",
  appId: "1:159414652515:web:6639e5dc93fc287da6f256",
  measurementId: "G-EKBB78PEVZ"
};

// Initialize Firebase
