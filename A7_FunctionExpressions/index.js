//Es basicamente crear una function para poder usarla como un parametro
//Es como cuando en react declaras functions en functions 
//Sirve principalmente para no ensuciar los nombres disponibles para funciones

setTimeout(function(){
    console.log("Buenisimas tardes");
}, 3000);

const numeros = [1, 2, 3, 4, 5, 6];

const cuadrados = numeros.map(function(e){
    return Math.pow(e, 2);
});

console.log(cuadrados);