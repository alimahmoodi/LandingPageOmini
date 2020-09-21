const offsetTop = document.querySelector(".features").offsetTop;
const nav = document.querySelector(".navigation__holder");
const logo = document.querySelector(".header__logo");
const link = document.querySelectorAll(".navigation__link");

const howWorkPhoneOffSetTop = document.querySelector(".how-works").offsetTop;
const howWorkPhone = document.querySelector(".how-works__img");

const fixedNav = () => {
    if (window.scrollY >= offsetTop) {
        nav.classList.add("navigation__holder--fix");
        logo.classList.add("header__logo--fix");
        logo.setAttribute("src", "img/logo.png");
        link.forEach((item) => {
            item.classList.add("navigation__link--fix");
        });
    } else if (window.screenY < offsetTop) {
        nav.classList.remove("navigation__holder--fix");
        logo.classList.remove("header__logo--fix");
        link.forEach((item) => {
            item.classList.remove("navigation__link--fix");
        });
        logo.setAttribute("src", "img/logo-white.png");
    }
};

const motion = () => {
    if (window.scrollY >= howWorkPhoneOffSetTop) {
        console.log(howWorkPhoneOffSetTop + 50);
        howWorkPhone.classList.add("how-works__img--motion");
    }
};

window.addEventListener("scroll", fixedNav);
window.addEventListener("scroll", motion);
