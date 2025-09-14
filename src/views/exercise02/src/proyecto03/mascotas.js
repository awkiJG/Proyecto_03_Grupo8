import { mascotas, getNuevoId } from './datos.js';
import { actualizarResumen } from './resumen.js';

export function agregarMascota(mascota) {
    mascota.id = getNuevoId();
    mascota.edad = parseInt(mascota.edad);
    mascotas.push(mascota); // se agrega una nueva mascota a la lista
}

export function eliminarMascota(id) {
    const indice = mascotas.findIndex(m => m.id === id);
    if (indice !== -1) {
        mascotas.splice(indice, 1); // se borra
        renderizarMascotas();       // reseta la lista
        actualizarResumen();        // actualiza 
    }
}

export function crearDivM() {  // crea la lista
    if (!document.getElementById("listaMascotas")) {
        const nuevaLista = document.createElement("div"); //crea un div vacio
        nuevaLista.id = "listaMascotas";
        document.body.appendChild(nuevaLista);
    }
}

export function renderizarMascotas() {
    const listaMascotas = document.getElementById("listaMascotas");
    listaMascotas.innerHTML = "<h3>Listado de Mascotas</h3>"; //se agrega un encabezado nuevo con los datos ingresados de div

    mascotas.forEach(mascota => { //forEach es la version simple del for que recorre arrays
        const contenedor = document.createElement("div");
        const info = document.createElement("p"); //crea un parrafo
        info.textContent =   //y aqui coloca los datos
        `Nombre: ${mascota.nombre}, 
        Tipo: ${mascota.tipo}, 
        Edad: ${mascota.edad}, 
        Dueño: ${mascota.duenio}, 
        Estado: ${mascota.vacunada ? "Vacunada" : "No vacunada"}`;
        //si es true vacunada sino es false no vacunada

        // boton para borrar esta mascota usando su ID
        const botonEliminar = document.createElement("button");
        botonEliminar.textContent = "Eliminar";
        botonEliminar.addEventListener("click", () => eliminarMascota(mascota.id));

        contenedor.appendChild(info);
        contenedor.appendChild(botonEliminar);
        listaMascotas.appendChild(contenedor);
        //listaMascotas es el padre y se le agrega un hijo info  
        //que muestra los datos
    });
}
