//En efecto los Dates son fechas

const fecha = new Date();

const año = fecha.getFullYear();
const mes = fecha.getMonth();
const dia = fecha.getDate();
const hora = fecha.getHours();
const min = fecha.getMinutes();
const seg = fecha.getSeconds();
const diasem = fecha.getDay();

console.log(fecha);
console.log(año);
console.log(mes);
console.log(dia);
console.log(hora);
console.log(min);
console.log(seg);
console.log(diasem);

const fecha1 = new Date("2023-12-21");
const fecha2 = new Date("2023-01-01");

if(fecha2<fecha1) console.log("Feliz año nuevo");