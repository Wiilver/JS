const ver = document.getElementById("ver");
const img = document.getElementById("imagen");

ver.addEventListener("click", e=>{
    if(img.style.visibility=="hidden"){
        e.currentTarget.textContent = "Ocultar";
        img.style.visibility= "visible";
        //img.style.display= "block";
    }
    else{
        e.currentTarget.textContent = "Ver";
        img.style.visibility= "hidden";
        //img.style.display= "none";
    }
});