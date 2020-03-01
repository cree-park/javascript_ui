const accoMenu = document.querySelector('.faq-wrap');
const accoItems = accoMenu.querySelectorAll('li > button');
const accoContent = accoMenu.querySelectorAll('li > div');

function setSelectItem(e) {
    let clickedBtn = e.target;
    let clickedIndex = e.target.parentNode;

    for (var i = 0; i < accoItems.length; i++) {
        accoItems[i].parentNode.classList.remove('active');
    }

    clickedIndex.classList.add('active');
}

function accoEvent() {
    for (var i = 0; i < accoItems.length; i++) {
        accoItems[i].addEventListener('click', function(e) {
            setSelectItem(e);
        });
    }
}

accoEvent();