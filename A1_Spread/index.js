//Operador Spread(...[]) Sirve para tratar a un arreglo como elementos
//O a elementos como un arreglo

let str = "Hola muy buenas tardes";
console.log([...str]);

//Esto es basicamente lo mismo, sin embargo, el [...arr] es un objeto nuevo
//Por tanto, no hay problemas con direcciones
let arr = ["Azul", "Violeta", "Morado", "Merjillon"];
console.log([...arr])

//Cuando no usas corchetes lo conviertes en una unica cosa
//En este caso es un unico string
console.log(...arr)

//Con arreglos suele usarse pero para ciertos metodos
let num = [1, 4, 2, 3];
console.log(Math.max(...num));

//Sirve tambien para juntar arreglos
let cosas = [...arr, ...str];
console.log(cosas);