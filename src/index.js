import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import JSX from './JSX';
import reportWebVitals from './reportWebVitals';
import TypeOfFood from './TypeOfFood';

// Uncomment for JSX
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <JSX />
//   </React.StrictMode>
// );

// Fruits
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <TypeOfFood />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
