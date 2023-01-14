'use strict';

const funcsec = (entries) => {
    const [entry] = entries;//single threshold value
    if (!entry.isIntersecting) {
        return;
    } else {
        entry.target.classList.remove('section--hidden');
    }


}
const animatesec = new IntersectionObserver(funcsec, {
    root: null,
    threshold: .15
});

document.querySelectorAll('.section').forEach(entity => {
    animatesec.observe(entity);
    entity.classList.add('section--hidden');

});