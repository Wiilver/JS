function cambiarReloj(){
    const fecha = new Date();
    const hrs = String(fecha.getHours()).padStart(2,"0");
    const min = String(fecha.getMinutes()).padStart(2,"0");
    const seg = String(fecha.getSeconds()).padStart(2,"0");

    document.getElementById("reloj").textContent = `${hrs}:${min}:${seg}`;
}

cambiarReloj();
setInterval(cambiarReloj, 1000);