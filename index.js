import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import CalibrationApp from './Container/CalibrationApp';
import 'tachyons';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<CalibrationApp/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
