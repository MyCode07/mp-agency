"use strict"

let cart = document.getElementsByClassName("cart__products-image");


let cart2 = document.getElementsByClassName("cart__products-image");

const swiper = new Swiper('.cart__products-image', {
    pagination: false,
    spaceBetween: 0,
    centeredSlides: true,
    slidesPerView: 'auto',
    loop: true,
    autoplay: {
        delay: 1000,
    },
    on: {
        init() {
            this.el.addEventListener('mouseleave', () => {
                this.autoplay.stop();
            });
            this.el.addEventListener('mouseenter', () => {
                this.autoplay.start();
            });
        }
    },
});

