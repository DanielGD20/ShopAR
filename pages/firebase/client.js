import * as firebase from "firebase";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCDnLn0JMElH9bsRX5VqjMcnXMClsPRgXc",
  authDomain: "shopar-2020.firebaseapp.com",
  databaseURL: "https://shopar-2020.firebaseio.com",
  projectId: "shopar-2020",
  storageBucket: "shopar-2020.appspot.com",
  messagingSenderId: "109718585025",
  appId: "1:109718585025:web:fb8c5bbfef178159d75e40",
  measurementId: "G-KVEHJFS2MW",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();
