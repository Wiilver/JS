//filter es, en efecto, un filtro
//devuelve un nuevo arreglo
//El filtro lo hace por medio de una callback que puedes definir
//Si la callback devuelve true para el elemento, lo guarda


function esPar(e){
    return e%2 == 0;
}

function esImpar(e){
    return e%2 == 1;
}

function esMayor(e){
    return e >= 18;
}

function esMenor(e){
    return e < 18;
}

let numeros = [1,2,3,4,5,6,7,8,9];

let pares = numeros.filter(esPar);
let impares = numeros.filter(esImpar);

console.log(pares);
console.log(impares);

let edades = [18, 21, 16, 14, 17, 20, 19, 21, 12, 4, 45];

let adultos = edades.filter(esMayor);
let chamacos = edades.filter(esMenor);

console.log(adultos);
console.log(chamacos);