// import de clases
import card from "./card.js";

//variablesn
const obras = [];

// funciones
function infoFoto(links) {
    if (links[0].id) {
        console.log(hola);
    } else {
        console.log(chau);
    }
}

//main
obras.push(new card(1, "obra1", 230, "desc obra1", "obra1.jfif"));
obras.push(new card(2, "obra2", 530, "desc obra2", "obra2.jfif"));
obras.push(new card(3, "obra3", 830, "desc obra3", "obra3.jfif"));
obras.push(new card(4, "obra4", 130, "desc obra4", "obra4.jfif"));

for(let i of obras) {
    let section = document.getElementById("containerO");
    let div = document.createElement("div");
    div.innerHTML = `<a href="./html/itemCompra.html" id="${i.id}" class="links"><div class="obra cFlex"><img src="./img/jpeg/${i.img}" class="imagenObra"></div></a>`;
    section.appendChild(div);
}

// var link1 = document.getElementById("1");

// link1.addEventListener("click", infoFoto)

var links = document.getElementsByClassName("links");

for (let i=0; i < links.length; i++) {
    links[i].addEventListener("click", function() {
        const fotoJSON = JSON.stringify(obras[i]);
        localStorage.setItem('href', fotoJSON);
    })
}


export {obras};