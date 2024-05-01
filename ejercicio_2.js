// Función para solicitar números por teclado
function solicitarNumeros() {
    let cantidadNumeros = parseInt(prompt("Ingrese la cantidad de números que desea ingresar:"));
    let numeros = []; // Se crea un arreglo para almacenar los números ingresados
    let contador = 0; // Se inicializa un contador en 0
    
    while (contador < cantidadNumeros) { // Se repite el bucle hasta que se ingresen la cantidad de números especificada
        let numero = prompt(`Ingrese el número ${contador + 1} de ${cantidadNumeros}:`); // Se solicita al usuario ingresar un número
        
        // Si el usuario presiona Cancelar o el campo queda vacío
        if (numero === null || numero === "") { 
            break; // Se rompe el bucle
        }
        
        numero = parseFloat(numero); // Convertir a número
        
        // Verificar si es un número válido
        if (!isNaN(numero)) { // Si el valor ingresado es un número
            numeros.push(numero); // Se agrega el número al arreglo
            contador++; // Se incrementa el contador
        } else {
            alert("Por favor, ingrese un número válido."); // Si no es un número válido, mostrar un mensaje de error
        }
    }
    
    return numeros; // Se retorna el arreglo con los números ingresados
}

// Función para sumar los números
function sumarNumeros(numeros) {
    let suma = 0; // Inicializamos la variable 'suma' en 0 para almacenar el resultado de la suma
    for (let numero of numeros) { // Iteramos sobre cada número en el arreglo 'numeros'
        suma += numero; // Sumamos cada número al valor actual de 'suma'
    }
    return suma; // Retornamos el valor final de 'suma'
}

// Función para verificar si un número es primo
function esPrimo(numero) {
    if (numero <= 1) { // Si el número es 1 o menor
        return false; // No es primo, por lo que se retorna false
    }
    // Se itera desde 2 hasta la raíz cuadrada del número
    for (let i = 2; i <= Math.sqrt(numero); i++) {
        if (numero % i === 0) { // Si el número es divisible por algún número entre 2 y su raíz cuadrada
            return false; // No es primo, por lo que se retorna false
        }
    }
    // Si no se encontró ningún divisor, el número es primo, por lo que se retorna true
    return true;
}

// Función para contar los números primos
function contarNumerosPrimos(numeros) {
    let contador = 0; // Se inicializa el contador de números primos en cero
    
    // Se itera sobre cada número en el arreglo 'numeros'
    for (let numero of numeros) {
        if (esPrimo(numero)) { // Se llama a la función 'esPrimo' para verificar si el número es primo
            contador++; // Si es primo, se incrementa el contador
        }
    }
    
    return contador; // Se retorna la cantidad de números primos encontrados
}

// Función para contar los números pares
function contarNumerosPares(numeros) {
    let contador = 0; // Se inicializa el contador de números pares en cero
    
    // Se itera sobre cada número en el arreglo 'numeros'
    for (let numero of numeros) {
        if (numero % 2 === 0) { // Se verifica si el número es par
            contador++; // Si es par, se incrementa el contador
        }
    }
    
    return contador; // Se retorna la cantidad de números pares encontrados
}

// Función para calcular el promedio de un conjunto de números
function calcularPromedio(numeros) {
    let suma = sumarNumeros(numeros); // Sumar todos los números
    return numeros.length === 0 ? 0 : suma / numeros.length; // Calcular y retornar el promedio, si el arreglo no está vacío
}

// Función para calcular el promedio de los números primos
function calcularPromedioPrimos(numeros) {
    let numerosPrimos = []; // Se inicializa un arreglo para almacenar los números primos
    
    // Se recorre cada número en el arreglo 'numeros'
    for (let numero of numeros) {
        // Si el número es primo (según la función 'esPrimo'), se agrega al arreglo 'numerosPrimos'
        if (esPrimo(numero)) {
            numerosPrimos.push(numero);
        }
    }
    
    // Se retorna el promedio de los números primos utilizando la función 'calcularPromedio'
    return calcularPromedio(numerosPrimos);
}

// Funcion para calcular el promedio de números pares 
function calcularPromedioPares(numeros) {
    let numerosPares = []; // Arreglo para almacenar los números pares
    let suma = 0; // Variable para sumar los números pares

    // Iteración sobre los números del arreglo 'numeros'
    for (let numero of numeros) {
        // Verificar si el número es par
        if (numero % 2 === 0) { // Si el número es par
            numerosPares.push(numero); // Agregarlo al arreglo de números pares
            suma += numero; // Sumar al total
        }
    }

    // Utilizar la función 'calcularPromedio' con los números pares y retornar el resultado
    return calcularPromedio(numerosPares);
}

// Función principal
function programaOperaciones() {
    while (true) { // Se ejecuta indefinidamente hasta que se decida terminar el programa
        let numeros = solicitarNumeros(); // Se solicitan números al usuario
        
        if (numeros.length === 0) { // Si no se ingresaron números, se muestra un mensaje y se termina el programa
            alert("No se ingresaron números. El programa ha finalizado.");
            break;
        }
        
        let opcion;
        while (true) { // Se solicita la opción de operación al usuario
            opcion = prompt(`Operaciones disponibles:
a. Sumar los números
b. Contar los números primos
c. Contar los números pares
d. Calcular el promedio de los números primos
e. Calcular el promedio de los números pares
Seleccione una opción (a, b, c, d, e):`);
            
            if (opcion === null || /[a-e]/i.test(opcion)) { // Se verifica si la opción ingresada es válida
                break;
            }
            
            alert("Opción inválida. Por favor, ingrese una opción válida."); // Si no es válida, se muestra un mensaje de error
        }
        
        // Dependiendo de la opción seleccionada, se realiza una operación
        switch (opcion) {
            case "a":
                alert("La suma de los números es: " + sumarNumeros(numeros)); // Se muestra la suma de los números
                break;
            case "b":
                alert("La cantidad de números primos es: " + contarNumerosPrimos(numeros)); // Se muestra la cantidad de números primos
                break;
            case "c":
                alert("La cantidad de números pares es: " + contarNumerosPares(numeros)); // Se muestra la cantidad de números pares
                break;
            case "d":
                alert("El promedio de los números primos es: " + calcularPromedioPrimos(numeros)); // Se muestra el promedio de los números primos
                break;
            case "e":
                alert("El promedio de los números pares es: " + calcularPromedioPares(numeros)); // Se muestra el promedio de los números pares
                break;
            default:
                alert("Opción inválida. El programa ha finalizado."); // Si se presiona Cancelar o una opción no válida, se termina el programa
        }
    }
}

// Llamar a la función principal para iniciar el programa
programaOperaciones();

// Exportar las funciones que deseamos utilizar
export { solicitarNumeros, sumarNumeros, esPrimo, contarNumerosPrimos, contarNumerosPares, calcularPromedio, calcularPromedioPrimos, calcularPromedioPares };
