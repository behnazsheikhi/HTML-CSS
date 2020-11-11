// modal
var modal = document.getElementById("blog-modal");

function openModal() {
    modal.style.display = "block";
}

function closeModal() {
    modal.style.display = "none";
}
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

// sidebar
var sidebarVar = document.getElementById("sidebar");

function openSidebar() {

    sidebarVar.style.display = "block"
}

function closeSidebar() {
    sidebarVar.style.display = "none";
}

function validateForm() {
    var inputValue = document.getElementsByClassName("contact-input");
    console.log(inputValue);
    for (var i = 0; i <= inputValue.length; i++) {
        if (inputValue[i].value() == "") {

        }
    }
}
var GoTop = document.getElementById('arrow-go-to');
var arrowUp = document.getElementById('arrow-up');
arrowUp.onmouseover = function showGoTop() {
    GoTop.style.display = "block";
}

arrowUp.onmouseleave = function showGoTop() {
    GoTop.style.display = "none";
}


GoTop.onmouseover = function showGoTop() {
    GoTop.style.display = "block";
}

GoTop.onmouseleave = function showGoTop() {
    GoTop.style.display = "none";
}