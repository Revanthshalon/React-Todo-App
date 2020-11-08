// For Firebase JS SDK v7.20.0 and later, measurementId is optional

import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyB7txmk33a9wK4lzcPzHa8_9MbQN_E-FB8",
  authDomain: "todo-app-react-83734.firebaseapp.com",
  databaseURL: "https://todo-app-react-83734.firebaseio.com",
  projectId: "todo-app-react-83734",
  storageBucket: "todo-app-react-83734.appspot.com",
  messagingSenderId: "522043734630",
  appId: "1:522043734630:web:c87c8c029832d274a30ba7",
  measurementId: "G-K3DJBD2B63",
});

const db = firebaseApp.firestore();

export default db;
