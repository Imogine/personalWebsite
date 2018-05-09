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

//Determine Scroll Direction
var dir = []

function logScrollDirection() {
	var previous = window.scrollY;
	window.addEventListener('scroll', function() {
		window.scrollY > previous ? dir = "down" : dir = "up";
		previous = window.scrollY;
	});
	return dir;
}
logScrollDirection();
//Scroll Direction Determined

//Sticky Nav Start
window.onscroll = function() {
	logScrollDirection();
	expAndStick();
};
var nav = document.getElementById("Nav");
var sticky = nav.offsetTop;

function expAndStick() {
	if ((window.pageYOffset >= sticky) && (dir == "down")) {
		nav.classList.remove("scrollup");
		nav.classList.add("scrolldown");
	} else if ((window.pageYOffset <= sticky) && (dir == "up")) {
		nav.classList.remove("scrolldown");
		nav.classList.add("scrollup");
	}
}
//Sticky Nav End

img.onclick = function() {
	div.style.width = "800px";
}
window.onclick = function(event) {
	if (event.target == img) {
		div.style.display = "none";
	}
}