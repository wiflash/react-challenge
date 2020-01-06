import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import "./styles/bootstrap.min.css"
import * as serviceWorker from './serviceWorker';

const muli = <link href="https://fonts.googleapis.com/css?family=Muli&display=swap" rel="stylesheet"/>
const roboto = <link href="https://fonts.googleapis.com/css?family=Roboto&display=swap" rel="stylesheet"/>
const head = document.getElementsByTagName('head')[0];

ReactDOM.render(<App />, document.getElementById('root'));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
