//Nunca entendo si habia una diferencia entre
//herencia y polimosfirmo

class Animal{
    vivo = true;

    comer(){
        console.log(`Parece que la criatura conocida como ${this.nombre} esta comiendo`);
    }
    dormir(){
        console.log(`Parece que la criatura conocida como ${this.nombre} esta durmiendo`);
    }
}

class Conejo extends Animal{
    nombre= "conejo";
}
class Pescado extends Animal{
    nombre= "pescado";
}
class Gaviota extends Animal{
    nombre= "gaviota";
}

const conejo1 = new Conejo();

conejo1.vivo ? console.log("En efecto, es un conejo vivo") : console.log("En efecto, es un conejo muerto");

conejo1.vivo = false;
console.log(conejo1.vivo);

conejo1.comer();
conejo1.dormir();