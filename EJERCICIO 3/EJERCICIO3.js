/* Crea un script que te salude con buenos dias, buenas tardes o buenas noches, en funcion de la hora del dia que sea */

//utilizamos el objeto date() para averiguar la fecha y hora concreta y almacenamos su valor en una variable:

let ahora =  new Date();

//usamos el metodo getHours de este objeto para quedarnos solo con el numero entero que indica la hora y lo almacenamos en una variable:

let horaAhora = ahora.getHours();

//creamos una estructura condicional que nos permita saludar basandonos en el valor de la variable horaAhora:

if (horaAhora > 6 && horaAhora < 14){
    console.log(`Buenos dias, son las ${horaAhora} horas.`);
}else if (horaAhora >= 14 && horaAhora < 22){
    console.log(`Buenas tardes, son las ${horaAhora} horas.`);
}else{
    console.log(`Buenas noches, son las ${horaAhora} horas.`);
}

