//Es un metodo que ordena elementos de un arreglo
//Si el elemento es una cadena, lo ordena de manera lexicografica, considerando
//numeros y letras
//Compara caracter por caracter, por ello, el orden lexicografico de 1, 2 y 10 es
//1, 10, y 2

let frutas = ["sandia", "maracuya", "durazno", "kiwi", "manzana",]

frutas.sort();
console.log(frutas);

let numeros = [5, 1, 2, 7, 2, 23, 65, 0 , 1, 12];

numeros.sort();
console.log(numeros);

numeros.sort((a,b)=>a-b);
console.log(numeros);

numeros.sort((a,b)=>b-a);
console.log(numeros);

const personas = [
    {nombre : "Quizche", edad : 45, calificaciones : 98},
    {nombre : "Melereon", edad : 30, calificaciones : 23},
    {nombre : "Pamela", edad : 92, calificaciones : 81},
    {nombre : "Mizcha", edad : 21, calificaciones : 100},
];

let edades = [...personas];
edades.sort((a,b)=>b.edad-a.edad);
console.log(edades);

let calificaciones = [...personas];
calificaciones.sort((a,b)=>b.calificaciones-a.calificaciones);
console.log(calificaciones);

let alpha = [...personas];
alpha.sort((a,b)=> a.nombre.localeCompare(b.nombre));
console.log(alpha);