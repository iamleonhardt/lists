import firebase from "firebase";

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

export default firebase;

export const database = firebase.database();
