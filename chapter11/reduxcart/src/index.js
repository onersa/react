import React from "react";
import ReactDOM from "react-dom/client";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import cartReducer from "./reducer";
import App from "./App";
import "bootstrap/dist/css/bootstrap.css";

//Creates the Redux store. a single JavaScript object that holds all the data/state for your entire app.
const store = configureStore({ 

    //Tells the store which reducer to use. A fixed keyword from Redux Toolkit. 
    // configureStore specifically looks for a property called "reducer" 
    // to know where your reducers are
      reducer: {
    //cartReducer is the function (imported from ./reducer) that manages the cart's state. 
    // The key cart means you'll access this state later via state.cart. If you had more reducers,
    //  you'd just add them here as more keys
        cart: cartReducer,
      },
});

//Finds the <div id="container"> in your index.html and tells React to render everything inside it
const root = ReactDOM.createRoot(document.querySelector("#container")); 

root.render(

//Wraps your entire app with Provider and passes it the store. 
// This is what makes the Redux store available to every component in your app. 
// Without this, no component could access the store.
  <Provider store={store}> 
    <App />
  </Provider>
);




// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyD491Z5RUOVZjGHoogPsHBPbA_zEivGask",
//   authDomain: "user-manager-app-e673d.firebaseapp.com",
//   projectId: "user-manager-app-e673d",
//   storageBucket: "user-manager-app-e673d.firebasestorage.app",
//   messagingSenderId: "340272977956",
//   appId: "1:340272977956:web:0ccb568d6c7aa1dc45e0b1"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
