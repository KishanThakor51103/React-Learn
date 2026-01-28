import React from 'react';
import ReactDOM from 'react-dom/client';
// Above two library use for web DOM Manipulation

import App from './App';
import FirstFun from './Fun';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <FirstFun />
  </React.StrictMode>
);

