
export const mascotas = [];
let id = 1; 
export function getNuevoId() {
    return id++;
}

export const soloLetras = /^[A-Za-z\s]+$/; //+una o mas RegEx
export const soloNumeros = /^[0-9]+$/; //para edad
