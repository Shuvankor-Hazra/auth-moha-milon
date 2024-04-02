// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCuEU3-LgnE8NretiNv_iBN_zTIW8uAMiA",
  authDomain: "auth-moha-milon-cda6a.firebaseapp.com",
  projectId: "auth-moha-milon-cda6a",
  storageBucket: "auth-moha-milon-cda6a.appspot.com",
  messagingSenderId: "544259049868",
  appId: "1:544259049868:web:9d5d57a12664241718aea9",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
