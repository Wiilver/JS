//

function Estudiante(nombre, edad, ciclo, carrera, saludo){
    this.nombre = nombre,
    this.edad = edad,
    this.ciclo = ciclo,
    this.carrera = carrera,
    this.saludo = saludo
}

const Julian = new Estudiante(
    "Pascal", 
    21, 
    8, 
    "IQI", 
    function(){console.log("Buenisimas tardes, mi nombre es Pascal")}
);

console.log(Julian.nombre)
Julian.saludo();

Julian.edad = 22;

console.log(`El estudiante ${Julian.nombre} tiene una edad de ${Julian.edad} años`);