# Formularios-validados-parte-2
# EDVAN DANIEL MERCADO LAMAS 20490721
# ING SISTEMAS COMPUTACIONALES
# PASO 4 HASTA ABAJO

# Formulario de Validación
Este proyecto consiste en un formulario de validación que permite a los usuarios ingresar información personal, la cual se valida y se muestra en una tabla de resultados.

# Archivos
formulario.html: Contiene el formulario de validación.
resultados.html: Muestra los resultados de los formularios enviados.
styles.css: Hoja de estilos para dar formato a las páginas.
scripts.js: Contiene la función de validación del formulario.
scriptsResultados.js: Contiene el script para mostrar los resultados en la página de resultados.
Funcionamiento

# Formulario de Validación (formulario.html):
El formulario valida los campos de ID, nombre, apellidos, teléfono, correo electrónico, edad y fecha de nacimiento.
Si hay errores de validación, se muestran mensajes de error debajo de cada campo.
Al enviar el formulario, se guarda la información en el almacenamiento local y se redirige a la página de resultados.

# Resultados de Envíos (resultados.html):
Muestra una tabla con los resultados de los formularios enviados.
Se puede borrar todos los formularios mostrados en la tabla haciendo clic en el botón "Borrar Formularios".
Ejecución
Descarga los archivos del proyecto.
Abre formulario.html en tu navegador para acceder al formulario de validación.
Completa el formulario y envía la información.
Se redirigirá automáticamente a resultados.html para ver los resultados.


# PASO 4 ANALISIS



# Arreglos en JavaScript
En JavaScript, un arreglo es una estructura de datos que se utiliza para almacenar una colección de elementos, donde cada elemento tiene un índice numérico.
Los arreglos en JavaScript son dinámicos, lo que significa que pueden crecer o reducir su tamaño según sea necesario.
Para acceder a los elementos de un arreglo, se utiliza su índice numérico.
Ejemplo de declaración de un arreglo en JavaScript: let miArreglo = [1, 2, 3, 4, 5];

# Almacenamiento del navegador (sessionStorage y localStorage)
localStorage: Almacena datos sin límite de tiempo. Los datos persisten incluso después de cerrar el navegador. Se accede mediante localStorage.setItem("clave", "valor") para almacenar datos y localStorage.getItem("clave") para recuperarlos. Para eliminar datos, se usa localStorage.removeItem("clave").
sessionStorage: Almacena datos de sesión mientras la ventana o pestaña está abierta. Los datos se pierden cuando se cierra la ventana o pestaña. Se utiliza de manera similar a localStorage pero con sessionStorage.

# JSON (JavaScript Object Notation)
JSON es un formato ligero de intercambio de datos que se utiliza para enviar y recibir información estructurada entre un servidor y un cliente.
Es fácil de leer y escribir para humanos, y fácil de parsear y generar para las máquinas.

# Funciones JSON.parse() y JSON.stringify()
JSON.parse(): Convierte una cadena JSON en un objeto JavaScript.
JSON.stringify(): Convierte un objeto JavaScript en una cadena JSON.

# window.location.href
window.location.href es una propiedad que devuelve la URL completa de la página actual.
Al asignarle una nueva URL, se redirecciona automáticamente a esa URL.

# Funcionamiento de scriptResultados.js
El script scriptsResultados.js se ejecuta cuando el DOM está completamente cargado.
Obtiene los datos de envío almacenados en localStorage.
Itera sobre estos datos y los muestra en una tabla en la página de resultados (resultados.html).


Botón para borrar la tabla de capturas

# javascript
document.getElementById("borrarTabla").addEventListener("click", function() {
    // Borra todos los elementos hijos del elemento con id "tablaResultados"
    document.getElementById("tablaResultados").innerHTML = "";
    // Borra los datos almacenados en localStorage
    localStorage.removeItem("envios");
});
Y añadir el siguiente botón en tu archivo resultados.html:
# HTML
<button id="borrarTabla" class="btn btn-danger">Borrar Tabla</button>
