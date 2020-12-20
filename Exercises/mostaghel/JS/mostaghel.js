var menu = document.getElementById('menu-responsive');

function openMenu() {
    if (menu.style.display == "block") {
        menu.style.display = "none";
    } else {
        menu.style.display = "block";
    }
}


var rightBtn = document.getElementById('right-list');
var leftBtn = document.getElementById('left-list');

var right = document.getElementById('r-item-list');
var left = document.getElementById('l-item-list');

function openRightList() {
    leftBtn.style.backgroundColor = "#ffffff";
    left.style.display = "none";
    rightBtn.style.backgroundColor = "#efefef";
    right.style.display = "block";
}

function openLeftList() {

    rightBtn.style.backgroundColor = "#ffffff";
    right.style.display = "none";
    leftBtn.style.backgroundColor = "#efefef";
    left.style.display = "block";
}

var slideIndex = 3;
showSlides(slideIndex);

// function plusSlides(n) {
//     showSlides(slideIndex += n);
// }

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("slider-elements");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace("active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}