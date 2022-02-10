// import de clases
import card from "./card.js";

//variablesn
const obras = [];
const desc = [
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eu orci ipsum. In accumsan, nisi in fermentum mattis, augue arcu finibus velit, non vehicula ante risus et metus. ",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eu orci ipsum. In accumsan, nisi in fermentum mattis, augue arcu finibus velit, non vehicula ante risus et metus. ",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eu orci ipsum. In accumsan, nisi in fermentum mattis, augue arcu finibus velit, non vehicula ante risus et metus. ",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eu orci ipsum. In accumsan, nisi in fermentum mattis, augue arcu finibus velit, non vehicula ante risus et metus. "
];


$( document ).ready(function() {
    console.log( "ready!" );

    //main
    obras.push(new card(1, "obra1jhgd", 230, desc[0], "obra1.jfif", "45cm x 45cm"));
    obras.push(new card(2, "obra2", 530, desc[1], "obra2.jfif", "45cm x 45cm"));
    obras.push(new card(3, "obra3", 830, desc[2], "obra3.jfif", "45cm x 45cm"));
    obras.push(new card(4, "obra4", 130, desc[3], "obra4.jfif", "45cm x 45cm"));

    for(let i of obras) {
        $("#containerO").append(`<a href="./itemCompra.html" id="${i.id}" class="links"><div class="obra cFlex"><img src="./img/jpeg/${i.img}" class="imagenObra"></div></a>`);
    };

    var links = $(".links");
    for (let i=0; i < links.length; i++) {
        links[i].addEventListener("click", function() {
            localStorage.removeItem('href');
            const fotoJSON = JSON.stringify(obras[i]);
            localStorage.setItem('href', fotoJSON);
        });
    };
});