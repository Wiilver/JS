//Pues son arreglos de toda la vida, que quieres que te diga

const frutas = [
    {nombre : "Manzana", color : "Rojo", calorias : 95},
    {nombre : "Platano", color : "Amarillo", calorias : 121},
    {nombre : "Durazno", color : "Naranja", calorias : 90},
    {nombre : "Sandia", color : "Verde", calorias : 200}
]

for(const i in frutas){
    for(const p in frutas[i]) console.log(frutas[i][p]);
    console.log("");
}

console.log(frutas[0]["nombre"]);

frutas.forEach(fruta=>console.log(`
    Nombre : ${fruta["nombre"]}
    Color : ${fruta["color"]}
    Calorias : ${fruta["calorias"]}
    `));

const nombres = frutas.map(fruta=>{return fruta["nombre"]});

console.log(nombres);

let acc = 0;
const total = frutas.reduce((act, i)=>act+i["calorias"], acc);
console.log(total);

const caloricos = frutas.filter((fruta)=> fruta["calorias"] > 100);
console.log(caloricos);