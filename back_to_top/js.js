'use strict';

// 중간이상 지점에서 버튼 노출

let btn = document.querySelector('.back-to-top');
let docElem = document.documentElement;
let offset;
let scrollPos;
let docHeight;

// document height
docHeight = Math.max(docElem.offsetHeight, docElem.scrollHeight);

if (docHeight != '0') {
    offset = docHeight / 4;
}

// scroll event
window.addEventListener('scroll', function() {
    scrollPos = docElem.scrollTop;

    if (scrollPos > offset) {
        btn.classList.add('active');
    } else {
        btn.classList.remove('active');
    }
});

// btn click event
btn.addEventListener('click', function(e) {
    e.preventDefault;
    scrollToTop();
});

function scrollToTop() {
    let scrollInterval = setInterval(function() {
        if (scrollPos != 0) {
            window.scrollBy(0, -55);
        } else {
            clearInterval(scrollInterval);
        }
    }, 15);
}