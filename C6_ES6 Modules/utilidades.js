export const PI = 1.15;

export function obtenerPerimetro(radio){
    return 2 * PI * radio;
}

export function obtenerArea(radio){
    return PI * radio * radio;
}

export function obtenerVolumen(radio){
    return (4/3) * PI * radio * radio * radio;
}