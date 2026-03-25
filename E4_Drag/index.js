let ancho, alto, xTabla, yTabla;
dimensiones();
for(let i = 0; i < 4; i++) llenarEspacios(i);


document.getElementById("aceptar").addEventListener("click", crearTarea);
document.getElementById("limpiar").addEventListener("click", limpTareas);

window.addEventListener("resize", dimensiones);

function limpiarEspacios(){
    const espacios = document.getElementsByClassName("Espacio");
    for(let i = 0; i < espacios.length; i++) espacios[i].innerHTML = "";
}

function llenarEspacios(indice){
    limpiarEspacios();
    const datos = localStorage.getItem("tareas");
    const objeto = datos ? JSON.parse(datos) : {
                                                "urgente"    : [], 
                                                "haciendo"   : [],
                                                "terminando" : [],
                                                "terminado"  : []};
    let espacio;                                        
    switch(indice){
        case 0:
            espacio = "urgente";
            break;
        case 1:
            espacio = "haciendo";
            break;
        case 2:
            espacio = "terminando";
            break;
        case 3:
            espacio = "terminado";
            break;
    }
    const elemento = document.getElementById(`esp_${espacio}`);
    const arr = objeto[espacio];
    let x, y, rango;
    rango = ancho/4-1;
    x = indice*rango+xTabla+(rango-100)/2;
    for(let i = 0; i < arr.length; i++){
        y = i*100+110+i*2;
        
        let div = document.createElement("div");
        div.classList.add("Tarea");
        div.textContent = arr[i].split("_")[0];
        div.draggable = "true";
        div.style.top = `${y}px`;
        div.style.left = `${x}px`;
        div.id = arr[i];

        div.addEventListener("dragstart", e=>{
            const datos = localStorage.getItem("tareas");
            let cosas = JSON.parse(datos);
            let arreglo = cosas[espacio];
            
            for(let i = 0; i < arreglo.length; i++) {
                if(arreglo[i]==e.currentTarget.id) 
                {
                    arreglo.splice(i, 1);
                    break;
                }
            }
            cosas[espacio.split("_")[1]] = arreglo;
            localStorage.setItem("tareas", JSON.stringify(cosas));
        })

        div.addEventListener("dragend",e=>{
            const x = e.clientX;
            const y = e.clientY;
            if(((x>=xTabla)&&(x <= ancho+xTabla))&&
               ((y>=yTabla)&&(y <= yTabla+alto))){
                let nvo_espacio;
                switch(true){
                    case x>=0       && x<rango:
                        nvo_espacio = "urgente";
                        break;
                    case x>=rango   && x<rango*2:
                        nvo_espacio = "haciendo";
                        break;
                    case x>=rango*2 && x<rango*3:
                        nvo_espacio = "terminando";
                        break;
                    default:
                        nvo_espacio = "terminado";
                        break;
                }
                const tareas = localStorage.getItem("tareas");
                let nvos_datos = JSON.parse(tareas);
                nvos_datos[nvo_espacio].push(arr[i]);
                localStorage.setItem("tareas", JSON.stringify(nvos_datos));
                limpiarEspacios();
                for(let j = 0; j < 4; j++) {
                    llenarEspacios(j)
                    console.log(j);
                };
            }
        });
        elemento.appendChild(div);
    }
}

function limpTareas(){
    let objeto ={
                "urgente"    : [], 
                "haciendo"   : [],
                "terminando" : [],
                "terminado"  : []}
    localStorage.setItem("tareas", JSON.stringify(objeto));
    limpiarEspacios();
}


function crearTarea(){
    let str = document.getElementById("txt").value.trim();
    if(str=="") return;
    
    str+= `_${Date.now()}`;
    
    const tareas = localStorage.getItem("tareas");
    let datos = tareas ? JSON.parse(tareas) : {
                                                "urgente"    : [], 
                                                "haciendo"   : [],
                                                "terminando" : [],
                                                "terminado"  : []};
    datos["urgente"].push(str);
    localStorage.setItem("tareas", JSON.stringify(datos));   
    llenarEspacios(0);
}


function dimensiones(){
    const cuerpo = document.getElementById("cuerpo");
    const cont = document.getElementById("tabla");
    ancho  = cuerpo.clientWidth;
    alto   = cont.clientHeight;
    xTabla = cont.offsetLeft;
    yTabla = cont.offsetTop;
    limpiarEspacios();
}