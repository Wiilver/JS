function apreto(element){
    let txt = document.getElementById("resultado");
    let arr = txt.textContent.split(" ");
    switch(element.id){
        case "=":
            try{
                let num;
                while(arr.length>1)
                {
                    for(let i = 1; i < arr.length; i++){
                        if((arr.includes("*"))||(arr.includes("/"))){
                            if(!(["*", "/"].includes(arr[i]))) continue;
                            if(arr[i] == "/"){
                                if (i < arr.length-1){
                                    if(arr[i+1] == "0") throw new Error("No se puede dividir entre 0");
                                }
                            }
                            if(["*", "/"].includes(arr[i])){
                                if((i == arr.length-2)&&(arr[arr.length-1]=="")) throw new Error("Hubo un error de sintaxis");
                                arr[i]=="*" ? num = Number(arr[i-1])*Number(arr[i+1]) : num = Number(arr[i-1])/Number(arr[i+1]); 
                                arr[i-1] = num;
                                arr.splice(i, 2);
                                break;    
                            }
                        }
                        if(i < arr.length-1){
                            if((["+", "-"].includes(arr[i]))&&(arr[i+1]=="")) {
                                arr.splice(i+1, 1);
                                break;
                            }
                            if(((arr[i]=="-")&&(arr[i+1]=="-"))||(arr[i]=="+")&&(arr[i+1]=="+")){
                                arr[i]="+";
                                arr.splice(i+1,1);
                                break;
                            }
                            if(((arr[i]=="-")&&(arr[i+1]=="+"))||((arr[i]=="+")&&(arr[i+1]=="-"))){
                                arr[i]="-";
                                arr.splice(i+1,1);
                                break;
                            }
                        }
                        if((arr[0]=="-")||(arr[0]=="+"))
                        {
                            arr[0]=="-" ? arr[0] = Number(arr[1])*-1 : arr[0]=arr[1];
                            arr.splice(0, 1);
                            break;
                        }
                        if((arr[i]=="-")||(arr[i]=="+")){
                            if(i == arr.length-1) throw new Error("Hubo un error de sintaxis");
                            arr[i]=="-" ? num= Number(arr[i-1]) - Number(arr[i+1]) : num = Number(arr[i-1]) + Number(arr[i+1]);
                            arr[i-1] = num;
                            arr.splice(i, 2);
                            break;
                        }
                    }
                }
                document.getElementById("cosa").textContent = arr[0];
            }
            catch(error){
                console.error(error);
            }
            finally{
                txt.textContent = "";
            }
            break;
        case "+":
        case "-":
            txt.textContent += ` ${element.id} `;
            break;
        case "/":
        case "*":
            if(txt.textContent=="") return;
            else if(arr[arr.length-1]=="") return; 
            txt.textContent += ` ${element.id} `;
            break;
        case "del":
            txt.textContent = "";
            document.getElementById("cosa").textContent = "";
            break;
        default:
            txt.textContent += `${element.id}`;
            break;
    }
}