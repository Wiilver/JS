//Cosa chistosa, no sabia que JSON venia de aqui (JavaScript Object Notation)

//Al contrario de lo que tenia entendido, los json pueden ser tratados como
//estructuras distintos a diccionarios ({"key" : value}) aqui pueden ser tratados
//como objetos {key, value} y como arreglos [value, value1]

//En js tienes los metodos
//JSON.stringify() para convertir un objeto de JS a un JSON string
//JSON.parse() para convertir un objeto JSON string a JS

const colores = ["Azul", "Verde", "Amarillo"];
const pon = `{"jose" : "Me gustan los coches"}`;

console.log(JSON.stringify(colores));
console.log(JSON.parse(pon));

//Para extraer se usa fetch

//Esta toma como argumentos el nombre de un documento local, una direccion
//del documento o una url

fetch("cosas.json")
    .then(r=>r.json())
    .then(v=>console.log(v));