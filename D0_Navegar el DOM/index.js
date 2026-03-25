//ngl, todo este tiempo desee que el DOM fuera algo super duper huper complejo
//pero is kinda slop, like, hermano, en efecto, puedes hacer cosas en el HTML
//pero en el codigo, y, idk, no es como si estuviera haciendo eso desde, tipo,
//la primera hora de esto xd, no se si la complicacion son los indices, pero
//si se supone que esto es nefasto no se me hace tan nefario, ts

//Para navegar por el dom (ir a traves de la estructura del objeto) se usan
//metodos integrados en el objeto en si

//firstElementChild
//Cuando creamos una estructura dentro de una estructura, esta se vuelve su hijo
//Hay elementos que no pueden ser hijos de otros

const elemento = document.getElementById("dulces");
const elementos = document.querySelectorAll("ul");

const hijo = elemento.firstElementChild;
hijo.style.backgroundColor = "rgb(240, 208, 208)";

elementos.forEach(cosa=>{
    const primerhijo = cosa.firstElementChild;
    primerhijo.style.backgroundColor = "rgb(155, 109, 109)";
});

const ultimo = elemento.lastElementChild;
ultimo.style.backgroundColor = "rgb(198, 216, 93)"

elementos.forEach(cosa=>{
    const ultimohijo = cosa.lastElementChild;
    ultimohijo.style.backgroundColor = "rgb(198, 216, 93)"
})

const nuevo = document.getElementById("Cajeta");

//Si no hay uno siguiente, devuelve null
//tambien hay un previousElementSibling, es lo mismo, solo que otra vez

const siguiente = nuevo.nextElementSibling;
siguiente.style.backgroundColor = "rgb(122, 177, 135)"

//.children siempre devuelve un html collection