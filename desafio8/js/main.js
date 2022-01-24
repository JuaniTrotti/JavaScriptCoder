//vairables
var calcular = document.getElementById("calcular");

//clases
class calculadora {
    constructor(precioInicial, precioAnual, anios, interes) {
        this.precioInicial = parseInt(precioInicial);
        this.precioAnual = parseInt(precioAnual);
        this.anios = parseInt(anios);
        this.interes = parseInt(interes);
        this.mensual = parseInt(this.precioAnual / 12);
    }

    solucion() {
        var final = this.precioInicial;
        var interesAcumulado = 0;
        let canMeses = 12 * this.anios;
        var adicionAnual = this.mensual * canMeses;
        var interesMensual = this.interes / 12;

        for (let i = 1; i <= canMeses; i++) {
            let porcen = ((interesMensual * final) / 100);
            interesAcumulado += porcen;
            final += porcen + this.mensual;
        }

        document.getElementById("listaR").innerHTML = `<li id="rAnio">${this.anios}</li><li id="rDI">${this.precioInicial}</li><li id="rDA">${adicionAnual}</li><li id="rIA">${parseFloat(interesAcumulado).toFixed(2)}</li><li id="rT">${parseFloat(final).toFixed(2)}</li>`
    }

}

//funciones
function cargar() {
    var preIn = document.getElementById("precioInicial").value;
    var preAn = document.getElementById("precioAnual").value;
    var preAnio = document.getElementById("anios").value;
    var preInteres = document.getElementById("interes").value;
    const interesCompuesto = new calculadora(preIn, preAn, preAnio, preInteres);

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

//main
calcular.onclick = () => {
    cargar();
}