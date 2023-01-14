'use strict';


//fade animation in the navigation

const nav = document.querySelector('.nav');

const handlerfunction = function (e) {
    if (e.target.classList.contains('nav__link')) {
        const link = e.target;
        //console.log(link);
        const siblings = link.closest('.nav').querySelectorAll('.nav__link');
        //console.log(siblings);
        const logo = link.closest('.nav').querySelector('img');
        //console.log(logo);
        siblings.forEach(el => {
            if (el !== link) {
                el.style.opacity = this;
            } else {
                //console.log("equal");
            }
            logo.style.opacity = this;
        });

    } else {
        return;
    }
}

nav.addEventListener('mouseover', handlerfunction.bind(.5));

nav.addEventListener('mouseout', handlerfunction.bind(1));