// clases
class personas {
    constructor(n1, n2) {
        this.nombre = n1.toLowerCase();
        this.edad = parseInt(n2)
    }
}

// variables
const arrayPersonas = [];

// cargo el array
arrayPersonas.push(new personas("Oscar", "43"));
arrayPersonas.push(new personas("Marcela", "43"));
arrayPersonas.push(new personas("Mercedes", "42"));
arrayPersonas.push(new personas("Palacios", "22"));

// muestro el array original
console.log(arrayPersonas);

// ordeno el array de menor a mayor
arrayPersonas.sort(function(a,b){return a.edad - b.edad;});

muestro el array ordenado
console.log(arrayPersonas.sort());

