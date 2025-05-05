import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'; // You can create this or remove if you don't need styling
import App from './App'; // Ensure you have an App.js file in the src folder

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
