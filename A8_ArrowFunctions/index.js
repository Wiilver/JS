const hey = (nombre, edad) => console.log(
    `Buenas tardes, ser ${nombre}, te vez joven para tener ${edad} años de vida`
);

hey("gargantua", 10987);

setTimeout(()=>console.log("Han pasado tres segundos desde que esto fue soñado"), 3000);

const numeros = [1, 2, 3, 4, 5, 6];

const primos = numeros.filter((e)=>{
    let salio = true;
    if ((e==1)||(e==2)) return e;
    for(let i = 2; i < e; i++){
        if(e%i==0) salio = false;
    }
    return salio;
});

const cuadrados = numeros.map((e)=> Math.pow(e, 2));

const suma = numeros.reduce((sumado, e)=> sumado+=e);

console.log(primos);
console.log(cuadrados);
console.log(suma);