//Reduce los elementos de un arreglo a un unico valor
//No se me ocurre porque usaria esto en vez de la funcion sin mas

function suma(acum, e){
    return acum + e;
}

const precios = [21, 22, 10, 16, 12, 4, 64];

const total = precios.reduce(suma);

console.log(total);