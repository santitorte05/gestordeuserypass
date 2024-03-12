// Constante para almacenar los caracteres permitidos para la contraseña
const caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()-_=+';

// Función para generar una contraseña con la longitud especificada
function generarContrasena(longitud) {
    let contrasena = '';
    for (let i = 0; i < longitud; i++) {
        const caracterAleatorio = caracteres.charAt(Math.floor(Math.random() * caracteres.length));
        contrasena += caracterAleatorio;
    }
    return contrasena;
}

// Función principal para ejecutar el generador de contraseñas
function generarContrasenaAutomatica() {
    // Cuadro de diálogo para solicitar la longitud deseada de la contraseña
    let longitud = parseInt(prompt('Ingrese la longitud deseada de la contraseña:'));

    // Validación de la longitud de la contraseña
    if (isNaN(longitud) || longitud <= 0) {
        alert('Por favor, ingrese una longitud válida para la contraseña.');
        return;
    }

    // Confirmación del usuario para generar la contraseña
    const confirmacion = confirm('¿Está seguro de que desea generar una contraseña de ' + longitud + ' caracteres?');

    if (confirmacion) {
        // Generar y mostrar la contraseña
        const contrasena = generarContrasena(longitud);
        console.log('La contraseña generada es:', contrasena);
        alert('La contraseña generada es: ' + contrasena);
    } else {
        console.log('Generación de contraseña cancelada por el usuario.');
    }
}

// Ejecutar la función principal
generarContrasenaAutomatica();
