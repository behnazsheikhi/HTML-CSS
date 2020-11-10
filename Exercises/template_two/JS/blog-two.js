var modal = document.getElementById("myModal");

// var span = document.getElementsByClassName("close")[0];


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