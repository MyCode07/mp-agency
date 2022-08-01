function mainSlider(slider, wrapper, slides, paginationEl, screenWidth, grid = false) {
    if (document.querySelector(slider) && window.innerWidth <= screenWidth) {
        let sliderSwiper = document.querySelector(slider);
        sliderSwiper.classList.add('swiper');
        sliderSwiper.querySelector(wrapper).classList.add('swiper-wrapper');
        sliderSwiper.querySelectorAll(slides).forEach(item => {
            item.classList.add('swiper-slide');
        });

        if (grid == false) {
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
        else {
            new Swiper(slider, {
                grid: {
                    rows: 2,
                    fill: 'row'
                },
                slidesPerView: 'auto',
                navigation: false,
                spaceBetween: 0,
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
}
mainSlider(".customers__flex-swiper", ".customers__flex", ".customers__flex-item", '.customers__flex-pagination', 768);
mainSlider(".owrblog__row-swiper", ".owrblog__row", ".owrblog__item", '.owrblog__row-pagination', 992);
mainSlider(".advantages__swiper", ".advantages__flex", ".advantages__flex-li", '.advantages__pagination', 768);
mainSlider(".products-swiper", ".products-grid", ".product", '.products-pagination', 768);
mainSlider(".service-single__pricing-swiper", ".service-single__pricing-grid", ".service-single__product", '.service-single__pricing-pagination', 768, true);
mainSlider(".consult__steps-swiper", ".consult__steps-grid", ".grid-steps__item", '.consult__steps-pagination', 768, true);
mainSlider(".services__results-swiper", ".services__results-wrapper", ".services__results-content", '.services__results-pagination', 660); 


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

let worksSlider = document.querySelector('.works__slider');
if (worksSlider) {
    new Swiper('.works__slider', {
        loop: true,
        navigation: {
            prevEl: '.works__slider-prev',
            nextEl: '.works__slider-next'
        },
        spaceBetween: 20,
        slidesPerView: 'auto',
        pagination: {
            el: '.works__slider-pagination',
            clickable: true
        },
        // autoplay: {
        //     delay: 1000,
        // },
        breakpoints: {
            400: {
                spaceBetween: 30
            }
        }
    })
}

let feedbackSlider = document.querySelector('.feedback__slider-swiper');
if (feedbackSlider) {
    let feedbackSwiper = new Swiper('.feedback__slider-swiper', {
        loop: true,
        navigation: {
            prevEl: '.feedback__slider-prev',
            nextEl: '.feedback__slider-next'
        },
        spaceBetween: 0,
        slidesPerView: 'auto',
        pagination: {
            el: '.feedback__slider-pagination',
            clickable: true
        },
        // on: {
        //     slideChange: function (swiper) {
        //         const index_currentSlide = swiper.realIndex;
        //         const currentSlide = swiper.slides[index_currentSlide]
        //         console.log(index_currentSlide);
        //     }
        // }
        // autoplay: {
        //     delay: 1000,
        // },
    })

    let feedbackInfoSwiper = new Swiper('.feedback__info-slider', {
        loop: true,
        spaceBetween: 0,
        slidesPerView: 'auto',
        simulateTouch: false,
        allowTouchMove: false
    })

    // feedbackInfoSwiper.controller.control = feedbackSwiper;
    feedbackSwiper.controller.control = feedbackInfoSwiper;
}

//

let sliderProject = document.querySelector('.slider__project-swiper-past');
if (sliderProject) {
    let sliderProjectPast = new Swiper('.slider__project-swiper-past', {
        loop: true,
        navigation: false,
        spaceBetween: 0,
        slidesPerView: 'auto',
        pagination: {
            el: '.your__product-slider-pagination',
            clickable: true
        },
        // autoplay: {
        //     delay: 1000,
        // },
    })

    let sliderProjectPresent = new Swiper('.slider__project-swiper-present', {
        loop: true,
        spaceBetween: 0,
        slidesPerView: 'auto',
        pagination: {
            el: '.your__product-slider-pagination',
            clickable: true
        },
        // autoplay: {
        //     delay: 1000,
        // },
    })

    sliderProjectPast.controller.control = sliderProjectPresent;
    sliderProjectPresent.controller.control = sliderProjectPast;
}
