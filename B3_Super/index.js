//La palabra super se refiere a sacar algo del papa

class Animal{
    constructor(nombre, edad){
        this.nombre = nombre;
        this.edad = edad;
    }
    moverse(){
        console.log(`Parece que el ${this.nombre} se empezo a mover`);
    }
}

class Conejo extends Animal{
    constructor(nombre, edad, velocidad){
        super(nombre, edad);
        this.velocidad = velocidad;
    }
    correr(){
        super.moverse(this.nombre);
        console.log(`Nuestro querido ${this.nombre} esta corriendo a una velocidad de ${this.velocidad} km/h`);
    }
}

const conejo1 = new Conejo("Conejo Boton", 2, 41);

conejo1.correr();