import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

// Initialize Firebase
const config = {
  apiKey: "AIzaSyB4FeWmcaWecFS0lb69EHCN1SXwZBGEKZ8",
  authDomain: "lists-3fd75.firebaseapp.com",
  databaseURL: "https://lists-3fd75.firebaseio.com",
  projectId: "lists-3fd75",
  storageBucket: "lists-3fd75.appspot.com",
  messagingSenderId: "551837296872"
};

firebase.initializeApp(config);

export const firestore = firebase.firestore();
export const auth = firebase.auth();

export const provider = new firebase.auth.GoogleAuthProvider();
export const signInWithGoogle = () => auth.signInWithPopup(provider);
export const signOut = () => auth.signOut();

export default firebase;
