//Son basicamente diccionarios

const Estudiante = {
    nombre : "Jaramillo Gonzalez Perez Fuentes",
    edad  : 19,
    matricula : 21233,
    carrera : "LF",
    vive : true,
    saludo : () => console.log("Buen dia compañero"),
    despedida : ()=> console.log("Tengo que irme amigo, cuidate")
}

console.log(Estudiante.nombre);

Estudiante.saludo();

if(Estudiante.vive) console.log(`El estudiante ${Estudiante.nombre} se encuentra en vida`);
else console.log(`El estudiante ${Estudiante.nombre} ya solo es un recuerdo`);

//Se usa this para referenciar el propio objeto

const Maestro = {
    nombre : "Jasnah Marques Guzman de Toledo",
    saludo : function(){ console.log(`Espero que nos llevemos bien, mi nombre es ${this.nombre}`)}
}

Maestro.saludo();