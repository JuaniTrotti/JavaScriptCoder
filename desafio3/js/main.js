// variables
var cantInvitados = prompt("¿A cuantos queres invitar a tu fiesta?");
var invitados = 0

for (let i = 1; i <= cantInvitados; i++) {
    let nombre = prompt("Ingrese nombre");
    let edad = prompt("Ingrese edad");
    if (edad < 18) {
        alert("Es menor de edad, no puede asistir")
    } else {
        console.log(nombre + " de " + edad + " esta invitado");
        invitados++;
    }
}

alert("Invitados para tu fiesta: " + invitados);