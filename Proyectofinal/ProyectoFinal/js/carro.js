// variables

// funciones
function cargar() {
    $.ajax({
        method: "GET",
        url: "./json/cartData.json",
        success: function(respuesta) {
            for(let i = 0; i < localStorage.length; i++) {
                let clave = localStorage.key(i);
                for(let i = 0; i < respuesta.length; i++) {
                    // console.log(respuesta[i].id);
                    if (respuesta[i].id == localStorage.getItem(clave)) {
                        console.log("tengo que mostrar el:" + respuesta[i].id)
                        $(".containerElementos").append( `<div class="elementos cFlex">
                                                <div class="nombreEl cFlex"></div>
                                                <div class="cantidadEl cFlex"></div>
                                                <div class="precioEl cFlex"></div>
                                            </div>`);
                    }
                }
            }
        },
        error: function(){
            console.log("error");
        }
    });
}

function borrar() {
    $.ajax({
        method: "GET",
        url: "./json/cartData.json",
        success: function(respuesta) {
            if (localStorage.length == 0) {
                $(".containerElementos").empty();
            }
            // for(let i = 0; i < localStorage.length; i++) {
            //     let clave = localStorage.key(i);
            //     for(let i = 0; i < respuesta.length; i++) {
            //         // console.log(respuesta[i].id);
            //         if (respuesta[i].id == localStorage.getItem(clave)) {
            //             console.log("tengo que mostrar el:" + respuesta[i].id)
            //             $(".carrito").append( `<div class="elementos cFlex">
            //                                     <div class="nombreEl cFlex"></div>
            //                                     <div class="cantidadEl cFlex"></div>
            //                                     <div class="precioEl cFlex"></div>
            //                                 </div>`);
            //         }
            //     }
            // }
        },
        error: function(){
            console.log("error");
        }
    });
}

// main
$( document).ready(function() {
    console.log( "ready!" );
    localStorage.removeItem('href');

    cargar();

    $(".btnBorrarCarro").on("click", function() {
        localStorage.clear();
        borrar();
    });
})