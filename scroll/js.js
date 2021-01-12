'use strict';

const elem = document.querySelector('p');
const posElem = document.querySelector('span');

window.addEventListener('scroll', function() {
    // console.log(window.pageYOffset);
    // console.log(elem.offsetTop);
    let posY = elem.getBoundingClientRect().top;

    posElem.innerHTML = posY;

    if (posY < window.innerHeight * 0.2) {
        elem.classList.add('zoom');
    } else {
        elem.classList.remove('zoom');
    }
});