// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAeZnhwqJfbFz2guqdbZA3d6-iDfz1cYfE",
  authDomain: "auth-moha-milon-1e1fe.firebaseapp.com",
  projectId: "auth-moha-milon-1e1fe",
  storageBucket: "auth-moha-milon-1e1fe.appspot.com",
  messagingSenderId: "18594222096",
  appId: "1:18594222096:web:676081562c6a31b9c53a95"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;