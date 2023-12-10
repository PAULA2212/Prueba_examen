/* 5. Crea un script que pregunte tu nombre, apellidos tu ciclo formativo (indicando “DAW” como texto por defecto) y módulo favorito, y
muestre ambos en una ventana emergente, a traves de la consola y traves del documento:
 */

//inicializamos las variables a traves de la funcion prompt para que el usuario introduzca sus datos:

let nombre = prompt("Indica cual es tu nombre: ");
let apellidos = prompt("Indica cuales son tus apellidos: ");

//introduciendo un segundo parametro en la funcion prompt podemos asignarle a este un texto por defecto:
let cicloFormativo = prompt("Indica que ciclo formativo estas cursando: ", "DAW");

let asignaturaFavorita = prompt("Indica cual es tu asignatura favorita:");

//mostramos los datos a traves de una ventana emergente:
alert(`Hola, ${nombre} ${apellidos}, estas cursando un ciclo formativo de ${cicloFormativo} y tu asignatura favorita es ${asignaturaFavorita}`);

//mostramos los datos a traves del documento HTML:
document.write(`Hola, ${nombre} ${apellidos}, estas cursando un ciclo formativo de ${cicloFormativo} y tu asignatura favorita es ${asignaturaFavorita}`);

//mostramos los datos a traves de la consola:

console.log(`Hola, ${nombre} ${apellidos}, estas cursando un ciclo formativo de ${cicloFormativo} y tu asignatura favorita es ${asignaturaFavorita}`);