// variables
var contador = 0;
const carrito = [];
var sino = "";
var preciofinal = 0;

// objetos
class producto {
    constructor(obra, precio, cantidad) {
        this.obra = obra.toLowerCase();
        this.precio = parseInt(precio);
        this.cantidad = parseInt(cantidad);
        this.precioTotal = this.precio * this.cantidad; 
    }
}

// funciones
function hayDatos(sino) {
    sino = prompt("Agregar productos al carro?").toLowerCase();
    while (sino != "si" && sino != "no") {
        alert("Ingrese SI o NO");
        sino = prompt("Agregar productos al carro?").toLowerCase();
    }
    return sino;
}

function cantidad() {
    let res = parseInt(prompt("Cuantos queres llevar? (CANTIDAD EN NUMEROS)"));
    while (res / 1 != res) {
        alert("Ingrese CANTIDAD EN NUMEROS");
        res = prompt("Cuantos queres llevar? (CANTIDAD EN NUMEROS)");
    }
    return res;
}

function resumen(preciofinal) {
    for (const i of carrito) {
        alert("item: " + i.obra + " cantidad: " + i.cantidad + " precio: $" + i.precio + " total a pagar: $" + i.precioTotal);
        preciofinal = preciofinal + i.precioTotal;
    }
    alert("total a pagar: $" + preciofinal);
}



// main
while (hayDatos(sino) == "si" && contador <= 3) {
    let product = prompt("que obra queres llevar? (para elegir ponga el numero del producto (1, 2 o 3))");
    contador =+ 1;

    switch (product) {
        case "1":
            carrito.push(new producto("obra1", "600", cantidad()));
            break;
        case "2":
            carrito.push(new producto("obra2", "700", cantidad()));
            break;
        case "3":
            carrito.push(new producto("obra3", "1000", cantidad()));
            break;
        default:
            alert("para elegir ponga el numero del producto (1, 2 o 3)")
            break;
    }
}

resumen(preciofinal);