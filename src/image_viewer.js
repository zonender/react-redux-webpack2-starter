import small from '../assets/small.jpg';
import big from '../assets/big.jpg';
import './styles/style.css';

export default () => {

    const smallImageDescription = document.createElement('p');
    smallImageDescription.innerText = 'This is a small Image that was small enough to be bundled into bundle.js';
    document.body.appendChild(smallImageDescription);

    const smallImage = document.createElement('img');
    smallImage.src = small;
    document.body.appendChild(smallImage);

    const bigImageDescription = document.createElement('p');
    bigImageDescription.innerText = 'This is a big Image, because it is large it was not bundled in bundle.js';
    document.body.appendChild(bigImageDescription);

    const bigImage = document.createElement('img');
    bigImage.src = big;
    document.body.appendChild(bigImage);

    const randomImageDescription = document.createElement('p');
    randomImageDescription.innerText = 'This is a random image generated from http://lorempixel.com/';
    document.body.appendChild(randomImageDescription);

    const randomImage = document.createElement('img');
    randomImage.src = 'http://lorempixel.com/400/200/';
    document.body.appendChild(randomImage);
};
