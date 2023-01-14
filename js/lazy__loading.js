'use strict';

const imgFeatures = document.querySelectorAll('img[data-src]');

const imFunc = function (entries, observer) {

    const [entry] = entries;
    if (!entry.isIntersecting) return;
    //console.log(entry.target);
    entry.target.src = entry.target.dataset.src;
    //console.log(entry.target.src);
    entry.target.addEventListener('load', () => {
        entry.target.classList.remove('lazy-img');
    });

    observer.unobserve(entry.target);
}
const imgObserver = new IntersectionObserver(imFunc, {
    root: null,
    threshold: 0
});

imgFeatures.forEach(function (imgs) {
    imgObserver.observe(imgs);
});

