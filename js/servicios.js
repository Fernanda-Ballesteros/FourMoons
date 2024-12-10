/*document.addEventListener('DOMContentLoaded', function() {
    fetch('../modulos/traduccionModulo.html')
        .then(response => response.text())
        .then(html => {
            // Seleccionar el contenedor principal donde se insertará el contenido
            const mainContainer = document.body;
            
            // Crear un nuevo div para contener el contenido del módulo
            const moduleContainer = document.createElement('div');
            moduleContainer.innerHTML = html;
            
            // Insertar el contenido del módulo después del contenedor del dropdown
            const dropdownContainer = document.querySelector('.top-center-container');
            dropdownContainer.insertAdjacentElement('afterend', moduleContainer);
        })
        .catch(error => {
            console.error('Error al cargar el módulo de traducción:', error);
        });
});

document.addEventListener('DOMContentLoaded', function() {
    fetch('modulos/interpretacionModulo.html')
        .then(response => response.text())
        .then(html => {
            // Seleccionar el contenedor principal donde se insertará el contenido
            const mainContainer = document.body;
            
            // Crear un nuevo div para contener el contenido del módulo
            const moduleContainer = document.createElement('div');
            moduleContainer.innerHTML = html;
            
            // Insertar el contenido del módulo después del contenedor del dropdown
            const dropdownContainer = document.querySelector('.top-center-container');
            dropdownContainer.insertAdjacentElement('afterend', moduleContainer);
        })
        .catch(error => {
            console.error('Error al cargar el módulo de traducción:', error);
        });
});

document.addEventListener('DOMContentLoaded', function() {
    fetch('../modulos/traduccionlibrosModulo.html')
        .then(response => response.text())
        .then(html => {
            // Seleccionar el contenedor principal donde se insertará el contenido
            const mainContainer = document.body;
            
            // Crear un nuevo div para contener el contenido del módulo
            const moduleContainer = document.createElement('div');
            moduleContainer.innerHTML = html;
            
            // Insertar el contenido del módulo después del contenedor del dropdown
            const dropdownContainer = document.querySelector('.top-center-container');
            dropdownContainer.insertAdjacentElement('afterend', moduleContainer);
        })
        .catch(error => {
            console.error('Error al cargar el módulo de traducción:', error);
        });
});

document.addEventListener('DOMContentLoaded', function() {
    fetch('../modulos/subtitulosModulo.html')
        .then(response => response.text())
        .then(html => {
            // Seleccionar el contenedor principal donde se insertará el contenido
            const mainContainer = document.body;
            
            // Crear un nuevo div para contener el contenido del módulo
            const moduleContainer = document.createElement('div');
            moduleContainer.innerHTML = html;
            
            // Insertar el contenido del módulo después del contenedor del dropdown
            const dropdownContainer = document.querySelector('.top-center-container');
            dropdownContainer.insertAdjacentElement('afterend', moduleContainer);
        })
        .catch(error => {
            console.error('Error al cargar el módulo de traducción:', error);
        });
});
*/

// Función para cargar el módulo de Traducción de documentos
function cargarTraduccionModulo() {
    fetch('modulos/traduccionModulo.html')
        .then(response => {
            if (!response.ok) {
                throw new Error('Error al cargar el módulo de Traducción de documentos');
            }
            return response.text();
        })
        .then(data => {
            // Inserta el contenido cargado en el div correspondiente
            document.getElementById('traduccionModulo').innerHTML = data;
        })
        .catch(error => {
            console.error('Error:', error);
            document.getElementById('traduccionModulo').innerHTML = '<p>Error al cargar el contenido</p>';
        });
}

// Función para cargar el módulo de Interpretación de eventos
function cargarInterpretacionModulo() {
    fetch('modulos/interpretacionModulo.html')
        .then(response => {
            if (!response.ok) {
                throw new Error('Error al cargar el módulo de Interpretación de eventos');
            }
            return response.text();
        })
        .then(data => {
            // Inserta el contenido cargado en el div correspondiente
            document.getElementById('interpretacionModulo').innerHTML = data;
        })
        .catch(error => {
            console.error('Error:', error);
            document.getElementById('interpretacionModulo').innerHTML = '<p>Error al cargar el contenido</p>';
        });
}

// Función para cargar el módulo de Subtitulación
function cargarSubtitulacionModulo() {
    fetch('modulos/subtitulacionModulo.html')
        .then(response => {
            if (!response.ok) {
                throw new Error('Error al cargar el módulo de Subtitulación');
            }
            return response.text();
        })
        .then(data => {
            // Inserta el contenido cargado en el div correspondiente
            document.getElementById('subtitulacionModulo').innerHTML = data;
        })
        .catch(error => {
            console.error('Error:', error);
            document.getElementById('subtitulacionModulo').innerHTML = '<p>Error al cargar el contenido</p>';
        });
}

// Función para cargar el módulo de Traducción de libros
function cargarTraduccionLibrosModulo() {
    fetch('modulos/traduccionlibrosModulo.html')
        .then(response => {
            if (!response.ok) {
                throw new Error('Error al cargar el módulo de Traducción de libros');
            }
            return response.text();
        })
        .then(data => {
            // Inserta el contenido cargado en el div correspondiente
            document.getElementById('traduccionlibrosModulo').innerHTML = data;
        })
        .catch(error => {
            console.error('Error:', error);
            document.getElementById('traduccionlibrosModulo').innerHTML = '<p>Error al cargar el contenido</p>';
        });
}

// Función para cargar el módulo de Cotización
function cargarCotizacionModulo() {
    fetch('modulos/cotizacionModulo.html')
        .then(response => {
            if (!response.ok) {
                throw new Error('Error al cargar el módulo de Cotización');
            }
            return response.text();
        })
        .then(data => {
            // Inserta el contenido cargado en el div correspondiente
            document.getElementById('cotizacionModulo').innerHTML = data;
        })
        .catch(error => {
            console.error('Error:', error);
            document.getElementById('cotizacionModulo').innerHTML = '<p>Error al cargar el contenido</p>';
        });
}

// Asignar eventos a los enlaces del menú para cargar los módulos
document.querySelectorAll('.dropdown-item').forEach(item => {
    item.addEventListener('click', (event) => {
        const moduloId = event.target.getAttribute('href').substring(1); // Obtener el id del modulo
        if (moduloId === 'traduccionModulo') {
            cargarTraduccionModulo();
        } else if (moduloId === 'interpretacionModulo') {
            cargarInterpretacionModulo();
        } else if (moduloId === 'subtitulacionModulo') {
            cargarSubtitulacionModulo();
        } else if (moduloId === 'traduccionlibrosModulo') {
            cargarTraduccionLibrosModulo();
        } else if (moduloId === 'cotizacionModulo') {
            cargarCotizacionModulo();
        }
    });
});
