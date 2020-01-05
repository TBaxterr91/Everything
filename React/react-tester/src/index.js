import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './FullStackTask/MainComponent.js';
import * as serviceWorker from './serviceWorker';


ReactDOM.render(<App/>, document.getElementById('root'));



 // Within the above reactDom.render you need to pass TWO things, first the component/function
 // you want to render onto the screen, the second is WHERE you want to render that component.


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
