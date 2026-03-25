//Curiosamente los errores son objetos
try{
    console.log("Buenas tardes");
    throw new Error("Puedes crearte errores si lo ocupas");
}
catch(error){
    console.error(error);
}
finally{
    console.log("Cerrando archivos");
}
console.log("Terminaste el programa");