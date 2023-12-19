// firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  // Your Firebase configuration here
  apiKey: "AIzaSyATrCKE47E6TNBYqR1juNqtUIXSrRxIviE",
  authDomain: "app-gif.firebaseapp.com",
  projectId: "app-gif",
  storageBucket: "app-gif.appspot.com",
  messagingSenderId: "802553462038",
  appId: "1:802553462038:web:1b14ef47b057ec3fd26437",
  measurementId: "G-2SSHMX9B3S"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
