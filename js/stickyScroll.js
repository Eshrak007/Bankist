'use strict';
const nV = document.querySelector('.nav');
const toptoBottom = nav.getBoundingClientRect().height;
// console.log(toptoBottom);
// window.addEventListener('scroll', function () {

//     if (window.scrollY > toptoBottom.top) {
//         nV.classList.add('sticky');//add or reomove er time e class add korte . dea lagbena
//     } else {
//         nV.classList.remove('sticky');
//     }
// })


//using intersectionobserver
const observerFunction = entity => {
    const [entry] = entity;
    //console.log(entry);
    if (!entry.isIntersecting) {
        nV.classList.add('sticky');
    } else {
        nV.classList.remove('sticky');
    }
}

const options = {
    root: null,
    threshold: 0,
    rootMargin: `-${toptoBottom}px`
};
const observer = new IntersectionObserver(observerFunction, options)
observer.observe(header)