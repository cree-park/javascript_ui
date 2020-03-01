const tabMenu = document.querySelector('.tab-list-wrap');
const tabItems = tabMenu.querySelectorAll('li a');
const tabSelect = document.querySelector('.tab-cnt-wrap');
const tabContent = tabSelect.querySelectorAll('.tab-pannel');

function setSelectItem(e) {
    let clickedList = e.target;
    let clickedIndex = e.target.getAttribute('data-tab');

    for (var i = 0; i < tabItems.length; i++) {
        tabItems[i].classList.remove('active');
    }
    for (var j = 0; j < tabContent.length; j++) {
        tabContent[j].classList.remove('active');
    }
    
    clickedList.classList.add('active');
    document.getElementById(clickedIndex).classList.add('active');
}

function tabEvent() {
    for(var i = 0; i < tabItems.length; i++) {
        tabItems[i].addEventListener('click', function(e) {
            e.preventDefault;
            setSelectItem(e);
        });
    }
}

function init() {
    tabEvent();
}

init();