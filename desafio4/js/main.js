var precioInicial = 0;
var valorTotalPro = 0
var obra1 = 600;
var obra2 = 700;
var obra3 = 1000;
var obra4 = 8000;
var obra5 = 2200;
var obra6 = 1850;

function hayDatos() {
    sino = prompt("Agregar productos al carro?").toLowerCase();
    while (sino != "si" && sino != "no") {
        alert("Ingrese SI o NO");
        sino = prompt("Agregar productos al carro?").toLowerCase();
    }
    return sino;
}

function cantidad() {
    res = prompt("Cuantos queres llevar? (CANTIDAD EN NUMEROS)");
    while (esNumero(res) == false) {
        alert("Ingrese CANTIDAD EN NUMEROS");
        res = prompt("Cuantos queres llevar? (CANTIDAD EN NUMEROS)");
    }
    return res;
}

function precioFinal(pf) {
    return precioInicial = precioInicial + pf;
}

function masDeUno(pp, c) {
    return pp * c;
}

function esNumero(res) {
    if (res / 1 == res) {
        return true;
    } else {
        return false;
    }
}

hayDatos();

while (sino == "si") {
    product = prompt("que obra queres llevar? (para elegir ponga el numero del producto (1, 2 .... 6))");

    switch (product) {
        case "1":
            cantidad()
            if (res > 1) {
                precioFinal(masDeUno(obra1, res));
            } else {
                precioFinal(obra1);
            }
            break;
        case "2":
            cantidad()
            if (res > 1) {
                precioFinal(masDeUno(obra2, res));
            } else {
                precioFinal(obra2);
            }
            break;
        case "3":
            cantidad()
            if (res > 1) {
                precioFinal(masDeUno(obra3, res));
            } else {
                precioFinal(obra3);
            }
            break;
        case "4":
            cantidad()
            if (res > 1) {
                precioFinal(masDeUno(obra4, res));
            } else {
                precioFinal(obra4);
            }
            break;
        case "5":
            cantidad()
            if (res > 1) {
                precioFinal(masDeUno(obra5, res));
            } else {
                precioFinal(obra5);
            }
            break;
        case "6":
            cantidad()
            if (res > 1) {
                precioFinal(masDeUno(obra6, res));
            } else {
                precioFinal(obra6);
            }
            break;
        default:
            alert("para elegir ponga el numero del producto (1, 2 .... 6)")
            break;
    }

    hayDatos()
}

alert("Precio a pagar: " + precioInicial)