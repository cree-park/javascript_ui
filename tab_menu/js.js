'use strict';

let tabMenu = document.querySelector('.tab-menu');
let tabBtn = tabMenu.querySelectorAll('li a');
let tabCont = document.querySelectorAll('.tab-pannel');

tabBtn.forEach(elem => {
    elem.addEventListener('click', (e) => {
        setSelectItem(e);
        viewSelectItem(e);
    });
});

let setSelectItem = (e) => {
    let clickedIndex = e.target;
 
    tabBtn.forEach(elem => {
        elem.classList.remove('active');
    });

    clickedIndex.classList.add('active');
}

let viewSelectItem = (e) => {
    let tabBtnData = e.target.dataset.tab;

    tabCont.forEach(elem => {
        elem.classList.remove('active');
    });

    document.querySelector(`.${tabBtnData}`).classList.add('active');
}