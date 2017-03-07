// /* global System */ //this is for eslint to allow the use of System.import
import indexhtml from './index.html';
import talk from './talkToConsole';
console.log(talk(1, 2));

const button = document.createElement('button');
button.innerText = 'Click Me To Display Images';
button.onclick = () => {
    System.import('./image_viewer').then(module => {
        module.default();
    });
};

document.body.appendChild(button);

import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import { Router, browserHistory } from 'react-router';
import routes from './routes';
import './styles/style.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

render(
  <Router history={browserHistory} routes={routes} />,
  document.getElementById('app')
);

