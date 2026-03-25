//Una callback se asegura de que una funcion termine antes de hacer mas
//Si hay acciones que le tomen mucho tiempo al programa, asegura
//que estos se ejecuten antes de seguir

function buenas(callback){
    console.log("Eyyyyy que pasa colegui, buenisimas tardes hermano");
    callback();
}

function vete(){
    console.log("Echate pa tras, perro");
}

buenas(vete);

//SWe pueden pasar argumentos a la callback
function sumar(callback, x, y){
    let resultado = x+y;
    callback(resultado);
}

function diibujarTexto(texto){
    document.getElementById("Texto").textContent = texto;
}

sumar(diibujarTexto, 1, 2);