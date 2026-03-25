const datos = localStorage.getItem("notas");
const input = document.getElementById("input_buscar");
let notas, opcionando;

opcionando = false;

if(datos){
    notas = JSON.parse(datos);
    notas.forEach(n=>crearNota(n));
}
else{
    localStorage.setItem("notas", "[]");
    notas = [];
}

window.addEventListener("resize", ()=>{
    vaciarNotas();
    const datos = localStorage.getItem("notas");
    if(datos) (JSON.parse(datos)).forEach(n=>crearNota(n));
});

document.addEventListener("click", e=>{
    const id =e.target.id; 
    const datos = JSON.parse(localStorage.getItem("notas"));
    switch(id){
        case "crear":
            if(document.getElementsByClassName("crear_nota").length>0) return;
            menuCrearNota();
            return;
        case "limpiar":
            localStorage.setItem("notas", "[]")
            vaciarNotas();
            return;
        case "btn_filtro":
            if(!datos)return;
            const modo = e.target.value;
            if(modo=="Filtro"){
                e.target.value = "A-Z";
                vaciarNotas();
                document.getElementsByClassName("tlo_lista")[0].textContent = "Alfabeticamente:";
                alfabeticos = datos.sort((a,b)=>a[0].localeCompare(b[0]));
                alfabeticos.forEach(crearNota);
            }
            else{
                document.getElementsByClassName("tlo_lista")[0].textContent = "Todas las notas:";
                e.target.value = "Filtro";
                vaciarNotas();
                datos.forEach(n=>crearNota(n))
            }
            return;
        case "btn_reiniciar":
            input.value="";
            document.getElementsByClassName("tlo_lista")[0].textContent = "Todas las notas:";
        case "ordenar":
            vaciarNotas();
            if(datos) datos.forEach(n=>crearNota(n));
            return;
        case "nota_aceptar":
            crearNota();
        case "nota_cancelar":
            document.getElementsByClassName("crear_nota")[0].remove();
            return;
    }
    if(e.target.classList.contains("puntos")){
        if(opcionando) return;
        const objetico = e.target.parentElement.id.split("_")[1];
        crearOpciones(objetico, e.clientX, e.clientY);
    }
    else if(id.split("_")[0]=="lista"){
        vaciarNotas();
        let arr;
        for(let i = 0; i < datos.length; i++) if(datos[i][3]==id.split("_")[1]) arr = datos[i];
        crearNota(arr);
        document.getElementsByClassName("tlo_lista")[0].textContent = arr[0];
    }
});

document.addEventListener("drag", e=>{
    const objetivo = e.target;
    if(!objetivo.classList.contains("liston")) return;
    const elemento = objetivo.parentElement;
    elemento.style.position = "absolute";
    elemento.style.left = e.clientX>window.innerWidth-650 ? `${window.innerWidth-650}px` : `${e.clientX}px`; 
    if(e.clientX<0)elemento.style ="0px";
    elemento.style.top  = e.clientY<150 ? "150px" : `${e.clientY}px`; 
});

document.addEventListener("dragend", e=>{
    const objetivo = e.target;
    if(!objetivo.classList.contains("liston")) return;
    const elemento = objetivo.parentElement;
    elemento.style.position = "absolute";
    elemento.style.left = e.clientX>window.innerWidth-650 ? `${window.innerWidth-650}px` : `${e.clientX}px`; 
    if(e.clientX<0)elemento.style ="0px";
    elemento.style.top  = e.clientY<150 ? "150px" : `${e.clientY}px`; 
});


input.addEventListener("change", e=>{
    document.getElementsByClassName("tlo_lista")[0].textContent = "...";
    const datos = localStorage.getItem("notas");
    if(datos){
        const str = input.value;
        const notas = JSON.parse(datos);
        let filtrado = (notas).filter(i=>{
            for(let j = 0; j < str.length; j++){
                if(i[0].length < str.length) return false;
                if(i[0][j]!=str[j])return false;
            } 
            return true;
        });
        vaciarNotas();
        filtrado.forEach(i=>{
            crearNota(i);            
        });
    }
});

function crearElemento(tipo, clase, id, nat, texto){
    const elemento = document.createElement(tipo);

    if(clase!="")elemento.classList.add(clase);
    if(id   !="")   elemento.id = id;
    if(nat == "texto"){
        elemento.type="text";
        elemento.placeholder = texto;
    }
    else if(nat == "boton"){
        elemento.type="button";
        elemento.value = texto;
    }
    else if(nat=="color"){
        elemento.type="color";
    }
    if(tipo=="p"){
        elemento.textContent = texto;
    }
    return elemento;
}

function vaciarNotas(){
    document.getElementById("contenedor_notas").innerHTML = "";
    document.getElementById("listaNotas").innerHTML="";
}

function crearImagen(fuente){
    const img = document.createElement("img");
    img.type = "image/png";
    img.src=`${fuente}.png`;
    img.classList.add(fuente);
    return img;
}

function crearOpciones(id, x, y){
    const cont   = crearElemento("div", "Opciones", "", "", "");
    const color  = crearElemento("input", "Color", `color_${id}`, "color", "");
    const basura = crearImagen("bote");

    const nota = document.getElementById(`nota_${id}`);

    color.addEventListener("change", e=>{
        nota.style.backgroundColor = e.target.value;
        const opciones = e.target.parentElement;
        document.body.removeChild(opciones);
        opcionando = false;
        const notas = JSON.parse(localStorage.getItem("notas"));
        const nombre = nota.children[2].getElementsByClassName("Titulo")[0].textContent;

        for(let i = 0; i < notas.length; i++){
            if(notas[i][0]==nombre){
                notas[i][2] = e.target.value;    
                localStorage.setItem("notas", JSON.stringify(notas));
                break;
            }
        }
    })
    basura.addEventListener("click", e=>{
        const notas = JSON.parse(localStorage.getItem("notas"));
        const nombre = nota.children[2].getElementsByClassName("Titulo")[0].textContent;

        for(let i = 0; i < notas.length; i++){
            if(notas[i][0]==nombre){
                notas.splice(i, 1);
                localStorage.setItem("notas", JSON.stringify(notas));
                vaciarNotas();
                notas.forEach(n=>crearNota(n));
                break;
            }
        }
        const opciones = e.target.parentElement;
        document.body.removeChild(opciones);
        opcionando = false;
    });
    
    cont.appendChild(color);
    cont.appendChild(basura);


    cont.style.position = "absolute";
    cont.style.top = `${y-55}px`;
    cont.style.left= `${x-40}px`;
    document.body.appendChild(cont);
}

function crearNota(arr = []){
    const id = Date.now();
    const cont = document.getElementById("contenedor_notas");
    
    let t, txt;

    if(arr.length>0) [t, txt] = arr;
    else{
        t  = document.getElementById("nota_titulo").value;
        txt= document.getElementById("nota_contenido").value;
        const datos = localStorage.getItem("notas");
        let arr = JSON.parse(datos);
        arr.push([t, txt, "#c44141", id]);
        localStorage.setItem("notas", JSON.stringify(arr));
    }

    const fondo      = crearElemento("div", "nota_fondo", `nota_${arr.length>0?arr[3] : id}`, "", "");
    const liston     = crearImagen("liston");
    const puntos     = crearImagen("puntos");
    const cuerpo     = crearElemento("div", "nota_cuerpo", "", "", "");
    const contenedor = crearElemento("div", "contenedor", "", "", "");
    const titulo     = crearElemento("p", "Titulo", "", "", t);
    const texto      = crearElemento("p", "", "", "", txt);

    contenedor.appendChild(titulo);
    contenedor.appendChild(texto);
    cuerpo.appendChild(contenedor);

    fondo.appendChild(liston);
    fondo.appendChild(puntos);
    fondo.appendChild(cuerpo);
    
    if(arr.length>0) fondo.style.backgroundColor = arr[2];

    cont.appendChild(fondo);

    crearNotaLista(t, arr.length>0?arr[3] : id);
}

function crearNotaLista(titulo, id){
    const list = document.getElementById("listaNotas");
    const elemento = document.createElement("li");
    elemento.id = `lista_${id}`;
    elemento.textContent = titulo;
    elemento.classList.add("Elemento");
    list.appendChild(elemento); 
}

function menuCrearNota(){
    const cont = document.getElementsByClassName("horizontal");
    
    const div      = crearElemento("div", "crear_nota", "", "", "");    
    const titulo_t = crearElemento("p", "crear_nota_titulo", "", "", "Creando Nota");
    const titulo   = crearElemento("input", "", "nota_titulo", "texto", "Ingrese el titulo de su nota...");
    const texto    = crearElemento("textarea", "", "nota_contenido", "", "");
    const aceptar  = crearElemento("input", "", "nota_aceptar", "boton", "Aceptar");
    const cancelar = crearElemento("input", "", "nota_cancelar", "boton", "Cancelar");

    titulo.autocomplete = "off";

    div.appendChild(titulo_t);
    div.appendChild(titulo);
    div.appendChild(texto);
    div.appendChild(aceptar);
    div.appendChild(cancelar);
    cont[0].appendChild(div);
}