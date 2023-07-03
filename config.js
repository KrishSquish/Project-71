import firebase from "firebase";
require("@firebase/firestore");

//Paste your firebaseConfig here
const firebaseConfig = {
    apiKey: "AIzaSyDaCws8vpFfTPjG_CeCm27Q3gRnx9y_vMU",
    authDomain: "project-71-b88f3.firebaseapp.com",
    projectId: "project-71-b88f3",
    storageBucket: "project-71-b88f3.appspot.com",
    messagingSenderId: "319185066831",
    appId: "1:319185066831:web:8f273a9f7d4ec30f7b433a"
  };
//
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
