'use strict';

//tab practise
const tabContainer = document.querySelector('.operations__tab-container');
const tabs = document.querySelectorAll('.operations__tab');
const tabContent = document.querySelectorAll('.operations__content');

tabContainer.addEventListener('click', (e) => {

    const clicked = e.target.closest('.operations__tab');
    if (!clicked) return;
    tabs.forEach((t) => {
        t.classList.remove('operations__tab--active');
    });
    tabContent.forEach((c) => {
        c.classList.remove('operations__content--active');
    })
    clicked.classList.add('operations__tab--active');
    document.querySelector(`.operations__content--${clicked.dataset.tab}`).classList.add('operations__content--active');
});

