//Todo el tiempo que accedias al documento con document accedias al DOM
//Document Object Model (DOM) es un objeto creado cada cada que un
//elemento del HTML se carga o actualiza, este provee un API para
//que puedas cambiar la pagina dinamicamente entre codigo

document.body.style.backgroundColor = "rgb(133, 185, 168)";

//El DOM tiene metodos especiales para acceder a elementos de la pagina
//Pueden devolver elementos, htmlcollection o nodos

const texto = document.getElementById("Texto");
texto.textContent = "Buenisimas tardes";
texto.style.backgroundColor = "rgb(164, 201, 195)"

//Da un HTML Collection != arreglo
const frutas = document.getElementsByClassName("Frutas");
console.log(frutas);
frutas[0].style.backgroundColor = "rgb(236, 156, 156)";

const cosas = document.getElementsByTagName("li");
for(let cosa of cosas){
    cosa.style.backgroundColor = "rgb(85, 116, 173)";
    console.log(cosa.textContent)
}

//Da la primera coincidencia de una clase o un tag
const elemento = document.querySelector(".Frutas");
elemento.style.backgroundColor = "rgb(209, 219, 117)";

//Esto devuelve un nodelist, lo cual es un problemon ya que no actualizan
//automaticamente el dom debido a que son estaticas PERO si tienen
//todos los metodos de un arreglo normal

const pas = document.querySelectorAll(".Frutas");
pas[2].style.backgroundColor = "red";