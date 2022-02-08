// variables
const iconHam = document.querySelector(".menuHamBtn");
const menuHam = document.querySelector(".menuHam");
const fondoM = document.querySelector(".fondoMenu");
var cont = 1

// funciones
function disableScroll(){  
    var x = window.scrollX;
    var y = window.scrollY;
    window.onscroll = function(){ window.scrollTo(x, y) };
}

function enableScroll(){  
    window.onscroll = null;
}

// main 
console.log(iconHam);
console.log(menuHam);

// iconHam.onclick = function() {
//     menuHam.classList.toggle("hide");
//     fondoM.classList.toggle("fade-in"); 
//     $(".iconHam").toggle(disableScroll(), enableScroll());
// }


iconHam.onclick = function() {
    if (cont%2 == 0) {
        menuHam.classList.add("hide");
        fondoM.classList.remove("fade-in");
        enableScroll();
    } else {
        menuHam.classList.remove("hide");
        fondoM.classList.add("fade-in"); 
        disableScroll();
    }
    cont += 1;
}