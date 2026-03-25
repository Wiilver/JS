//fetch es una funcion para hacer requests del tipo http para extraer datos
//estis suelen ser JSON, imagenes o documentos

//Sirve para interactuar con un api para retirar y mandar datos de manera
//asincronica

//fetch(url, {opciones})
//Creo qye las opciones son parecidas a python cuando abres documentos
//Pero de momento no las usa

async function conseguirDatos(){
    try{
        const nombre = document.getElementById("nombre").value.toLowerCase();
        const respuesta = await fetch(`https://pokeapi.co/api/v2/pokemon/${nombre}`);
        if(!respuesta.ok) throw new Error("No se pudieron extraer los recursos");
        const datos = await respuesta.json();
        const sprite = datos.sprites.front_default;
        const imagen = document.getElementById("sprite"); 
        imagen.src = sprite;
        imagen.style = {"display" : "block"};
    }
    catch(error){
        console.error(error);
    }
}