/* global System */ //this is for eslint to allow the use of System.import
import talk from './talkToConsole';
console.log(talk(1, 2));

const button = document.createElement('button');
button.innerText = 'Click me';
button.onclick = () => {
    System.import('./image_viewer').then(module => {
        module.default();
    });
};

document.body.appendChild(button);
