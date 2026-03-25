//Son objetos que manejan operaciones acincronicas
//puedes usarlas para encerrar codigo que necesite tiempo
//La promesa devuelve un valor
//El valor inicia como pendiente y luego se convierte en resuelto o rechazado

//Si devuelve rechazado el resto de promesas no se cumplen

//su estructura suele ser new Promise(resolve, reject)=>(codigo)

//Ejemplo de orden

//1.- Caminar

//2.- Comer

//3.- Dormir

function caminar(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            const caiste = false;
            if(!caiste){
                resolve("Fue hermano, que caminacion tan caminada");
            }
            else{
                reject("Me rompieron las piernas");
            }
        }, 1500);
    })
}

function comer(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            const ahogaste = false;
            if(!ahogaste){
                resolve("En definitiva esta comida esta espectacular");
            }
            else{
                reject("Mh'e stghi hghando");
            }
        }, 2500);    
    })
}

function dormir(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            const implosion = false;
            if(!implosion){
                resolve("A mimir pronto que el tiempo mengua");
            }
            else{
                reject("pum");
            }
        }, 500);
    })
}

caminar().then(v=>{console.log(v); return comer()})
         .then(v=>{console.log(v); return dormir()})
         .then(v=>console.log(v)).catch(e=>console.error(e));

//Es mucho más lindo que simplemente usar callbacks

/*Por puro ejemplo, asi se veria

function caminar(callback){
    setTimeout(()=>{
        console.log("Fue hermano, que caminacion tan caminada");
        }, 1500);)
    });
    callback();
}

function comer(callback){
    setTimeout(()=>{
        console.log("En definitiva esta comida esta espectacular");
        }, 2500);)
    });
    callback();
}

function dormir(){
    setTimeout(()=>{
        console.log("A mimir pronto que el tiempo mengua");
        }, 500);)
    });
    callback();
}

caminar(()=>{
    comer(()=>{
        dormir()
        })
    }
);

*/