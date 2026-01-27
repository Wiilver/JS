function n1(id)
{
    document.getElementById("res").value += "1";
}
function n2()
{
    document.getElementById("res").value += "2";
}
function n3()
{
    document.getElementById("res").value += "3";
}
function n4()
{
    document.getElementById("res").value += "4";
}
function n5()
{
    document.getElementById("res").value += "5";
}
function n6()
{
    document.getElementById("res").value += "6";
}
function n7()
{
    document.getElementById("res").value += "7";
}
function n8()
{
    document.getElementById("res").value += "8";
}
function n9()
{
    document.getElementById("res").value += "9";
}
function n0()
{
    let cadena;
    cadena = document.getElementById("res").value;
    if(cadena!="") document.getElementById("res").value += "0";
}
function mas()
{
    let cadena;
    cadena = document.getElementById("res").value;
    if(cadena!="")document.getElementById("res").value += "+";
}
function igual()
{
    let num = 0;
    let res = 0;
    let str = "";
    let cadena = document.getElementById("res").value;
    for(i = 0; i < cadena.size(); i++)
    {
        if (cadena[i]!='+') str+=cadena[i];
        else 
        {
            num = Number(cadena);
            res += num;
        }
    }
    str = String(res);
    document.getElementById("res").value = str;
}