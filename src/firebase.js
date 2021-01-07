import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAFBG5YcOTDRgoJXU-rTnUZKrsSSQmxR8Q",
  authDomain: "clone-e9d70.firebaseapp.com",
  databaseURL: "https://clone-e9d70.firebaseio.com",
  projectId: "clone-e9d70",
  storageBucket: "clone-e9d70.appspot.com",
  messagingSenderId: "764936517455",
  appId: "1:764936517455:web:6e12d832fa2da8f1a1f73a",
  measurementId: "G-ZPVGPGDLSM",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
