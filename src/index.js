import "./index.css";

import App from "./App";

import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import reportWebVitals from "./reportWebVitals";

//파이어베이스
import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/storage";
import "firebase/auth";

var firebaseConfig = {
  apiKey: "AIzaSyAP0U8ILnuLj1OeqSfgdSKdMc3dT7B6D5E",
  authDomain: "shotz-69fd1.firebaseapp.com",
  projectId: "shotz-69fd1",
  storageBucket: "shotz-69fd1.appspot.com",
  messagingSenderId: "389024124198",
  appId: "1:389024124198:web:b9f8b6aca0597708c785e7"
};

firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth();
export const db = firebase.firestore();
export const storage = firebase.storage();

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
