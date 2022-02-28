// variables

// funciones
function cargar() {
    $.ajax({
        method: "GET",
        url: "./json/cartData.json",
        success: function(respuesta) {
            // reinicio el precio final
            $(".totalCompra").empty();

            if (localStorage.getItem("carro") == null) {
                console.log("el carrito esta vacio");
                // seteo el precio total en 0
                $(".totalCompra").append(`<h2 class="textoTituloObra lb tt">$0</h2>`) 
            } else {
                var carroItem = JSON.parse(localStorage.getItem("carro"));
                var suma = 0;
                for(let item of carroItem) {
                    // forma sin hardcoreo de datos
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
                                console.log(i.id);
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
                                <h2 class="textoDimensiones tb2 tb">Vaciar carro</h2>
                            </div>
                        </div>
                        <div class="btn1 cursorHover cFlex">
                            <div class="buton1 cFlex">
                                <h2 class="textoDimensiones tb1 tb">Comprar</h2>
                            </div>
                        </div>`)
};


// vacia el carrito
function borrarTodo() {
    $(".containerElementos").empty();
    cargar();
}

// elimina el elemento deseado del carrito
function eliminarItemLocal(i, ci) {
    if (i == ci[0]) {
        ci.shift();
        localStorage.setItem("carro", JSON.stringify(ci));
        $(".containerElementos").empty();
        cargar();
    } else {
        let index = ci.indexOf(i);
        ci.splice(index, 1);
        localStorage.setItem("carro", JSON.stringify(ci));
        $(".containerElementos").empty();
        cargar();
    }
}


// main
// espero a que el dom este listo
$( document).ready(function() {
    console.log( "ready!" );
    localStorage.removeItem('href');

    // carga los elementos del carrito
    cargar();
    cargarUI();

    // boton para vaciar el carrito
    $(".btnBorrarCarro").on("click", function() {
        localStorage.clear();
        borrarTodo();
    });
})