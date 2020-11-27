// to prevent jQuery to run before the document is ready (fully loaded)
$(document).ready(function(){
    
    $('.header-slider').slick({
        dots: true,
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear',
        prevArrow: $('.prev'),
        nextArrow: $('.next'),
        appendDots: $('.bottom-header'),         
      });

       
});

