//primero, vamos a guardar en una constante el elemento con clase .nav-links que es la barra de navegacion:

const navLink = document.querySelector('.nav-links');

//almacenamos en otra constante el elemento con clase .hamburger que es el icono que desplegara el menu de navegacion cuando cambie el media query:

const hamburguer = document.querySelector('.hamburguer');


//vamos a crear una funcion que permita cambiar la clase de la barra de navegacion a .active:

function activarNav() {
    navLink.classList.toggle('active');
}

//vamos a crear un evento para que al hacer click sobre el icono hamburguer, se aplique la funcion que despliega la barra de navegacion:

hamburguer.addEventListener("click", activarNav);
 

//el mismo proceso a traves de una funcion flecha:

hamburguer.addEventListener("click", () => {
    navLink.classList.toggle('active');
})
 
// el mismo proceso utilizando una funcion anonima:

hamburguer.addEventListener('click', function(){
    navLink.classList.toggle('active');
})