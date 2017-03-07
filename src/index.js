/* global System */ //this is for eslint to allow the use of System.import
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
