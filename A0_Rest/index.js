//Es el contrario al spread, sirve para juntar elementos dentro de un arreglo
//Suele usarse para dar argumentos en funciones

function abrirRefri(...comidas){
    //Visualmente son iguales
    //Depende de si es un arreglo o no que se use rest o spread
    console.log(...comidas);
}

function conseguirLista(...comidas){
    return comidas;
}

const comida1 = "pizza";
const comida2 = "guajolota";
const comida3 = "bocata";
const comida4 = "fuet";
const comida5 = "vacio";

abrirRefri(comida1);
abrirRefri(comida1, comida2);
abrirRefri(comida1, comida2, comida3);
abrirRefri(comida1, comida2, comida3, comida4);
abrirRefri(comida1, comida2, comida3, comida4, comida5);

const lista = conseguirLista(comida1, comida2, comida3, comida4, comida5);
console.log(lista);

function sumar(...numeros){
    let suma = 0;
    for(let i of numeros) suma+=i;
    return suma;
}

function promedio(...numeros){
    let suma = sumar(...numeros);
    return suma/numeros.length;
}

const num1 = 1;
const num2 = 3;
const num3 = 234;
const num4 = 6;
const num5 = 8;
const num6 = 22;

//No hace falta que uses variables
console.log(sumar(num1, num2, num3, num4, num5, num6, 99, 21, -9));

console.log(promedio(num1, num2, num3, num4, num5, num6, 99, 21, -9));
console.log(promedio(10, 8, 9, 10, 7, 8));

function juntarStrings(...cadenas){
    return cadenas.join(" ");
}
console.log("Jose", "Alfredo", "Aquelarre", "Bonifacio", "Tercero");