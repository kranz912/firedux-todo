import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createSotre, applyMiddleware} from 'redux';
import reduxThunk from 'redux-thunk';
import reducers from './reducers';
import App from './App';
import * as serviceWorker from './serviceWorker';

