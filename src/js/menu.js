
let burger = document.querySelector('.header__burger');

burger.addEventListener('click', function (e) {
    document.querySelector('.header__burger').classList.toggle('_active');
    document.querySelector('.header__menu-body').classList.toggle('_active');
    let div = document.querySelector(".header__menu-body");
    let p = document.querySelector(".header__active");
    p.classList.toggle('_active');
    div.append(p);
})



