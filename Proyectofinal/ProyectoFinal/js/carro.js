// variables

// funciones

function cargar() {
    $.ajax({
        method: "GET",
        url: "./json/cartData.json",
        success: function(respuesta) {
            if (localStorage.getItem("carro") == null) {
                console.log("el carrito esta vacio");
            } else {
                var carroItem = JSON.parse(localStorage.getItem("carro"));
                for(let item of carroItem) {

                    // use dos formas para crear los elementos del carro

                    // // forma con hardcoreo de datos
                    // $(".containerElementos").append(`<div class="elementos cFlex"">
                    //             <div class="nombreEl cFlex"><h2 class="textoDimensiones">${respuesta[item-1].nombre}</h2></div>
                    //             <div class="borraItem cFlex id="${i.id}""><h2 class="textoDimensiones">Delete item</h2></div>
                    //             <div class="precioEl cFlex"><h2 class="textoDimensiones">${respuesta[item-1].precio}</h2></div>
                    // </div>`)

                    // // agregar boton para borrar
                    // $(".borraItem").on("click", function() {
                    //     console.log("hola soy: " + respuesta[item-1].id)
                    // });


                    // forma sin hardcoreo de datos
                    for(let i of respuesta) {
                        if(item == i.id){
                            $(".containerElementos").append(`<div class="elementos cFlex">
                                                                <div class="nombreEl cFlex"><h2 class="textoDimensiones">${i.nombre}</h2></div>
                                                                <div class="borraItem cFlex" id="${i.id}"><h2 class="textoDimensiones">Delete item</h2></div>
                                                                <div class="precioEl cFlex"><h2 class="textoDimensiones">${i.precio}</h2></div>
                            </div>`)
                               // agregar boton para borrar
                            let lll = document.getElementById(i.id);
                            lll.addEventListener("click", function() {
                                console.log(i.id);
                                eliminarItemLocal(i.id, carroItem);
                            });
                        };
                    };
                }; 
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