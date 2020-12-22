'use strict';

let sliderWrapper = document.querySelector('.container');
let sliderContainer = document.querySelector('.slider-container');
let slides = sliderContainer.querySelectorAll('.slide');
let slideCount = slides.length;
let currentIndex = 0;
let topHeight = 0;
let navPrev = document.querySelector('.slide-prev');
let navNext = document.querySelector('.slide-next');

let calculateTallestSlide = () => {
    for (let i = 0; i < slideCount; i++) {
        if (slides[i].offsetHeight > topHeight) {
            topHeight = slides[i].offsetHeight;
        }
    }

    sliderWrapper.style.height = topHeight + 'px';
    sliderContainer.style.height = topHeight + 'px';
}

calculateTallestSlide();

for (let i = 0; i < slideCount; i++) {
    slides[i].style.left = i * 100 + '%';
}

let goToslide = (index) => {
    sliderContainer.style.left = index * -100 + '%';
    sliderContainer.classList.add('animated');
    currentIndex = index;

    //updateNav();
}

let updateNav = () => {
    if (currentIndex == 0) {
        navPrev.classList.add('disabled');
    } else {
        navPrev.classList.remove('disabled');
    }

    if (currentIndex == slideCount - 1) {
        navNext.classList.add('disabled');
    } else {
        navNext.classList.remove('disabled');
    }
}

navPrev.addEventListener('click', function(e) {
    e.preventDefault;
    if (currentIndex > 0) {
        goToslide(currentIndex - 1);
    } else {
        goToslide(slideCount - 1);
    }
});

navNext.addEventListener('click', function(e) {
    e.preventDefault;
    if (currentIndex < slideCount - 1) {
        goToslide(currentIndex + 1);
    } else {
        goToslide(0);
    }
});

goToslide(0);