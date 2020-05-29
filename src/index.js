import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from "react-router-dom";
import AppStore from 'context/AppContext';

ReactDOM.render(
    <BrowserRouter basename='/'>
        <AppStore>
            <App />
        </AppStore>
    </BrowserRouter>, document.getElementById('root'));
