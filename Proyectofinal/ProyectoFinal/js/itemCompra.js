// variables
var linkId = JSON.parse(localStorage.getItem('href'));

// funciones
function crearFoto(f) {
    $("#obraP").append(`<div class="containerImg cFlex">
                            <img src="./img/jpeg/${f.img}" alt="" class="imgO" id="imgO">
                        </div>`);
}

function crearTitulo(t) {
    $("#tituloP").append(`<div class="tituloContainer cFlex">
                            <div class="nyd cFlex">
                                <div class="nombreO lb cFlex">
                                    <h2 class="textoTituloObra">${t.nombre}</h2>
                                </div>
                                <div class="dimensionO lb cFlex">
                                    <h2 class="textoDimensiones">${t.dim}</h2>
                                </div>
                            </div>
                            <div class="precio lb cFlex">
                                 <h2 class="textoPrecio">$${t.precio}</h2>
                            </div>
                        </div>`);
}

function crearDesc() {

}

function crearBot() {

}

// main
console.log(linkId);


crearFoto(linkId);
crearTitulo(linkId);
crearDesc();
crearBot();

const foto = document.querySelector(".fotoO");


foto.onclick = function() {
    foto.classList.toggle("fotoAmpliada");
    $(".containerHeader").toggle();
    $(".tituloO").toggle();
    $(".descO").toggle();
    $(".btoO").toggle();

}

