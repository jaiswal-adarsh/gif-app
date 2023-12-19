// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth" ;
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyATrCKE47E6TNBYqR1juNqtUIXSrRxIviE",
  authDomain: "app-gif.firebaseapp.com",
  projectId: "app-gif",
  storageBucket: "app-gif.appspot.com",
  messagingSenderId: "802553462038",
  appId: "1:802553462038:web:1b14ef47b057ec3fd26437",
  measurementId: "G-2SSHMX9B3S"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth=getAuth ( app) ;

export default function(){<>Nothing is here!</>}




















// // firebase.js
// import { initializeApp } from "firebase/app";
// import { getAuth } from "firebase/auth";

// const firebaseConfig = {
//   // Your Firebase configuration here
//   apiKey: "AIzaSyATrCKE47E6TNBYqR1juNqtUIXSrRxIviE",
//   authDomain: "app-gif.firebaseapp.com",
//   projectId: "app-gif",
//   storageBucket: "app-gif.appspot.com",
//   messagingSenderId: "802553462038",
//   appId: "1:802553462038:web:1b14ef47b057ec3fd26437",
//   measurementId: "G-2SSHMX9B3S"
// };

// const app = initializeApp(firebaseConfig);
// const auth = getAuth(app);

// export { auth };
