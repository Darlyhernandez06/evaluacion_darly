class Calculadora {
    // Método para sumar dos números
    suma(num1, num2) {
        // Validar si los argumentos son números
        if (isNaN(num1) || isNaN(num2)) {
            throw new Error('Ambos argumentos deben ser números.');
        }
        return num1 + num2;
    }

    // Método para restar dos números
    resta(num1, num2) {
        // Validar si los argumentos son números
        if (isNaN(num1) || isNaN(num2)) {
            throw new Error('Ambos argumentos deben ser números.');
        }
        return num1 - num2;
    }

    // Método para multiplicar dos números
    multiplicacion(num1, num2) {
        // Validar si los argumentos son números
        if (isNaN(num1) || isNaN(num2)) {
            throw new Error('Ambos argumentos deben ser números.');
        }
        return num1 * num2;
    }

    // Método para dividir dos números
    division(num1, num2) {
        // Validar si los argumentos son números
        if (isNaN(num1) || isNaN(num2)) {
            throw new Error('Ambos argumentos deben ser números.');
        }
        // Validar si el divisor es cero
        if (num2 === 0) {
            throw new Error('No se puede dividir por cero.');
        }
        return num1 / num2;
    }
}

// Función para solicitar un número al usuario
function solicitarNumero(mensaje) {
    let input = prompt(mensaje);
    if (input === null || input.trim() === "") {
        throw new Error('No se ingresó un número.');
    }
    let num = parseFloat(input);
    if (isNaN(num)) {
        throw new Error('No se ingresó un número válido.');
    }
    return num;
}

// Solicitar al usuario que ingrese los números
let num1, num2;
try {
    num1 = solicitarNumero("Ingrese el primer número:");
    num2 = solicitarNumero("Ingrese el segundo número:");
} catch (error) {
    alert("Error: " + error.message);
    // Detener la ejecución si hay errores al ingresar los números
    throw error;
}

// Crear una instancia de la calculadora
const miCalculadora = new Calculadora();

// Solicitar al usuario la operación a realizar
let operacion = prompt("¿Qué operación desea realizar?\n(a) Suma\n(b) Resta\n(c) Multiplicación\n(d) División");

// Realizar la operación correspondiente y mostrar el resultado
try {
    let resultado;
    switch (operacion) {
        case 'a':
            resultado = miCalculadora.suma(num1, num2);
            break;
        case 'b':
            resultado = miCalculadora.resta(num1, num2);
            break;
        case 'c':
            resultado = miCalculadora.multiplicacion(num1, num2);
            break;
        case 'd':
            resultado = miCalculadora.division(num1, num2);
            break;
        default:
            throw new Error('Operación no válida.');
    }
    alert("El resultado es: " + resultado);
} catch (error) {
    alert("Error: " + error.message);
}

// Exportar las funciones que deseamos utilizar
export { Calculadora, solicitarNumero };
