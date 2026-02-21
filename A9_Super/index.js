//Es lo de sacar algo del papa

class Animal{
    constructor(nombre, edad, velocidad){
        this.nombre = nombre;
        this.edad = edad;
    }
}

class Conejo extends Animal{
    especie = "conejo";
    constructor(nombre, edad, v_correr){
        super(nombre, edad);
        this.v_correr = v_correr;
    }

}

class Pez extends Animal{
    especie = "pez";
    constructor(nombre, edad, v_nadar){
        super(nombre, edad);
        this.v_nadar = v_nadar;
    }
}

class Paloma extends Animal{
    especie = "paloma";
    constructor(nombre, edad, v_volar){
        super(nombre, edad);
        this.v_volar = v_volar;
    }
}


const paloma1 = new Paloma("Alfreda", 4, 25);

console.log(paloma1);