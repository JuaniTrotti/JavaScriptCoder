// variables 
const cursorEventos = document.querySelector(".jsCursor");
const pointer = document.querySelector(".htmlCursor");
const menuHover = document.querySelector(".menuHam");

// funciones
function isTouchDevice() {
    return (('ontouchstart' in window) ||
            (navigator.maxTouchPoints > 0) ||
            (navigator.msMaxTouchPoints > 0));
};

const isTouch = isTouchDevice();

// main 
if (!isTouch) {
    


    // funciones 
    const eventos = () => {
        document.addEventListener("mousemove", trackCursor);
        document.addEventListener("mousedown", clickTrue);
        document.addEventListener("mouseleave", mouseFalse);
        document.addEventListener("mouseenter", mouseTrue);
        document.addEventListener("mouseover", hoverTrue);
        document.addEventListener("mouseout", hoverFalse);
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
    }
    
    const hoverFalse = () => {
    }
    // main
    eventos();
} else {
    cursorEventos.style.display = "none"
};


