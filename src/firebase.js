// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD10gd74iB0A7h5_J-YvU19rxg3p762kos",
  authDomain: "task-zen-4d0b9.firebaseapp.com",
  projectId: "task-zen-4d0b9",
  storageBucket: "task-zen-4d0b9.appspot.com",
  messagingSenderId: "100525186138",
  appId: "1:100525186138:web:deb8a339f8c848c0368c63",
  measurementId: "G-CGB8VRMC52",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

export { auth };