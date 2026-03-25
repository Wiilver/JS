const form = document.querySelector(".form");
const ciudad = document.querySelector(".input");
const carta = document.querySelector(".carta");
const llave = "c787d88ec96f8786044dafcb912f4c00";

async function conseguirClima(ciudad){
    const url = `http://api.openweathermap.org/geo/1.0/direct?q=${ciudad.value}&appid=${llave}`;
    const respuesta = await fetch(url);
    if(!respuesta.ok){
        throw new Error("No se pudieron obtener datos de la ciudad");
    }
    const cosas = await respuesta.json();

    const lat = cosas[0].lat;
    const lon = cosas[0].lon;
    
    const url1 = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${llave}`
    const respuesta1 = await fetch(url1);
    if(!respuesta1.ok){
        throw new Error("No se pudieron obtener datos del clima");
    }
    return await respuesta1.json();
}

function mostrarClima(datos){
    const {name : city, 
           main:{temp, humidity}, 
           weather:[{description, id}]} = datos;
    carta.textContent = "";
    carta.style.display = "flex";

    const ciudad = document.createElement("h1");
    const temperatura = document.createElement("p");
    const humedad= document.createElement("p");
    const descripcion = document.createElement("p");
    const emoji = document.createElement("p");

    ciudad.textContent = city;
    ciudad.classList.add("ciudad");
    carta.appendChild(ciudad);

    temperatura.textContent = `${(temp-273.15).toFixed(1)}°C`;
    temperatura.classList.add("temperatura");
    carta.appendChild(temperatura);

    humedad.textContent = `Humedad : ${humidity}%`;
    humedad.classList.add("humedad");
    carta.appendChild(humedad);

    descripcion.textContent = description;
    descripcion.classList.add("descripcion");
    carta.appendChild(descripcion);

    emoji.textContent = conseguirEmoji(id);
    emoji.classList.add("emoji");
    carta.appendChild(emoji);
}

function conseguirEmoji(clima){
    switch(true){
        case(clima >=200 && clima < 300):
            return "⛈️";
        case(clima >=300 && clima < 400):
            return "🌧️";
        case(clima >=400 && clima < 600):
            return "🌧️";
        case(clima >=600 && clima < 700):
            return "❄️";
        case(clima >=700 && clima < 800):
            return "🌪️";
        case(clima == 800):
            return "☀️";
        case(clima <= 801 && clima < 810):
            return "☁️";
        default:
            return "👽";
    }
}

function mostrarErrores(mensaje){
    const mostrarError = document.createElement("p");
    mostrarError.textContent = mensaje;
    mostrarError.classList.add("error");
    carta.textContent = "";
    carta.style.display = "flex";
    carta.appendChild(mostrarError);
}

form.addEventListener("submit",async e=>{
    e.preventDefault();

    const localizacion = ciudad.value;
    if(localizacion){
        try{
            const datos = await conseguirClima(ciudad);
            mostrarClima(datos);
        }
        catch(error){
            console.error(error);
            mostrarErrores(error);
        }
    }
    else{
        mostrarErrores("Por favor, introduzca una ciudad");
    }

});
