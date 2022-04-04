// variables
var linkId = JSON.parse(localStorage.getItem('href'));
const popUp = document.querySelector(".popUpCarro");
const popUpEr = document.querySelector(".popUpCarro1")
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
                                    <h2>Item add</h2>
                                </div>
                            </div>`)
};

function crearPopErr() {
    $(".popUpCarro1").append(`<div class="containerPop1 cFlex">
                                <div class="textoTituloObra tpop cFlex">
                                    <h2>The item already exists in the cart</h2>
                                </div>
                            </div>`)                  
};

function search(arr, e) {
    for(let i of arr) {
        if (i == e) {
            return true;
        };
    };
    return false;
};

function popAr() {
    popUp.classList.remove("popUpCarroHide");
    popUp.classList.add("popUpCarroShow");
    setTimeout(() => {
        popUp.classList.remove("popUpCarroShow");
        popUp.classList.add("popUpCarroHide");
    }, 2000)
};

function popEr() {
    popUpEr.classList.remove("popUpCarroHide1");
    popUpEr.classList.add("popUpCarroShow1");
    setTimeout(() => {
        popUpEr.classList.remove("popUpCarroShow1");
        popUpEr.classList.add("popUpCarroHide1");
    }, 2000)
};

function cargarCarro(){
    if (localStorage.getItem("carro") == null) {
        carro.push(linkId.id);
        localStorage.setItem("carro", JSON.stringify(carro));
        popAr();
    } else {
        var carroTemp = JSON.parse(localStorage.getItem('carro'));
        if (search(carroTemp, linkId.id) == true) {
            popEr();
        } else {
            popAr();
            carroTemp.push(linkId.id);
            localStorage.setItem("carro", JSON.stringify(carroTemp));
        };
    };
};

function directoCompra() {
    if (localStorage.getItem("carro") == null) {
        carro.push(linkId.id);
        localStorage.setItem("carro", JSON.stringify(carro));
    } else {
        var carroTemp = JSON.parse(localStorage.getItem('carro'));
        if (search(carroTemp, linkId.id) == true) {
        } else {
            carroTemp.push(linkId.id);
            localStorage.setItem("carro", JSON.stringify(carroTemp));
        };
    };
};


$( document ).ready(function() {
    // main
    crearFoto(linkId);
    crearTitulo(linkId);
    crearDesc(linkId);
    crearBot();
    crearPop(linkId);
    crearPopErr();

    $(".btn1").on("click", function() {
        cargarCarro();
    });
    $(".btn2").on("click", function() {
        directoCompra();
    });
});

