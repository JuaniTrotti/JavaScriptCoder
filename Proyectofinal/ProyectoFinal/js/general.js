// variables
const iconHam = document.querySelector(".menuHamBtn");
const menuHam = document.querySelector(".menuHam");
const fondoM = document.querySelector(".fondoMenu");
var cont = 1

const botonHam = lottie.loadAnimation({
    container: iconHam, // the dom element that will contain the animation
    renderer: 'svg',
    loop: false,
    prerender: false,
    autoplay: false,
    path: './img/videoSvg/data.json' // the path to the animation json
});

// funciones
function disableScroll(){  
    var x = window.scrollX;
    var y = window.scrollY;
    window.onscroll = function(){ window.scrollTo(x, y) };
}

function enableScroll(){  
    window.onscroll = null;
}


$( document ).ready(function() {
    console.log( "ready!" );

    // main 
    console.log(iconHam);
    console.log(menuHam);



    iconHam.onclick = function() {
        if (cont%2 == 0) {
            menuHam.classList.add("hide");
            fondoM.classList.remove("fade-in");
            enableScroll();
            botonHam.setSpeed(2);
            botonHam.setDirection(-1);
            botonHam.play();
        } else {
            menuHam.classList.remove("hide");
            fondoM.classList.add("fade-in"); 
            disableScroll();
            botonHam.setSpeed(1);
            botonHam.setDirection(1);
            botonHam.play();
        }
        cont += 1;
    }
});