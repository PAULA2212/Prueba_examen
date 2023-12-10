// primero cogemos del doc todos los iconos de flecha y los almacenamos en una lista de nodos que podamos recorrer mas tarde:

flechas = document.querySelectorAll('.arrow');

//ahora, recorremos la lista de nodos usando un bucle foreach, y le asignamos una funcion que se encarge de cambiar la clase de los hermanos del padre de la fecha a .show, para que se despliegue el submenu:

flechas.forEach(flecha => {
    //agregamos un evento al pulsar cualquier flecha:
    flecha.addEventListener('click', function(){
        // guardamos en una constante los submenus en su posicion relativa a las flechas:
        const submenu = flecha.parentElement.nextElementSibling;
        // cambiamos el valor de la clase del submenu a .show:
        submenu.classList.toggle('show');
        //cambiamos el valor de la clase de la propia flecha a .expanded:
        this.parentElement.classList.toggle('expanded');

    })
} ) 