// import de clases
import card from "./card.js";

//variables
const obras = [];

// funciones 
function cargarObras() {
    $.ajax({
        method: "GET",
        url: "./json/cartData.json",
        success: function(respuesta) {
            for (let i of respuesta) {
                obras.push(new card(i.id, i.nombre, i.precio, i.desc, i.img, i.dim))
                $("#containerO").append(`<a href="./itemCompra.html" id="${i.id}" class="link">
                                            <div class="obra cFlex">
                                                <img src="${i.img}" class="imagenObra">
                                            </div>
                                            <div class="containerInfoCard cFlex">
                                                <div class="nombreCard cFlex textoTituloObra tc">${i.nombre}</div>
                                                <div class="precioCard cFlex textoDimensiones tc">$${i.precio}</div>
                                            </div>
                </a>`)

                let id = document.getElementById(i.id);
                id.addEventListener("click", function() {
                    localStorage.removeItem('href');
                    let obraJSON = JSON.stringify(i);
                    localStorage.setItem('href', obraJSON);
                });
            }
        },
        error: function(){
            console.log("error");
        }
    });
}

// espero a que el dom este listo
$( document ).ready(function() {
    console.log( "ready!" );
    cargarObras();
});