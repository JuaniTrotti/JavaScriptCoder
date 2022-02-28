// variables
var linkId = JSON.parse(localStorage.getItem('href'));
const popUp = document.querySelector(".popUpCarro");
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
                        <div class="btn1 cursorHover cFlex">
                            <div class="buton1 cFlex">
                                <h2 class="textoDimensiones tb1 tb">add to cart</h2>
                            </div>
                        </div>
                        <a href="./cart.html" class="link cursorHover">
                            <div class="btn2 cFlex">
                                <div class="buton2 cFlex">
                                    <h2 class="textoDimensiones tb2 tb">buy</h2>
                                </div>
                            </div>
                        </a>
                     </div>`);
};

function crearPop(o) {
    $(".popUpCarro").append(`<div class="containerPop cFlex">
                                <div class="textoTituloObra tpop cFlex">
                                    <h2>Se agregó ${o.nombre} al carro.</h2>
                                </div>
                                <div class="btnCerrar cFlex">
                                    <img src="./img/svg/close.svg" alt="btnClose">
                                </div>
                            </div>`)
}


$( document ).ready(function() {
    console.log( "ready!" );

    // main
    console.log(linkId);


    crearFoto(linkId);
    crearTitulo(linkId);
    crearDesc(linkId);
    crearBot();
    crearPop(linkId);

    // uso un array que almacena los id de las obras que agrego al carrito
    $(".btn1").on("click", function() {
        if (localStorage.getItem("carro") == null) {
            carro.push(linkId.id);
            localStorage.setItem("carro", JSON.stringify(carro));
        } else {
            var carroTemp = JSON.parse(localStorage.getItem('carro'));
            carroTemp.push(linkId.id);
            localStorage.setItem("carro", JSON.stringify(carroTemp));
        };

        popUp.classList.remove("popUpCarroHide");
        popUp.classList.add("popUpCarroShow");

        setTimeout(() => {
            popUp.classList.remove("popUpCarroShow");
            popUp.classList.add("popUpCarroHide");
        }, 2000)
    });
});

