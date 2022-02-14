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

function crearDesc(d) {
    $(".descO").append(`<div class="desContainer cFlex">
                        <p class="dp lb textoDimensiones">
                            ${d.descripcion}
                        </p>
                    </div>`);
};

function crearBot() {
    $(".btoO").append(`<div class="btnContainer cFlex">
                        <div class="btn1 cFlex">
                            <h2 class="textoDimensiones tb1">add to cart</h2>
                        </div>
                        <a href="./cart.html" class="link">
                            <div class="btn2 cFlex">
                                <h2 class="textoDimensiones tb2">buy</h2>
                            </div>
                        </a>
                     </div>`);
};


$( document ).ready(function() {
    console.log( "ready!" );

    // main
    console.log(linkId);


    crearFoto(linkId);
    crearTitulo(linkId);
    crearDesc(linkId);
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

