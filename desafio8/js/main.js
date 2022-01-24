// //variables
// const totalPersonas = [];
// const almacenados = [];
// var sino = "";

// //clases
// class personas {
//     constructor(nombre, email, DNI) {
//         this.nombre = nombre.toLowerCase();
//         this.email = email.toLowerCase();
//         this.DNI = parseInt(DNI);
//     }
// }

// //funciones
// function hayDatos(sino) {
//     sino = prompt("Agregar productos al carro?").toLowerCase();
//     while (sino != "si" && sino != "no") {
//         alert("Ingrese SI o NO");
//         sino = prompt("Agregar productos al carro?").toLowerCase();
//     }
//     return sino;
// }

// function pedirDatos() {
//     let nombre = prompt("ingrese su nombre:");
//     // document.getElementById("nombre").innerHTML = "<li>nombre:"+ nombre +"</li>";
//     let mail = prompt("ingrese su mail:");
//     // document.getElementById("nombre").innerHTML = "<li>nombre:"+ nombre +"</li>";
//     let DNI = prompt("ingrese su DNI");
//     // document.getElementById("nombre").innerHTML = "<li>nombre:"+ nombre +"</li>";
//     totalPersonas.push(new personas(nombre, mail, DNI));
// }
    

// function guardarDatos(clave, valor) {
//     // const valor = almacenados.concat(jsonN);
//     localStorage.setItem(clave, valor);
// }

// function crearPersonas(totalPersonas) {
//     for(objeto of totalPersonas) {
//         let section = document.getElementById("datosPersonaNueva");
//         let div = document.createElement("div");
//         div.innerHTML = "<div class='persona'><ul class='listaDeDatos'><li id='nombre'>Nombre:"+ objeto.nombre +"</li><li id='gmail'>Email:"+ objeto.email +"</li><li id='DNI'>DNI:"+ objeto.DNI+"</li></ul></div>";
//         section.appendChild(div);
//     }
// }

// function levantarJSON() {
//     const almacenados = JSON.parse(localStorage.getItem("totalpersonas"));
//     console.log(almacenados);

//     for(objeto of almacenados) {
//         let section = document.getElementById("datosPersonasAntes");
//         let div = document.createElement("div");
//         div.innerHTML = "<div class='persona'><ul class='listaDeDatos'><li id='nombre'>Nombre:"+ objeto.nombre +"</li><li id='gmail'>Email:"+ objeto.email +"</li><li id='DNI'>DNI:"+ objeto.DNI+"</li></ul></div>";
//         section.appendChild(div);
//     }
// }

// function hayJSON() {
//     for (let i = 0; i < localStorage.length; i++) {
//         let clave = localStorage.key(i);
//         console.log("clave: "+ clave);
//         console.log("valor: "+ localStorage.getItem(clave));
//     }

//     if (localStorage.length > 0) {
//         levantarJSON(totalPersonas);
//     }
// }

// function concatenarYguardar(totalPersonas) {
//     const arr1 = JSON.parse(localStorage.getItem("totalpersonas"));
//     const arr2 = totalPersonas;
//     const arr3 = arr1.concat(arr2);
//     guardarDatos("totalpersonas", JSON.stringify(arr3));
// }

// // main



// while(hayDatos(sino) == "si") {
//     pedirDatos();
// }

// crearPersonas(totalPersonas);

// if (localStorage.length > 0) {
//     concatenarYguardar(totalPersonas);

// } else {
//     guardarDatos("totalpersonas", JSON.stringify(totalPersonas));
// }

// hayJSON();

var calcular = document.getElementById("calcular");

class calculadora {
    constructor(precioInicial, precioAnual, anios, interes) {
        this.precioInicial = parseInt(precioInicial);
        this.precioAnual = parseInt(precioAnual);
        this.anios = parseInt(anios);
        this.interes = parseInt(interes);
        this.mensual = parseInt(this.precioAnual / 12);
    }

    solucion() {
        // console.log(this.precioInicial);
        // console.log(this.precioAnual);
        // console.log(this.anios);
        // console.log(this.interes);
        // console.log(this.mensual);

        var final = this.precioInicial;
        var interesAcumulado = 0;
        let canMeses = 12 * this.anios;
        var adicionAnual = this.mensual * canMeses;
        var interesMensual = this.interes / 12;


        for (let i = 1; i <= canMeses; i++) {
            let porcen = ((interesMensual * final) / 100);
            interesAcumulado += porcen;
            final += porcen + this.mensual;
            console.log("hola")
        }

        // console.log(final);
        // console.log(interesAcumulado);

        document.getElementById("listaR").innerHTML = `<li id="rAnio">${this.anios}</li><li id="rDI">${this.precioInicial}</li><li id="rDA">${adicionAnual}</li><li id="rIA">${parseFloat(interesAcumulado).toFixed(2)}</li><li id="rT">${parseFloat(final).toFixed(2)}</li>`
    }

}


function cargar() {
    var preIn = document.getElementById("precioInicial").value;
    var preAn = document.getElementById("precioAnual").value;
    var preAnio = document.getElementById("anios").value;
    var preInteres = document.getElementById("interes").value;
    const interesCompuesto = new calculadora(preIn, preAn, preAnio, preInteres);
    // console.log(interesCompuesto);
    

    validar(interesCompuesto);
    resultado(interesCompuesto);
}

function validar(form) {
    var contenido = "";

    if (isNaN(form.precioInicial)) {
        contenido += "Campo inicial no Valido.<br>";
    } 
    if (isNaN(form.precioAnual)) {
        contenido += "Campo anual no Valido.<br>";
    }
    if (isNaN(form.anios)) {
        contenido += "Campo anios no Valido.<br>";
    }
    if (isNaN(form.interes)) {
        contenido += "Campo interes no Valido.<br>";
    }
    document.getElementById("listaError").innerHTML = contenido;
}

function resultado(form) {
    if (document.getElementById("listaError").innerHTML == "") {
        form.solucion();
    }
}

function guardarDatos(clave, valor) {
    localStorage.setItem(clave, valor);
}

calcular.onclick = () => {
    cargar();
}







    // form.push(preIn);
    // form.push(preAn);
    // form.push(preAnio);
    // form.push(preInteres);
    // form.push(preCant);