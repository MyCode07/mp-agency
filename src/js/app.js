
document.addEventListener('click', function (e) {
    let targetEl = e.target;
    if (targetEl.classList.contains('item-nav')) {
        if (!targetEl.classList.contains('_active')) {
            document.querySelectorAll('.item-nav').forEach(item => {
                item.classList.remove('_active')
            });
            targetEl.classList.add('_active')
        }
        else {
            targetEl.classList.remove('_active')
        }
    }

    if (targetEl.classList.contains('faq__column-question')) {
        let faqtitle = targetEl.closest('.faq__column-item');
        if (!faqtitle.classList.contains('_active')) {
            document.querySelectorAll('.faq__column-item').forEach(item => {
                item.classList.remove('_active')
            });
            faqtitle.classList.add('_active')
        }
        else {
            faqtitle.classList.remove('_active')
        }
    }

    if (targetEl.classList.contains('_open-popup-form')) {
        document.querySelector('.form__popup').classList.add('_open');
    }

    if (targetEl.classList.contains('form__popup-close')) {
        document.querySelector('.form__popup').classList.remove('_open');
    }

    if (targetEl.classList.contains('form__popup-overlay')) {
        document.querySelector('.form__popup').classList.remove('_open');
    }

})


document.addEventListener('DOMContentLoaded', function (e) {
    let privacy = document.querySelector('.footer__privacy');
    if (privacy && window.innerWidth <= 560) {
        document.querySelector('.footer__contacts').after(privacy);
    }

    let customerProduct = document.querySelector('.your__product-slider-wrapper');
    let customerProductPagination = document.querySelector('.your__product-slider-pagination');
    if (customerProduct && window.innerWidth <= 992) {
        customerProduct.after(customerProductPagination);
    }

    let resultSlide = document.querySelectorAll('.services__results-content');

    if (resultSlide) {
        resultSlide.forEach(slide => {
            let resulTabs = slide.querySelectorAll('.results__grafic-tabs button');
            let resulTabsContent = slide.querySelectorAll('.results__grafic-tab-content');
            for (let i = 0; i < resulTabs.length; i++) {
                const tab = resulTabs[i];
                tab.addEventListener('click', () => {
                    resulTabs.forEach(item => {
                        item.classList.remove('_active')
                    })
                    tab.classList.add('_active');
                    resulTabsContent.forEach(item => {
                        item.classList.remove('_active')
                    })
                    resulTabsContent[i].classList.add('_active');
                })
            };
        })
    }
})

import "./menu.js";
import "./sliders.js";
// import "./input-mask.js";
// import "./input-validate.js";



