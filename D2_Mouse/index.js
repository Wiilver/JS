//Para que el documento obtenga los eventos de algo, como en este caso
//Los clicks del mouse, se necesita un eventListener, estos sirven aparte
//para otras cosas
//Este se agrega con .addEventListener(event, callback)

//Los principales para el mouse son click, mouseover y mouseout

const contenedor = document.createElement("div");
contenedor.className = "cajita"
contenedor.id = "caja";
contenedor.textContent = "Apretame";

contenedor.addEventListener("click", e=>{
    const cosa = e.currentTarget;
    if(cosa.style.backgroundColor == "tomato"){
        cosa.style.backgroundColor = "rgb(142, 223, 199)";
        cosa.textContent = "Me curaste";
    }
    else{
        cosa.style.backgroundColor = "tomato";
        cosa.textContent = "Auch";
    }
})

contenedor.addEventListener("mouseover", e=>{
    const cosa = e.currentTarget;
    if((cosa.style.backgroundColor == "")||(cosa.style.backgroundColor == "rgb(142, 223, 199)")){
        cosa.style.backgroundColor = "rgb(212, 127, 238)";
        cosa.textContent = "Atrevete";
    }
    else{
        cosa.style.backgroundColor = "rgb(182, 58, 58)";
        cosa.textContent = "Vienes por mas ?";
    }
})

contenedor.addEventListener("mouseout", e=>{
    const cosa = e.currentTarget;
    if((cosa.style.backgroundColor == "rgb(212, 127, 238)")||
       (cosa.style.backgroundColor == "rgb(142, 223, 199)")){
        cosa.style.backgroundColor = "rgb(142, 223, 199)";
        cosa.textContent = "Miedoso";
    }
    else{
        cosa.style.backgroundColor = "tomato";
        cosa.textContent = "Perro";
    }
})

document.body.append(contenedor);