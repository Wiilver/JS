//Por los jijis y los jajas no voy a usar html

const titulo = document.createElement("h2");
titulo.textContent = "Piedra Papel Tijeras";
titulo.classList.add("titulo");
document.body.append(titulo);

const contenedor = document.createElement("div");
contenedor.classList.add("Contenedor");
document.body.append(contenedor);

const seleccion = document.createElement("p");
seleccion.textContent = "Has seleccionado : ";
seleccion.classList.add("Subtitulo");
document.body.append(seleccion);

const maquina = document.createElement("p");
document.body.append(maquina);

const resultado = document.createElement("p");
document.body.append(resultado);

const nombres = ["Piedra", "Papel", "Tijera"]

nombres.forEach(i =>{
    const cosa = document.createElement("img");
    i == "Piedra" ? cosa.src = "./Piedra.jpeg" : cosa.src = `./${i}.jpg`;
    cosa.classList.add("Imagen");
    cosa.id = `${i}`;

    cosa.addEventListener("click", e=>{
        const select = e.currentTarget;

        seleccion.textContent = `Has seleccionado : ${select.id}`;

        const indice = Math.floor(Math.random()*3);
        maquina.textContent = `La maquina selecciono : ${nombres[indice]}`;
        
        const gano = "¡El jugador le ha ganado a la maquina!"
        const perdio = "¡El jugador ha perdido contra la maquina!"
        const empate = "¡El resultado fue un empate!"

        if(select.id==indice) resultado.textContent = empate;
        else if(
            (select.id =="Piedra") && (nombres[indice]=="Tijera")||
            (select.id =="Papel") && (nombres[indice]=="Piedra")||
            (select.id =="Tijera") && (nombres[indice]=="Papel")
        ) resultado.textContent = gano;
        else resultado.textContent = perdio;
        
        resultado.classList.add("Subtitulo");
        maquina.classList.add("Subtitulo");
    });

    cosa.addEventListener("mouseover", e=>{
        const actual = e.currentTarget;
        actual.classList.add("Encima");
    });

    cosa.addEventListener("mouseout", e=>{
        const actual = e.currentTarget;
        actual.classList.remove("Encima");
    });
    
    contenedor.append(cosa);
})