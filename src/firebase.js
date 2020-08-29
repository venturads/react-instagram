import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyCrUt_Fb6QcG2h-3i5udvGDY8VwrxE6WH4",
    authDomain: "instagram-clone-8f808.firebaseapp.com",
    databaseURL: "https://instagram-clone-8f808.firebaseio.com",
    projectId: "instagram-clone-8f808",
    storageBucket: "instagram-clone-8f808.appspot.com",
    messagingSenderId: "752860413750",
    appId: "1:752860413750:web:543a039a90fede542c3d97",
    measurementId: "G-D9PZQFEXGL"
  });

  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const storage = firebase.storage();

  export { db, auth, storage, firebase as default };