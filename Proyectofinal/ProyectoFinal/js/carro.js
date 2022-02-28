// variables

// funciones
function cargar() {
    $.ajax({
        method: "GET",
        url: "./json/cartData.json",
        success: function(respuesta) {
            // reinicio el precio final
            $(".precioFinalCarro").empty();

            if (localStorage.getItem("carro") == null) {
                console.log("el carrito esta vacio");
                // seteo el precio total en 0
                $(".precioFinalCarro").append(`<h2 class="textoDimensiones">$0</h2>`) 
            } else {
                var carroItem = JSON.parse(localStorage.getItem("carro"));
                var suma = 0;
                for(let item of carroItem) {
                    // forma sin hardcoreo de datos
                    for(let i of respuesta) {
                        if(item == i.id){
                            $(".containerElementos").append(`<div class="elementos cFlex">
                                                                <div class="borraItem cFlex" id="${i.id}"><h2 class="textoDimensiones">Delete item</h2></div>
                                                                <div class="nombreEl cFlex"><h2 class="textoDimensiones">${i.nombre}</h2></div>        
                                                                <div class="precioEl cFlex"><h2 class="textoDimensiones">$${i.precio}</h2></div>
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
                $(".precioFinalCarro").append(`<h2 class="textoDimensiones">$${suma}</h2>`) 
            };
        },
        error: function(){
            console.log("error");
        }
    });
}

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

    // boton para vaciar el carrito
    $(".btnBorrarCarro").on("click", function() {
        localStorage.clear();
        borrarTodo();
    });
})