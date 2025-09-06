export function encontrarX() {

    let imput1 = prompt("introduzca el primer sumando, debe haber una sola 'x' en toda la operación", "")
    let imput2 = prompt("Introduzca el segundo sumando, debe haber una sola 'x' en toda la operación", "")
    let imput3 = prompt("Introduzca el resultado de la suma, debe haber una sola 'x' en toda la operación", "")
   
    let valid1 = /^[0-9x]+$/.test(imput1);
    let valid2 = /^[0-9x]+$/.test(imput2);
    let valid3 = /^[0-9x]+$/.test(imput3);

    if(!valid1 || !valid2 || !valid3){
        alert("solo puedes ingresar números que conformen una operación válida de suma y una 'x'")
        location.reload()
    }
   
    let cad1 = imput1.split('')
    let cad2 = imput2.split('')
    let cad3 = imput3.split('')
   
    let cadConX
    let posX
    let cadenas = [cad1, cad2, cad3]

    for(let i=0; i<cadenas.length; i++){
        if(cadenas[i].includes('x')){
            cadConX = i
            posX = cadenas[i].indexOf('x')
        }
    }

    let sum1 = cadConX !== 0 ? parseInt(cad1.join('')) : null
    let sum2 = cadConX !== 1 ? parseInt(cad2.join('')) : null
    let resu = cadConX !== 2 ? parseInt(cad3.join('')) : null

    switch(cadConX){
        case 0:
            sum1 = resu - sum2
            cadenas[0] = sum1.toString().split('')
            break
        case 1:
            sum2 = resu - sum1
            cadenas[1] = sum2.toString().split('')
            break
        case 2:
            resu = sum1 + sum2
            cadenas[2] = resu.toString().split('')
            break
    }

    if(cadConX == null || posX == null){
        console.log("no se encontró ninguna 'x'")
    }else{
        console.log("el valor de 'x' es:",cadenas[cadConX][posX])
        console.log("la suma completa quedaría así: "+sum1+" + "+sum2+" = "+resu)
    }
}