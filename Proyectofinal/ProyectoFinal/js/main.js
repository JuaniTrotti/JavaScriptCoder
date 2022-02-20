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
                $("#containerO").append(`<a href="./itemCompra.html" id="${i.id}" class="links noCursor">
                                            <div class="obra cFlex">
                                                <img src="${i.img}" class="imagenObra">
                                            </div>
                </a>`);

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

    // //main
    // obras.push(new card(1, "obra1", 230, desc[0], "obra1.jfif", "45cm x 45cm"));
    // obras.push(new card(2, "Oil in the water.", 530, desc[1], "obra2.jfif", "45cm x 45cm"));
    // obras.push(new card(3, "obra3", 830, desc[2], "obra3.jfif", "45cm x 45cm"));
    // obras.push(new card(4, "obra4", 130, desc[3], "obra4.jfif", "45cm x 45cm"));

    // // cargo las obras en el inicio
    // for(let i of obras) {
    //     $("#containerO").append(`<a href="./itemCompra.html" id="${i.id}" class="links noCursor"><div class="obra cFlex"><img src="./img/jpeg/${i.img}" class="imagenObra"></div></a>`);
    // };

    cargarObras();

    console.log(obras);
    // // guardo en local storage la info de la obra que seleccione
    // var links = $(".links");
    // for (let i=0; i < links.length; i++) {
    //     links[i].addEventListener("click", function() {
    //         localStorage.removeItem('href');
    //         const fotoJSON = JSON.stringify(obras[i]);
    //         localStorage.setItem('href', fotoJSON);
    //     });
    // };
});