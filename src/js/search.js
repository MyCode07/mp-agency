
const searchBody = document.querySelector('.header__buttons-search');
const input = document.querySelector('.search');

document.addEventListener('click', openSearch);

function openSearch(event) {
    if (event.target.closest('.svg')) {
        input.classList.toggle('_active');
        searchBody.classList.toggle('_active');

    }
    if (!event.target.closest('.header__buttons-search')) {
        searchBody.classList.remove('_active');
        input.classList.remove('_active');
    }
}