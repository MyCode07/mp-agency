function mainSlider(slider, wrapper, slides, paginationEl, screenWidth) {
    console.log(slider);
    if (slider && window.innerWidth <= screenWidth) {
        let sliderSwiper = document.querySelector(slider);
        sliderSwiper.classList.add('swiper');
        sliderSwiper.querySelector(wrapper).classList.add('swiper-wrapper');
        sliderSwiper.querySelectorAll(slides).forEach(item => {
            item.classList.add('swiper-slide');
        });

        new Swiper(slider, {
            loop: true,
            navigation: false,
            spaceBetween: 0,
            slidesPerView: 'auto',
            centeredSlides: true,
            pagination: {
                el: paginationEl,
                clickable: true
            },
            // autoplay: {
            //     delay: 1000,
            // },
        });
    }
}
mainSlider(".customers__flex-swiper", ".customers__flex", ".customers__flex-item", '.customers__flex-pagination', 768);
mainSlider(".owrblog__row-swiper", ".owrblog__row", ".owrblog__item", '.owrblog__row-pagination', 992);
mainSlider(".advantages__swiper", ".advantages__flex", ".advantages__flex li", '.advantages__pagination', 768);


let videoSlider = document.querySelector('.videoblog__slider-wrapper');
if (videoSlider) {
    new Swiper('.videoblog__slider-wrapper', {
        loop: true,
        navigation: {
            prevEl: '.videoblog__slider-prev',
            nextEl: '.videoblog__slider-next'
        },
        spaceBetween: 0,
        slidesPerView: 1,
        pagination: {
            el: '.videoblog__slider-pagination',
            clickable: true
        },
        // autoplay: {
        //     delay: 1000,
        // },
    })
}