var nombre1 = prompt("Nombre usuario 1");
var edad1 = prompt("Edad de usuario 1");
alert("Ingresaste: " + nombre1 + " de " + edad1);

var nombre2 = prompt("Usuario 2");
var edad2 = prompt("Edad de usuario 2");
alert("Ingresaste: " + nombre2 + " de " + edad2);

if (edad1 > edad2) {
    alert(nombre1 + " es mayor");  
} else if (edad1 < edad2) {
    alert(nombre2 + " es mayor");
} else {
    alert(nombre1 + " y " + nombre2 + " tienen la misma edad");
}