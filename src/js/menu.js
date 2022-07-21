const burger = document.querySelector('.header__burger');
let k = 0;
if (burger) {
    burger.addEventListener('click', () => {
        if (k % 2 == 0) {
            burger.classList.add('_active');
            setTimeout(() => {
                burger.classList.add('_active2');
            }, 300);
            document.querySelector('.mobile-menu').classList.add('_open');
            document.querySelector('body').classList.add('_noscroll');
            k++;
        }
        else {
            burger.classList.remove('_active2');
            setTimeout(() => {
                burger.classList.remove('_active');
            }, 300);
            document.querySelector('.mobile-menu').classList.remove('_open');
            document.querySelector('body').classList.remove('_noscroll');
            k++;
        }
    })
}
