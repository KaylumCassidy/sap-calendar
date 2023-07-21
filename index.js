import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

import { initializeApp } from 'firebase/app';

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
  //...
};

const app = initializeApp(firebaseConfig);

<script>

  var firebaseConfig = {
    apiKey: "Test",
    authDomain: "Test.firebaseapp.com",
    databaseURL: "https://Test.firebaseio.com",
    projectId: "Test",
    storageBucket: "Test.appspot.com",
    messagingSenderId: "YOUR_MESSAGING_SENDER_ID", //Dont know where
    appId: "Test"
  };
  
  firebase.initializeApp(firebaseConfig);
</script>
