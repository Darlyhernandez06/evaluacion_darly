// Función para solicitar el número de tarjeta
function solicitar_numero_tarjeta() {
    while (true) { // Bucle infinito
        let numero_tarjeta = prompt("Ingrese su número de tarjeta de crédito: "); // Solicitar número de tarjeta al usuario mediante un cuadro de diálogo

        if (numero_tarjeta === null) { // Si el usuario presiona "Cancelar" en el cuadro de diálogo
            return null; // La función devuelve null y termina
        } else if (/^\d{1,16}$/.test(numero_tarjeta)) { // Verificar si el número de tarjeta tiene de 1 a 16 dígitos y son todos números
            return numero_tarjeta; // Si cumple la condición, la función devuelve el número de tarjeta y termina
        } else {
            alert("Error: El número de tarjeta debe ser un entero positivo de máximo 16 caracteres."); // Si no cumple la condición, mostrar un mensaje de error
        }
    }
}


// Función para validar el tipo de tarjeta
function validar_tarjeta(numero_tarjeta) {
    // Verifica si el número de tarjeta corresponde a American Express
    if (/^3[47]\d{13}$/.test(numero_tarjeta)) {
        return "American Express";
    } 
    // Verifica si el número de tarjeta corresponde a Diners Club
    else if (/^3(?:0[0-5]|6\d)\d{11}$/.test(numero_tarjeta)) {
        return "Diners Club";
    } 
    // Verifica si el número de tarjeta corresponde a Discover
    else if (/^6011\d{12}$/.test(numero_tarjeta)) {
        return "Discover";
    } 
    // Verifica si el número de tarjeta corresponde a Mastercard
    else if (/^5[1-5]\d{14}$/.test(numero_tarjeta)) {
        return "Mastercard";
    } 
    // Verifica si el número de tarjeta corresponde a Visa
    else if (/^4\d{15}$/.test(numero_tarjeta)) {
        return "Visa";
    } 
    // Si no coincide con ningún patrón, devuelve null
    else {
        return null;
    }
}


// Función para determinar el tipo de tarjeta y mostrarlo en una alerta
function determinar_tipo_tarjeta() {
    while (true) { // Bucle infinito para continuar solicitando el número de tarjeta hasta que se ingrese uno válido o se cancele
        let numero_tarjeta = solicitar_numero_tarjeta(); // Solicitar el número de tarjeta al usuario

        if (numero_tarjeta === null) { // Si el usuario presionó "Cancelar" en el cuadro de diálogo
            return; // Salir de la función
        }

        let tipo_tarjeta = validar_tarjeta(numero_tarjeta); // Validar el tipo de tarjeta

        if (tipo_tarjeta) { // Si se encontró un tipo de tarjeta válido
            alert("Su tarjeta es de tipo: " + tipo_tarjeta); // Mostrar el tipo de tarjeta en una alerta
        } else {
            alert("Error: El número de tarjeta no es válido."); // Mostrar un mensaje de error si el número de tarjeta no es válido
        }
    }
}

// Llamada inicial a la función para iniciar el ciclo
determinar_tipo_tarjeta();


// Exportar las funciones que deseamos utilizar 
export { solicitar_numero_tarjeta, validar_tarjeta, determinar_tipo_tarjeta };
















