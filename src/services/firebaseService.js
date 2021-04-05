
 import firebase from 'firebase/app';
 import 'firebase/firestore';
 import 'firebase/auth';
 
 
 import{useAuthState} from 'react-firebase-hooks/auth';
 import {useCollectionData} from 'react-firebase-hooks/firestore';
    
 if (!firebase.apps.length) {
     
   firebase.initializeApp({
       apiKey: "AIzaSyCwYhthRDeopyJE0miEVnFY6s6kbsTgIjs",
       authDomain: "ad-app-react.firebaseapp.com",
       projectId: "ad-app-react",
       storageBucket: "ad-app-react.appspot.com",
       messagingSenderId: "925063237645",
       appId: "1:925063237645:web:ea7b7acb4823cc1ecdc544",
       measurementId: "G-EKB08CCZS2"
   });
   
 }else {
   firebase.app(); // if already initialized, use that one
 }
 
export const auth = firebase.auth();
export const firestore = firebase.firestore();
 
