// variables
const popUpEr = document.querySelector(".popUpCarro1")

// funciones
function cargar() {
    $.ajax({
        method: "GET",
        url: "./json/cartData.json",
        success: function(respuesta) {
            $(".totalCompra").empty();

            if (localStorage.getItem("carro") == null) {
                $(".totalCompra").append(`<h2 class="textoTituloObra lb tt">$0</h2>`);
                $(".containerElementos").append(`<div class="elementos cFlex">
                                                    <div class="nombreEl cFlex"><h2 class="textoDimensiones lb">Empty</h2></div>        
                                                </div>`)    
            } else {
                var carroItem = JSON.parse(localStorage.getItem("carro"));
                var suma = 0;
                for(let item of carroItem) {
                    for(let i of respuesta) {
                        if(item == i.id){
                            $(".containerElementos").append(`<div class="elementos cFlex">
                                                                <div class="borraItem cFlex" id="${i.id}"><img src="./img/svg/closeRed.svg" alt="boton eliminar elemento" class="btnSvg"></div>
                                                                <div class="nombreEl cFlex"><h2 class="textoDimensiones lb">${i.nombre}</h2></div>        
                                                                <div class="precioEl cFlex"><h2 class="textoDimensiones lb">$${i.precio}</h2></div>
                            </div>`)
                            // total de la compra
                            suma += parseInt(i.precio);

                            // agregar boton para borrar
                            let lll = document.getElementById(i.id);
                            lll.addEventListener("click", function() {
                                eliminarItemLocal(i.id, carroItem);
                            });
                        };
                    };
                };
                $(".totalCompra").append(`<h2 class="textoTituloObra lb tt">$${suma}</h2>`) 
            };
        },
        error: function(){
            console.log("error");
        }
    });
}

function cargarUI() {
    $(".opCarro").append(`<div class="btn2 cursorHover cFlex">
                            <div class="buton2 btnBorrarCarro cFlex">
                                <h2 class="textoDimensiones tb2 tb">Clear</h2>
                            </div>
                        </div>
                        <div class="btn1 cursorHover cFlex">
                            <div class="buton1 btnComprarCarro cFlex">
                                <h2 class="textoDimensiones tb1 tb">Checkout</h2>
                            </div>
                        </div>`)
};

function crearPopErr() {
    $(".popUpCarro1").append(`<div class="containerPop1 cFlex">
                                <div class="textoTituloObra tpop cFlex">
                                    <h2>The car is empty</h2>
                                </div>
                            </div>`)                  
};


// vacia el carrito
function borrarTodo() {
    $(".containerElementos").empty();
    cargar();
};

// elimina el elemento deseado del carrito
function eliminarItemLocal(i, ci) {
    if (i == ci[0]) {
        ci.shift();
        localStorage.setItem("carro", JSON.stringify(ci));
        $(".containerElementos").empty();
        if (ci.length == 0) {
            localStorage.clear();
            cargar();
        } else {
            cargar();
        }
    } else {
        let index = ci.indexOf(i);
        ci.splice(index, 1);
        localStorage.setItem("carro", JSON.stringify(ci));
        $(".containerElementos").empty();
        cargar();
    }
};

function popEr() {
    popUpEr.classList.remove("popUpCarroHide1");
    popUpEr.classList.add("popUpCarroShow1");
    setTimeout(() => {
        popUpEr.classList.remove("popUpCarroShow1");
        popUpEr.classList.add("popUpCarroHide1");
    }, 2000)
};


function finCompra() {
    if (localStorage.getItem("carro") == null) {
        popEr()
    } else {
        const carg = document.querySelector(".finComContainer");
        carg.classList.remove("hideFin");
        setTimeout(() => {
            carg.classList.add("hideFin");
        },2000)
        localStorage.clear();
        $(".containerElementos").empty();
        cargar();
    }

}
// main
// espero a que el dom este listo
$( document).ready(function() {
    localStorage.removeItem('href');

    cargar();
    cargarUI();
    crearPopErr()

    $(".btnBorrarCarro").on("click", function() {
        localStorage.clear();
        borrarTodo();
    });

    $(".btnComprarCarro").on("click", function() {
        finCompra();
    });
})