function vaciar()
{
    document.getElementById("main").style = "visibility:hidden;";
    document.getElementById("input").value="";
    document.getElementById("length").textContent="";
    document.getElementById("at").textContent = "";

}

function continuar()
{
    cadena = document.getElementById("input").value;
    document.getElementById("main").style = "visibility:visible;";

    document.getElementById("length").textContent = `La longitud de tu cadena es de ${cadena.length} caracteres`;
    document.getElementById("at").textContent = `Tu cadena empieza con ${cadena.charAt(0)}`;
    document.getElementById("ind").textContent = `Una 'a' aparece en tu cadena por primera vez en el caracter : ${cadena.indexOf("a")+1}`;
    document.getElementById("lind").textContent = `La 'a' aparece por ultima vez en el caracter : ${cadena.lastIndexOf("a")+1}`;
    document.getElementById("trim").textContent = `Tu cadena sin espacios se veria asi : ${cadena.trim()}`;
    document.getElementById("upper").textContent = `Con solo mayusculas seria : ${cadena.toUpperCase()}`;
    document.getElementById("lower").textContent = `Con solo minusculas seria : ${cadena.toLowerCase()}`;
    document.getElementById("repeat").textContent = `Tu cadena tres vecesd seria :${cadena.repeat(3)}`;
    if(cadena.startsWith("a")) document.getElementById("sw").textContent = "Tu cadena inicia con una 'a'";
    else document.getElementById("sw").textContent = "Tu cadena no inicia con una 'a";
    if(cadena.endsWith("a")) document.getElementById("ew").textContent = "Tu cadena termina con una 'a'";
    else document.getElementById("ew").textContent = "Tu cadena no termina con una 'a'";
    if(cadena.includes(" ")) document.getElementById("includes").textContent = "Tu cadena contiene espacios";
    else document.getElementById("includes").textContent = "Tu cadena no contiene espacios";
    document.getElementById("replace").textContent = `Si cambiaras todas las 'a' de tu cadena con 'e' se veria asi : ${cadena.replaceAll("a", "e")}`;
    document.getElementById("padstart").textContent = `Asegurando que tu cadena tuviera minimo 10 caracteres la dejariamos asi ${cadena.padStart(10, "O")}`;
    document.getElementById("padend").textContent = `O asi ${cadena.padEnd(10, "@")}`;
    document.getElementById("slice").textContent = `Si partieras tu string en dos se veria asi ${cadena.slice(0,cadena.length/2)} y ${cadena.slice(cadena.length/2,cadena.length+1)}`;
}