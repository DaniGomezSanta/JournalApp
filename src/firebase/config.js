// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore/lite'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCfvPPmdrJUZv98w6N_39PXCmLZOiKNsio",
  authDomain: "journal-app-ee6da.firebaseapp.com",
  projectId: "journal-app-ee6da",
  storageBucket: "journal-app-ee6da.appspot.com",
  messagingSenderId: "610785965443",
  appId: "1:610785965443:web:93b77d818f8008ef7f72b6"
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth( FirebaseApp ); 
export const FirebaseDB = getFirestore( FirebaseApp );
