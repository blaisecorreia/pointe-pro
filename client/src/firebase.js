// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "pointe-realesate.firebaseapp.com",
  projectId: "pointe-realesate",
  storageBucket: "pointe-realesate.appspot.com",
  messagingSenderId: "348645281075",
  appId: "1:348645281075:web:cec23ab48bd2f193094246"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);