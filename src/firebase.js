import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCTJQVTgk-s6mVb9wmecHuldDDlrQQvmyk",
  authDomain: "marek-rogala.firebaseapp.com",
  databaseURL: "https://marek-rogala.firebaseio.com",
  projectId: "marek-rogala",
  storageBucket: "marek-rogala.appspot.com",
  messagingSenderId: "51316595215",
  appId: "1:51316595215:web:7c614248fcffb03ea0e17a",
  measurementId: "G-Q5KT5V6EFD",
});

const db = firebaseApp.firestore();

export { db };
