var modal = document.getElementById('conModal');
var span = document.getElementsByClassName("close")[0];
var img = document.getElementsByClassName("img")[0];

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


img.onclick = function() {
    div.style.width = "800px";
}
window.onclick = function(event) {
    if (event.target == img) {
        div.style.display = "none";
    }
}
// menuitem.onclick = function () {
// 	document.getElementById("nav").classList +='pagenav';
// }