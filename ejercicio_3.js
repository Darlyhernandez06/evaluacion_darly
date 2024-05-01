// Función para solicitar números por teclado
function solicitarNumeros() {
    let numeros = []; // Se inicializa un arreglo vacío para almacenar los números ingresados por el usuario
    let cantidadNumeros = parseInt(prompt("Ingrese la cantidad de números que desea ingresar:")); // Se solicita al usuario que ingrese la cantidad de números que desea ingresar y se convierte a un número entero

    // Se inicia un bucle while que se ejecutará mientras la longitud del arreglo de números sea menor que la cantidad de números especificada por el usuario
    while (numeros.length < cantidadNumeros) {
        let numero = prompt(`Ingrese el número ${numeros.length + 1} de ${cantidadNumeros}:`); // Se solicita al usuario que ingrese un número
        if (numero === null || numero === "") {
            break; // Si se presiona Cancelar o se deja el campo vacío, se rompe el bucle y se finaliza la entrada de números
        }
        numero = parseFloat(numero); // Convertir el valor ingresado a número (en coma flotante)
        if (!isNaN(numero)) { // Verificar si el valor ingresado es un número
            numeros.push(numero); // Si es un número válido, se agrega al arreglo de números
        } else {
            alert("Por favor, ingrese un número válido."); // Si no es un número válido, se muestra un mensaje de alerta
        }
    }
    return numeros; // Se retorna el arreglo de números ingresados por el usuario
}

// Función expresada para ordenar los números de mayor a menor
let ordenarNumeros = (...numeros) => numeros.sort((a, b) => b - a);

// Función para mostrar los números en una tabla por consola
function mostrarTablaNumeros(numeros) {
    console.log("Números ordenados de mayor a menor:");
    console.table(numeros);
}

// Programa principal
function programaOrdenarNumeros() {
    console.clear(); // Limpia la consola
    let numeros = solicitarNumeros(); // Solicitar los números al usuario
    if (numeros.length === 0) {
        console.log("No se ingresaron números. El programa ha finalizado."); // Si no se ingresaron números, mostrar un mensaje y terminar el programa
        return;
    }
    let numerosOrdenados = ordenarNumeros(...numeros); // Ordenar los números de mayor a menor
    mostrarTablaNumeros(numerosOrdenados); // Mostrar los números ordenados en una tabla
}

// Ejecutar el programa principal
programaOrdenarNumeros();


