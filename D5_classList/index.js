//Un poquitin harto de esto

//Una propiedad de los elementos en js es classList, sirve para obtener
//una lista de las classes (CSS) que tiene el objeto
//Con esto se pueden hacer reutiliazr a lo largo del documento

//Tienen:
//add()
//remove()
//toggle()
//replace()
//contains()

let botones = document.querySelectorAll(".botones");
botones.forEach(i =>{
    i.classList.add("activo");
    i.addEventListener("mouseover", e=>{
        e.target.classList.add("encima");
    })

    i.addEventListener("mouseout", e=>{
        e.target.classList.remove("encima");
    })

    i.addEventListener("click", e=>{
        if(e.target.classList.contains("desactivo")){
            e.target.textContent = "No andamios";
        }
        e.target.classList.replace("activo", "desactivo");
    })
})

