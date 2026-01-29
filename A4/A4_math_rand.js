//Estas son matematicas
function mateburricas()
{
    let x = 3.21;
    let y = 3.99;
    let z = 3.01;
    let s = 4;
    let p = 3
    console.log(Math.PI);
    console.log(Math.E);
    
    console.log(Math.round(x))
    console.log(Math.ceil(z))
    console.log(Math.floor(y))
    console.log(Math.pow(s,p))
    console.log(Math.sqrt(s))
    
    x = -1;
    
    console.log(Math.abs(x))
    console.log(Math.sin(x))
    console.log(Math.sign(x))
    
    console.log(Math.max(s,p,x))
    console.log(Math.min(x,z,s,p))
}

function tirar_d6()
{
    let rand = Math.floor(Math.random()*6)+1;
    document.getElementById("num").textContent = rand;
}
//No se muy bien como hacer que lo externo al texto se haga mas
//grande y mantenerlo centrado