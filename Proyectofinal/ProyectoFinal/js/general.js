// variables
const iconHam = document.querySelector(".menuHamBtn");
const menuHam = document.querySelector(".menuHam");
const fondoM = document.querySelector(".fondoMenu");

const pointer = document.querySelector(".htmlCursor");
const menuHover = document.querySelector(".menuHam");



var cont = 1

// boton animado
const botonHam = lottie.loadAnimation({
    container: iconHam, // the dom element that will contain the animation
    renderer: 'svg',
    loop: false,
    prerender: false,
    autoplay: false,
    path: './img/videoSvg/data.json' // the path to the animation json
});

// funciones
// bloquea el scroll
function disableScroll(){  
    var x = window.scrollX;
    var y = window.scrollY;
    window.onscroll = function(){ window.scrollTo(x, y) };
}

// desbloquea el scroll
function enableScroll(){  
    window.onscroll = null;
}

window.onload = function () {
    const carga = document.querySelector(".cargaContainer");
    carga.style.visibility = 'hidden';
    carga.style.opacity = '0';
}

// espero a que el dom este listo
$( document ).ready(function() {
    console.log( "ready!" );

    // main 
    // animacion del menu Hamburguesa
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
    };

    if (cont%2 != 0) {
        fondoM.addEventListener("click", function() {
            menuHam.classList.add("hide");
            fondoM.classList.remove("fade-in");
            enableScroll();
            botonHam.setSpeed(2);
            botonHam.setDirection(-1);
            botonHam.play();
            console.log("hice click")
        });
    };
});