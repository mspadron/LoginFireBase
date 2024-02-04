// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAtmLYn1ai3adx62s5cpXC-N_AsXDH29O4",
  authDomain: "login-autenticacion-a29a8.firebaseapp.com",
  projectId: "login-autenticacion-a29a8",
  storageBucket: "login-autenticacion-a29a8.appspot.com",
  messagingSenderId: "444343208021",
  appId: "1:444343208021:web:78455bb7a2528e6baf6cdc"
};

// Initialize Firebase
const appFirebase = initializeApp(firebaseConfig);

export default appFirebase;