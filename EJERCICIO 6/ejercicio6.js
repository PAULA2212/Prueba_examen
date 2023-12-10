/*Crea un script que pida al usuario 15 números, y muestre en pantalla únicamente la suma de los que son
números primos. */

let sumaPrimos = 0;
let numPreguntas = 0;

while (numPreguntas < 15){

    let numero = parseInt(prompt("Escribe un numero: "));
    let esPrimo = true;

    if (numero <= 1){
        esPrimo = false;
    }else{
        for (let i = 2; i <= numero / 2; i++){

            if (numero % i === 0){
                esPrimo = false;
                break;
            }
        }
    }
    if (esPrimo){
        sumaPrimos += numero;
    }

    numPreguntas++;
}

document.write(`El resultado de sumar los numeros primos es: ${sumaPrimos}`);
