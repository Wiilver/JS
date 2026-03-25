//Async hace que una funcion devuelva una promesa
//Await hace que una funcion espere a una promesa

//Estas dos permiten escribir codigo desincronico de una manera sincronizada
//Async no tiene valores de resuelto o rechazado
//Todo aquello que este despues de un Await se queda en una queve para eventos

//No hay async sin await, pero sirven en conjunto para
//escribir codigo mucho mas legible

function leer(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            const leyo = true;
            if(leyo){
                resolve("(...Aqui no puedo decir nada, quien habla mientras lee)");
            }
            else{
                reject("Las neuronas no me dieron para tanto");
            }
        }, 1000);
    });
}

function beber(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            const leyo = true;
            if(leyo){
                resolve("glugluglu");
            }
            else{
                reject("cofcofcof");
            }
        }, 500);
    });
}

function sentir(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            const leyo = true;
            if(leyo){
                resolve("Soy aquello que puedo ser");
            }
            else{
                reject("Saquen los reels chat ");
            }
        }, 1500);
    });
}

async function mediaTarde(){
    try{
        const leerResultado = await leer();
        console.log(leerResultado);

        const beberResultado = await beber();
        console.log(beberResultado);

        const sentirResultado = await sentir();
        console.log(sentirResultado);
    }
    catch(error){
        console.error(error);
    }
}

mediaTarde();