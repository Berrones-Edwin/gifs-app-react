import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDTq1fUbD8g6RGNIwjpFO_Eo8GFr6TC4FA",
    authDomain: "gif-app-84846.firebaseapp.com",
    projectId: "gif-app-84846",
    storageBucket: "gif-app-84846.appspot.com",
    messagingSenderId: "204356000421",
    appId: "1:204356000421:web:5e5e1739fc32497d1ecb4c",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

export { db, firebase };
