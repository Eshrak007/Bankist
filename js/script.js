'use strict';

///////////////////////////////////////
// Modal window

let modal = document.querySelector('.modal');
let overlay = document.querySelector('.overlay');
let btnCloseModal = document.querySelector('.btn--close-modal');
let btnsOpenModal = document.querySelectorAll('.btn--show-modal');
let header = document.querySelector('.header');

/* modal code start */
let openModal = function (e) {
  e.preventDefault();
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
}

let closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach(function (btn) {
  btn.addEventListener('click', openModal);
});

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});
/* modal code end */
///////////////////////////////////////
/* create cookie message section start*/
let cookieMassege = document.createElement('div');

cookieMassege.classList.add('cookie-message');
cookieMassege.innerHTML = 'We are saving Cookies for the improvement of our site. Press Got it button and stay with us. <button class="btn--close-cookie"> Got it </button>';

header.append(cookieMassege);

document.querySelector('.btn--close-cookie').addEventListener('click', function () {
  cookieMassege.remove();
});
cookieMassege.style.backgroundColor = '#38373d';
cookieMassege.style.width = "104.6%";
cookieMassege.style.height = Number.parseFloat(getComputedStyle(cookieMassege).height, 10) + 23 + '.px';
/* create cookie message section end*/
///////////////////////////////////////
/* buttonLearn schrolling start*/
const learnbtn = document.querySelector('.btn--scroll-to');
const sec1 = document.querySelector('#section--1');

learnbtn.addEventListener('click', function (e) {

  sec1.scrollIntoView({ behavior: "smooth" });
});

/* buttonLearn schrolling end*/
///////////////////////////////////////

/* navigation Smooth Scrolling start*/

//with event delegation process
//1. find a common parent
//2.then determine which element originated the event
document.querySelector('.nav__links').addEventListener('click', function (e) {
  e.preventDefault();
  //console.log(e.target);
  if (e.target.classList.contains('nav__link')) {
    //console.log('link found');
    const id = e.target.getAttribute('href');
    //console.log(id);
    document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
  }

});

/* navigation Smooth Scrolling end*/
