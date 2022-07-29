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

const svg = `
    <svg viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0.5 0.75L5 5.25L9.5 0.75" stroke-linecap="round" stroke-linejoin="round"></path>
    </svg>
`;
const headerLinks = document.querySelectorAll('.header__menu li');
const menuMenuLinks = document.querySelectorAll('.mobile-menu__menu li');

function addSvgToMenuItem(menuitem) {
    for (let i = 0; i < menuitem.length; i++) {
        const link = menuitem[i];

        const submenu = link.querySelector('ul');
        if (submenu) {
            submenu.insertAdjacentHTML('beforebegin', svg);
        }
        const arrow = link.querySelector('svg');
        if (arrow) {
            arrow.addEventListener('click', () => {
                arrow.closest('li').classList.toggle('_active');
            })
            link.addEventListener('mouseleave', () => {
                arrow.closest('li').classList.remove('_active');
            })
        }
    }
}

addSvgToMenuItem(headerLinks);
addSvgToMenuItem(menuMenuLinks);
