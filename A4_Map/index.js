//Es exactamente igual que forEach, solo que map devuelve un nuevo arreglo

const numeros = [1, 2, 3, 4, 5];

function cubos(e){
    return Math.pow(e, 3);
}

const cubascos = numeros.map(cubos);
console.log(cubascos);
console.log(numeros);

function mayusculizar(e){
    return e.toUpperCase();
}

const nombres = ["pedro", "leticia", "arachnea", "natsenka", "palo"];

const nuevos = nombres.map(mayusculizar);
console.log(nuevos);

function formatoFechas(e){
    const elem = e.split("-");
    return `${elem[1]}-${elem[2]}-${elem[0]}`;
}

const fechas = ["2005-02-10", "2016-25-9", "2007-31-1"];

const nuevas = fechas.map(formatoFechas);
console.log(nuevas);