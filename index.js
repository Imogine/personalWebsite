var modal = document.getElementById('conModal');
var span = document.getElementsByClassName("close")[0];
var navmenu = document.getElementsByClassName("nav")[0];
var menuitem = document.getElementsByClassName("menuitem")[0];
window.onload = function() {
	modal.style.display = "block";
}
span.onclick = function() {
    modal.style.display = "none";
}
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
// menuitem.onclick = function () {
// 	document.getElementById("nav").classList +='pagenav';
// }