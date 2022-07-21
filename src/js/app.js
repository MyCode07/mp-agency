
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
})


document.addEventListener('DOMContentLoaded', function (e) {
    let privacy = document.querySelector('.footer__privacy');
    if (privacy && window.innerWidth <= 560) {
        document.querySelector('.footer__contacts').after(privacy);
    }
})

import "./menu.js";
import "./sliders.js";
// import "./input-mask.js";
// import "./input-validate.js";



