import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import thunk from 'redux-thunk';
import App from './App';
import * as serviceWorker from './serviceWorker';
import axios from 'axios';
import {createStore, applyMiddleware, compose} from 'redux';
import {Provider} from 'react-redux';
import reducer from './store/reducer';


axios.defaults.baseURL = "https://login-page-d17f0.firebaseio.com/.json";

const middle = (store)=>
{
    return next =>
    {
        return action =>
        {
            var res = next(action)
            console.log("getstate",store.getState());
            return res;
        }
    }
}
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer,composeEnhancers(applyMiddleware(middle,thunk)));

ReactDOM.render(<Provider store = {store}><App /></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
