import { obtenerDatosMascota } from './obtenerDatos.js';
import { validarDatos } from './validar.js';
import { agregarMascota, crearDivM, renderizarMascotas } from './mascotas.js';
import { actualizarResumen } from './resumen.js';

document.getElementById("guardarB").addEventListener("click", function() {
    const mascota = obtenerDatosMascota();
    if (!validarDatos(mascota)) return;

    agregarMascota(mascota);
    crearDivM();
    renderizarMascotas();
    actualizarResumen();

    document.getElementById("informacionMascota").reset();
});
