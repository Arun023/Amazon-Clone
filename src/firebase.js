import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBfaMzs1HgAMdiJ-FaTdQ2GIeaNVHRGfJI",
  authDomain: "fir-5d228.firebaseapp.com",
  projectId: "fir-5d228",
  storageBucket: "fir-5d228.appspot.com",
  messagingSenderId: "1052988228801",
  appId: "1:1052988228801:web:605c7d4f872456040f8040",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
