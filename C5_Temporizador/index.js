let intervalo;
let inicio;
let corriendo = false;
function iniciar(){
    if(!corriendo){
        corriendo = true;
        inicio = new Date();
        intervalo = setInterval(()=>{
            const ahora = new Date();
        let tiempo = ahora-inicio;
        const hrs = String(Math.floor(tiempo/1000/60/60)%60).padStart(2, "0");
        const min = String(Math.floor((tiempo/1000/60)%60)).padStart(2, "0");
        const seg = String(Math.floor((tiempo/1000)%60)).padStart(2, "0");
        const mil = String(Math.floor(tiempo%1000)).padStart(3, "0");
        document.getElementById("tiempo").textContent = `${hrs}:${min}:${seg}:${mil}`
    }, 10);
    }
}
function detener(){
    clearInterval(intervalo);
    corriendo = false;
}