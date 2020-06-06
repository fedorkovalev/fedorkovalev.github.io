$(document).ready(function(){
    $('.carousel__inner').slick({
        speed: 1200,
        arrows: true,
        dots: false,
        /* autoplay: true,
        autoplaySpeed: 2000, */
        prevArrow: '<button type="button" class="slick-prev"><img src="icons/arrows/left.svg"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="icons/arrows/right.svg"></button>',
        responsive: [
            {
                breakpoint: 769,
                settings: {
                    dots: true,
                }
            }
        ]
    });
    
window.addEventListener('DOMContentLoaded', () => {
    const rowHeader = document.querySelector('.row__header'),
    headerItem = document.querySelectorAll('.header_items'),
    hamburger = document.querySelector('.hamburger');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('hamburger_active');
        rowHeader.classList.toggle('row__header_active');
    });

    headerItem.forEach(item => {
        item.addEventListener('click', () => {
            hamburger.classList.toggle('hamburger_active');
            rowHeader.classList.toggle('row__header_active');
        });
    });
});
  });