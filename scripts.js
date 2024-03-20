function validarFormulario() {
    // Obtención de los valores de los campos del formulario
    let id = document.getElementById('id').value;
    let nombre = document.getElementById('nombre').value;
    let apellidos = document.getElementById('apellidos').value;
    let telefono = document.getElementById('telefono').value;
    let email = document.getElementById('email').value;
    let edad = document.getElementById('edad').value;
    let fechaNacimiento = document.getElementById('fechaNacimiento').value;
    let mensajeError = '';


    // Verificación de si hay algún mensaje de error
    if (mensajeError !== '') {
        // Mostrar el mensaje de error en el elemento con id "mensajeError"
        document.getElementById('mensajeError').innerHTML = '<div class="alert alert-danger">' + mensajeError + '</div>';
        // Evitar el envío del formulario si hay errores
        return false;
    }

    // Creación de un objeto con los datos del envío
    const datosEnvio = {
        id,
        nombre,
        apellidos,
        telefono,
        correo: email, // Renombrando la variable email a correo para mayor claridad
        edad,
        fechaNacimiento
    };

    // Obtener o inicializar un arreglo de envíos desde el almacenamiento local
    const envios = JSON.parse(localStorage.getItem("envios")) || [];
    // Agregar los datos del envío al arreglo
    envios.push(datosEnvio);
    // Guardar el arreglo actualizado en el almacenamiento local
    localStorage.setItem("envios", JSON.stringify(envios));

    // Redireccionar a la página de resultados
    window.location.href = "resultados.html";

    // Evitar el envío del formulario
    return false;
    
}
