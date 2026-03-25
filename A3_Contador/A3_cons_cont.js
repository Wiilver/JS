function apreto()
{
    let num;
    let str = document.getElementById("input").value;
    num = Number(str);
    num *= 4;
    document.getElementById("input").value = num;
    //Si conviertes un string a bool y no tiene nada da falso
}

function circulillo()
{
    //Las constantes basta con que las pongas en mayusculas
    PI = 3.1415;
    let rad = document.getElementById("input").content;
    rad = Number(rad);
    rad = rad*PI*2;
    document.getElementById("input").value = rad;

}

function sumar()
{
    let str, x;
    str = document.getElementById("num").textContent;
    x = Number(str);
    x++;
    document.getElementById("num").textContent= x;
}

function reiniciar()
{
    document.getElementById("num").textContent = 0;
}

function restar()
{
    let str, x;
    str = document.getElementById("num").textContent;
    x = Number(str);
    x--;
    document.getElementById("num").textContent= x;
}