function vaciar_matriz(){
    for(let i = 0; i < 3; i++)
        for(let j = 0; j < 3; j++) document.getElementById("tabla").rows[i].cells[j].textContent="0";
}

function inicializar_matriz(){
    for(let i = 0; i < 3; i++)
    {
        for(let j = 0; j < 3; j++)
        {
            while(true){
                let x = window.prompt("Por favor introduzca su siguiente termino :");
                if(x.length > 10) 
                {
                    window.alert("Problemon, solo se admiten hasta 10 catactares por elemento, intentelo nuevamente");
                    continue;
                }
                let num = Number(x);
                if(Number.isNaN(num))
                {
                    window.alert("Problemon, no se admiten letras");
                    continue;
                }
                document.getElementById("tabla").rows[i].cells[j].textContent = num;
                break;
            }
        }
    }
}

function intercambiar(){
    let linea1, linea2;

    while(true)
    {
        linea1=Number(window.prompt("Introduzca la fila que va a intercambiar"));

        if(Number.isNaN(linea1))
        {
            window.alert("Problemon, pusiste un dato que no era, intentalo de nuevo");
            continue;
        }    
        if((linea1<1)||(linea1>3))
        {
            window.alert("Problemon, el rango de respuesta solo es de 1 a 3, por favor, intentelo de nuevo");
            continue;
        }
        break;
    }
    while(true)
    {
        linea2=Number(window.prompt("Introduzca la fila con la que va a intercambiarse"));
        if(Number.isNaN(linea2))
        {
            window.alert("Problemon, pusiste un dato que no era, intentalo de nuevo");
            continue;
        }    
        if((linea2<1)||(linea1>3))
        {
            window.alert("Problemon, el rango de respuesta solo es de 1 a 3, por favor, intentelo de nuevo");
            continue;
        }
        if(linea1==linea2)
        {
            window.alert("Problemon, las lineas necesitan ser distintas para poder ser intercambiadas, por favor, intentelo de nuevo");
            continue;
        }
        break;
    }
    linea1--;
    linea2--;
    let x;
    for(let i = 0; i < 3; i++)
    {
        x = document.getElementById("tabla").rows[linea1].cells[i].textContent;
        document.getElementById("tabla").rows[linea1].cells[i].textContent = document.getElementById("tabla").rows[linea2].cells[i].textContent;
        document.getElementById("tabla").rows[linea2].cells[i].textContent = x;
    }
}

function sumar_restar(event){
    const id = event.currentTarget.id;

    while(true)
    {
        fila1 = Number(window.prompt("Ingrese el numero de la primera fila"));
        if(Number.isNaN(fila1)){
            window.alert("Problemon, solo se admiten numeros, intentalo de nuevo");
            continue;
        }
        if((fila1<1)||(fila1>3))
        {
            window.alert("Problemon, solo puedes escoger del 1 al 3, por favor, intentalo de nuevo");
            continue;
        }
        break;
    }
    while(true){
        fila2 = Number(window.prompt("Ingrese el numero de la segunda fila"));
        if(Number.isNaN(fila2)){
            window.alert("Problemon, solo se admiten numeros, intentalo de nuevo");
            continue;
        }
        if((fila2<1)||(fila2>3))
        {
            window.alert("Problemon, solo puedes escoger del 1 al 3, por favor, intentalo de nuevo");
            continue;
        }
        if(fila2==fila1)
        {
            window.alert("Problemon, las filas no pueden ser iguales, por favor, intentalo de nuevo");
            continue;
        }
        fila1--;
        fila2--;
        break; 
    }
    for(let i = 0; i < 3; i++)
    {
        num1 = Number(document.getElementById("tabla").rows[fila1].cells[i].textContent);
        num2 = Number(document.getElementById("tabla").rows[fila2].cells[i].textContent);

        switch(id){
            case "sumar":
                num2+=num1;
                break;
            case "restar":
                num2-=num1;
                break;
        }
        document.getElementById("tabla").rows[fila2].cells[i].textContent=num2;
    }
}

function mult_div(event){
    let fila, valor, num;

    const id = event.currentTarget.id;
    
    while(true)
    {
        fila = Number(window.prompt("Por favor, seleccione la fila que vaya a utilizar : "));
        if(Number.isNaN(fila))
        {
            window.alert("Problemon, solo se admiten numeros como respuesta, por favor, intentalo de nuevo");
            continue;
        }
        if((fila<1)||(fila>3))
        {
            winfow.alert("Problemon, solo puedes escoger filas del 1 al 3, por favor, intentalo de nuevo");
            continue;
        }
        break;
    }
    while(true)
    {
        valor = Number(window.prompt("Ahora escoja el valor que usara : "));
        if(Number.isNaN(valor)){
            window.alert("Problemon, la respuesta que diste tenia caracteres no permitidos, por favor, intentelo de nuevo");
            continue;
        }
        if(valor==0){
            window.alert("Problemon, no puedes escoger 0 como valor, por favor, intentelo de nuevo");
            continue;
        }
        break;
    }
    fila--;
    for(let i = 0; i < 3; i++){
        num = Number(document.getElementById("tabla").rows[fila].cells[i].textContent);
        switch(id)
        {
            case "multiplicar":
                num*=valor;
                break;
            case "dividir":
                num/=valor;
                break;
        }
        document.getElementById("tabla").rows[fila].cells[i].textContent = num;
    }

}

function determinante(){
    let det = 0;
    let cont = 0;
    let mat = [0,0,0,0];
    var tabla = document.getElementById("tabla");
    console.log(tabla.rows[1].cells[0].textContent);
    for(let i = 0; i < 3; i++)
    {
        if(i!=0)
        {
            mat[cont] = Number(tabla.rows[1].cells[0].textContent);
            mat[cont+2] = Number(tabla.rows[2].cells[0].textContent);
            cont += 1;
        }
        if(i!=1)
        {
            mat[cont] = Number(tabla.rows[1].cells[1].textContent);
            mat[cont+2] = Number(tabla.rows[2].cells[1].textContent);
            cont += 1;
        }
        if(i!=2)
        {
            mat[cont] = Number(tabla.rows[1].cells[2].textContent);
            mat[cont+2] = Number(tabla.rows[2].cells[2].textContent);
            cont += 1;
        }
        if(i == 1) det -= (mat[0]*mat[3]-mat[1]*mat[2])*Number(tabla.rows[0].cells[i].textContent);
        else det += (mat[0]*mat[3]-mat[1]*mat[2])*Number(tabla.rows[0].cells[i].textContent);
        console.log(det);
        cont = 0;
    }
    window.alert(`El determinante de tu matriz es ${det}`);
}

function presiono(event){
    let arr = [...document.getElementById("label").textContent];
    const id = event.currentTarget.id;
    switch(id)
    {
        case "1":
            arr[arr.length-3] = "1";
            break;
        case "2":
            arr[arr.length-3] = "2";
            break;
        case "3":
            arr[arr.length-3] = "3";
            break;
        case "4":
            arr[arr.length-3] = "4";
            break;
        case "5":
            arr[arr.length-3] = "5";
            break;
        case "6":
            arr[arr.length-3] = "6";
            break;
        case "7":
            arr[arr.length-3] = "7";
            break;
        case "8":
            arr[arr.length-3] = "8";
            break;
        case "9":
            arr[arr.length-3] = "9";
            break;
    }
    document.getElementById("label").textContent = arr.join("");
    document.getElementById("input").focus();
}

function cambio_elemento(){
    str = document.getElementById("label").textContent;
    elem = str.charAt(str.length-3);
    let input = document.getElementById("input").value;
    let valor = Number(input);
    if(Number.isNaN(valor))
    {
        window.alert("Problemon, hubo un problema con el dato que intentaste ingresar, intentalo de nuevo");
        document.getElementById("input").value = "";
        document.getElementById("input").focus();
        return;
    }
    if(elem=="#")
    {
        window.alert("Problemon, necesitas seleccionar un elemento para poder asignarle un valor");
        document.getElementById("input").value = "";
        document.getElementById("input").focus();
        return;
    }
    document.getElementById(`${elem}`).textContent =  valor;
    document.getElementById("input").value = "";

}