//Static define propiedades u objetos para la clase en vez de hacerlo para el objeto

class Mateburricas{
    static Sumar(a,b){return a+b};
    static Restar(a,b){return a-b};
    static Cuadrado(a){return Math.pow(a,2)};
}

console.log(Mateburricas.Sumar(10,20));
console.log(Mateburricas.Restar(10,20));
console.log(Mateburricas.Cuadrado(20));

//Solo quiero recordar como se hacian las clases

class Usuario{
    static contador = 0;
    constructor(nombre, id){
        this.nombre = nombre;
        this.id = id;
        Usuario.contador++;
    }
    static reporte(){
        console.log(`Actualmente hay ${Usuario.contador} usuarios en el sistema`);
    }
    saludo(){
        console.log(`Buenisimas tardes, mi nombre es ${this.nombre}`);
    }
}

const usuario1 = new Usuario("Felpudez",1123);
const usuario2 = new Usuario("Yelepo",1223);

usuario1.saludo();
usuario2.saludo();

Usuario.reporte();
console.log(Usuario.contador);