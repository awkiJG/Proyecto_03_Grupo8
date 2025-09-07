export function encontrarX() {
    // Solicita al usuario el primer sumando a través de un prompt, con un mensaje que indica que debe contener una sola 'x'
    let imput1 = prompt("Introduzca el primer sumando, debe haber una sola 'x' en toda la operación", );
    // Solicita al usuario el segundo sumando a través de un prompt, con el mismo mensaje sobre la 'x'
    let imput2 = prompt("Introduzca el segundo sumando, debe haber una sola 'x' en toda la operación", );
    // Solicita al usuario el resultado de la suma a través de un prompt, con el mismo mensaje sobre la 'x'
    let imput3 = prompt("Introduzca el resultado de la suma, debe haber una sola 'x' en toda la operación", );

    // Verifica si alguno de los inputs está vacío (""), es null (cancelado) o undefined, y muestra una alerta si es así
    if (!imput1 || !imput2 || !imput3) {
        alert("Deves ingresar números que conformen una operación válida de suma y una 'x'");
        location.reload(); // Recarga la página para reiniciar
        return; // Sale de la función
    }

    // Combina los tres inputs en una sola cadena y verifica con una expresión regular si solo contiene dígitos (0-9) o una 'x'
    let valid = /^[0-9x]+$/.test(imput1 + imput2 + imput3);
    if (!valid) {
        alert("Deves ingresar números que conformen una operación válida de suma y una 'x'");
        location.reload(); // Recarga la página para reiniciar
        return; // Sale de la función
    }

    // Divide cada input en un array de caracteres individuales
    let cad1 = imput1.split(''); 
    let cad2 = imput2.split('');
    let cad3 = imput3.split('');
    
    // Declara variables para almacenar la posición de la cadena con 'x', la posición de 'x' dentro de esa cadena, y un contador de 'x'
    let cadConX;
    let posX;
    let Xencon = 0;
    // Crea un array que contiene los arrays de caracteres de los tres inputs
    let cadenas = [cad1, cad2, cad3];
    // Crea una copia superficial de las cadenas para comparaciones posteriores
    let cadenasCopia = [...cadenas];
    for (let i = 0; i < cadenas.length; i++) {
        // Busca si la cadena actual contiene 'x'
        if (cadenas[i].includes('x')) {
            cadConX = i; // Guarda el índice de la cadena que contiene 'x'
            for (let j = 0; j < cadenas[i].length; j++) {
                // Busca la posición exacta de 'x' dentro de la cadena
                if (cadenas[i][j] === 'x') {
                    posX = j; // Guarda la posición de 'x'
                    Xencon++; // Incrementa el contador de 'x'
                }
            }
        }
    }

    // Verifica si hay más de una 'x' en toda la operación y muestra una alerta si es así
    if (Xencon > 1) {
        alert("Solo puedes ingresar números que conformen una operación válida de suma y una sola 'x'");
        location.reload(); // Recarga la página para reiniciar
        return; // Sale de la función
    }

    // Asigna los valores numéricos de las cadenas, usando null si la cadena contiene 'x'
    let sum1 = cadConX !== 0 ? parseInt(cad1.join('')) : null;
    let sum2 = cadConX !== 1 ? parseInt(cad2.join('')) : null;
    let resu = cadConX !== 2 ? parseInt(cad3.join('')) : null;

    // Según la posición de 'x', calcula el valor de la cadena con 'x' y actualiza el array correspondiente
    switch (cadConX) {
        case 0:
            sum1 = resu - sum2; // Calcula el valor de sum1 restando sum2 de resu
            cadenas[0] = sum1.toString().split(''); // Convierte el resultado a array de caracteres
            break;
        case 1:
            sum2 = resu - sum1; // Calcula el valor de sum2 restando sum1 de resu
            cadenas[1] = sum2.toString().split(''); // Convierte el resultado a array de caracteres
            break;
        case 2:
            resu = sum1 + sum2; // Calcula el valor de resu sumando sum1 y sum2
            cadenas[2] = resu.toString().split(''); // Convierte el resultado a array de caracteres
            break;
    }

    // Compara los arrays modificados con las copias originales para validar la congruencia
    for (let i = 0; i < cadenasCopia[cadConX].length; i++) {
        if (cadenas[cadConX][i] !== cadenasCopia[cadConX][i] && i !== posX || cadenas[cadConX].length !== cadenasCopia[cadConX].length) {
            alert("Los valores de la suma que ingresaste no son correctos"); // Muestra alerta si los valores o longitudes no coinciden
            location.reload(); // Recarga la página para reiniciar
            return; // Sale de la función
        }
    }

    // Muestra un mensaje si no se encontró 'x' o su posición
    if (cadConX == null || posX == null) {
        document.getElementById('resultado-x').textContent = "No se encontro ninguna X";
    } else {
        // Muestra el valor de 'x' en la posición calculada
        document.getElementById('resultado-x').textContent = "Valor de X: " + cadenas[cadConX][posX];
    }

    // Actualiza el elemento HTML con la ecuación completa usando los valores calculados
    document.getElementById('ecuacion').textContent = "Ecuacion: " + sum1 + " + " + sum2 + " = " + resu;
}