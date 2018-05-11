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

//Gallery Begin -
// 1.) Click Image
// 2.) Image is displayed on right,

var artR = document.getElementById('artr');


function image(x) {
    var y = ["art/hh1.jpg", "art/milosz.jpg", "art/bruce.png", "art/dog.png", "art/hh2.png", "art/willow.png"]
    artR.style.background = "url(" + y[x] + ")";
    artR.style.backgroundPosition = "center";
    artR.style.backgroundRepeat = "no-repeat";
    artR.style.backgroundSize = "contain";
}

function mimage(x) {
    var y = ["art/driveinmockup.png", "art/wp.png"]
    mDisp.style.background = "url(" + y[x] + ")";
    mDisp.style.backgroundPosition = "center";
    mDisp.style.backgroundRepeat = "no-repeat";
    mDisp.style.backgroundSize = "contain";
}