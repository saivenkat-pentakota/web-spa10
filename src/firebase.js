import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyClkd63gA69l04XlEVE_R3DuI32wvmb52c",
    authDomain: "web-spa10.firebaseapp.com",
    projectId: "web-spa10",
    storageBucket: "web-spa10.appspot.com",
    messagingSenderId: "883719776934",
    appId: "1:883719776934:web:5ecf5f2a4483311acea267"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();
export const storage = firebase.storage();
export default firebase;
