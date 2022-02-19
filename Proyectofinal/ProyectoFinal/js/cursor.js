const cursorEventos = document.querySelector(".jsCursor");

const eventos = () => {
    document.addEventListener("mousemove", trackCursor);
};

const trackCursor = (e) => {
    cursorEventos.style.setProperty('--cursorx', e.clientX + "px");
    cursorEventos.style.setProperty('--cursory', e.clientY + "px");
}

// main
eventos();
