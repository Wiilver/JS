const imagen = document.createElement("img");
imagen.src = "Ranita1.jpg";
imagen.classList.add("imagen");
document.body.append(imagen);

const contador = document.createElement("p");
contador.style.display="none";
contador.textContent = "1";
document.body.append(contador);

const siguiente = document.createElement("button");
siguiente.textContent = "Siguiente";
siguiente.addEventListener("click", ()=>{
    let num = Number(contador.textContent);
    num === 4 ? num = 1 : num++;
    imagen.src = `Ranita${num}.jpg`;
    contador.textContent = `${num}`;
});
document.body.append(siguiente);

const anterior = document.createElement("button");
anterior.textContent = "Anterior";
anterior.addEventListener("click", ()=>{
    let num = Number(contador.textContent);
    num == 1 ? num = 4 : num--;
    imagen.src = `Ranita${num}.jpg`;
    contador.textContent = `${num}`;
});
document.body.append(anterior);