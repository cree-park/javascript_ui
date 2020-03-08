const accoMenu = document.querySelector('.faq-wrap');
const accoItems = accoMenu.querySelectorAll('li > button');
const accoContent = accoMenu.querySelectorAll('li > div');

function setSelectItem(e) {
    let clickedIndex = e.target.parentNode;

    accoItems.forEach((elem) => {
        elem.parentNode.classList.remove('active');
    });

    clickedIndex.classList.add('active');
}

function accoEvent() {
    accoItems.forEach((elem) => {
        elem.addEventListener('click', function(e) {
            setSelectItem(e);
        });
    });
}

accoEvent();