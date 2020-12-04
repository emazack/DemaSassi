// to prevent jQuery to run before the document is ready (fully loaded)
document.addEventListener('DOMContentLoaded', initWebPageJS);
const menuHamburgerIcon = document.querySelector(".hamburger");

function initWebPageJS() {

  const isMobile = checkMobile();
  initSlick();
  isMobile && initMenuBehaviour();

}

function initSlick() {

  $('.main-slider').slick({
    dots: true,
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: 'linear',
    prevArrow: $('.prev'),
    nextArrow: $('.next'),
    appendDots: $('.bottom-header'),
  });

}

function initMenuBehaviour() {

  const menu = document.querySelector(".menu");

  menuHamburgerIcon.addEventListener("click", () => {
    menu.classList.toggle("active");
  })

}

function checkMobile() {

  return window.innerWidth <= 768;

}

