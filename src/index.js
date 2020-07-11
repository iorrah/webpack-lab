import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';

const domContainer = document.querySelector('#react-app');
domContainer ? ReactDOM.render(<App />, domContainer) : false;
