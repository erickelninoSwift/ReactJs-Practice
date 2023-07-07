import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import Student from './Test';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    
     <Student name="Francis" age="88" />
    <App />
    <Student name="Jackpot" age="89"/>
  </React.StrictMode>
);

// If you want to  (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more
reportWebVitals();
