//Son funciones dentro de funciones, la hija tiene 
//acceso a toda la informacion de la padre

function primera(){
    let mensaje = "Hey";
    function segunda(){
        console.log(mensaje);
    }
    segunda();
}

primera();

//Si las variables no estan en el rango correcto, no se aplican

mensaje = "Adios";

primera();

function crearContador(){
    let cont = 0;
    function incrementar(){
        cont++;
        console.log(`El contador aumento a ${cont}`);
    }

    function darValor(){
        return cont;
    }
    return{incrementar, darValor};
}
const contador = crearContador();
contador.incrementar();
contador.incrementar();
contador.incrementar();
contador.incrementar();
contador.incrementar();
contador.incrementar();

console.log(`El valor actual del contador es ${contador.darValor()}`);


function crearJuego(){

    let puntaje = 0;
    
    function sumarPuntos(puntos){
        puntaje += puntos;
        console.log(`Se restaron ${puntos} puntos`);
    }
    function restarPuntos(puntos){
        puntaje -= puntos;
        console.log(`Se restaron ${puntos} puntos`);
    }
    function verPuntuacion(){
        return puntaje;
    }
    
    return{sumarPuntos, restarPuntos, verPuntuacion};
}

const juego = crearJuego();

juego.sumarPuntos(10);
juego.restarPuntos(4);

console.log(`Actualmente se tienen ${juego.verPuntuacion()} puntos`);
