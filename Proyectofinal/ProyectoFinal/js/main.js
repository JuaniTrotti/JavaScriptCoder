// import de clases
import card from "./card.js";

//variables
const obras = [];

// funciones

//main
obras.push(new card(1, "obra1", 230, "desc obra1"));
obras.push(new card(2, "obra2", 530, "desc obra2"));
obras.push(new card(3, "obra3", 830, "desc obra3"));
obras.push(new card(4, "obra4", 130, "desc obra4"));

for(let i of obras) {
    let section = document.getElementById("containerO");
    let div = document.createElement("div");
    div.innerHTML = `<a href="index2.html"><div class="obra cFlex"><h4>${i.nombre}</h4><h5>${i.precio}</h5></div></a>`;
    section.appendChild(div);
}
