import React from 'react';
import ReactDOM from 'react-dom/client';
import './assets/css/global.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,

)

let num =5;
num > 5 ? true: false
