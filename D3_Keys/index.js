//Los univos que tiene son keydown y keyup

const caja = document.getElementById("cajita");

let x = 0;
let y = 0;
const mov = 10;

document.addEventListener("keydown", e=>{
    console.log(e.key)
    if(e.key.startsWith("Arrow")){
        switch(e.key){
            case "ArrowUp":
                y-=mov;
                break;
            case "ArrowLeft":
                x-=mov;
                break;
            case "ArrowDown":
                y+=mov;
                break;
            case "ArrowRight":
                x+=mov;
                break;
        }
        caja.style.top = `${y}px`;    
        caja.style.left = `${x}px`;    
    }
});
