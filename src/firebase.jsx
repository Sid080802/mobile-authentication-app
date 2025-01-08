// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import 'firebase/compat/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDJwhGc73oZY4u90ZhC8r5ftZGSEgPaFEU",
  authDomain: "mobile-authentication-5d93f.firebaseapp.com",
  projectId: "mobile-authentication-5d93f",
  storageBucket: "mobile-authentication-5d93f.firebasestorage.app",
  messagingSenderId: "721450680020",
  appId: "1:721450680020:web:1483d95d36a34cc2b8c541"
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  }

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase