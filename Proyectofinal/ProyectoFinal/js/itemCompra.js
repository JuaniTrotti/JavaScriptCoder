// variables
var linkId = JSON.parse(localStorage.getItem('href'));
const foto = document.querySelector(".fotoO");
const carro = [];

// funciones
function crearFoto(f) {
    $("#obraP").append(`<div class="containerImg cFlex">
                            <img src="./img/jpeg/${f.img}" alt="" class="imgO" id="imgO">
                        </div>`);
};

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
};

function crearDesc() {

};

function crearBot() {

};


$( document ).ready(function() {
    console.log( "ready!" );

    // main
    console.log(linkId);


    crearFoto(linkId);
    crearTitulo(linkId);
    crearDesc();
    crearBot();

    // animacion de ampliar la foto
    foto.onclick = function() {
        foto.classList.toggle("fotoAmpliada");
        $(".containerHeader").toggle();
        $(".tituloO").toggle();
        $(".descO").toggle();
        $(".btoO").toggle();
    }

    // uso un array que almacena los id de las obras que agrego al carrito
    $(".btn1").on("click", function() {
        if (localStorage.getItem("carro") == null) {
            console.log("no existe");
            carro.push(linkId.id);
            localStorage.setItem("carro", JSON.stringify(carro));
        } else {
            console.log("existe");
            var carroTemp = JSON.parse(localStorage.getItem('carro'));
            carroTemp.push(linkId.id);
            localStorage.setItem("carro", JSON.stringify(carroTemp));
        };
    });
});

