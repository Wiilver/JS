function crear(){
    const datos = localStorage.getItem("tareas");
    
    const llave = document.getElementById("nombre") 
    const pasos = document.getElementById("pasos") 
    const llv = llave.value;
    const num = pasos.value;
    llave.value="";
    pasos.value="";
    
    if((!llv)||(!num)) return console.error("No puedes crear objetos vacios");

    const obj = [llv, Number(num)];

    let cosas;
    if(!datos) cosas = [];
    else cosas = JSON.parse(datos);
    cosas.push(obj);
    ver(obj);
    localStorage.setItem("tareas", JSON.stringify(cosas));
}

function limpiar(){
    localStorage.clear();
    document.getElementById("tareas").innerHTML="";
}

function crearElemento(tipo, clase, txt){
    const elemento = document.createElement(tipo);
    elemento.classList.add(clase);
    if(txt) elemento.textContent = txt;
    return elemento;
}

function crearAnillo(cosa){
    const anillo = crearElemento("div", "Anillo");
    const circulo= crearElemento("div", "Circulo");
    const texto  = crearElemento("div", "Texto");
    const titulo = crearElemento("p", "Titulo", cosa[0]); 
    const progre = crearElemento("p", "Progreso", `0/${cosa[1]}`);
    anillo.id = `${cosa[0]}_anillo`;
    progre.id = `${cosa[0]}_progre`;

    texto.appendChild(titulo);
    texto.appendChild(progre);

    circulo.appendChild(texto);
    anillo.appendChild(circulo);

    return anillo;
}

function actualizarAnillo(anillo, numeros){
     anillo.style.background = `conic-gradient(
                                    from 215deg,
                                  rgb(28, 90, 52) ${292/numeros[1]*numeros[0]}deg,
                                  rgb(146, 55, 78) ${292/numeros[1]*numeros[0]}deg,
                                  rgb(146, 55, 78) 292deg,
                                    lightgray 0)`;
}

function crearBotones(cosa){
    const botones1 = crearElemento("div", "Botones");
    const sumar    = crearElemento("button", "Sumar", "+");
    const restar   = crearElemento("button", "Restar", "-");

    const botones2 = crearElemento("div", "Botones");
    const reinicio = crearElemento("button", "Reiniciar", "Reiniciar");
    const elim     = crearElemento("button", "Eliminar", "Eliminar");

    const botones = [sumar, restar, reinicio, elim];
    botones.forEach(i=>{
        i.addEventListener("mouseover", e=>encima(e));
        i.addEventListener("mouseout", e=>fuera(e));
    });

    sumar.addEventListener("click", ()=>{
        const texto = document.getElementById(`${cosa}_progre`);
        const anillo = document.getElementById(`${cosa}_anillo`);
        let numeros = texto.textContent.split("/");
        numeros[0] = Number(numeros[0]);
        numeros[1] = Number(numeros[1]);
        if(numeros[0]<numeros[1])numeros[0]++;
        if(numeros[0]==numeros[1]){
            window.alert("Hermano, lo lograste, muchas felicidades");
            numeros[0]=numeros[1];
        }
        texto.textContent = `${numeros[0]}/${numeros[1]}`;
        actualizarAnillo(anillo, numeros);
    });

    restar.addEventListener("click", ()=>{
        const texto = document.getElementById(`${cosa}_progre`);
        const anillo = document.getElementById(`${cosa}_anillo`);

        let numeros = texto.textContent.split("/");
        if(numeros[0]>0)numeros[0]--;
        texto.textContent = `${numeros[0]}/${numeros[1]}`;
       actualizarAnillo(anillo, numeros);
    });

    reinicio.addEventListener("click", ()=>{
        const texto = document.getElementById(`${cosa}_progre`);
        let numeros = texto.textContent.split("/");
        const anillo = document.getElementById(`${cosa}_anillo`);
        numeros[0] = 0;
        texto.textContent = `${numeros[0]}/${numeros[1]}`;
        actualizarAnillo(anillo, numeros);
    });

    elim.addEventListener("click", ()=>{
        document.getElementById("tareas").removeChild(document.getElementById(`${cosa}`));
        let datos = JSON.parse(localStorage.getItem("tareas"));
        for(let i = 0; i < datos.length; i++){
            if(datos[i][0]==cosa){
                datos.splice(i, 1);
                localStorage.setItem("tareas", JSON.stringify(datos));
                break;
            }
        }
    });


    botones1.appendChild(sumar);
    botones1.appendChild(restar);

    botones2.appendChild(reinicio);
    botones2.appendChild(elim);

    return [botones1, botones2];
}

function encima(e){
    const actual = e.currentTarget;
    actual.classList.add("Encima");
}

function fuera(e){
    const actual = e.currentTarget;
    actual.classList.remove("Encima");
}

function ver(cosa){
    const contenedor = document.getElementById("tareas");
    
    const tarea   = crearElemento("div", "Tarea");
    const anillo  = crearAnillo(cosa);
    const botones = crearBotones(cosa[0]);

    tarea.appendChild(anillo);
    tarea.appendChild(botones[0]);
    tarea.appendChild(botones[1]);
    tarea.id = cosa[0];

    contenedor.appendChild(tarea);
}

function cargar(){
    const datos = localStorage.getItem("tareas");
    const arr = JSON.parse(datos);
    if(arr) arr.forEach(ver);
}

window.addEventListener("load", cargar);

document.getElementById("crear").addEventListener("click", crear);
document.getElementById("eliminar").addEventListener("click", limpiar);