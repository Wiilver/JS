//Para crear elementos curiosamente tienes un flujo parecido a C#
//Primero creas el elemento
//Luego le das sus propiedades
//Por último lo agregas al DOM

const nuevoTitulo = document.createElement("h1");

nuevoTitulo.textContent = "Este es el titulo del primer bloque";
nuevoTitulo.id = "titulo";
nuevoTitulo.style.color = "rgb(151, 83, 44)"
nuevoTitulo.style.textAlign = "center";


//Cuando lo agregas con append de agrega como el ultimo hijo
//document.body.append(nuevoTitulo);

//Si quieres que se agregue como el primero debes de usar prepend
//document.body.prepend(nuevoTitulo);

//Un detalle es que si es la misma variable solo se toma "1" para el documento
//Comparten direccion y por ello no puede estar en dos sitios a la vez

document.getElementById("caja1").append(nuevoTitulo);

//Si quieres insertar el objeto en una poscicion especifica
//const caja2 = document.getElementById("caja2");
//document.body.insertBefore(nuevoTitulo, caja2);

//Si no tienes ids
//const cajas = document.querySelectorAll(".Caja");
//document.body.insertBefore(nuevoTitulo, cajas[0]);

//Si necesitas eliminar un elemento
//document.body.removeChild(nueviTitulo);
//document.getElementById("caja1").removeChild(nuevoTitulo);

const nuevoIndice = document.createElement("li");
nuevoIndice.textContent = "banana";
nuevoIndice.id = "banana";
nuevoIndice.style.backgroundColor = "tomato";
document.getElementById("frutas").append(nuevoIndice);

const nuevoIndice2 = document.createElement("li");
nuevoIndice2.textContent = "tomate";
nuevoIndice2.id = "tomate";
nuevoIndice2.style.fontWeight = "600";
const indices = document.getElementById("frutas");
const naranja = document.getElementById("uva");
indices.insertBefore(nuevoIndice2, naranja);

const manzana = document.getElementById("manzana");
document.getElementById("frutas").removeChild(manzana);
