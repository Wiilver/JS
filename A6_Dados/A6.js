function cambiardado()
{
    document.getElementById("dados").style = "visibility:visible;";
}

function d100()
{
    let str
    str = document.getElementById("dado").textContent;
    str = str.slice(0,str.indexOf(":")+1);
    str += "100";
    document.getElementById("dado").textContent = str;
    document.getElementById("dados").style = "visibility:hidden;";
}

function d20()
{
    let str
    str = document.getElementById("dado").textContent;
    str = str.slice(0,str.indexOf(":")+1);
    str += "20";
    document.getElementById("dado").textContent = str;
    document.getElementById("dados").style = "visibility:hidden;";
}

function d12()
{
    let str
    str = document.getElementById("dado").textContent;
    str = str.slice(0,str.indexOf(":")+1);
    str += "12";
    document.getElementById("dado").textContent = str;
    document.getElementById("dados").style = "visibility:hidden;";
}

function d10()
{
    let str
    str = document.getElementById("dado").textContent;
    str = str.slice(0,str.indexOf(":")+1);
    str += "10";
    document.getElementById("dado").textContent = str;
    document.getElementById("dados").style = "visibility:hidden;";
}

function d8()
{
    let str
    str = document.getElementById("dado").textContent;
    str = str.slice(0,str.indexOf(":")+1);
    str += "8";
    document.getElementById("dado").textContent = str;
    document.getElementById("dados").style = "visibility:hidden;";
}

function d6()
{
    let str
    str = document.getElementById("dado").textContent;
    str = str.slice(0,str.indexOf(":")+1);
    str += "6";
    document.getElementById("dado").textContent = str;
    document.getElementById("dados").style = "visibility:hidden;";
}

function d4()
{
    let str
    str = document.getElementById("dado").textContent;
    str = str.slice(0,str.indexOf(":")+1);
    str += "4";
    document.getElementById("dado").textContent = str;
    document.getElementById("dados").style = "visibility:hidden;";
}

function d2()
{
    let str
    str = document.getElementById("dado").textContent;
    str = str.slice(0,str.indexOf(":")+1);
    str += "2";
    document.getElementById("dado").textContent = str;
    document.getElementById("dados").style = "visibility:hidden;";
}

function lanzardado(n)
{
    let str = document.getElementById("dado").textContent;
    str = str.slice(str.indexOf(":")+1,str.length);
    let x = Math.floor((Math.random()*Number(str)+1));
    document.getElementById("num").textContent = x;
    console.log(str);
}