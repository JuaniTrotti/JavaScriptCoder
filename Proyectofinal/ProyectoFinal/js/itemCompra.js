// variables
var linkId = JSON.parse(localStorage.getItem('href'));

// funciones
function crearFoto(f) {
    let section = document.getElementById("obraP");
    let div = document.createElement("div");
    div.innerHTML = `<div class="containerImg cFlex"><img src="../img/jpeg/${f.img}" alt="" class="imgO"></div>`;
    section.appendChild(div);
}

// main
console.log(linkId);
localStorage.removeItem('href');

crearFoto(linkId);
