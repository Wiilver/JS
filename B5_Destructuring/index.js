//Sirve para extraer valores de arreglos y ojetos para luego
//asignarlos a una variable de manera conveniente
//Con arreglos se usa []
//Con objetos se usa {}

//Intercambiar el valor de dos variables

let a = 1;
let b = 2;

[a, b] = [b,a];

console.log(a);
console.log(b);

//Intercambiar dos elementos de un arreglo

const colores = ["Azul", "Rojo", "Amarillo", "Morado", "Verde", "Naranja"];

[colores[0], colores[5]] = [colores[5], colores[0]];

console.log(colores);

//Asignar elementos de un arreglo a variables

const [color1, color2, color3, ...restantes] = colores;

console.log(color1);
console.log(color2);
console.log(color3);
console.log(restantes);

//Extraer valores de objetos

const persona1 = {
    nombre : "Mejillon",
    apellido : "Baleares",
    edad : 29,
    trabajo : "Farolero"
}

const persona2 = {
    nombre : "Gustavo",
    apellido : "Alamantes",
    edad : 16,
}

const {nombre = "Fulano", apellido = "De Tal", edad = "Eterno", trabajo = "Desquehacerado"} = persona1;

console.log(nombre);
console.log(apellido);
console.log(edad);
console.log(trabajo);

//Como parametro de funciones

function impresionPersonal({nombre, apellido, edad, trabajo}){
    console.log(`
        Parece que por el pueblo se encontraba ${nombre} ${apellido}, 
        con sus ${edad} años de adorno porque se veia tan vivo como el fuego,
        puede que sea por su oficio de ${trabajo}`);
}

impresionPersonal(persona1);