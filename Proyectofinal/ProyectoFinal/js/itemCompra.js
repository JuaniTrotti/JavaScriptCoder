// variables
var linkId = JSON.parse(localStorage.getItem('href'));

// funciones
function crearFoto(f) {
    let section = document.getElementById("obraP");
    let div = document.createElement("div");
    div.innerHTML = `<div class="containerImg cFlex">
                        <img src="../img/jpeg/${f.img}" alt="" class="imgO">
                    </div>`;
    section.appendChild(div);
}

function crearTitulo(t) {
    let section = document.getElementById("tituloP");
    let div = document.createElement("div");
    div.innerHTML = `<div class="nyd cFlex">
                         <div class="nombreO lb cFlex">
                             <h2 class="textoTituloObra">${t.nombre}</h2>
                         </div>
                         <div class="dimensionO lb cFlex">
                             <h2 class="textoDimensiones">${t.dim}</h2>
                         </div>
                     </div>
                     <div class="precio lb cFlex">
                          <h2 class="textoPrecio">$${t.precio}</h2>
                     </div>`;
    section.appendChild(div);
    div.className = "tituloContainer cFlex";
}

// main
console.log(linkId);


crearFoto(linkId);
crearTitulo(linkId);
