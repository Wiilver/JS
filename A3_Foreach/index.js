//Es parecido a un loop de toda la vida, con la diferencia de que este es
//Una funcion en si, sirve para llamar una callback a la cual le pasas
//el elemento, el indice, y el arreglo en cada iteracion

let numeros = [1, 2, 3, 4, 5];

function impresion(elem){
    console.log(elem);
}

function doble(elem, indice, arreglo){
    arreglo[indice] = elem*2;
}

function cuadrado(elem, indice, arreglo){
    arreglo[indice] = Math.pow(elem, 2);
}

numeros.forEach(cuadrado);
numeros.forEach(impresion);

function capitalizar(e, i, arr){
    arr[i] = e.toUpperCase();
}

let str = "Me gusta mucho el color azul";
let copia = [...str];
copia.forEach(capitalizar);
console.log(...copia);