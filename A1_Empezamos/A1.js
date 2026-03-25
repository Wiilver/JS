console.log("Buenas tardes");
console.log("Esto es horrendo");
/*
Los comentarios son iguales que en c++
window.alert("Esto es una alerta");
window.alert("Esto es realmente extraño");
*/ 

document.getElementById("titulo_hd").textContent = "Buenas tardes";
document.getElementById("par_bd").textContent="No se que quisieras escribir realmente"

//Las variables se declaran con 'let'
let x;
x = 8;

console.log(x);

//Tambien sirve al mismo tiempo
let y = 123;
console.log(y);

//Para hacer parse ocupas usar `estas` comillas}
console.log(`Las dos variables que tienes creadas son ${x} y ${y}`);

//Usar typeof da el dato
console.log(typeof x);

let nombre = "Chicot";
console.log(`Mi nombre no es ${nombre}`);

let online = true;
console.log(typeof online);
console.log(`El script esta escrito de manera correcta? ${online}`);

document.getElementById("var_bd").textContent = nombre;

let cosa;
cosa = document.getElementById("texto").textContent;

console.log(cosa);

//Cosas aritmeticas
//Funciona el ++ y el +=
x+=1;
console.log(x);

console.log(x+1);

console.log(x/3);

console.log(x%3);

console.log(x**.5);

console.log(x/2);
console.log(x-1**100+2);

//input
let usuario = window.prompt("Cual es tu usuario?");
console.log(usuario);

function presiono()
{
    let cosilla = document.getElementById("input").value;
    console.log(cosilla)
}