//Antes de continuar con este desmadre queria hacer algo
//Asi en general

function agregar(){
    const nombre = document.getElementById("PJ_Nombre");
    const hp = document.getElementById("PJ_Salud");
    const da = document.getElementById("PJ_Daño");
    const vel = document.getElementById("PJ_Velocidad");
    const t1 = document.getElementById("PJ_Tipo1");
    const t2 = document.getElementById("PJ_Tipo2");
    if((nombre.value.trim()=="")||(hp.value<1)||(vel.value<1)||(da.value<1)||(t1.value=="...")||(t2.value=="...")){
        window.alert("No puedes dejar ninguno de los datos en blanco, ni los numeros como algo menor a 1");
        return;
    }
    let pjs = document.getElementById("ED_Personajes");
    const pj = new Option(`${nombre.value.trim()}`, `${hp.value} ${da.value} ${vel.value} ${t1.value} ${t2.value}`);
    pjs.add(pj);
    nombre.value = "";
    hp.value = 0;
    da.value = 0;
    vel.value = 0;
    t1.value = "...";
    t2.value = "...";
}