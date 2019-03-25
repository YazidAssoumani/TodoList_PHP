var navbar = document.querySelector("header");
var sticky = navbar.offsetTop;

function stickyMenu() {
    if (window.pageYOffset > sticky) {
        navbar.classList.add("sticky");
    } else {
        navbar.classList.remove("sticky");
    }
}

window.onscroll = function() {stickyMenu()};