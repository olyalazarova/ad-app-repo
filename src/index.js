import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import firebase from 'firebase/app';

firebase.initializeApp({
  apiKey: "AIzaSyCwYhthRDeopyJE0miEVnFY6s6kbsTgIjs",
  authDomain: "ad-app-react.firebaseapp.com",
  projectId: "ad-app-react",
  storageBucket: "ad-app-react.appspot.com",
  messagingSenderId: "925063237645",
  appId: "1:925063237645:web:23efa4f65be59fedcdc544",
  measurementId: "G-WMN5ER2HVR"
});

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
        <App />
    </BrowserRouter>
    
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
