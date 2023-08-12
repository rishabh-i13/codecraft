import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>  // <React.StrictMode> ye force karta hai components ko do baar render karne ko force karta hai
  //   <App />           // so isliye yaha pe isko hata diya as ye thoda issue h is case me ..as editor do baar render ho raha tha
  // </React.StrictMode>
  <App/>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
