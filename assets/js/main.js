function navMenuToggle() {
    var hamburger = document.getElementById("hamburger");
    var menu = document.getElementsByClassName("hbg-menu")[0];
    hamburger.classList.toggle("is-active");
    menu.classList.toggle("is-active");
}