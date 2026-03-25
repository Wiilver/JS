//Son objetos dentro de objetos
//Sirven para agrupar mejor la informacion

const persona = {
    nombre : "Panto",
    apellido : "Viñedo",
    edad : 29,
    estudiante : true,
    hobbies : ["Estudio", "Astronomía", "Pintura"],
    direccion : {
        calle : "Avenida Solidaridad",
        numero : 124,
        colonia : "Tres Cruces",
        cdopst : 31412,
        ciudad : "Guadalajara"
    }
}

//Shotout to Dra Edna for hacerme daño con los indices desde 1er semestre
console.log(persona.direccion.calle);
console.log(persona.hobbies[0]);

class Direccion{
    constructor(calle, numero, colonia){
        this.calle = calle;
        this.numero = numero;
        this.colonia = colonia;
    }
}

class Persona{
    constructor(nombre, edad, ...direccion){
        this.nombre = nombre;
        this.edad = edad;
        this.direccion = new Direccion(...direccion);
    }
}

const persona1 = new Persona("Jose", 12, 
                                        "Velociraptor", 
                                        124, 
                                        "Bienaventurado");
console.log(persona1.direccion.calle);