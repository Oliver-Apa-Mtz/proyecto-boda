import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore/lite';

const firebaseConfig = {
    apiKey: "AIzaSyCUX8BqZV1X7hLFm79o2M8PJ2D0LnzmG9s",
    authDomain: "boda-proyecto.firebaseapp.com",
    projectId: "boda-proyecto",
    storageBucket: "boda-proyecto.appspot.com",
    messagingSenderId: "450733612758",
    appId: "1:450733612758:web:5f115d4584a160f3373377"
  };  

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
