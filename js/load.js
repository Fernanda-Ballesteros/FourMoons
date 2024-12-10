// Función para cargar el encabezado
function cargarHeader() {
    fetch('./modulos/header.html') // Ruta del archivo del encabezado
        .then(response => response.text()) // Obtiene el texto del archivo
        .then(data => {
            // Inserta el contenido del archivo en el contenedor adecuado
            document.querySelector('header').innerHTML = data;
        })
        .catch(error => {
            console.error('Error al cargar el encabezado:', error);
        });
}

// Función para cargar el pie de página
function cargarFooter() {
    fetch('./modulos/footer.html') // Ruta del archivo del encabezado
        .then(response => response.text()) // Obtiene el texto del archivo
        .then(data => {
            // Inserta el contenido del archivo en el contenedor adecuado
            document.querySelector('footer').innerHTML = data;
        })
        .catch(error => {
            console.error('Error al cargar el pie de página:', error);
        });
}

// Llama a ambas funciones cuando se carga la página
window.onload = function() {
    cargarHeader();
    cargarFooter();
};