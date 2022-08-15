// $(document).ready(function () {
//     $('.header__burger').click(function (event) {
//         $('.header__burger,.header__menu').toggleClass('active');
//         $('body').toggleClass('lock');
//     });
// });

document.addEventListener('DOMContentLoaded', function () {
    const HEADER = document.querySelector('.header');
    const HEADER_BURGER = HEADER.querySelector('.header__burger');

    HEADER_BURGER.addEventListener('click', function () {
        HEADER.classList.toggle('header--menu-active');
        document.body.classList.toogle('no-scroll');
    });
});