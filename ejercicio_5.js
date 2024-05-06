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
    while (true) {
        let input = prompt(mensaje);
        if (input === null) {
            throw new Error('Se canceló la operación.');
        }
        let num = parseFloat(input);
        if (!isNaN(num)) {
            return num;
        }
        alert('No se ingresó un número válido.');
    }
}

// Crear una instancia de la calculadora
const miCalculadora = new Calculadora();

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

// Realizar operaciones con la calculadora
try {
    console.log("Suma:", miCalculadora.suma(num1, num2));
    console.log("Resta:", miCalculadora.resta(num1, num2));
    console.log("Multiplicación:", miCalculadora.multiplicacion(num1, num2));
    console.log("División:", miCalculadora.division(num1, num2));
} catch (error) {
    alert("Error al realizar la operación: " + error.message);
}

// Exportar la clase Calculadora y la función para solicitar números
export { Calculadora, solicitarNumero };
