import firebase from 'firebase/app'
import firestore from 'firebase/firestore'

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyB73J7ebBwF62ZQA4VHdgRsEXerACqms6E",
  authDomain: "live-chat-50a1b.firebaseapp.com",
  databaseURL: "https://live-chat-50a1b.firebaseio.com",
  projectId: "live-chat-50a1b",
  storageBucket: "live-chat-50a1b.appspot.com",
  messagingSenderId: "1060122497979",
  appId: "1:1060122497979:web:80f412cf9a0fb29f48ea9e",
  measurementId: "G-MR6CD76ZH7"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
export default firebaseApp.firestore()
