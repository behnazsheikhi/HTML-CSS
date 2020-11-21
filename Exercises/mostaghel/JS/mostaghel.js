var menu = document.getElementById('menu-responsive');

function openMenu() {
    if (menu.style.display == "block") {
        menu.style.display = "none";
    } else {
        menu.style.display = "block";
    }
}
// window.onclick = function(event) {
//     if (event.target == modal) {
//         menu.style.display = "none";
//     }
// }