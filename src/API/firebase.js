// Import the functions you need from the SDKs you need
// import firebase from "firebase";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAY7h7ujfjs14A8r81ushOYoW1qJ7QLfpo",
  authDomain: "disney-cloneapp.firebaseapp.com",
  projectId: "disney-cloneapp",
  storageBucket: "disney-cloneapp.appspot.com",
  messagingSenderId: "261942739199",
  appId: "1:261942739199:web:3962641247c69d3d08ccca",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
// const db = firebaseApp.firestore();
const auth = getAuth(firebaseApp);
const provider = new GoogleAuthProvider();
// const storage = firebase.storage();
export { auth, provider };
export default firebaseApp;
