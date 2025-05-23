
document.addEventListener("DOMContentLoaded", () => {
    const form1 = document.forms[0];
    const form2 = document.forms[1];

    form1.addEventListener("submit", function (e) {
        const nombre = form1.nombre.value.trim();
        const correo = form1.Correo.value.trim();
        const tipo = form1.tipo.value;
        const comentario = form1.querySelector("textarea").value.trim();

        if (!nombre || !correo || !comentario || tipo === ""){
            alert("Por favor, completa todos los campos del primer formulario.");
            e.preventDefault();
        } else if (!validarCorreo(correo)) {
            alert("Correo electrónico no válido en el primer formulario.");
            e.preventDefault();
        }
    });

    form2.addEventListener("submit", function (e) {
        const nombre = form2.Nombre.value.trim();
        const correo = form2.correo.value.trim();
        const calificacion = form2.calificacion.value.trim();
        const comentario = form2.comentario.value.trim();

        if (!nombre || !correo || !calificacion || !comentario) {
            alert("Por favor, completa todos los campos del segundo formulario.");
            e.preventDefault();
        } else if (!validarCorreo(correo)) {
            alert("Correo electrónico no válido en el segundo formulario.");
            e.preventDefault();
        } else if (isNaN(calificacion) || calificacion < 1 || calificacion > 9) {
            alert("La calificación debe ser un número entre 1 y 9.");
            e.preventDefault();
        }
    });

    function validarCorreo(correo) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(correo);
    }
});

document.getElementById("formulario").addEventListener("submit", function(e) {
  e.preventDefault(); // Evita que se recargue la página
  alert("Gracias por responder.");
  this.reset(); // Limpia el formulario
});
