//clases
class productos {
    constructor(nombre, precio) {
        this.nombre = nombre;
        this.precio = parseInt(precio);
    }
}

const prod = [];

prod.push(new productos("obra1", prompt("valor de obra:")));
prod.push(new productos("obra2", prompt("valor de obra:")));
prod.push(new productos("obra3", prompt("valor de obra:")));
prod.push(new productos("obra4", prompt("valor de obra:")));
prod.push(new productos("obra5", prompt("valor de obra:")));




// for (let i = 0; i <= prod.length; i++) {
    
// }

for(objeto of prod) {
    let section = document.getElementById("cardContainer");
    let div = document.createElement("div");
    div.innerHTML = `<div class="card"><div class="foto cFlex"></div><div class="nombre cFlex"><h4>${objeto.nombre}</h4></div><div class="precio cFlex"><h4>${objeto.precio}</h4></div></div>`;
    section.appendChild(div);
}