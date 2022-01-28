class card{
    constructor(id, nombre, precio, descripcion) {
        this.id = parseInt(id);
        this.nombre = nombre.toLowerCase();
        this.precio = parseFloat(precio).toFixed(2);
        this.descripcion = descripcion;
    }
}

const cards = [];

cards.push(new card(1, "obra1", 230, "desc obra1"));
cards.push(new card(2, "obra2", 530, "desc obra2"));
cards.push(new card(3, "obra3", 830, "desc obra3"));
cards.push(new card(4, "obra4", 130, "desc obra4"));



for(let i of cards) {
    let section = document.getElementById("containerO");
    let div = document.createElement("div");
    div.innerHTML = `<a href="index2.html"><div class="obra cFlex"><h4>${i.nombre}</h4><h5>${i.precio}</h5></div></a>`;
    section.appendChild(div);
}

// export default card;