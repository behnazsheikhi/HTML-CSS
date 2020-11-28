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