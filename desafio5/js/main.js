var contador = 0;
var precioFinal = 0;

class producto {
    constructor(obra, precio, cantidad) {
        this.obra = obra.toLowerCase();
        this.precio = parseInt(precio);
        this.cantidad = parseInt(cantidad);
        this.precioTotal = this.precio * this.cantidad; 
    }

    masdeUno() {
        alert("precioFinal: " + this.precio * this.cantidad);
    }
}



function hayDatos() {
    sino = prompt("Agregar productos al carro?").toLowerCase();
    while (sino != "si" && sino != "no") {
        alert("Ingrese SI o NO");
        sino = prompt("Agregar productos al carro?").toLowerCase();
    }
    return sino;
}


function cantidad() {
    var res = prompt("Cuantos queres llevar? (CANTIDAD EN NUMEROS)");
    while (esNumero(res) == false) {
        alert("Ingrese CANTIDAD EN NUMEROS");
        res = prompt("Cuantos queres llevar? (CANTIDAD EN NUMEROS)");
    }
    return res;
}

function esNumero(res) {
    if (res / 1 == res) {
        return true;
    } else {
        return false;
    }
}

hayDatos();

while (sino == "si" && contador <= 3) {
    let product = prompt("que obra queres llevar? (para elegir ponga el numero del producto (1, 2 o 3))");
    contador =+ 1;

    switch (product) {
        case "1":
            const p1 = new producto("obra1", "600", cantidad());
            precioFinal =  precioFinal + p1.precioTotal;
            break;
        case "2":
            const p2 = new producto("obra2", "700", cantidad());
            precioFinal =  precioFinal + p2.precioTotal;
            break;
        case "3":
            const p3 = new producto("obra3", "1000", cantidad());
            precioFinal =  precioFinal + p3.precioTotal;
            break;
        default:
            alert("para elegir ponga el numero del producto (1, 2 o 3)")
            break;
    }

    hayDatos()
}

alert("precio total a pagar: " + precioFinal);



