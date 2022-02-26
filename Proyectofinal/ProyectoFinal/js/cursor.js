// variables 
const cursorEventos = document.querySelector(".jsCursor");
const pointer = document.querySelector(".htmlCursor");
const menuHover = document.querySelector(".menuHam");
// const hoverPointer  = document.querySelector(".cursorHover");
const $hover = $("body");
    
// funciones
function isTouchDevice() {
    return (('ontouchstart' in window) ||
            (navigator.maxTouchPoints > 0) ||
            (navigator.msMaxTouchPoints > 0));
};

const isTouch = isTouchDevice();

// main 
$(document).ready(function() {
    console.log("ready cursor")

    if (!isTouch) {
        // funciones 
        const eventos = () => {
            document.addEventListener("mousemove", trackCursor);
            document.addEventListener("mousedown", clickTrue);
            document.addEventListener("mouseleave", mouseFalse);
            document.addEventListener("mouseenter", mouseTrue);
        };
    
        const hoverEv = () => {
            $hover.on("mouseover", ".cursorHover", hoverTrue);
            $hover.on("mouseout", ".cursorHover", hoverFalse);
        };
    
        const trackCursor = (e) => {
            cursorEventos.style.setProperty('--cursorx', e.clientX + "px");
            cursorEventos.style.setProperty('--cursory', e.clientY + "px");
        }
        
        const clickTrue = () => {
            pointer.classList.add("click")
        
            setTimeout(() => {
                pointer.classList.remove("click");
            }, 500);
        }
        
        const mouseFalse = () => {
            pointer.classList.add("noShow");
        }
        
        const mouseTrue = () => {
            pointer.classList.remove("noShow");
        }
    
        const hoverTrue = () => {
            pointer.classList.add("hover");
            console.log("entre");
        }
    
        const hoverFalse = () => {
            pointer.classList.remove("hover");
            console.log("sali");
        }
        
        // main
        eventos();
        hoverEv();
    
    } else {
        cursorEventos.style.display = "none"
    };
})



