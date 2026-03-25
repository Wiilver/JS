//getters hacen que una propiedad se pueda leer
//setters hacen que una propiedad se pueda escribir

//Sirven para valdar y modificar un valor cuando lees o escribes una propiedad

class Rectangulo{
    constructor(ancho, alto){
        this.ancho = ancho;
        this.alto = alto;
    }
    set ancho(nvoAncho){
        nvoAncho > 0 ? this._ancho = nvoAncho : console.error("El ancho debe de ser un numero positivo");
    }
    set alto(nvoAlto){
        nvoAlto > 0 ? this._alto = nvoAlto : console.error("El alto debe de ser un numero positivo");
    }

    get ancho(){
        return `${this._ancho.toFixed(1)}.cm`;
    }
    get alto(){
        return `${this._alto.toFixed(1)}.cm`;
    }

    get area(){
        return `${(this._alto*this._ancho).toFixed(1)}.cm^2`;
    }

}

const rect = new Rectangulo(10, 19);

console.log(rect.ancho);
console.log(rect.alto);
console.log(rect.area);

class Persona{
    constructor(nombre, apellido, edad){
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
    }

    set nombre(nvoNombre){
        if(/^[A-Za-zÁÉÍÓÚáéíóúñÑ]+$/.test(nvoNombre)){
            let chars = nvoNombre.toLowerCase().split("");
            chars[0] = chars[0].toUpperCase();
            
            this._nombre = chars.join("");; 
        }
        else console.error("El nombre solo puede tener caracteres alfabeticos");
    }
    set apellido(nvoApellido){
        if(/^[A-Za-zÁÉÍÓÚáéíóúñÑ]+$/.test(nvoApellido)){
            let chars = nvoApellido.toLowerCase().split("");
            chars[0] = chars[0].toUpperCase();
            
            this._apellido = chars.join("");
        }
        else console.error("El apellido solo puede tener caracteres alfabeticos");
    }
    set edad(nvaEdad){
        if((typeof(nvaEdad)=="number")&&(nvaEdad > 0)&&(Number.isInteger(nvaEdad))) this._edad = nvaEdad;
        else console.error("Problemon, la edad necesita ser un numero entero mayor a 0");
    }


    get nombre(){
        return this._nombre;
    }
    get apellido(){
        return this._apellido;
    }
    get edad(){
        return this._edad;
    }
}

const personita = new Persona("jose", "jULIMEZ", 11);

console.log(personita.nombre);
console.log(personita.apellido);
console.log(personita.edad);