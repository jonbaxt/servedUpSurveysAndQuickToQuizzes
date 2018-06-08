import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';
import { Provider } from 'react-redux'

import './index.css';
import store from './ducks/store';
import App from './App';
// import registerServiceWorker from './registerServiceWorker';


ReactDOM.render(
    <Provider store={store} >
        <HashRouter>
            <App />
        </HashRouter>
    </Provider>
    , document.getElementById('root'));