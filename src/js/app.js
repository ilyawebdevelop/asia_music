import * as flsFunctions from "./modules/functions.js";
import "./modules/jquery-3.7.1.min.js";

import "./modules/bootstrap.bundle.min.js";
import { Fancybox } from "./modules/fancybox.esm.js";
import './components.js';

flsFunctions.isWebp();

Fancybox.bind("[data-fancybox]", {
  closeButton: false,
});

// Import swiper
import Swiper, { Navigation, Pagination, Autoplay, Mousewheel, EffectFade, Thumbs, Scrollbar } from 'swiper';
Swiper.use([Navigation, Pagination, Autoplay, Mousewheel, EffectFade, Thumbs, Scrollbar]);

// Инициализация слайдера introSlider
const introSlider = document.querySelector('.introSlider');
var mySwiperIntro = new Swiper(introSlider, {
  slidesPerView: 1,
  speed: 800,
  spaceBetween: 10,
  effect: 'fade',
  autoplay: {
    delay: 5000,
  },
  fadeEffect: {
    crossFade: true
  },
  autoHeight: true,
  pagination: {
    el: document.querySelector('.introSlider .swiper-pagination'),
    clickable: true,
    type: 'bullets',
  },
});

// introAdvSlider
var introAdvSlider = new Swiper('.introAdvSlider', {
  slidesPerView: 3,
  spaceBetween: 10,
  speed: 600,
  breakpoints: {
    0: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    576: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 'auto',
      spaceBetween: 0,
    },
  },
});


// Инициализация слайдера newsSlider
document.querySelectorAll('.newsSlider').forEach(n => {
  const mySwiperNewsSlider = new Swiper(n, {
    slidesPerView: 3,
    spaceBetween: 20,
    speed: 600,
    navigation: {
      prevEl: n.closest('.newsSect').querySelector('.navArrowPrev'),
      nextEl: n.closest('.newsSect').querySelector('.navArrowNext'),
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
        spaceBetween: 10,
      },
      576: {
        slidesPerView: 2,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
    },
  });
});

// projectsSlider
var projectsSlider = new Swiper('.projectsSlider', {
  slidesPerView: 2,
  spaceBetween: 20,
  speed: 600,
  navigation: {
    prevEl: document.querySelector('.projectsSliderSect .navArrowPrev'),
    nextEl: document.querySelector('.projectsSliderSect .navArrowNext'),
  },
  breakpoints: {
    0: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    576: {
      slidesPerView: 2,
    },
    768: {
      spaceBetween: 20,
    },
  },
});

// installSlider
var installSlider = new Swiper('.installSlider', {
  slidesPerView: 4,
  spaceBetween: 20,
  speed: 600,
  navigation: {
    prevEl: document.querySelector('.installSliderSect .navArrowPrev'),
    nextEl: document.querySelector('.installSliderSect .navArrowNext'),
  },
  breakpoints: {
    0: {
      slidesPerView: 4,
      spaceBetween: 10,
    },
    576: {
      slidesPerView: 2,
    },
    768: {
      spaceBetween: 20,
      slidesPerView: 3,
    },
    992: {
      slidesPerView: 3,
    },
    1200: {
      slidesPerView: 4,
    },
  },
});

// brandSlider
var brandSlider = new Swiper('.brandSlider', {
  slidesPerView: 4,
  spaceBetween: 20,
  speed: 600,
  autoplay: {
    delay: 5000,
  },
  navigation: {
    prevEl: document.querySelector('.brandSliderSect .navArrowPrev'),
    nextEl: document.querySelector('.brandSliderSect .navArrowNext'),
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    576: {
      slidesPerView: 2,
    },
    768: {
      spaceBetween: 20,
      slidesPerView: 3,
    },
    992: {
      slidesPerView: 3,
    },
    1200: {
      slidesPerView: 4,
    },
  },
});

// aboutSlider
var aboutSlider = new Swiper('.aboutSlider', {
  slidesPerView: 4,
  spaceBetween: 20,
  speed: 600,
  navigation: {
    prevEl: document.querySelector('.aboutSliderSect .navArrowPrev'),
    nextEl: document.querySelector('.aboutSliderSect .navArrowNext'),
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    576: {
      slidesPerView: 2,
    },
    768: {
      spaceBetween: 20,
      slidesPerView: 3,
    },
    992: {
      slidesPerView: 3,
    },
    1200: {
      slidesPerView: 4,
    },
  },
});

// certSlider
var certSlider = new Swiper('.certSlider', {
  slidesPerView: 3,
  spaceBetween: 20,
  speed: 600,
  navigation: {
    prevEl: document.querySelector('.certSliderSect .navArrowPrev'),
    nextEl: document.querySelector('.certSliderSect .navArrowNext'),
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    576: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    1200: {
      slidesPerView: 3,
    },
  },
});

// lentaSlider
var lentaSlider = new Swiper('.lentaSlider', {
  slidesPerView: 3,
  spaceBetween: 20,
  speed: 600,
  navigation: {
    prevEl: document.querySelector('.lentaSliderSect .navArrowPrev'),
    nextEl: document.querySelector('.lentaSliderSect .navArrowNext'),
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    576: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    1200: {
      slidesPerView: 3,
    },
  },
});

// Инициализация слайдера reviewsSlider
const reviewsSlider = document.querySelector('.reviewsSlider');
var mySwiperReviews = new Swiper(reviewsSlider, {
  slidesPerView: 1,
  speed: 800,
  spaceBetween: 10,
  // effect: 'fade',
  // fadeEffect: {
  //   crossFade: true
  // },
  navigation: {
    prevEl: document.querySelector('.reviewsSliderSect .navArrowPrev'),
    nextEl: document.querySelector('.reviewsSliderSect .navArrowNext'),
  },
});

// vacancySlider
var vacancySlider = new Swiper('.vacancySlider', {
  slidesPerView: 3,
  spaceBetween: 20,
  speed: 600,
  navigation: {
    prevEl: document.querySelector('.vacancySliderSect .navArrowPrev'),
    nextEl: document.querySelector('.vacancySliderSect .navArrowNext'),
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    1200: {
      slidesPerView: 3,
    },
  },
});

// Инициализация слайдера cehaGalSlider
document.querySelectorAll('.cehaGalSlider').forEach(n => {
  const mySwiperCehaGal = new Swiper(n, {
    slidesPerView: 1,
    speed: 800,  
    spaceBetween: 10,   
    navigation: {
      prevEl: n.closest('.cehaGalSliderSect').querySelector('.navArrowPrev'),
      nextEl: n.closest('.cehaGalSliderSect').querySelector('.navArrowNext'),
    },
  });
});

// Инициализация слайдера productPageSlider
const productPageSlider = document.querySelector('.productPageSlider');
var mySwiperProductPage = new Swiper(productPageSlider, {
  slidesPerView: 1,
  speed: 800,
  spaceBetween: 10,
  effect: 'fade',
  autoplay: {
    delay: 5000,
  },
  fadeEffect: {
    crossFade: true
  },
});


// Burger
const btnMenu = document.querySelector('#toggle');
const menu = document.querySelector('.menu');
const bodyEl = document.querySelector('body');
const btnClose = document.querySelector('.headerNavCloseBtn');
const mobMenuOverlay = document.querySelector('.mob-menu-overlay');
const searchW = document.querySelector('.headerFixSearchW');
const menuSearchBtn = document.querySelector('.menuSearchBtn');
const searchBtn = document.querySelector('.searchBtn');
const headerFixCloseBtn = document.querySelector('.headerFixCloseBtn');

const mediaQuery991 = window.matchMedia('(max-width: 991px)');

const toggleMenu = function () {
  menu.classList.toggle('active');
}
const toggleBurger = function () {
  btnMenu.classList.toggle('active');
}
const bodyOverflow = function () {
  bodyEl.classList.toggle('hidden');
}
const overlayToggle = function () {
  mobMenuOverlay.classList.toggle('active');
}
const toggleSearch = function () {
  searchW.classList.toggle('active');
}
const searchClose = function () {
  toggleSearch();
}
const menuClose = function () {
  toggleBurger();
  bodyOverflow();
  toggleMenu();
  overlayToggle();
}

btnMenu?.addEventListener('click', function (e) {
  e.stopPropagation();
  toggleMenu();
  toggleBurger();
  bodyOverflow();
  overlayToggle();
});

btnClose?.addEventListener('click', function (e) {
  menuClose();
});

menuSearchBtn?.addEventListener('click', function (e) {
  if (mediaQuery991.matches) {
    toggleSearch();
    menuClose();    
  } else {
    toggleSearch();
  }
});
searchBtn?.addEventListener('click', function (e) {
  toggleSearch();
});
headerFixCloseBtn?.addEventListener('click', function (e) {
  searchClose();
});

document.addEventListener('click', e => {
  let target = e.target;
  let its_nav = target == menu || menu.contains(target);
  let overlay_is_active = mobMenuOverlay.classList.contains('active');

  if (!its_nav && overlay_is_active) {
    toggleMenu();
    toggleBurger();
    bodyOverflow();
    overlayToggle();
  }
});

// Инициализация слайдера productCardSlider
document.querySelectorAll('.productCardSlider').forEach(n => {
  const mySwiperProduct = new Swiper(n, {
    slidesPerView: 4,
    spaceBetween: 24,
    speed: 600,
    navigation: {
      prevEl: n?.closest('.productCardSliderW').querySelector('.navArrowPrev'),
      nextEl: n?.closest('.productCardSliderW').querySelector('.navArrowNext'),
    },
    breakpoints: {
      0: {
        slidesPerView: 2,
        spaceBetween: 10,
      },
      992: {
        slidesPerView: 3,
        spaceBetween: 24,
      },
      1200: {
        slidesPerView: 4,
      },
    },
  });
});

let textMoreEach = document.querySelectorAll('.textMore');
textMoreEach.forEach(el => {
  el.addEventListener('click', () => {
    let content = el.closest('.content--hidden');
    content.classList.add('active');
  });
});

let jsShowMore = document.querySelectorAll('.js-show-more');
jsShowMore.forEach(el => {
  el.addEventListener('click', () => {
    let linkText = el.textContent;
    let contentHidden = el.closest('.cardText').querySelector('.content');
    if (linkText == "Читать полностью" || linkText == "Свернуть") {
      if (linkText == "Читать полностью") {
        el.textContent = "Свернуть";
        contentHidden.classList.remove("content--hidden");
        contentHidden.classList.add("content--visible");
      } else {
        el.textContent = "Читать полностью";
        contentHidden.classList.remove("content--visible");
        contentHidden.classList.add("content--hidden");
      }
    }
  });
});

let brandShowMore = document.querySelectorAll('.brand-js-show-more');
brandShowMore.forEach(el => {
  el.addEventListener('click', () => {
    let linkText = el.textContent;
    let cardParent = el.closest('.cardText');
    let contentHidden = el.closest('.cardText').querySelector('.content');
    if (linkText == "О бренде подробнее...." || linkText == "Свернуть") {
      if (linkText == "О бренде подробнее....") {
        el.textContent = "Свернуть";
        contentHidden.classList.remove("content--hidden");
        contentHidden.classList.add("content--visible");
        cardParent.classList.add('cardText--visible')
      } else {
        el.textContent = "О бренде подробнее....";
        contentHidden.classList.remove("content--visible");
        contentHidden.classList.add("content--hidden");
      }
    }
  });
});

let brandShowMoreSm = document.querySelectorAll('.brand-js-show-more-sm');
brandShowMoreSm.forEach(el => {
  el.addEventListener('click', () => {
    let linkText = el.textContent;
    let cardParent = el.closest('.cardText');
    let contentHidden = el.closest('.cardText').querySelector('.content');
    if (linkText == "Подробнее" || linkText == "Свернуть") {
      if (linkText == "Подробнее") {
        el.textContent = "Свернуть";
        contentHidden.classList.remove("content--hidden");
        contentHidden.classList.add("content--visible");
        cardParent.classList.add('cardText--visible');
      } else {
        el.textContent = "Подробнее";
        contentHidden.classList.remove("content--visible");
        contentHidden.classList.add("content--hidden");
        cardParent.classList.remove('cardText--visible')
      }
    }
  });
});

let brandAction = document.querySelector('.brandAction');
let filterContentClose = document.querySelector('.filterContentClose');
let brandSearchW = document.querySelector('.brandSearchW');
let brandSelectW = document.querySelector('.brandSelectW');

let brandSearchBtn = document.querySelector('.brandSearchBtn');
brandSearchBtn?.addEventListener('click', () => {
  brandSearchW.classList.add('active');
  brandSelectW.classList.remove('sm-hide');
});

let brandFilterBtn = document.querySelector('.brandFilterBtn');
brandFilterBtn?.addEventListener('click', () => {
  brandAction.classList.add('active');
  bodyEl.classList.add('hidden');
});

filterContentClose?.addEventListener('click', () => {
  brandAction.classList.remove('active');
  bodyEl.classList.remove('hidden');
});

let formSearchClose = document.querySelector('.formSearchClose');
formSearchClose?.addEventListener('click', () => {
  brandSearchW.classList.remove('active');
});

$('.accordNavHead').click(function () {
  $(this).toggleClass('active');
  $(this).siblings('.accordNavBody').slideToggle();
});

// show bottom menu after scroll 1000px height
document.addEventListener('DOMContentLoaded', () => {
  const header = document.querySelector('.menuB');
  const headerFixed = () => {
    let scrollTop = window.scrollY;
    let heroCenter = 800;

    if (scrollTop >= heroCenter) {
      header.classList.add('active')
    } else {
      header.classList.remove('active')
    }
  };

  headerFixed();
  window.addEventListener('scroll', () => {
    headerFixed();
  });
});

// change value search input fixed header
let searchDropOutput = document.querySelector('.searchDropOutput');
let searchDropMenuEach = document.querySelectorAll('.searchDrop li button');
searchDropMenuEach?.forEach(el => {
  el.addEventListener('click', () => {
    searchDropOutput.textContent = el.textContent;
  });
});