'use strict';

const slides = document.querySelectorAll('.slide');
const crDots = document.querySelector('.dots');
const btn__right = document.querySelector('.slider__btn--right');
const btn__left = document.querySelector('.slider__btn--left');
const maxLength = slides.length;
console.log(maxLength);
//making dots

const createDots = () => {
    slides.forEach((s, i) => {
        crDots.insertAdjacentHTML('beforeend', `<button class="dots__dot" data-slide ="${i}"></button>`);
    });
}

crDots.addEventListener('click', (e) => {
    if (e.target.classList.contains('dots__dot')) {
        //console.log(e.target);
        // console.log(e.target.dataset);
        const slideNumber = e.target.dataset.slide;
        gotoSlide(slideNumber);
        activateDots(slideNumber);
    }
});

const activateDots = (sNumber) => {
    document.querySelectorAll('.dots__dot').forEach(dote => {
        dote.classList.remove('dots__dot--active');
    });
    document.querySelector(`.dots__dot[data-slide ="${sNumber}"]`).classList.add('dots__dot--active');
}

const gotoSlide = function (index) {
    slides.forEach(function (s, i) {
        s.style.transform = `translateX(${100 * (i - index)}%)`;
    });
}
const init = () => {
    createDots();
    gotoSlide(0);
    activateDots(0);
}
init();
let curSlide = 0;
const nextSlide = function () {
    if (curSlide === maxLength - 1) {
        curSlide = 0;
    } else {
        curSlide++;
    }
    gotoSlide(curSlide);
    activateDots(curSlide);
}

const prevSlide = function () {
    if (curSlide === 0) {
        curSlide = maxLength - 1;
    } else {
        curSlide--;
    }
    gotoSlide(curSlide);
    activateDots(curSlide);
}
btn__right.addEventListener('click', nextSlide);
btn__left.addEventListener('click', prevSlide);

document.addEventListener('keydown', function (e) {
    if (e.key === 'ArrowRight') {
        nextSlide();
    } else if (e.key === 'ArrowLeft') {
        prevSlide();
    }
});


