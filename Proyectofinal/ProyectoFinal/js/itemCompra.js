// variables
var linkId = JSON.parse(localStorage.getItem('href'));
const foto = document.querySelector(".fotoO");
const carro = [];

// funciones
function crearFoto(f) {
    $("#obraP").append(`<div class="containerImg cFlex">
                            <img src="${f.img}" alt="imagen de la obra" class="imgO" id="imgO">
                        </div>`);
};

function crearTitulo(t) {
    $("#titulo").append(`<div class="nombreO lb cFlex">
                            <h2 class="textoTituloObra tm">${t.nombre}</h2>                        
                        </div>`)

    $("#dim").append(`<div class="dimensionO lb cFlex">
                            <h2 class="textoDimensiones td">${t.dim} - $${t.precio}</h2>                       
                        </div>`)
};

function crearDesc(d) {
    $("#descripcion").append(`<div class="desContainer cFlex">
                        <p class="dp lb textoDimensiones tdd">
                            ${d.desc}
                        </p>
                    </div>`);
};

function crearBot() {
    $("#botonesCompra").append(`<div class="btnContainer cFlex">
                        <div class="btn1 cFlex">
                            <div class="buton1 cFlex">
                                <h2 class="textoDimensiones tb1 tb">add to cart</h2>
                            </div>
                        </div>
                        <a href="./cart.html" class="link">
                            <div class="btn2 cFlex">
                                <div class="buton2 cFlex">
                                    <h2 class="textoDimensiones tb2 tb">buy</h2>
                                </div>
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

