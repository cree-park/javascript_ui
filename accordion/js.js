'use strict';

let accoMenu = document.querySelector('.accodion');
let accoItems = accoMenu.querySelectorAll('.pannel-head');
let accoContent = accoMenu.querySelectorAll('.pannel-content');

let accoEvent = () => {
    accoItems.forEach(elem => {
        elem.addEventListener('click', (e) => {
            setSelectItem(e);
        });
    });
}

let setSelectItem = (e) => {
    let clickedIndex = e.target.parentNode;

    accoItems.forEach(elem => {
        elem.parentNode.classList.remove('active');
    });

    clickedIndex.classList.add('active');
}

accoEvent();