'use strict';
var navigation = document.querySelector('.navigation');
var menuToggle = document.querySelector('.navigation__toggle');
var footer = document.querySelector('.footer');
var mainPage = document.querySelector('.main');


var toggleClass = function (block, class1, class2) {
  if (block) {
    block.classList.remove(class1);
    block.classList.add(class2);
  }
};

var toggleMenu = function () {
  if (navigation.classList.contains('navigation--closed')) {
    toggleClass(navigation, 'navigation--closed', 'navigation--opened');
    toggleClass(footer, null, 'footer--visible');
    toggleClass(mainPage, 'main', 'hidden');

  } else {
    toggleClass(navigation, 'navigation--opened', 'navigation--closed');
    toggleClass(footer, 'footer--visible', null);
    toggleClass(mainPage, 'hidden', 'main');
  }
};

var initMenu = function () {
  if (navigation && menuToggle) {
    menuToggle.addEventListener('click', toggleMenu);
  }
};

initMenu();
