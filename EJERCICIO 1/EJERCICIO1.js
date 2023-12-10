/* Diseña una jerarquia de clases donde musica y tecnologia sean clases derivadas de aula, para modelar las instlaciones de un instituto de enseñanza secundaria. Elige un metodo con el que evidenciar el concepto de polimorfismo */
'use strict'
//Primero se crea la clase padre aula
class Aula {
     //con el contructor para introducir los atributos de las aulas
    constructor(capacidad, ventanas){  
        this.capacidad = capacidad;
        this.ventanas = ventanas;
    }
    // un metodo mostrar en el que simplemente enseñamos el valor de los atributos que tenga el aula
    mostrar(){
        console.log(`En este aula caben ${this.capacidad} alumnos y tiene ${this.ventanas} ventanas.`)
    }
}

//instancio un objeto para comprobar el funcionamiento del metodo:
let aula1 = new Aula(35, 3);
aula1.mostrar();

//ahora creamos la clase musica que va a heredar de la clase aula:
class Musica extends Aula{
    constructor(capacidad,ventanas,instrumentos){
        super(capacidad,ventanas);
        this.instrumentos = instrumentos;
    }

    //reescribimos el metodo mostrar para que se adapte mejor a esta nueva clase, cosa que es posible gracias al polimorfismo:
    mostrar(){
        console.log(`En este aula de musica caben ${this.capacidad} alumnos y tiene ${this.ventanas} ventanas.En esta clase hay ${this.instrumentos} instrumentos distintos para poder tocar.`);
    }
}

//instancio un objeto para comprobar el funcionamiento del metodo:
let aulaMusica = new Musica(29,5,10);
aulaMusica.mostrar();

//creo la clase sistemas, que tambien hereda de clase aula:
class Sistemas extends Aula{
    constructor(capacidad, ventanas, ordenadores){
        super(capacidad,ventanas);
        this.ordenadores = ordenadores;
    }

    //reescribimos el metodo para adaptarlo a las aulas de sistemas:
    mostrar(){
        console.log(`En este aula de sistemas caben ${this.capacidad} alumnos y tiene ${this.ventanas} ventanas.En esta clase hay ${this.ordenadores} ordenadores para poder utilizar.`)
    }
}

//instancio un objeto para comprobar el funcionamiento del metodo:
let aulaSistemas = new Sistemas(35, 4, 10);
aulaSistemas.mostrar();