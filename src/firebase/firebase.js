import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore"; // Firestore import
import { getStorage } from "firebase/storage"; // Storage import


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD02YHebk_alHJdLsaCKjttyCEnuO-MkSE",
  authDomain: "sozu-b530d.firebaseapp.com",
  databaseURL: "https://sozu-b530d-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "sozu-b530d",
  storageBucket: "sozu-b530d.firebasestorage.app",
  messagingSenderId: "1051667198945",
  appId: "1:1051667198945:web:246779808421234555d8a0",
  measurementId: "G-BZFVZ80EP0"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app); // Initialize Firestore
const storage = getStorage(app); // Initialize Storage

export { auth, db, storage };   
