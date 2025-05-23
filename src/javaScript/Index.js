/*oculta seccion de imagenes hasta que acaba de cargar*/
const contImg = document.getElementById("grupoImg");
contImg.style.visibility = 'hidden'
/*evento carga*/
window.addEventListener('load',() =>{
    const contenedor = document.querySelector('.contenedorCarga');
    contenedor.style.opacity = 0
    contenedor.style.visibility = 'hidden'
    contImg.style.visibility = 'visible'
});

/*evento para abrir ventana emergente*/

    /*asignacion de variables*/

var btnAbrirPopup = document.getElementById('btn-abrir-popup'),
    overlay = document.getElementById('overlay'),
    popup = document.getElementById('popup'),
    btnCerrarPopup = document.getElementById('btn-cerrar-popup');

btnAbrirPopup.addEventListener('click', function(){    /*funcion al oprimir el hipervinculo*/
    overlay.classList.add('active');
    popup.classList.add('active');
});

btnCerrarPopup.addEventListener('click', function(e){   /*funcion al cerrar la ventana emergente*/
    e.preventDefault();
    overlay.classList.remove('active');
    popup.classList.remove('active');
});