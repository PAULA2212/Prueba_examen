
let sumarPrimos = 0;
let numPreguntas = 0;

while (numPreguntas < 15){

    let esPrimo = true;
    let numero = parseInt(prompt("Escribe un numero: "));

    if (numero <= 1){
        esPrimo = false;
    }else{
        for (let i = 2; i <= numero/2; i++){
            if (numero % i === 0){
                esPrimo = false;
                break;
            }
        }
    }

    if (esPrimo){
        sumarPrimos += numero;
    }

    numPreguntas++;
};

document.write(`sumando los primos introducidos el resultado es: ${sumarPrimos} `);