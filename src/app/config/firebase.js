import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/database';
import 'firebase/auth';
import 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyCDYBAyyc-0NTcmXD9cyJGXOQ0t5c2owzk",
    authDomain: "projekt-7bdbf.firebaseapp.com",
    databaseURL: "https://projekt-7bdbf.firebaseio.com",
    projectId: "projekt-7bdbf",
    storageBucket: "projekt-7bdbf.appspot.com",
    messagingSenderId: "669502560399",
    appId: "1:669502560399:web:5ec4320921075e7d47f8fa",
    measurementId: "G-6KKD3Q9LPK"

}

firebase.initializeApp(firebaseConfig);
firebase.firestore();

export default firebase;