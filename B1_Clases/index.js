//Son constructres con esteroides

class Estudiantes{
    constructor(nombre, edad){
        this.nombre = nombre;
        this.edad = edad;
    }
    saludoEstudiante(){
        console.log(`Hola, muy buenas tardes, mi nombre es ${this.nombre} y tengo ${this.edad} años`);
    }
}

const estudiante1 = new Estudiantes("Pannts", 23);
const estudiante2 = new Estudiantes("Gazpacho", 14);

estudiante1.saludoEstudiante();
estudiante2.saludoEstudiante();