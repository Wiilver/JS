//Da un retraso a la ejecucion de cierto codigo
//No es muy preciso

let timeout;

function temp(){
    console.log("Inicio");
    timeout = setTimeout(()=>window.alert("Buenas"), 3000);
}

function canc(){
    console.log("Cancelo");
    clearTimeout(timeout);
}