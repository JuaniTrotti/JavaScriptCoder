//variables
const totalPersonas = [];
const almacenados = [];
var sino = "";

//clases
class personas {
    constructor(nombre, email, DNI) {
        this.nombre = nombre.toLowerCase();
        this.email = email.toLowerCase();
        this.DNI = parseInt(DNI);
    }
}

//funciones
function hayDatos(sino) {
    sino = prompt("Agregar productos al carro?").toLowerCase();
    while (sino != "si" && sino != "no") {
        alert("Ingrese SI o NO");
        sino = prompt("Agregar productos al carro?").toLowerCase();
    }
    return sino;
}

function pedirDatos() {
    let nombre = prompt("ingrese su nombre:");
    // document.getElementById("nombre").innerHTML = "<li>nombre:"+ nombre +"</li>";
    let mail = prompt("ingrese su mail:");
    // document.getElementById("nombre").innerHTML = "<li>nombre:"+ nombre +"</li>";
    let DNI = prompt("ingrese su DNI");
    // document.getElementById("nombre").innerHTML = "<li>nombre:"+ nombre +"</li>";
    totalPersonas.push(new personas(nombre, mail, DNI));
}
    

function guardarDatos(clave, valor) {
    // const valor = almacenados.concat(jsonN);
    localStorage.setItem(clave, valor);
}

function crearPersonas(totalPersonas) {
    for(objeto of totalPersonas) {
        let section = document.getElementById("datosPersonaNueva");
        let div = document.createElement("div");
        div.innerHTML = "<div class='persona'><ul class='listaDeDatos'><li id='nombre'>Nombre:"+ objeto.nombre +"</li><li id='gmail'>Email:"+ objeto.email +"</li><li id='DNI'>DNI:"+ objeto.DNI+"</li></ul></div>";
        section.appendChild(div);
    }
}

function levantarJSON() {
    const almacenados = JSON.parse(localStorage.getItem("totalpersonas"));
    console.log(almacenados);

    for(objeto of almacenados) {
        let section = document.getElementById("datosPersonasAntes");
        let div = document.createElement("div");
        div.innerHTML = "<div class='persona'><ul class='listaDeDatos'><li id='nombre'>Nombre:"+ objeto.nombre +"</li><li id='gmail'>Email:"+ objeto.email +"</li><li id='DNI'>DNI:"+ objeto.DNI+"</li></ul></div>";
        section.appendChild(div);
    }
}

function hayJSON() {
    for (let i = 0; i < localStorage.length; i++) {
        let clave = localStorage.key(i);
        console.log("clave: "+ clave);
        console.log("valor: "+ localStorage.getItem(clave));
    }

    if (localStorage.length > 0) {
        levantarJSON(totalPersonas);
    }
}

function concatenarYguardar(totalPersonas) {
    const arr1 = JSON.parse(localStorage.getItem("totalpersonas"));
    const arr2 = totalPersonas;
    const arr3 = arr1.concat(arr2);
    guardarDatos("totalpersonas", JSON.stringify(arr3));
}

// main



while(hayDatos(sino) == "si") {
    pedirDatos();
}

crearPersonas(totalPersonas);

if (localStorage.length > 0) {
    concatenarYguardar(totalPersonas);

} else {
    guardarDatos("totalpersonas", JSON.stringify(totalPersonas));
}

hayJSON();

// localStorage.clear();
