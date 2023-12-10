/* A traves de una funcion constructura de prototipos crea una cuenta bancaria. atributos: nombre, dni, edad, y saldo. Con dos metodos, ingresar y retirar de la cuenta */

function CuentaBancaria(nombre,dni,edad,saldo){

    this.nombre = nombre;
    this.dni = dni;
    this.edad = edad;
    this.saldo = saldo;

    this.ingresar = function(cantidadIngreso){
        console.log(`Tenias ${this.saldo} en tu cuenta corriente.`);
        this.saldo += cantidadIngreso;
        console.log(`Despues del ingreso tienes ${this.saldo}`);
    }

    this.retirar = function(cantidadRetirar){
        console.log(`Tenias ${this.saldo} en tu cuenta corriente.`);
        this.saldo -= cantidadRetirar;
        console.log(`Ahora en tu cuenta queda ${this.saldo}`);
    }

}

let unaCuenta = new CuentaBancaria('paula', '03205743A', 29, 60000);

unaCuenta.ingresar(1000);
unaCuenta.retirar(500);
