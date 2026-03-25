//Esto es muy raro que tenga usos practicos aparte de para hacer jueguitos

const cartas = ["A", 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K"];

//Este es el primer algoritmo raro que uso Fisher-Yates

mezclar(cartas);
console.log(cartas);

function mezclar(arr){
    for(let i = arr.length-1; i > 0; i--){
        const rnd = Math.floor(Math.random()*(i+1));
        [arr[i], arr[rnd]] = [arr[rnd], arr[i]];
    }
    return arr;
}