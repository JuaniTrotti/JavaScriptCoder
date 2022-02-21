// variables 
const cursorEventos = document.querySelector(".jsCursor");
const pointer = document.querySelector(".htmlCursor");

// funciones
const eventos = () => {
    document.addEventListener("mousemove", trackCursor);
    document.addEventListener("mousedown", clickTrue);
    // document.addEventListener("mouseup", clickFalse);
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

// main
eventos();


