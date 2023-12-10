/* Crea una clase pelicula que permita gestionar esta informacion: nombre, duracion, año de estreno,genero, 6 actores,url del cartel promocional y director, y una accion que permita mostrar por pantalla toda la informacion. el constructor debera recibir los datos en una cadena JSON de la que debera sacar los valores de cada propiedad. Crea un objeto de la clase y ponla a prueba */
//introduzco los datos de una pelicula en una variable:

let datos = {
    nombre: "El incotable",
    duracion: "90 min",
    estreno: 2015,
    genero: "drama",
    actores: [
        "pedro",
        "juan",
        "maria",
        "daniel",
        "monica",
        "rebeca"
    ],
    url: "https://github.com/beastraiser/simulacro-examen2/blob/main/ej-Pelicula/script.js",
    director: "juanito"
};

// convierto los datos en una cadena JSON:

let datosJSON = JSON.stringify(datos);

//creo una clase pelicula que reciba como parametro del constructor la cadena en formato JSON:

class Pelicula{
    constructor(datosJSON){
        //convierto los datosJSON en un objeto de JavaScript:
        this.datos = JSON.parse(datosJSON);
        //asigno los valores de los atributos a partir de este nuevo objeto:
        this.nombre = this.datos.nombre;
        this.duracion = this.datos.duracion;
        this.estreno = this.datos.estreno;
        this.genero = this.datos.genero;
        this.actores = this.datos.actores;
        this.url = this.datos.url;
        this.director = this.datos.director;
    }

    mostrarDatos(){
        console.log(` La pelicula ${this.nombre} dura ${this.duracion} minutos y se estreno en el año ${this.estreno}, su genero es ${this.genero} y esta interpretada por los actores ${this.actores}, fue dirigida por ${this.director} y puedes acceder a ella en este enlace ${this.url}`);
    }
}

let unaPeli = new Pelicula(datosJSON);
unaPeli.mostrarDatos();