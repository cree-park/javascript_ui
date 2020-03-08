const tabMenu = document.querySelector('.tab-list-wrap');
const tabItems = tabMenu.querySelectorAll('li a');
const tabSelect = document.querySelector('.tab-cnt-wrap');
const tabContent = tabSelect.querySelectorAll('.tab-pannel');

function setSelectItem(e) {
    let clickedList = e.target;
    let clickedIndex = e.target.getAttribute('data-tab');

    tabItems.forEach(function(elem) {
        elem.classList.remove('active');
    });

    tabContent.forEach(function(elem) {
        elem.classList.remove('active');
    });
    
    clickedList.classList.add('active');
    document.getElementById(clickedIndex).classList.add('active');
}

function tabEvent() {
    tabItems.forEach(function(elem) {
        elem.addEventListener('click', function(e) {
            setSelectItem(e);
        });
    });
}

function init() {
    tabEvent();
}

init();