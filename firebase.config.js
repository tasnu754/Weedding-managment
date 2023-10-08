// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDyNLvoDgWA8GWRNIE3LAB0MxYKq6gowJc",
  authDomain: "social-event-management-97a71.firebaseapp.com",
  projectId: "social-event-management-97a71",
  storageBucket: "social-event-management-97a71.appspot.com",
  messagingSenderId: "1014534408808",
  appId: "1:1014534408808:web:c57081f5a038327ecdc9dd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
